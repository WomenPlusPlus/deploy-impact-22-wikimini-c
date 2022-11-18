<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;

class ApiStudentsInClass extends \ApiQueryBase {

	/**
	 * @param \ApiQuery $query
	 * @param string $moduleName
	 */
	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {

        $params = $this->extractRequestParams();
	
		$db = $this->getDB();

		$this->addTables(['user', 'wm_students_per_class']);
        $this->addJoinConds(['wm_students_per_class' => [ 'INNER JOIN', 'user_id=student_id' ] ]);
		
		$this->addFields([
			'user_id',
			'user_name',
            'class_id'
		]);

        $this->addWhereFld( 'class_id', $params['class_id'] );

		$res = $this->select( __METHOD__ );
		$result = $this->getResult();

		foreach($res as $row) {
			$vals = [
					'user_id' => (int)$row->user_id,
					'user_name' => $row->user_name
				];
			$fit = $result->addValue( [ 'query', $this->getModuleName() ], null, $vals );
		}
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
			'action=query&list=studentsinclass&class_id=1'
				=> 'apihelp-studentsinclass-example-1'
		];
	}
}
