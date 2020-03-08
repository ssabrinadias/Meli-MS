
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
                amount,
                decimal: amount,
                currency
            },
            pictures,
            picture: (pictures[0]||[]).url
        }
    }
};