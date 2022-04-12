// ==UserScript==
// @name         BLS alert
// @namespace    http://tampermonkey.net/
// @version      2.0.3
// @description  bls aler  P|R|C Clean Refresh Alarm Notif
// @author       Mous@2021
// @match        https://morocco.blsspainvisa.com/appointment_family.php
// @match        https://morocco.blsspainvisa.com/appointment.php
// @match        https://morocco.blsspainvisa.com/embassy_appointment.php
// @match        https://morocco.blsspainvisa.com/spanish/appointment.php
// @match        https://morocco.blsspainvisa.com/english/appointment_family.php
// @match        https://morocco.blsspainvisa.com/spanish/appointment.php
// @match        https://morocco.blsspainvisa.com/spanish/appointment_family.php
// @match        https://morocco.blsspainvisa.com/embassy_appointment.php
// @match        https://morocco.blsspainvisa.com/english/embassy_appointment.php
// @grant        none
// ==/UserScript==

var gun=setInterval(function(){
    if (document.getElementsByClassName('day activeClass').length !==0) { 
      new Audio('https://www.soundjay.com/mechanical/sounds/machine-gun-02.mp3').play(); 
      clearInterval(gun);
    }
}, 1000)
