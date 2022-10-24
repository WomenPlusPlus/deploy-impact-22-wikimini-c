<?php
/**
 * Hooks for Wikimini extension.
 *
 * @file
 */

namespace MediaWiki\Extension\Wikimini;

use DatabaseUpdater;

class MoreHooks implements
	\MediaWiki\Hook\GetMagicVariableIDsHook,
	\MediaWiki\Hook\MagicWordwgVariableIDsHook,
	\MediaWiki\Installer\Hook\LoadExtensionSchemaUpdatesHook
{

	/**
	 * MagicWordwgVariableIDsHook is registered as deprecated in core.
	 * We acknowledge deprecation in extension.json, so this handler will not be called.
	 * @see https://www.mediawiki.org/wiki/Manual:Hooks/MagicWordwgVariableIDs
	 * @param string[] &$magicWordsIds
	 */
	public function onMagicWordwgVariableIDs( &$magicWordsIds ) {
		$magicWordsIds[] = 'deprecatedmyword';
	}

	/**
	 * @see https://www.mediawiki.org/wiki/Manual:Hooks/GetMagicVariableIDs
	 * @param string[] &$variableIDs
	 */
	public function onGetMagicVariableIDs( &$variableIDs ) {
		// Add the following to a wiki page to see how it works:
		// {{MYWORD}}
		$variableIDs[] = 'myword';
	}

	/**
	 * Register our database schema.
	 *
	 * @see https://www.mediawiki.org/wiki/Manual:Hooks/LoadExtensionSchemaUpdates
	 * @param DatabaseUpdater $updater
	 */
	public function onLoadExtensionSchemaUpdates( $updater ) {
		$updater->addExtensionTable( 'wm_classes', dirname( __DIR__ ) . '/sql/add-schema.sql' );
	}
}
