// ==UserScript==
// @name         NCHU-Captcha-Disabler
// @namespace    https://github.com/Dinlon5566
// @version      1
// @description  UserScript to disable or bypass CAPTCHA verification on NCHU's authentication web pages.
// @author       Dinlon5566
// @match        https://idp.nchu.edu.tw/*
// @homepage     https://github.com/Dinlon5566/NCHU-Captcha-Disabler
// @grant        none
// ==/UserScript==

// For educational or research purposes only

(function () {
    'use strict';
    // 覆蓋 驗證碼相關函數
    window.login_check = function () {
        console.log('[TM_DVnchu]login_check has been disabled.');
    };

    window.createCode = function () {
        var code = "--pass--";
        console.log('[TM_DVnchu]createCode has been disabled.');
        return code;
    };
    // 修改驗證碼圖片
    /*
    window.codeCanvas = function(codeShow){
        
        console.log('[TM_DVnchu]codeCanvas has been disabled.');

    };*/

    //自動更新驗證碼
    if (typeof codeCanvas === 'function') {

        console.log('[TM_DVnchu]codeCanvas has been reset.');
        codeCanvas(document.getElementById("codeShow"))
    } else {
        console.error('[TM_DVnchu]codeCanvas function does not exist.');
    }

    // 驗證碼檢查
    window.validateCode = function () {
        console.log('[TM_DVnchu]validateCode has been disabled.');
    };
})();