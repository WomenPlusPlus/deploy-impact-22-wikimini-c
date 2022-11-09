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

    public function MustBePosted() {
        return true;
    }
    
    public function execute() {

        // create connection to write DB
        $lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
        $dbw = $lb->getConnectionRef( DB_PRIMARY );

        // get parameters
        $params = $this->extractRequestParams();

        $to_add = [
            'class_name' =>$params['class_name'],
            'class_teacher_user_id' => $params['teacher_id']
        ];

        // create new class
        if (isset($params['class_name'])) { 
            $dbw->insert(
                'wm_classes', 
                $to_add,
                __METHOD__
                );
        }

        $result = [
            'class_id' => $dbw->insertId(),
            'class_name' => $params['class_name'],
            'class_teacher_id'=> $params['teacher_id']
        ];

        $apiResult = $this->getResult();

        $r = [ 'created_class' => $result ];
        $apiResult->addValue( null, $this->getModuleName(), $r );
    }


    protected function getAllowedParams() {
        return [
            'class_name' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ],
            'teacher_id' => [
                ApiBase::PARAM_TYPE => 'integer',
                ApiBase::PARAM_REQUIRED => true
            ]
        ];
    }

    protected function getExamplesMessages() {
		return [
			'action=createclass&class_name=example&teacher_id=1'
				=> 'apihelp-query+createclass-example-1'
		];
	}

}
