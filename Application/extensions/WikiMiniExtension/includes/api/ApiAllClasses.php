<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;

class ApiAllClasses extends \ApiQueryBase {

	/**
	 * @param \ApiQuery $query
	 * @param string $moduleName
	 */
	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
	
		$db = $this->getDB();

		$this->addTables('wm_classes');
		
		$this->addFields([
			'class_name'
		]);

		$res = $this->select( __METHOD__ );
		$result = $this->getResult();

		foreach($res as $row) {
			$vals = [
					'name' => $row->class_name,
					'teacherid' => $row->class_teacher_user_id
				];
			$fit = $result->addValue( [ 'query', $this->getModuleName() ], null, $vals );
		}
	}

	/** @inheritDoc */
	protected function getExamplesMessages() {
		return [
			'action=query&list=allclasses'
				=> 'apihelp-allclasses-example-1'
		];
	}
}
