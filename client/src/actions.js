export const addShoppingItem = name => ({type: 'ADD_ITEM', data: name});
export const showAddItem = name => ({type: 'SHOW_ADD_ITEM'});
export const hideAddItem = name => ({type: 'HIDE_ADD_ITEM'});
export const receiveData = data => ({type: 'RECEIVE_DATA', data: data});

export const fetchData = () => {
    return dispatch => {
        fetch('/coordinates')
            .then(res => res.json())
            .then(json => receiveData(json));
    }
};