// ==UserScript==
// @name         FuckWingmanCheck
// @namespace    https://t.me/johannmosin
// @version      0.1
// @description  Нахуй Крыла, скрипт будет обновляться
// @author       Johann Mosin
// @match        https://edu.vsu.ru/mod/attendance/view.php?id=1098103*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check for the text "Отметить" every 10 seconds
    setInterval(function() {
        if (document.body.textContent.includes('Отметить')) {
            // If the text is found, send an alert to the browser
            alert('Крыл охуел и решил проверить посещяемость!');
        } else {
            // If the text is not found, reload the page
            location.reload();
        }
    }, 10000); // 10 seconds in milliseconds
})();
