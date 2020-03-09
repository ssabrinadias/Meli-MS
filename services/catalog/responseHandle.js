const getAmount = (val)=>{
    const valueFormat = val.toString().slice(0, -2)
    if(valueFormat.length>=3) {
        return parseInt(valueFormat)
    }
    return val
}
module.exports = data => {
    const {results, filters:[filter], ...others} = data;

    const [categoriesContent] = filter.values
    const categories = (categoriesContent.path_from_root ||[])
    .map(({name}) => name )

    const items =  results.map(({
        id,
        title,
        thumbnail:picture,
        condition,
        price:amount,
        shipping:{free_shipping},
        installments:{
            currency_id:currency
        },
        seller_address:{
            state: {
                name,
                id:idState
            }
        },
        price:decimal
    }) => ({
        id,
        title,
        price: {
            currency,
            decimal: amount,
            amount: getAmount(amount)
        },
        picture, 
        condition,
        free_shipping,
        state:{
            name,
            idState
        }
    }))

    const autor = {
        name: '',
        lastname: ''
    }
    return {items, categories, autor, ...others};
};