const getAmount = (val)=>{
    const valueFormat = val.toString().slice(0, -2)
    if(valueFormat.length>=3) {
        return parseInt(valueFormat)
    }
    return val
}

const getDecimal = (val)=>{
    const valString = val.toString();
    const valueFormat = valString.slice(valString.length-2, valString.length)
    if(valueFormat.length===2) {
        return parseInt(valueFormat)
    }
    return val
}
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