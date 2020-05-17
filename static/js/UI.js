/*(window.onload=()=>{
    setTimeout(()=>{hide('loading')},2000)
}

function show(id){
    var elem=document.getElementById(id)
    elem.style.display="none"
}
function hide(id){
    var elem=document.getElementById(id)
    elem.style.display="none"
}
*/

function showSideNav(){
    var sideNav=document.getElementById('sideNav');
    sideNav.classList.remove('hide_Right');
    sideNav.classList.add('anim_reveal_fromRight');
    sideNav.classList.add('sideNavShow');
    showCover()
}
function hideSideNav(){
    var sideNav=document.getElementById('sideNav');
    sideNav.classList.add('hide_Right');
    sideNav.classList.remove('sideNavShow');
    sideNav.classList.remove('anim_reveal_fromRight');
    hideCover();
}

//cover
function showCover(){
    var cover=document.getElementById('cover')
    cover.style.display="block";
}
function hideCover(){
    var cover=document.getElementById('cover')
    cover.style.display="none";
}

