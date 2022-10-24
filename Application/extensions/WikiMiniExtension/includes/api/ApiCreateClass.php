<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;
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

        // get params and make sure class name is provided
        $params = $this->extractRequestParams();
        $this->requireOnlyOneParameter($params, 'class_name');

        $vals = [
            'class_name' =>$params['class_name'],
            'class_start' => '2022-01-01',
            'class_end' => '2022-01-11',
            'class_teacher_id' => 1,
            'class_token' => '213sada2'
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
        $r = [ 'new_class' => $stuff ];
		$this->getResult()->addValue( null, $this->getModuleName(), $r );

	}

    protected function getAllowedParams() {
        return [
            'class_name' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ],
        ];
    }

    public function getParamDescription() {
        return array('class_name' => 'The name given to the class of students.');
    }

}
