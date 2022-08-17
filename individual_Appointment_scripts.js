// ==UserScript==
// @name         individual test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       @Itsmaarouf
// @match        *://*.blsspainmorocco.com/*
// @match        *://*.blsspainvisa.com/*
// @grant        none
// ==/UserScript==
//---------------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////
(function sayHi() {
    'use strict';
     let code = "";
    const Days = [];
    for(var i = 0; i<=document.scripts.length; i++){
        if (document.scripts[i].text.indexOf("available_dates") != -1) {
        code = document.scripts[i].text;
            doMagic();
        }
    }
    function doMagic() {
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

        }else
        {
            //########################################################################
            //############### THIS IS THE PART YOU MUST CHANGE #######################
            //########################################################################
            var lastNames ="Last Name";
            var firstNames ="First Name";
            var births ="yyyy-mm-dd";//Date Of Birth
            var passNumbers ="Passport Number";//Passport Number
            var issueDates ="yyyy-mm-dd";//Passport Issue Date
            var expiryDates ="yyyy-mm-dd";//Passport Expiry Date
            var pptissuePalaces ="city name";//Passport Issue Place
            var franN ="TG700******";
            //########################################################################
            //########################################################################

            document.getElementById('first_name').value=firstNames;
            document.getElementById('last_name').value=lastNames;
            $('#dateOfBirth').datepicker("update" ,births);
            document.getElementById('passport_no').value=passNumbers;
            $('#pptIssueDate').datepicker("update" ,issueDates);
            $('#pptExpiryDate').datepicker("update" ,expiryDates);
            document.getElementById('pptIssuePalace').value=pptissuePalaces;
            var audio = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-the-sound-pack-tree/tspt_german_ambulance_sirens_wailing_loop_041.mp3');
            audio.play();
            document.getElementById("app_time").selectedIndex = document.getElementById('app_time').length-1;
            document.getElementById("VisaTypeId").selectedIndex = "1";
            if (document.getElementById('fran') !== null){
                document.getElementById('fran').value=franN;
            }
            if (document.getElementById("passportType") !== null){
                document.getElementById("passportType").selectedIndex = "7";
            }
            if (document.getElementById("vasId12") !== null){
              $("#vasId12").prop("checked", true);
              }
        }
    }
    if(document.getElementById("app_date").value.length === 0)
        {
            setTimeout(function(){window.location.reload(1);}, 30* 1000);;
        }
 //   ----------------------------------------------------------------------------------------------------
 // PARTI AUTO SUBMIT

 function clicksubmit() {
    if (
        document.getElementById("app_date").value !== "" &&
        document.getElementById("app_time").value !== "" &&
        document.getElementById("VisaTypeId").value !== "" &&
        document.getElementById("first_name").value !== "" &&
        document.getElementById('last_name').value !== "" &&
        document.getElementById("dateOfBirth").value !== "" &&
        document.getElementById("passportType").value !== "" &&
        document.getElementById('passport_no').value !== "" &&
        document.getElementById("pptIssueDate").value !== "" &&
        document.getElementById('pptExpiryDate').value !== "" &&
        document.getElementById("pptIssuePalace").value !== ""

        ) {
            console.log('click SUBMIT');
            document.getElementsByClassName("btn primary-btn")[0].click();
            }
    }
    var stopconsubmit = setInterval(clicksubmit, 10*1000);

    document.getElementsByClassName("btn primary-btn")[0].onclick = function () {
        'use strict'
        console.log('STOP CLICKING SUBMIT');
        clearTimeout(stopconsubmit);
    }

    console.log("End of code run");
        }
})();
