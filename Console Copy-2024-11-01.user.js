// ==UserScript==
// @name         Console Copy
// @namespace    http://tampermonkey.net/
// @version      2024-11-01
// @description  Save seconds by clicking to copy CSU IDs and usernames!
// @author       Nick
// @match        https://helpdesk-console.columbusstate.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {

    var csuID;
    var username;

    window.addEventListener('load', () => {
        addCopyID


    function getcsuID() {
    var myTDs = document.getElementsByTagName("td");
    var regex = /\b909\d*\b/;
    for(var i=0;i<myTDs.length;i++){

        if(regex.test(myTDs[i].innerText)){

            var parent = myTDs[i].parentNode;
            csuID = (myTDs[i].innerText);
			console.log(csuID)
            break;

        }
    }
        return csuID;
    }
        function addCopyIdButton(csuID) {

            var zNode = document.createElement ('div');
            zNode.innerHTML = '<button id="copyIDButton" type="button">'
                + 'Copy CSU ID</button>'
            ;
            zNode.setAttribute ('id', 'myContainer');
            parent.appendChild(zNode);

            document.getElementById("copyIDButton").addEventListener(
                "click", ButtonClickAction, false
            );
        }
    function ButtonClickAction(zEvent) {
        navigator.clipboard.writeText(csuID);
    }
GM_addStyle ( `
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              20px;
        background:             orange;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
` );

})();