const debug = true
var baseUrl = "http://localhost:5500/";
//var baseUrl="http://127.0.0.1:5500/";
var projects = []

//project images
var currProjectImages = []
var currImageNum = 0

if (debug == false) {
    baseUrl = "https://kaigikinyua.github.io/StaticPortfolio/"
}

new Vue({
    el: "#app",
    data: {
        covers: fetchGD
    }
})


function fetchGD() {
    var data = fetch(baseUrl + "gdprojects.json")
        .then(res => res.json())
        .then(d => {
            return d
        })
    return data
}