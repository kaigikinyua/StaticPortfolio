var Transaction = /** @class */ (function () {
    function Transaction(title, desc, amount) {
        this.title = title;
        this.desc = desc;
        this.amount = amount;
    }
    Transaction.prototype.component = function () {
        var container = document.createElement('div');
        container.dataset.open = '0';
        container.classList.add('transaction_item');
        container.innerHTML = "<h4>" + this.title + "</h4>\n                        <div class='desc'>\n                            <span class='desc'>" + this.desc + "</span>\n                        </div>";
        container.addEventListener('click', function (e) {
            var open = container.getAttribute('data-open');
            var psudo = window.getComputedStyle(container.children[0], ':after');
            if (open == '0') {
                container.children[1].setAttribute('style', 'display:block;');
                container.setAttribute('data-open', '1');
                psudo.content = '';
            }
            else {
                container.children[1].setAttribute('style', 'display:none;');
                container.setAttribute('data-open', '0');
                psudo.content = '';
            }
        });
        return container;
    };
    return Transaction;
}());
export { Transaction };
