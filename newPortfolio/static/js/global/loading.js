"use strict";
var currloadValue = 0;
var maxOut = 99;
var parentHeightPercent = 80;
//dom elements
var loading_page = document.getElementById('loading_page');
var domLoadingContainer = document.getElementById('loading_value');
var loadingBar = document.getElementById('loading_bar');
var pageLoading = setInterval(function () {
    console.log("loading");
    incrementLoading();
}, 50);
window.onload = function () {
    //best case scenario of disposing the animation is settingTimeOut to 3000
    setTimeout(function () { finishLoading(); }, 3000);
};
function startLoading() {
    console.log("start loading");
    loading_page.setAttribute('display', 'fixed');
    domLoadingContainer.innerHTML = currloadValue + "%";
    pageLoading;
}
function incrementLoading() {
    if (currloadValue < maxOut) {
        currloadValue += 1;
    }
    domLoadingContainer.innerHTML = currloadValue + "%";
    loadingBar.setAttribute('style', "bottom:-" + (maxOut - currloadValue) + "%;");
}
function finishLoading() {
    clearInterval(pageLoading);
    currloadValue = maxOut;
    incrementLoading();
    setTimeout(function () {
        loading_page.setAttribute('style', 'display:none;');
        console.log("deleting loading page");
    }, 500);
}
startLoading();
