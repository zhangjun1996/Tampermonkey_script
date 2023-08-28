// ==UserScript==
// @name         上海大学选课
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yjsxk.shu.edu.cn/yjsxkapp/sys/xsxkapp/course.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shu.edu.cn
// @grant        none
// @run-at context-menu
// ==/UserScript==

let timeout = 1

function xk()
{
    var p=document.evaluate('/html/body/div/article[2]/div[3]/div/div/div[1]/div/div[2]/ul/li[3]/a',document).iterateNext();
    p.click();
    var ids = [2, 3, 4];
    for (var k = 0; k<ids.length; k++)
    {
        var xpath = '/html/body/div/article[2]/div[3]/div/div/div[1]/div/table/tbody/tr['+ids[k]+']'
        var cap = document.evaluate(xpath+'/td[8]/span', document).iterateNext();
        var [cap_now, cap_total] = cap.textContent.split('/');
        console.log(cap_now, cap_total);
        if (cap_now < cap_total)
        {
            var xk_btn=document.evaluate(xpath+'/td[9]/a',document).iterateNext();
            xk_btn.click();
            var confirm_btn = document.evaluate('/html/body/div[3]/div[6]/div/button[1]',document).iterateNext();
            confirm_btn.click();
        }
    }
    setTimeout(() => {
        xk()
    }, timeout*1000);
}

(function() {
    'use strict';

    // Your code here...
    setTimeout(() => {
      xk()
    }, timeout*1000);
})();