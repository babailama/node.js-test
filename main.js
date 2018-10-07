
var notifier = require('./notifier/notifier.js')
const Reader = require('./reader/reader');
var reader = new Reader('input.csv');
reader.readData();
notifier.on('calculate', function (customers) {
    for (var i = 0; i < customers.length; i++) {
        console.log(customers.get(i).getOrders());
        customers.get(i).calculate();
    }
});




