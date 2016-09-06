export const shoppingItems = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            let newShoppingItem = Object.assign({}, action.data, {id: +new Date});
            return state.concat([newShoppingItem]);
        default:
            return state || [];
    }

};
