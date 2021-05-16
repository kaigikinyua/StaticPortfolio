window.addEventListener("scroll", (e) => {
    var srcollDistance = window.pageYOffset;
    var velocity=2;
    var elements = document.querySelectorAll('.parallax')
    elements.forEach(elem => {
        console.log(elem.dataset.offset)
        elem.style.transform = "translate3d("+srcollDistance * elem.dataset.offset +"px ,0px ,0px )";
    })
});

function parallax(srcollDistance, elem, velocity) {
    elem.style.transform = "translate3d(" + srcollDistance * velocity + "px 0px 0px);";
}