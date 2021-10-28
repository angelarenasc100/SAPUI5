// @ts-nocheck
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",
        "sap/ui/core/UIComponent"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.routing.History} History
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */
	function (Controller, History, UIComponent) {
		"use strict";

		return Controller.extend("alfa04.SAPUI5.controller.Details", {
			onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatch, this);
            },
            
            _onObjectMatch: function(oEvent){
                this.byId("rating").reset();
                this.getView().bindElement({
                    path: "/"+window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                    model: "northwind"
                });
            },

            onNavBack: function(oEvent){
                const oHistory = History.getInstance();
                const sPreviewHash = oHistory.getPreviousHash();

                if (sPreviewHash !== undefined) {
                    window.history.go(-1);
                }else{
                    const oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteApp", {}, true);
                }
            },

            onRatingChange: function(oEvent){
                const fValue = oEvent.getParameter("value");
                const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
                
                sap.m.MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
            }
		});
	});
