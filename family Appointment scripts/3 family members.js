// ==UserScript==
// @name         FML-P3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       @itsmaarouf
// @match        *://*.blsspainmorocco.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
//
(function() {
    /partie overlay/
    let code = "";
    if (document.scripts[11].text.indexOf("available_dates") != -1) {
        code = document.scripts[11].text;
        TheBigBro();
    } else if (document.scripts[12].text.indexOf("available_dates") != -1) {
        code = document.scripts[12].text;
        TheBigBro();
    } else {
        console.log("script number is wrong");
    }

    'use strict';
    function TheBigBro() {
    var bgn = code.indexOf("available_dates");
    var end = code.indexOf("fullCapicity_dates");
    var table = code.slice(bgn+20, end-9);
    if (table !== ""){
        var datee = table.slice(0,10);
        var dd = datee.slice(0,2);
        var mm = datee.slice(3,5);
        var yyyy = datee.slice(6,10);
        var dateeFin = [yyyy, mm, dd];
        var finDate= dateeFin.join("-");
        if(document.getElementById("app_date").value.length === 0 && finDate !== "")
        {
            $('#app_date').datepicker("update" ,finDate);
        }else if (document.title == "504 Gateway Time-out" || document.title == "502 Bad Gateway" || document.title == "504 Gateway Timeout") {

        window.setTimeout(function(){ location.reload(); }, 500);

        /Get page (1) OPEN PAGE AND GET AUTO REPLAY/
    } else
        {
      //########################################################################
      //############### THIS IS THE PART YOU MUST CHANGE #######################
      //########################################################################

    var lastNames =["last_Names_1","last_Names_2","last_Names_3"],
        firstNames =["first_Names_1","first_Names_2","first_Names_3"],
        births =["yyyy-mm-aa","yyyy-mm-aa","yyyy-mm-aa"],
        passNumbers =["KN0000000","LF0000000","BH0000000"],
        issueDates =["yyyy-mm-aa","yyyy-mm-aa","yyyy-mm-aa"],
        expiryDates =["yyyy-mm-aa","yyyy-mm-aa","yyyy-mm-aa"],
        pptissuePalaces =["city Name","city Name","city Name"],
        number = 3,
      //########################################################################
      //########################################################################
        j=1;
            setTimeout(function(){
                for(var i=0; i<=number-1; i++){
                document.getElementById('app_time-'+j).selectedIndex = document.getElementById('app_time-'+j).length-1;
                document.getElementById('VisaTypeId-'+j).selectedIndex = "1";
                document.getElementById('first_name-'+j).value=firstNames[i];
                document.getElementById('last_name-'+j).value=lastNames[i];
                document.getElementById('passport_number-'+j).value=passNumbers[i];
                $('#date_of_birth-'+j).datepicker("update" ,births[i]);
                $('#pptIssueDate-'+j).datepicker("update" ,issueDates[i]);
                $('#pptExpiryDate-'+j).datepicker("update" ,expiryDates[i]);
                document.getElementById('pptIssuePalace-'+j).value=pptissuePalaces[i];
                j++
            }
            }, 4000)
        }
    }
    if(document.getElementById("app_date").value.length === 0)
        {
            setTimeout(function(){window.location.reload(1);}, 19 * 1000);
        }
    }
})();
