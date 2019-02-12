/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/app/ui5routing/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});