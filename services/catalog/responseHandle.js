
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
        shipping:{free_shipping},
        installments:{
            currency_id:currency,
            amount
        },
        price:decimal
    }) => ({
        id,
        title,
        price: {
            currency,
            decimal,
            amount
        },
        picture, 
        condition,
        free_shipping
    }))

    const autor = {
        name: 'sabrina',
        lastname: 'dias'
    }
    return {items, categories, autor, ...others};
};