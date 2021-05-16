import { Payment, Invoice } from './models/models.js';
var submitBtn = document.getElementById('submit');
var amount = document.getElementById('amount');
var paymentType = document.getElementById('paymentType');
var paymentDesc = document.getElementById('desc');
var clientField = document.getElementById('client');
var searchField = document.getElementById('search');
var openInputsBtn = document.getElementById('openInputs');
var formInputsContainer = document.getElementById('inputs');
var outPutContainer = document.getElementById('output');
openInputsBtn.addEventListener('click', function (e) {
    formInputsContainer.setAttribute('style', 'display:block;');
    outPutContainer.setAttribute('style', 'display:none;');
    submitBtn.addEventListener('click', function (e) {
        formInputsContainer.setAttribute('style', 'display:none;');
        outPutContainer.setAttribute('style', 'display:block;');
    });
});
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var amt = parseInt(amount.value);
    var pType = paymentType.value;
    var pDesc = paymentDesc.value;
    var client = clientField.value;
    var el;
    var parent = document.getElementById('transaction_list');
    if (pType == 'payment') {
        var p = new Payment(amt, pDesc, client);
        el = p.render();
    }
    else {
        var i = new Invoice(amt, pDesc, client);
        el = i.render();
    }
    parent.appendChild(el);
});
searchField.addEventListener('keyup', function (e) {
    e.preventDefault();
    var sTearm = searchField.value;
    var elements = document.querySelectorAll('div.transaction_item');
    elements.forEach(function (elem) {
        var title = elem.children[0].innerHTML;
        if (title.toLowerCase().indexOf(sTearm.toLowerCase()) == -1) {
            elem.setAttribute("style", "display:none;");
        }
        else {
            elem.setAttribute("style", "display:block;");
        }
    });
});
