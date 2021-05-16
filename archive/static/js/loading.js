window.onload=()=>{
    var load=document.getElementById('loading')
    load.style.display="none"
}
loadingText()
function  loadingText(){
    var messages=['Hello There...','Just setting up ....','... 1 more sec']
    var messagePanel=document.getElementById('emojiLoad')
    messages.forEach(message=>{
        var m=document.createElement('p')
        m.classList.add("emojiMessage")
        m.innerHTML=message
        messagePanel.appendChild(m)
    })
    setTimeout(criticalLoading,13000)
}
function criticalLoading(){
    var messages=['#128517;','#128513;']
    var emoji=document.getElementById('emoji')
    messages.forEach(message=>{
        emoji.innerHTML="&"+message
    })

}