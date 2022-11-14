<?php
/**
 * Hooks for Wikimini extension.
 *
 * @file
 */

namespace MediaWiki\Extension\Wikimini;

use FormatJson;
use MediaWiki\Permissions\PermissionManager;
use OutputPage;
use Parser;
use PPFrame;
use Skin;
use SkinTemplate;

class Hooks implements
	\MediaWiki\Hook\BeforePageDisplayHook,
	\MediaWiki\Hook\ParserFirstCallInitHook,
	\MediaWiki\Hook\ParserGetVariableValueSwitchHook,
	\MediaWiki\Hook\SkinTemplateNavigationHook
{

	/** @var PermissionManager */
	private $permissionManager;

	/**
	 * @param PermissionManager $permissionManager example injected service
	 */
	public function __construct( PermissionManager $permissionManager ) {
		$this->permissionManager = $permissionManager;
	}

	/**
	 * Customisations to OutputPage right before page display.
	 *
	 * @see https://www.mediawiki.org/wiki/Manual:Hooks/BeforePageDisplay
	 * @param OutputPage $out
	 * @param Skin $skin
	 */
	public function onBeforePageDisplay( $out, $skin ): void {

		// check if it is an article
		if ($out->isArticle()) {

			// fetch the body + remove HTML formatting and special characters from string
			$body = $out->getHTML();
			$text = strip_tags($body);

			// apply ARI formula

			// count number of letters
			$no_sp_char = preg_replace('/[^A-Za-z0-9\-]/', '', $text);
			$count_letters = strlen($no_sp_char);

			// count number of words
			$count_words = str_word_count($text);

			// count number of sentences
			$count_sentences = preg_match_all('/[^\s](\.|\!|\?)(?!\w)/',$text);

			// calculate L and S variables for formula
			$l = ($count_letters / $count_words);
			$s = ($count_words / $count_sentences);

			// calculate index
			$cl_index = round(4.71 * $l + 0.5 * $s - 21.43);

			$conversion = [
				1 => 'Kindergarten',
				2 => '1st grade',
				3 => '2nd grade',
				4 => '3th grade',
				5 => '4th grade',
				6 => '5th grade',
				7 => '6th grade',
				8 => '7th grade',
				9 => '8th grade',
				10 => '9th grade',
				11 => '10th grade',
				12 => '11th grade',
				13 => '12th grade',
				14 => 'College'
			];

			$i = 1;
			$output = '';

			for ($i; $i < sizeof($conversion)  + 1; $i++) {
				if (round($cl_index) == $i) {
					$output = $conversion[$i];
				}
			}

			$out->addHTML(
				'<br><div style="background-color: yellow;"><b>This article has a reading level equivalent to: </b> ' 
				. $output
				.'</div>'
			);
		}
	}

	/**
	 * Parser magic word handler for {{MYWORD}}.
	 *
	 * @return string Wikitext to be rendered in the page.
	 */
	public static function parserGetWordMyword() {
		global $wgExampleMyWord;
		return wfEscapeWikiText( $wgExampleMyWord );
	}

	/**
	 * @see https://www.mediawiki.org/wiki/Manual:Hooks/ParserGetVariableValueSwitch
	 * @param Parser $parser
	 * @param array &$cache
	 * @param string $magicWordId
	 * @param string &$ret
	 * @param PPFrame $frame
	 *
	 */
	public function onParserGetVariableValueSwitch( $parser, &$cache, $magicWordId, &$ret, $frame ) {
		if ( $magicWordId === 'myword' ) {
			// Return value and cache should match. Cache is used to save
			// additional call when it is used multiple times on a page.
			$ret = $cache['myword'] = self::parserGetWordMyword();
		}
	}

	/**
	 * Register parser hooks.
	 *
	 * @see https://www.mediawiki.org/wiki/Manual:Hooks/ParserFirstCallInit
	 * @see https://www.mediawiki.org/wiki/Manual:Parser_functions
	 * @param Parser $parser
	 * @throws \MWException
	 */
	public function onParserFirstCallInit( $parser ) {
		// Add the following to a wiki page to see how it works:
		// <dump>test</dump>
		// <dump foo="bar" baz="quux">test content</dump>
		$parser->setHook( 'dump', [ self::class, 'parserTagDump' ] );

		// Add the following to a wiki page to see how it works:
		// {{#echo: hello }}
		$parser->setFunctionHook( 'echo', [ self::class, 'parserFunctionEcho' ] );

		// Add the following to a wiki page to see how it works:
		// {{#showme: hello | hi | there }}
		$parser->setFunctionHook( 'showme', [ self::class, 'parserFunctionShowme' ] );
	}

	/**
	 * @see https://www.mediawiki.org/wiki/Manual:Hooks/SkinTemplateNavigation
	 * @param SkinTemplate $skin
	 * @param array &$cactions
	 */
	public function onSkinTemplateNavigation( $skin, &$cactions ): void {
		$action = $skin->getRequest()->getText( 'action' );

		if ( $skin->getTitle()->getNamespace() !== NS_SPECIAL ) {
			$cactions['actions']['myact'] = [
				'class' => $action === 'myact' ? 'selected' : false,
				'text' => $skin->msg( 'contentaction-myact' )->text(),
				'href' => $skin->getTitle()->getLocalURL( 'action=myact' ),
			];
		}
	}

	/**
	 * Parser hook handler for <dump>
	 *
	 * @param string $data The content of the tag.
	 * @param array $attribs The attributes of the tag.
	 * @param Parser $parser Parser instance available to render
	 *  wikitext into html, or parser methods.
	 * @param PPFrame $frame Can be used to see what template
	 *  arguments ({{{1}}}) this hook was used with.
	 * @return string HTML to insert in the page.
	 */
	public static function parserTagDump( $data, $attribs, $parser, $frame ) {
		$dump = [
			'content' => $data,
			'atributes' => (object)$attribs,
		];
		// Very important to escape user data with htmlspecialchars() to prevent
		// an XSS security vulnerability.
		$html = '<pre>Dump Tag: '
			. htmlspecialchars( FormatJson::encode( $dump, /*prettyPrint=*/true ) )
			. '</pre>';

		return $html;
	}

	/**
	 * Parser function handler for {{#echo: .. }}
	 *
	 * @param Parser $parser
	 * @param string $value
	 *
	 * @return string HTML to insert in the page.
	 */
	public static function parserFunctionEcho( Parser $parser, $value ) {
		return '<strong>Echo says: ' . htmlspecialchars( $value ) . '</strong>';
	}

	/**
	 * Parser function handler for {{#showme: .. | .. }}
	 *
	 * @param Parser $parser
	 * @param string $value
	 * @param string ...$args
	 * @return string HTML to insert in the page.
	 */
	public static function parserFunctionShowme( Parser $parser, string $value, ...$args ) {
		$showme = [
			'value' => $value,
			'arguments' => $args,
		];

		return '<pre>Showme Function: '
			. htmlspecialchars( FormatJson::encode( $showme, /*prettyPrint=*/true ) )
			. '</pre>';
	}
}
