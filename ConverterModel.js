"use strict";

/*
* Code for University of Strathclyde Mobile App Development.
* Developed by Nathan Goutcher 2020.
*
* Code confidential to developer and course examiners.
*
* Handles the values of different elements throughout the webpage. Also handles the setting of the currency object via AJAX.
*/

function ConverterModel() {
    var currencyArr = {}, value = 0;

    this.getCurrencies = function () {
            var http = new XMLHttpRequest();

            http.onreadystatechange = function () {
                if (http.readyState === 4 && http.status === 200) {
                    currencyArr = {};
                    parseXML(http);
                } else {
                    currencyArr = JSON.parse(localStorage.getItem("currencyObj"));
                }
            };
            http.open("POST", "https://devweb2019.cis.strath.ac.uk/~aes02112/ecbxml.php", true);
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.send();

            function parseXML(http) {
                let repliesXML  = http.responseXML;

                let elements = repliesXML.getElementsByTagName("Cube");

                for(let i = 0; i < elements.length; i++) {
                    if(elements[i].hasAttribute("currency")) {
                        currencyArr[elements[i].getAttribute("currency")] = elements[i].getAttribute("rate");
                    }
                }
                currencyArr["EUR"] = 1;
                let myJson = JSON.stringify(currencyArr);
                localStorage.setItem("currencyObj", myJson);
            }
        };

    this.getCurrentValue = function () {
        return value;
    };

    this.setCurrentValue = function (val) {
        value = Math.floor(val);
    };

    this.calculateValue = function (srcCur, destCur, rate) {
        var val;
        if(srcCur === destCur) {
            val = this.getCurrentValue() * rate;
            this.setCurrentValue(val);
        } else if (srcCur === "eur") {
            val = this.getCurrentValue() * (currencyArr[destCur] * rate);
            this.setCurrentValue(val);
        } else {
            let x = this.getCurrentValue() / currencyArr[srcCur];
            this.setCurrentValue(x);
            val = this.getCurrentValue() * (currencyArr[destCur] * rate);
            this.setCurrentValue(val);
        }
    };

    //Set max length of value to prevent overflow
    this.maxVal = function () {
        return value.toString().length < 10;
    }
}