
var notifier = require('./notifier/notifier.js')
const Reader = require('./reader/reader');
var reader = new Reader(process.argv[2]);
reader.readData();
notifier.on('calculate', function (customers) {
    for (var i = 0; i < customers.length; i++) {
        customers.get(i).calculate();
    }
});




