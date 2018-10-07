
const ArrayList = require('arraylist');

module.exports = orders;

function orders() {
    this.ordersContainer = new ArrayList();
    this.months = new Set();
}

orders.prototype.calcMonth = function (date) {
    // TODO verify date
    return Math.floor(date / 100);
};

orders.prototype.calcMonthAmount = function (month) {
    var result = 0;
    for (var i = 0; i < this.ordersContainer.length; i++) {
        if (this.calcMonth(this.ordersContainer.get(i).getDate()) === month) {
            result += (this.ordersContainer.get(i).getAmount());
        }
    }
    return result;
};

orders.prototype.getMonths = function () {
    return Array.from(this.months).sort(function (a, b) {
        return a - b;
    });
};

orders.prototype.addOrder = function (order) {
    var month = this.calcMonth(order.getDate());
    if (!this.months.has(month)) {
        this.months.add(month);
    }
    this.ordersContainer.add(order);
};

orders.prototype.getOrdersByMonth = function (month) {
    var result= new ArrayList();
    for (var i = 0; i < this.ordersContainer.length; i++) {
        if (this.calcMonth(this.ordersContainer.get(i).getDate()) === month) {
            result.add(this.ordersContainer.get(i));
        }
    }
    return result.sortBy('date');
};

orders.prototype.getOrders = function () {
    return this.ordersContainer.sortBy('date');
};

