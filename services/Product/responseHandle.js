
module.exports = data => {
    const {
        id,
        sold_quantity,
        condition,
        shipping:{
            free_shipping
        },
        price: amount,
        currency_id: currency,
        title,
        pictures,
    } = data
    
    
    return {
        autor: {
            name: '',
            lastname: ''
        },
        item: {
            id,
            title,
            condition,
            sold_quantity,
            free_shipping,
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