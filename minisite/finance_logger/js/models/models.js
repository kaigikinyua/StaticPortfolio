import { Transaction } from '../components/transactions.js';
var Payment = /** @class */ (function () {
    function Payment(amount, desc, client) {
        this.amount = amount;
        this.desc = desc;
        this.client = client;
    }
    Payment.prototype.format = function () { return this.amount + " was paid to " + this.client; };
    Payment.prototype.render = function () {
        var t = new Transaction(this.format(), this.desc, this.amount);
        var tComponent = t.component();
        tComponent.classList.add('payment');
        return tComponent;
    };
    return Payment;
}());
export { Payment };
var Invoice = /** @class */ (function () {
    function Invoice(amount, desc, client) {
        this.amount = amount;
        this.desc = desc;
        this.client = client;
    }
    Invoice.prototype.format = function () { return this.amount + " was received from " + this.client; };
    Invoice.prototype.render = function () {
        var t = new Transaction(this.format(), this.desc, this.amount);
        var tComponent = t.component();
        tComponent.classList.add('invoice');
        return tComponent;
    };
    return Invoice;
}());
export { Invoice };
