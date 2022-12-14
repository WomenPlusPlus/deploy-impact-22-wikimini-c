<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;
use User;
use \Datetime;
use MediaWiki\MediaWikiServices;

class ApiCreateTask extends ApiBase {
    
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

        // get params
        $params = $this->extractRequestParams();

        // get page name from url
        if (isset($params['task_reference_link'])) {
            $arr = explode("/", $params['task_reference_link']);

            $page_name = $arr[sizeof($arr) - 1];
        }
        

        $to_add = [
            'task_name' =>$params['task_name'],
            'task_subject' =>$params['task_subject'],
            'task_description' =>$params['task_description'],
            'task_criteria' =>$params['task_criteria'],
            'task_type' =>$params['task_type'],
            'task_reference_link' =>$params['task_reference_link'],
            'page_name' => $page_name,
            'class_id' => (int)$params['class_id'],
            'creation_date' => date("Y-m-d H:i:s")
        ];

        // create new task row on DB
        $dbw->insert(
            'wm_tasks', 
            $to_add,
            __METHOD__
            );
        
        $result = ['task_id' => $dbw->insertId()] + $to_add;

        $r = [ 'created_task' => $result ];
        $this->getResult()->addValue( null, $this->getModuleName(), $r );

	}

    protected function getAllowedParams() {
        return [

            // optional parameters
            'task_reference_link' => 'none',

            // multiple options parameter
            'task_type' => [
                ApiBase::PARAM_DFLT => 'None',
                ApiBase::PARAM_TYPE => ['Create Article', 'Edit Article', 'Review Article', 'Illustrate'],
                ApiBase::PARAM_ISMULTI => false,
            ],

            // required parameters
            'class_id' => [
                ApiBase::PARAM_TYPE => 'integer',
                ApiBase::PARAM_REQUIRED => true
            ],
            'task_name' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ],
            'task_subject' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ],
            'task_description' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ],
            'task_criteria' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ],
        ];
    }

    protected function getExamplesMessages() {
		return [
			'action=createtask&class_id=1&task_name=Task 1&task_type=Create Article&task_subject=History&task_description=A short description&task_criteria=Criteria'
				=> 'apihelp-query+createtask-example-1',
                'action=createtask&class_id=1&task_name=Task 2&task_type=Edit Article&task_subject=Math&task_description=Edit this article&task_criteria=Criteria&task_reference_link=https://en.wikipedia.org/wiki/Dog'
				=> 'apihelp-query+createtask-example-2',
		];
	}

}
