const ArrayList = require('arraylist');
const Customer = require('../customer/customer');
const Order = require('../order/order');
var notifier = require('../notifier/notifier.js')
var customers = new ArrayList();
module.exports = reader;

function reader(path) {
    this.path = path;
}

reader.prototype.readData = function () {
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(this.path)
    });

    lineReader.on('line', function (line) {
        var data = line.split(',');
        notifier.emit('customerData', data);
    });

    lineReader.on('close', function () {
        notifier.emit('calculate', customers);
    });
}

notifier.on('customerData', function (data) {
    const id = data[0];
    var existinctCustomer = customers.findOne(function (customer) {
        return customer.id === id;
    });
    if (existinctCustomer) {
        customers.removeElement(existinctCustomer);
        var order = new Order(data[1], data[2]);
        existinctCustomer.addOrder(order);
        customers.add(existinctCustomer);
    } else {
        var customer = new Customer(data[0]);
        var order = new Order(data[1], data[2]);
        customer.addOrder(order);
        customers.add(customer);
    }
});

