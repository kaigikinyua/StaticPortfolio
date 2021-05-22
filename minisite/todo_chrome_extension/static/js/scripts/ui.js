const dateBannerText=document.getElementById("current_date")
const DnM={
    days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    months:['Jan','Feb','Mar','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
}
window.onload=()=>{
    setDate()
}
function setDate(){
    var date=new Date()
    var day=DnM.days[date.getDay()]
    var month=DnM.months[date.getMonth()-1]
    var year=date.getFullYear()
    //Thu, Sep 05 2020
    dateBannerText.innerHTML=`${day}, ${month} ${date.getDate()} ${year}`
}