<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;
use User;
use \Datetime;
use MediaWiki\MediaWikiServices;

class ApiDeleteTask extends ApiBase {
    
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

        $to_delete = [
            'task_id' => $params['task_id']
        ];

        // delete from all tasks table
        $dbw->delete(
            'wm_tasks', 
            $to_delete,
            __METHOD__
            );

        // delete from students tasks, if any
        $dbw->delete(
            'wm_tasks_to_students',
            $to_delete,
            __METHOD__
        );

        $r = [ 'deleted_task' => $to_delete ];

        $this->getResult()->addValue( null, $this->getModuleName(), $r );

	}

    protected function getAllowedParams() {
        return [
            'task_id' => [
                ApiBase::PARAM_TYPE => 'integer',
                ApiBase::PARAM_REQUIRED => true
            ],
        ];
    }

    protected function getExamplesMessages() {
		return [
			'action=deletetask&task_id=1'
				=> 'apihelp-query+deletetask-example-1'
		];
	}

}
