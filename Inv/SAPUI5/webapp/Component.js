// @ts-nocheck

sap.ui.define([
    'sap/ui/core/UIComponent',
    "alfa04/SAPUI5/model/models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} UIComponent 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @param {typeof alfa04.SAPUI5.model.models} Models
     * @param {typeof sap.ui.Device} Device
     */

    function (UIComponent, Models, ResourceModel, HelloDialog, Device) {
        'use strict';
        return UIComponent.extend("alfa04.SAPUI5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                //Call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                //Set data model on the view
                this.setModel(Models.createRecipient());

                //Set i18n model on the view
                //var i18nModel = new ResourceModel({ bundleName: "alfa04.SAPUI5.i18n.i18n" });
                //this.setModel(i18nModel, "i18n");
                //Set the device model
                this.setModel(Models.createDeviceModel(), "device");
                
                this._helloDialog = new HelloDialog(this.getRootControl());

                //Create the Views based on the url/hash
                this.getRouter().initialize();
            },
            
            exit: function(){
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function(){
                this._helloDialog.open();
            },

            getContentDensityClass: function(){
                if(!Device.support.touch){
                    this._sContentDensityClass = "sapUiSizeCompact";
                }else{
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
                return this._sContentDensityClass;
            }
        })
    });
