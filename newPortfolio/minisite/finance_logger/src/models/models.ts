import {Transaction} from '../components/transactions.js'
//interfaces
interface OutPutFormatter{
    format():string;
    render(f:string,desc:string,amount:string):HTMLDivElement
}

export class Payment implements OutPutFormatter{
    constructor(
        readonly amount:number,
        readonly desc:string,
        readonly client:string
    ){}
    format(){ return `${this.amount} was paid to ${this.client}`}
    render(){
        let t:Transaction=new Transaction(this.format(),this.desc,this.amount)
        let tComponent=t.component()
        tComponent.classList.add('payment')
        return tComponent
    }
}

export class Invoice implements OutPutFormatter{
    constructor(
        readonly amount:number,
        readonly desc:string,
        readonly client:string
    ){}
    format(){ return `${this.amount} was received from ${this.client}`}
    render(){
        let t:Transaction=new Transaction(this.format(),this.desc,this.amount)
        let tComponent=t.component()
        tComponent.classList.add('invoice')
        return tComponent
    }
}