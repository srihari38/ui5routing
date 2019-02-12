sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.app.ui5routing.controller.Sub", {
		onInit: function () {

		},
		onSub:function(){
			var oRou = sap.ui.core.UIComponent.getRouterFor(this);
			oRou.navTo("Main");
		}
	});
});