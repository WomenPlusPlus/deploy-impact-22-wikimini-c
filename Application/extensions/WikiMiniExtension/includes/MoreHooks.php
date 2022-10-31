<?php
/**
 * Hooks for Wikimini extension.
 *
 * @file
 */

namespace MediaWiki\Extension\Wikimini;

use DatabaseUpdater;
use User;
use ApiBase;

class MoreHooks implements
	\MediaWiki\Hook\GetMagicVariableIDsHook,
	\MediaWiki\Hook\MagicWordwgVariableIDsHook,
	\MediaWiki\Installer\Hook\LoadExtensionSchemaUpdatesHook,
	\MediaWiki\Api\Hook\APIGetAllowedParamsHook

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

	/*
	Add to group based on user role value
	*/
	public static function onAPIAfterExecute(&$module) {

		if (get_class($module) === 'ApiAMCreateAccount') {

			$params = $module->extractRequestParams();
			$result = $module->getResult();

			$data = $result->getResultData(['createaccount']);
			$username = $data['username'];

			if ($params['userrole'] === 'Teacher') {
				$newuser = new User();
        		$a = $newuser->idFromName($username);

				$b = $newuser->newFromId($a);
				$b->addGroup('TeachersGroup');

			} elseif ($params['userrole'] === 'Student') {
				$newuser = new User();
        		$a = $newuser->idFromName($username);

				$b = $newuser->newFromId($a);
				$b->addGroup('StudentsGroup');
			}
		}
	}

	public function onAPIGetAllowedParams($module, &$params, $flags) {

		if (get_class($module) === 'ApiAMCreateAccount') {

			$params['userrole'] = [
				ApiBase::PARAM_TYPE => ['Teacher', 'Student', 'Parent'],
				ApiBase::PARAM_ISMULTI => false,
				ApiBase::PARAM_REQUIRED => true
			];
		}
	}
}
