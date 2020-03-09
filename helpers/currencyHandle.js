var currencyFormatter = require('currency-formatter');

const currencyFormated = (amount)=> currencyFormatter.format(amount, { 
    locale: 'es-AR',
    symbol: ''
}) 

module.exports.getDecimal = (amount)=> {
    const valueFormat = currencyFormated(amount).split(",")
    if(valueFormat.length >=2) {
        return parseInt(valueFormat.pop())
    }
    return null
}
module.exports.getAmount = (amount)=> {
    const valueFormat = currencyFormated(amount).split(",")
    return parseFloat(valueFormat.shift())
}