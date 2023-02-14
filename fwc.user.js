// ==UserScript==
// @name         FuckWingmanCheck
// @namespace    https://t.me/johannmosin
// @version      0.1
// @description  Нахуй Крыла, скрипт будет обновляться
// @author       Johann Mosin
// @match        https://edu.vsu.ru/mod/attendance/view.php?id=1098103*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Check for the text "Отметить" every 10 seconds
    var intervalId = setInterval(function() {
        if (document.body.textContent.includes('Отметить')) {
            // If the text is found, send an alert to the browser
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            alert('Крыл охуел и решил проверить посещаемость!');
            clearInterval(intervalId);
        } else {
            // If the text is not found, reload the page
            location.reload();
        }
    }, 10000); // 10 seconds in milliseconds
})();
