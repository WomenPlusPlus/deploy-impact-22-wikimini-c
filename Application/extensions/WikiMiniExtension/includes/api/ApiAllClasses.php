<?php

namespace MediaWiki\Extension\Wikimini\api;

use ApiBase;

class ApiAllClasses extends \ApiQueryBase {

	/**
	 * @param \ApiQuery $query
	 * @param string $moduleName
	 */
	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName, 'ex' );
	}

	public function execute() {
		
		$db = $this->getDB();

		$this->addTables('wm_classes');
		$this->addFields([
			'class_id',
			'class_name',
			'class_start',
			'class_end',
			'class_teacher_id',
			'class_token'
		]);

		$res = $this->select( __METHOD__ );
		$result = $this->getResult();

		foreach($res as $row) {
			$vals = [
					'class-id' => (int)$row->class_id,
					'class-name' => $row->class_name,
					'class-start' => $row->class_start,
					'class-end' => $row->class_end,
					'class-teacher-id' => (int)$row->class_teacher_id,
					'class-token' => $row->class_token
				];

			$result->addValue( null, $this->getModuleName(), $vals );
		}
	}

	/** @inheritDoc */
	protected function getExamplesMessages() {
		return [
			'action=query&list=allclasses'
				=> 'apihelp-query+example-example-1',
			'action=query&list=example&key=teacher_id'
				=> 'apihelp-query+example-example-2',
		];
	}
}
