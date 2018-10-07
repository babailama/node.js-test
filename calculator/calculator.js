module.exports = calculator;

function calculator(prevMonthAmount, orders) {
    this.prevMonthAmount = prevMonthAmount;
    this.orders = orders;
}

calculator.prototype.calculate = function () {
    var bonus = 0;
    for (var i = 0; i < this.orders.length; i++) {
        var isThird = (i + 1) % 3;
        var order = this.orders.get(i);
        if (order.isGreater1000()) {
            bonus += 20;
        } else if (isThird === 0) {
            bonus += 10;
        } else if (this.prevMonthAmount > 2000 & order.isGreater100()) {
            bonus += 5;
        }
    }
    return bonus;
}

calculator.prototype.getDate = function () {
    var date = this.orders.get(0).getDate().toString();
    return date.substr(0,4) + '-' + date.substr(4,2) + '-01';
}



