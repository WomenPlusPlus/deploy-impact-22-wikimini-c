<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;
use User;
use MediaWiki\MediaWikiServices;

class ApiAddStudentToClass extends ApiBase {
    
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
        //TO-DO: Check if user is allowed to add students to a class

        $params = $this->extractRequestParams();

        //TO-DO: check if class exists


        // get student User object
        $newuser = new User();
        $studentuser = $newuser->idFromName($params['student_name']);

        // Check if user is a student
        $studentObj = $newuser->newFromId($studentuser);
        $studentGroups = $studentObj->getGroups();

        if (in_array('StudentsGroup', $studentGroups)) {

            //Save to wm_students_per_class

            $lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
            $dbw = $lb->getConnectionRef( DB_PRIMARY );

            $toadd = [
                'class_id' => $params['class_id'],
                'student_id' => $studentuser,
                'enrollment_time' => date("Y-m-d H:i:s")
            ];

            $dbw->insert(
                'wm_students_per_class', 
                $toadd,
                __METHOD__
            );

            $this->getResult()->addValue( null, $this->getModuleName(), $toadd );
        } else {
            $this->dieWithError('This user is not a student.');
        }

    }

    protected function getAllowedParams() {
        return [
            'student_name' => [
                ApiBase::PARAM_TYPE => 'string',
                ApiBase::PARAM_REQUIRED => true
            ],
            'class_id' => [
                ApiBase::PARAM_TYPE => 'integer',
                ApiBase::PARAM_REQUIRED => true
            ]
        ];
    }

    protected function getExamplesMessages() {
		return [
			'action=addstudent&student_name=Student1&class_id=1'
				=> 'apihelp-query+addstudent-example-1'
		];
	}

}
