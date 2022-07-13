sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return BaseController.extend("my.company.salesorders.controller.Worklist", {

        formatter: formatter,

        /* =========================================================== */
        /* lifecycle methods                                           */
        /* =========================================================== */

        /**
         * Called when the worklist controller is instantiated.
         * @public
         */
        onInit: function () {
            var oViewModel;

            // keeps the search state
            this._aTableSearchState = [];

            // Model used to manipulate control states
            oViewModel = new JSONModel({
                worklistTableTitle: this.getResourceBundle().getText("worklistTableTitle"),
                shareSendEmailSubject: this.getResourceBundle().getText("shareSendEmailWorklistSubject"),
                shareSendEmailMessage: this.getResourceBundle().getText("shareSendEmailWorklistMessage", [location.href]),
                tableNoDataText: this.getResourceBundle().getText("tableNoDataText")
            });
            this.setModel(oViewModel, "worklistView");

        },
        onPress: function (evt) {
            console.log(evt.getSource().getId() + " Pressed");
            var settings = {
                "url": "MYES5/sap/opu/odata/iwbep/gwdemo/ProductCollection?$format=json",
                "method": "GET",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        },
        onPress2: function (evt) {
            console.log(evt.getSource().getId() + " Pressed");

            var payload = {
                "headers": {
                    "Type": "OperatorProfileUploadAPI",
                    "Prevent Duplicate Rows with Same Security ID": "True",
                    "Date Format": "MM/DD/YYYY",
                    "Comments": "This API is for Demo by Madan",
                    "Send Notification?": "False",
                    "Language": "English (United States)",
                    "Transaction": "True",
                    "Approval Required": "False",
                    "Buyer": "TRFI",
                    "Number Format": "#,##9.99 (Example: 1,234,567.99)"
                },
                "data": [
                    {
                        "Supplier Reference": "",
                        "Description": "Created for Demo purpose by Madan",
                        "Location Code": "ROM01",
                        "Legal Entity Code": "OLD Data",
                        "MSP Code": "",
                        "Auto Register": "Yes",
                        "First Name": "FirstTest002",
                        "Owner Username": "HM_TRFI",
                        "Activity Code": "",
                        "Unique Id": "paolo.tegon@gmail.com",
                        "Start Date": "05/06/2022",
                        "Security ID": "PAOTEG08M04R179D",
                        "Supplier Code": "SEAL",
                        "Zip/Postal Code": "",
                        "Decision Form ID": "",
                        "Buyer Reference": "",
                        "Comments": "This comments in data section of API for Demo by Madan",
                        "Address2": "",
                        "Address1": "",
                        "City": "",
                        "Offboarding Activity Code": "",
                        "Cost Center Code": "",
                        "End Date": "01/01/2024",
                        "State": "",
                        "Job Code": "69220001",
                        "Country": "ITA",
                        "Fax Number": "",
                        "Last Name": "LastTest002",
                        "Phone Number": "",
                        "Site Code": "ROM01",
                        "Supervisor Username": "VBarone_TRFI",
                        "Business Unit Code": "TRFI",
                        "Email": "paolo.tegon@gmail.com"
                    }
                ]
            };
            var settings = {
                "url": "PROFILE_WORKER/RESTAdapter/ProfileWorkerUpload",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify(payload),
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        }
    });
});
