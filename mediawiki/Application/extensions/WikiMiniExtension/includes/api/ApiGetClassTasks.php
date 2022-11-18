<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;
use MediaWiki\MediaWikiServices;

class ApiGetClassTasks extends \ApiQueryBase {


	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {

        $params = $this->extractRequestParams();
	
		$lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
        $dbr = $lb->getConnectionRef(DB_REPLICA);

        // QUERY 1 - fetch classes details
        $res = $dbr->newSelectQueryBuilder()
            ->select('*')
            ->from('wm_tasks')
            ->where([
                'wm_tasks.class_id' => $params['class_id']
                ])
            ->caller(__METHOD__)
            ->fetchResultSet();
        
        // values
        foreach($res as $row) {
            $vals = [
                'class_id' => (int)$row->class_id,
                'task_id' => (int)$row->task_id,
                'task_name' => $row->task_name,
                'task_type' => $row->task_type,
                'task_subject' => $row->task_subject,
                'task_description' => $row->task_description,
                'task_reference_link' => $row->task_reference_link,
                'task_criteria' => $row->task_criteria,
                'page_name' => $row->page_name,
                'creation_date' => $row->creation_date
                ];

                $fit = $this->getResult()->addValue( [ 'query', $this->getModuleName() ], null, $vals );
        }

	}

    protected function getAllowedParams() {
        return [
            // required parameters
            'class_id' => [
                ApiBase::PARAM_TYPE => 'integer',
                ApiBase::PARAM_REQUIRED => true
            ]
        ];
    }

	/** @inheritDoc */
	protected function getExamplesMessages() {
		return [
			'action=query&list=getclasstasks&class_id=1'
				=> 'apihelp-getclasstasks-example-1'
		];
	}
}
