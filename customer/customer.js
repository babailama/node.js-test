const ArrayList = require('arraylist');
const Orders = require('../orders/orders');
const Calculator = require('../calculator/calculator');

module.exports = customer;

function customer(id) {
    this.id = id;
    this.orders = new Orders();
}

customer.prototype.addOrder = function(order) {
    this.orders.addOrder(order);
}
customer.prototype.getOrders = function() {
    return this.orders;
}

customer.prototype.getId = function() {
    return this.id;
}

customer.prototype.calculate = function () {
    var months = this.getOrders().getMonths();
    var amount = 0;
    for (var j = 0; j < months.length; j++) {
        var month = months[j];
        var orders = this.getOrders().getOrdersByMonth(month);
        var calculator = new Calculator(amount, orders);
        console.log(this.getId() + ',' + calculator.getDate() + ',' + calculator.calculate());
        amount = this.getOrders().calcMonthAmount(month);
    }
}