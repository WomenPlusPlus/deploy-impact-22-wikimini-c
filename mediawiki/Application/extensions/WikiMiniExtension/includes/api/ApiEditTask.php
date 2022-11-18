<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;
use User;
use \Datetime;
use MediaWiki\MediaWikiServices;

class ApiEditTask extends ApiBase {
    
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

        // get params
        $params = $this->extractRequestParams();

        // fetch specific row
        $lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
        $dbr = $lb->getConnectionRef(DB_REPLICA);

        $res = $dbr->newSelectQueryBuilder()
            ->select('class_id')
            ->from('wm_tasks')
            ->where([
                'wm_tasks.task_id' => $params['task_id']
                ])
            ->caller(__METHOD__)
            ->fetchResultSet();
        
        $class_id = 0;

        foreach($res as $row) {
            $class_id = (int)$row->class_id;
        }

        // create connection to write DB
        $lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
        $dbw = $lb->getConnectionRef( DB_PRIMARY );

            // get page name from url
        if (isset($params['task_reference_link'])) {
            $arr = explode("/", $params['task_reference_link']);

            $page_name = $arr[sizeof($arr) - 1];
        }

        $to_edit = [
            'task_name' =>$params['task_name'],
            'task_subject' =>$params['task_subject'],
            'task_description' =>$params['task_description'],
            'task_criteria' =>$params['task_criteria'],
            'task_type' =>$params['task_type'],
            'task_reference_link' =>$params['task_reference_link'],
            'page_name' => $page_name,
            'class_id' => $class_id,
            'creation_date' => date("Y-m-d H:i:s")
        ];

        // create new task row on DB
        $dbw->update(
            'wm_tasks', 
            $to_edit,
            ['task_id' => 2],
            __METHOD__
            );

        $r = [ 'edited_task' => $to_edit ];
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
            'task_id' => [
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
			'action=edittask&task_id=1&task_name=ABC&task_type=Create Article&task_subject=History&task_description=Write what you know about ABC&task_criteria=Be simple and clear'
				=> 'apihelp-query+edittask-example-1'
		];
	}

}
