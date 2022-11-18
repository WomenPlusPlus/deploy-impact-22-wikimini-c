<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;

class ApiGetStudentsTasks extends \ApiQueryBase {

	/**
	 * @param \ApiQuery $query
	 * @param string $moduleName
	 */
	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
        /*
        Query to implement
        SELECT
            ts.student_id,
            u.user_name,
            t.class_id,
            ts.task_status,
            ts.task_result,
            ts.task_feedback,
            t.task_name,
            t.task_type,
            t.task_subject,
            t.task_description,
            t.task_reference_link,
            t.page_name,
            t.task_criteria
        FROM wm_tasks_to_students ts
        INNER JOIN user u
            ON ts.student_id = u.user_id
        INNER JOIN wm_tasks t
            ON ts.task_id = t.task_id
        WHERE student_id = 6;
        */

        $params = $this->extractRequestParams();
	
		$db = $this->getDB();

		$this->addTables(['wm_tasks_to_students', 'user', 'wm_tasks']);

        $this->addJoinConds([
            'user' => [ 
                'INNER JOIN', 
                'wm_tasks_to_students.student_id=user.user_id' ], 
            'wm_tasks' => [
                'INNER JOIN', 
                'wm_tasks_to_students.task_id=wm_tasks.task_id'] ]);
		
		$this->addFields([
			'user.user_name',
			'wm_tasks.class_id',
            'wm_tasks.task_name',
            'wm_tasks_to_students.task_status',
            'wm_tasks_to_students.task_result',
            'wm_tasks_to_students.task_feedback',
            'wm_tasks.task_type',
            'wm_tasks.task_subject',
            'wm_tasks.task_description',
            'wm_tasks.task_reference_link',
            'wm_tasks.page_name',
            'wm_tasks.task_criteria'
		]);

        $this->addWhereFld( 'wm_tasks_to_students.student_id', $params['student_id'] );

		$res = $this->select( __METHOD__ );
		$result = $this->getResult();

		foreach($res as $row) {
			$vals = [
                'user_name' => $row->user_name,
                'class_id' => (int)$row->class_id,
                'task_name' => $row->task_name,
                'task_status' => $row->task_status,
                'task_result' => $row->task_result,
                'task_feedback' => $row->task_feedback,
                'task_type' => $row->task_type,
                'task_subject' => $row->task_subject,
                'task_description' => $row->task_description,
                'task_reference_link' => $row->task_reference_link,
                'page_name' => $row->page_name,
                'task_criteria' => $row->task_criteria
				];
			$fit = $result->addValue( [ 'query', $this->getModuleName() ], null, $vals );
		}
	}

    protected function getAllowedParams() {
        return [
            // required parameters
            'student_id' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ]
        ];
    }

	/** @inheritDoc */
	protected function getExamplesMessages() {
		return [
			'action=query&list=getstudentstasks&student_id=1'
				=> 'apihelp-getstudentstasks-example-1'
		];
	}
}
