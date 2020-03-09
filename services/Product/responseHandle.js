const getDecimal  =  require('../../helpers/currencyHandle').getDecimal
const getAmount  =  require('../../helpers/currencyHandle').getAmount

module.exports = data => {
    const {
        id,
        sold_quantity,
        condition,
        price: amount,
        currency_id: currency,
        title,
        pictures,
    } = data
    
    

    return {
        autor: {
            name: 'Hello',
            lastname: 'World'
        },
        item: {
            id,
            title,
            condition,
            sold_quantity,
            price : {
                amount: getAmount(amount),
                decimal: getDecimal(amount),
                currency
            },
            pictures,
            picture: (pictures[0]||[]).url
        }
    }
};