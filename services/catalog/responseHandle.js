const getDecimal  =  require('../../helpers/currencyHandle').getDecimal
const getAmount  =  require('../../helpers/currencyHandle').getAmount

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
            decimal: getDecimal(amount),
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