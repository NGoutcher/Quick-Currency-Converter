"use strict";
/*
* Code for University of Strathclyde Mobile App Development.
* Developed by Nathan Goutcher 2020.
*
* Code confidential to developer and course examiners.
*
* Handles the physical html elements in index.html
*/

function ConverterView() {
    var button1 = document.getElementById("button1"),
        button2 = document.getElementById("button2"),
        button3 = document.getElementById("button3"),
        button4 = document.getElementById("button4"),
        button5 = document.getElementById("button5"),
        button6 = document.getElementById("button6"),
        button7 = document.getElementById("button7"),
        button8 = document.getElementById("button8"),
        button9 = document.getElementById("button9"),
        button0 = document.getElementById("button0"),
        buttonC = document.getElementById("buttonClear"),
        buttonEq = document.getElementById("buttonEquals"),
        display = document.getElementById("display"),
        srcCur = document.getElementById("srcCur"),
        destCur = document.getElementById("destCur"),
        getRemember = document.getElementById("remember"),
        buttonApply = document.getElementById("applyButton"),
        menuButton = document.getElementById("menuIcon"),
        closeButton = document.getElementById("closeMenuIcon"),
        optionsMenu = document.getElementById("menuOptions"),
        bankFee = document.getElementById("bankFee");

    this.showNumberDisplay = function (val) {
        display.textContent = val;
    };

    this.setClickCallback1 = function (callback) {
        button1.addEventListener("click", callback);
    };

    this.setClickCallback2 = function (callback) {
        button2.addEventListener("click", callback);
    };

    this.setClickCallback3 = function (callback) {
        button3.addEventListener("click", callback);
    };

    this.setClickCallback4 = function (callback) {
        button4.addEventListener("click", callback);
    };

    this.setClickCallback5 = function (callback) {
        button5.addEventListener("click", callback);
    };

    this.setClickCallback6 = function (callback) {
        button6.addEventListener("click", callback);
    };

    this.setClickCallback7 = function (callback) {
        button7.addEventListener("click", callback);
    };

    this.setClickCallback8 = function (callback) {
        button8.addEventListener("click", callback);
    };

    this.setClickCallback9 = function (callback) {
        button9.addEventListener("click", callback);
    };

    this.setClickCallback0 = function (callback) {
        button0.addEventListener("click", callback);
    };

    this.setClickCallbackClear = function (callback) {
        buttonC.addEventListener("click", callback);
    };

    this.setClickCallbackEq = function (callback) {
        buttonEq.addEventListener("click", callback);
    };

    this.setClickCallBackApply = function (callback) {
        buttonApply.addEventListener("click", callback);
    };

    this.setOptionsMenuOpen = function (callback) {
        menuButton.addEventListener("click", callback);
    };

    this.setOptionsMenuClosed = function (callback) {
        closeButton.addEventListener("click", callback);
    };

    this.getMenuOptions = function () {
        return optionsMenu;
    };

    this.getSrcCur = function () {
        return srcCur.options[srcCur.selectedIndex].value;
    };

    this.getDestCur = function () {
        return destCur.options[destCur.selectedIndex].value;
    };

    this.getRememberStatus = function () {
        return getRemember.checked;
    };

    this.setRememberStatusChecked = function () {
        getRemember.checked = true;
    };

    this.setSrcCur = function (val) {
        srcCur.value = val.toLowerCase();
    };

    this.setDestCur = function (val) {
        destCur.value = val.toLowerCase();
    };

    this.getBankFeeRate = function () {
        return bankFee.value;
    };

    this.setBankFeeRate = function (val) {
        bankFee.value = val.toLowerCase();
    }
}
