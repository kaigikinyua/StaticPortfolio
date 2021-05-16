import {Payment,Invoice} from './models/models.js'
const submitBtn=document.getElementById('submit') as HTMLButtonElement
const amount=document.getElementById('amount') as HTMLInputElement
const paymentType=document.getElementById('paymentType') as HTMLSelectElement
const paymentDesc=document.getElementById('desc') as HTMLInputElement
const clientField=document.getElementById('client') as HTMLInputElement
const searchField=document.getElementById('search') as HTMLInputElement
const openInputsBtn=document.getElementById('openInputs') as HTMLDivElement
const formInputsContainer=document.getElementById('inputs') as HTMLDivElement
const outPutContainer=document.getElementById('output') as HTMLDivElement
openInputsBtn.addEventListener('click',(e)=>{
    formInputsContainer.setAttribute('style','display:block;')
    outPutContainer.setAttribute('style','display:none;')
    submitBtn.addEventListener('click',(e)=>{
        formInputsContainer.setAttribute('style','display:none;')
        outPutContainer.setAttribute('style','display:block;')        
    })
})
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let amt:number=parseInt(amount.value);
    let pType:string=paymentType.value;
    let pDesc:string=paymentDesc.value;
    let client:string=clientField.value;
    let el:HTMLDivElement;
    let parent=document.getElementById('transaction_list') as HTMLDivElement
    if(pType=='payment'){
        let p:Payment=new Payment(amt,pDesc,client)
        el=p.render()
    }else{
        let i:Payment=new Invoice(amt,pDesc,client)
        el=i.render()
    }    
    parent.appendChild(el)
});

searchField.addEventListener('keyup',(e)=>{
    e.preventDefault()
    let sTearm=searchField.value
    let elements=document.querySelectorAll('div.transaction_item')
    elements.forEach(elem=>{
        var title:string=elem.children[0].innerHTML
        if(title.toLowerCase().indexOf(sTearm.toLowerCase())==-1){
            elem.setAttribute("style","display:none;")
        }else{
            elem.setAttribute("style","display:block;")
        }
    })
})

