// ==UserScript==
// @name         FML-P4
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       @itsmaarouf
// @match        *://*.blsspainmorocco.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function sayHi() {
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
        let bgn = code.indexOf("available_dates");
        let end = code.indexOf("fullCapicity_dates");
        let table = code.slice(bgn+20, end-9);
        if (table !== ""){
            let datee = table.slice(0,10);
            let dd = datee.slice(0,2);
            let mm = datee.slice(3,5);
            let yyyy = datee.slice(6,10);
            let dateeFin = [yyyy, mm, dd];
            let finDate= dateeFin.join("-");
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
                let lastNames =["LAST NAME 1","LAST NAME 2"],
                    firstNames =["FIRST NAME 1","FIRST NAME 2"],
                    births =["YYYY-MM-DD","YYYY-MM-DD"],//Date Of Birth '1995-09-12'
                    passNumbers =["IO3924670","XO2918460"],//Passport Number
                    issueDates =["YYYY-MM-DD","YYYY-MM-DD"],//Passport Issue Date
                    expiryDates =["YYYY-MM-DD","YYYY-MM-DD"],//Passport Expiry Date
                    pptissuePalaces =["CITY 1","CITY 2"],//Passport Issue Place
            //########################################################################
            //########################################################################
                    number = 2,
                    j=1;
                setTimeout(function(){
                    for(let i=0; i<=number-1; i++){
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
