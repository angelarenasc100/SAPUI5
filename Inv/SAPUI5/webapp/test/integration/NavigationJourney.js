// @ts-nocheck
	/*global QUnit*/

	sap.ui.define([
        "alfa04/SAPUI5/localService/mockserver",
		"sap/ui/test/opaQunit",
		"./pages/HelloPanel"
    ], 
    /**
     * 
     * @param {typeof sap.ui.test.opaQunit} opaQunit
     */
    function (mockserver, opaQunit) {
		"use strict";

		QUnit.module("Navigation");

		opaQunit("Should open the Hello Dialog", function (Given, When, Then) {
            //Initialize the mock server
            mockserver.init();

			// Arrangements
			Given.iStartMyUIComponent({
                componentConfig: {
                    name: "alfa04.SAPUI5"
                }
            });

            // Actions
            When.onTheAppPage.iSayHelloDialogButton();

            //Assertions
            Then.onTheAppPage.iSeeTheHelloDialog();

            //Cleanup
            Then.iTeardownMyApp();
		});
	});
