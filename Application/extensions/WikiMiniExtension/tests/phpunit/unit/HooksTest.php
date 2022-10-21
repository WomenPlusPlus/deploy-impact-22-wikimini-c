<?php

namespace MediaWiki\Extension\WikiMiniExtension\Tests;

use MediaWiki\Extension\WikiMiniExtension\Hooks;

/**
 * @coversDefaultClass \MediaWiki\Extension\WikiMiniExtension\Hooks
 */
class HooksTest extends \MediaWikiUnitTestCase {

	/**
	 * @covers ::onBeforePageDisplay
	 */
	public function testOnBeforePageDisplayVandalizeIsTrue() {
		$config = new \HashConfig( [
			'WikiMiniExtensionVandalizeEachPage' => true
		] );
		$outputPageMock = $this->getMockBuilder( \OutputPage::class )
			->disableOriginalConstructor()
			->getMock();
		$outputPageMock->method( 'getConfig' )
			->willReturn( $config );

		$outputPageMock->expects( $this->once() )
			->method( 'addHTML' )
			->with( '<p>WikiMiniExtension was here</p>' );
		$outputPageMock->expects( $this->once() )
			->method( 'addModules' )
			->with( 'oojs-ui-core' );

		$skinMock = $this->getMockBuilder( \Skin::class )
			->disableOriginalConstructor()
			->getMock();

		( new Hooks )->onBeforePageDisplay( $outputPageMock, $skinMock );
	}

	/**
	 * @covers ::onBeforePageDisplay
	 */
	public function testOnBeforePageDisplayVandalizeFalse() {
		$config = new \HashConfig( [
			'WikiMiniExtensionVandalizeEachPage' => false
		] );
		$outputPageMock = $this->getMockBuilder( \OutputPage::class )
			->disableOriginalConstructor()
			->getMock();
		$outputPageMock->method( 'getConfig' )
			->willReturn( $config );
		$outputPageMock->expects( $this->never() )
			->method( 'addHTML' );
		$outputPageMock->expects( $this->never() )
			->method( 'addModules' );
		$skinMock = $this->getMockBuilder( \Skin::class )
			->disableOriginalConstructor()
			->getMock();
		( new Hooks )->onBeforePageDisplay( $outputPageMock, $skinMock );
	}

}
