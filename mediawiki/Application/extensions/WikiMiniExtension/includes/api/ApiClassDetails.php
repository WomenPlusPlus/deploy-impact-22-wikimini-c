<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;
use MediaWiki\MediaWikiServices;

class ApiClassDetails extends \ApiQueryBase {


	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {

        $params = $this->extractRequestParams();
	
		$lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
        $dbr = $lb->getConnectionRef(DB_REPLICA);

        // QUERY 1 - fetch classes details
        $res1 = $dbr->newSelectQueryBuilder()
            ->select(['class_id', 'class_name', 'class_teacher_user_id', 'user_name'])
            ->from('wm_classes')
            ->join('user', 'u', 'wm_classes.class_teacher_user_id=u.user_id')
            ->where([
                'wm_classes.class_id' => $params['class_id']
                ])
            ->caller(__METHOD__)
            ->fetchResultSet();
        
        // values
        foreach($res1 as $row1) {
            $vals = [
            'class_id' => (int)$row1->class_id,
            'class_name' => $row1->class_name,
            'teacher_id' => (int)$row1->class_teacher_user_id,
            'teacher_username' => $row1->user_name
            ];
        }

        // QUERY 2 - fetch all tasks
        $res2 = $dbr->newSelectQueryBuilder()
        ->select('*')
        ->from('wm_tasks')
        ->where([
            'wm_tasks.class_id' => $params['class_id']
            ])
        ->caller(__METHOD__)
        ->fetchResultSet();

        // values
        $i = 1;
        $all_tasks = [];

        foreach($res2 as $row2) {
            $vals2 = [
            'task_id' => (int)$row2->task_id
            , 'task_name' => $row2->task_name
            // , 'task_type' => $row2->task_type
            // , 'task_subject' => $row2->task_subject
            // , 'task_description' => $row2->task_description
            // , 'task_reference_link' => $row2->task_reference_link
            // , 'task_criteria' => $row2->task_criteria
            // , 'article_name' => $row2->page_name
            // , 'creation_date' => $row2->creation_date
            ];

            $all_tasks['task' . strval($i)] = $vals2;
            $i++;

        }

        // QUERY 3 - fetch all students
        $res3 = $dbr->newSelectQueryBuilder()
        ->select(['student_id', 'user_name', 'enrollment_time'])
        ->from('wm_students_per_class')
        ->join('user', 'u', 'wm_students_per_class.student_id=u.user_id')
        ->where([
            'wm_students_per_class.class_id' => $params['class_id']
            ])
        ->caller(__METHOD__)
        ->fetchResultSet();

        // values
        $j = 1;
        $all_students = [];

        foreach($res3 as $row3) {
            $vals3 = [
            'student_id' => (int)$row3->student_id,
            'student_username' => $row3->user_name,
            'enroll_time' => $row3->enrollment_time
            ];

            $all_students['student' . strval($j)] = $vals3;
            $j++;

        }
        /* */

        // QUERY 4 - tasks per students
        $res4 = $dbr->newSelectQueryBuilder()
        ->select(['student_id', 'u.user_name', 't.task_id', 't.task_name', 'task_status' /*, 't.task_type', 't.task_subject', 't.task_description',
        't.task_reference_link', 't.task_criteria', 't.page_name',  'task_feedback', 'task_result'*/])
        ->from('wm_tasks_to_students')
        ->join('wm_tasks', 't', 'wm_tasks_to_students.task_id=t.task_id')
        ->join('user', 'u', 'wm_tasks_to_students.student_id=u.user_id')
        ->where([
            't.class_id' => $params['class_id']
            ])
        ->caller(__METHOD__)
        ->fetchResultSet();

        // values
        $k = 1;
        $tasks_per_students = [];

        foreach($res4 as $row4) {
            $vals4 = [
            'student_id' => (int)$row4->student_id
            ,'student_username' => $row4->user_name
            ,'task_id' => (int)$row4->task_id
            ,'task_name' => $row4->task_name
            ,'task_status' => $row4->task_status
            // ,'task_type' => $row4->task_type
            // ,'task_subject' => $row4->task_subject
            // ,'task_description' => $row4->task_description
            // ,'task_reference_link' => $row4->task_reference_link
            // ,'task_criteria' => $row4->task_criteria
            // ,'article_name' => $row4->page_name
            // ,'task_feedback' => $row4->task_feedback
            // ,'task_result' => $row4->task_result
            ];

            $tasks_per_students['student_task' . strval($k)] = $vals4;
            $k++;

        }

        $end_result = [
            'class_info' => $vals,
            'all_students' => $all_students,
            'all_tasks' => $all_tasks,
            'tasks_per_student' => $tasks_per_students
        ];

        $fit=$this->getResult()->addValue( [ 'query', $this->getModuleName() ], null, $end_result );

	}

    protected function getAllowedParams() {
        return [
            // required parameters
            'class_id' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ]
        ];
    }

	/** @inheritDoc */
	protected function getExamplesMessages() {
		return [
			'action=query&list=getclassdetails&class_id=1'
				=> 'apihelp-classdetails-example-1'
		];
	}
}
