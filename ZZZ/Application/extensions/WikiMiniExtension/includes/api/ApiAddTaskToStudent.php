<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;
use User;
use MediaWiki\MediaWikiServices;

class ApiAddTaskToStudent extends ApiBase {
    
	/**
	 * @param \ApiQuery $query
	 * @param string $moduleName
	 */

	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

    public function isWriteMode() {
        return true;
    }

    public function MustBePosted() {
        return true;
    }

	public function execute() {

        //TO-DO: Get current logged in user
        //TO-DO: Check if user is a teacher
        //TO-DO: Accept a class as input (give task to all students in that class)

        $lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
        $dbw = $lb->getConnectionRef( DB_PRIMARY );

        $params = $this->extractRequestParams();

        $students_id = $params['student_id'];

        // Teacher can assign task to multiple students at once
        foreach($params['student_id'] as $student) {

            // save to wm_tasks_to_students
            $to_add = [
                'task_id' => $params['task_id'],
                'student_id' => $student,
                'task_status' => $params['task_status']
            ];

            $dbw->insert(
                'wm_tasks_to_students', 
                $to_add,
                __METHOD__
            );
    
            $fit = $this->getResult()->addValue( [ 'tasks', $this->getModuleName() ], null, $to_add );
        }
    } 

    protected function getAllowedParams() {
        return [
            'task_id' => [
                ApiBase::PARAM_TYPE => 'integer',
                ApiBase::PARAM_REQUIRED => true
            ],
            'student_id' => array (
                ApiBase::PARAM_TYPE => 'integer',
                ApiBase::PARAM_ISMULTI => true,
                ApiBase::PARAM_REQUIRED => true
            ),
            'task_status' => [
				ApiBase::PARAM_DFLT => 'Pending',
				ApiBase::PARAM_TYPE => [ 'Pending', 'In Progress', 'Under Review', 'Completed'],
				ApiBase::PARAM_ISMULTI => false,
				ApiBase::PARAM_REQUIRED => true
			]
        ];
    }

    protected function getExamplesMessages() {
		return [
			'action=givetask&task_id=1&student_id=1'
				=> 'apihelp-query+givetask-example-1'
		];
	}

}
