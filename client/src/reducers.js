export const shoppingList = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            let newShoppingItem = {name: action.data, id: +new Date};
            return state.concat([newShoppingItem]);
        default:
            return state || [];
    }
};

export const addingShoppingItem = (state, action)=> {
    switch (action.type) {
        case "SHOW_ADD_ITEM" :
            return true;
        case "HIDE_ADD_ITEM":
            return false;
        default:
            return !(!!state); // (true -> true, false -> false, undefined -> false)
    }
};
