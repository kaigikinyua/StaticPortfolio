export class Transaction{
    constructor(
        readonly title:string,
        readonly desc:string,
        readonly amount:number,
    ){}
    component():HTMLDivElement{
        var container=document.createElement('div')
        container.dataset.open='0'
        container.classList.add('transaction_item')
        container.innerHTML=`<h4>${this.title}</h4>
                        <div class='desc'>
                            <span class='desc'>${this.desc}</span>
                        </div>`
        container.addEventListener('click',e=>{
            var open:string=container.getAttribute('data-open') as string
            var psudo=window.getComputedStyle(container.children[0],':after')
            if(open=='0'){
                container.children[1].setAttribute('style','display:block;')
                container.setAttribute('data-open','1')
                psudo.content=''
            }else{
                container.children[1].setAttribute('style','display:none;')
                container.setAttribute('data-open','0')
                psudo.content=''
            }
        })
        return container
    }
}