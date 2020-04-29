"use strict";
/*
* Code for University of Strathclyde Mobile App Development.
* Developed by Nathan Goutcher 2020.
*
* Code confidential to developer and course examiners.
*
* Handles the model and view functions, adds event listeners to all buttons.
*/

var converterView = new ConverterView(),
    converterModel = new ConverterModel(),
    converterController = null,
    calculated = false,
    srcCur = null,
    destCur = null;

function ConverterController() {
    this.init = function () {

        converterModel.getCurrencies();

        if (localStorage.getItem("srcCur")) {
            converterView.setSrcCur(localStorage.getItem("srcCur"));
        }

        if (localStorage.getItem("destCur")) {
            converterView.setDestCur(localStorage.getItem("destCur"));
        }

        if(localStorage.getItem("remember")) {
            converterView.setRememberStatusChecked();
        }

        if(localStorage.getItem("bankFee")) {
            converterView.setBankFeeRate(localStorage.getItem("bankFee"));
        }

        srcCur = converterView.getSrcCur().toUpperCase();
        destCur = converterView.getDestCur().toUpperCase();
        converterView.showNumberDisplay(converterModel.getCurrentValue() + " " + srcCur);

        converterView.setClickCallback1(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("1 " + srcCur);
                converterModel.setCurrentValue(1);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "1 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "1");
            }
        });

        converterView.setClickCallback2(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("2 " + srcCur);
                converterModel.setCurrentValue(2);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "2 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "2");
            }
        });

        converterView.setClickCallback3(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("3 " + srcCur);
                converterModel.setCurrentValue(3);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "3 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "3");
            }
        });

        converterView.setClickCallback4(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("4 " + srcCur);
                converterModel.setCurrentValue(4);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "4 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "4");
            }
        });

        converterView.setClickCallback5(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("5 " + srcCur);
                converterModel.setCurrentValue(5);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "5 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "5");
            }
        });

        converterView.setClickCallback6(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("6 " + srcCur);
                converterModel.setCurrentValue(6);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "6 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "6");
            }
        });

        converterView.setClickCallback7(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("7 " + srcCur);
                converterModel.setCurrentValue(7);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "7 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "7");
            }
        });

        converterView.setClickCallback8(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("8 " + srcCur);
                converterModel.setCurrentValue(8);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "8 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "8");
            }
        });

        converterView.setClickCallback9(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("9 " + srcCur);
                converterModel.setCurrentValue(9);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "9 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "9");
            }
        });

        converterView.setClickCallback0(function () {
            if (converterModel.getCurrentValue() === 0 || calculated) {
                converterView.showNumberDisplay("0 " + srcCur);
                converterModel.setCurrentValue(0);
                calculated = false;
            } else if(converterModel.maxVal()){
                converterView.showNumberDisplay(converterModel.getCurrentValue() + "0 " + srcCur);
                converterModel.setCurrentValue(converterModel.getCurrentValue() + "0");
            }
        });

        converterView.setClickCallbackClear(function () {
            converterView.showNumberDisplay("0 " + srcCur);
            converterModel.setCurrentValue(0);
            calculated = false;
        });

        converterView.setClickCallbackEq(function () {
            if(!calculated) {
                converterModel.calculateValue(srcCur, destCur, converterView.getBankFeeRate());
                converterView.showNumberDisplay(converterModel.getCurrentValue().toString() + " " + destCur);
                calculated = true;
            }
        });

        converterView.setClickCallBackApply(function () {
            srcCur = converterView.getSrcCur().toUpperCase();
            destCur = converterView.getDestCur().toUpperCase();
            converterView.showNumberDisplay("0 " + srcCur);
            converterModel.setCurrentValue(0);
            if(converterView.getRememberStatus()) {
                localStorage.setItem("srcCur", srcCur);
                localStorage.setItem("destCur", destCur);
                localStorage.setItem("bankFee", converterView.getBankFeeRate());
                localStorage.setItem("remember", "yes");
            } else {
                localStorage.removeItem("srcCur");
                localStorage.removeItem("destCur");
                localStorage.removeItem("remember");
                localStorage.removeItem("bankFee");
            }

        });

        converterView.setOptionsMenuOpen(function () {
            converterView.getMenuOptions().style.width = "15rem";
        });

        converterView.setOptionsMenuClosed(function () {
            converterView.getMenuOptions().style.width = "0";
        })
    };
}

converterController = new ConverterController();
window.addEventListener("load", converterController.init);