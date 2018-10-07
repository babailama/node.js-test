
module.exports = order;

function order(date, amount) {
    this.date = parseInt(date.replace(/-/g,''), 10);
    this.amount = parseInt(amount)
}

order.prototype.getDate = function()  {
    return this.date;
}

order.prototype.getAmount = function()  {
    return this.amount;
}

order.prototype.isGreater100 = function()  {
    return this.amount > 100;
}

order.prototype.isGreater1000 = function()  {
    return this.amount > 1000;
}