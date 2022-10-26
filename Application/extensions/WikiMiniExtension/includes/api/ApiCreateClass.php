<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;
use User;
use MediaWiki\MediaWikiServices;

class ApiCreateClass extends ApiBase {
    
	public function __construct( $action, $moduleName ) {
		parent::__construct( $action, $moduleName);
	}

	public function isWriteMode() {
        return true;
    }
    
    public function execute() {

        // create connection to write DB
        $lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
        $dbw = $lb->getConnectionRef( DB_PRIMARY );

        // get user
        //$user = $this->getUser();
        //$userid = $user->getId();
        
        //check if user is allowed to create a class
        //if ($user->isAllowed('r_create_class')) {

        // get params and make sure class name is provided
        $params = $this->extractRequestParams();
        $this->requireOnlyOneParameter($params, 'class_name');

        $vals = [
            'class_name' =>$params['class_name'],
            'class_teacher_user_id' => (int)$userid
        ];

        // create class row in DB
        if (isset($params['class_name'])) { 
            $dbw->insert(
                'wm_classes', 
                $vals,
                __METHOD__
                );
        }

        $stuff = [$vals];
        $r = [ 'created_class' => $stuff ];
        $this->getResult()->addValue( null, $this->getModuleName(), $r );
        // } else {
        //     $this->dieWithError('The user is not allowed to create a class.');
        // }

	}

    protected function getAllowedParams() {
        return [
            'class_name' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ],
        ];
    }

    protected function getExamplesMessages() {
		return [
			'action=createclass&class_name=example'
				=> 'apihelp-query+createclass-example-1'
		];
	}

}
