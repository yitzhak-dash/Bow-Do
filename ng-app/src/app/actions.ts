export const addShoppingItem = (name:any) => ({type: 'ADD_ITEM', data: name});
export const showAddItem = (name:any)  => ({type: 'SHOW_ADD_ITEM'});
export const hideAddItem = (name:any)  => ({type: 'HIDE_ADD_ITEM'});
export const receiveData = (data:any)  => ({type: 'RECEIVE_DATA', data: data});

export const fetchData = () => {
    // return dispatch => {
    //     fetch('/coordinates')
    //         .then(res => res.json())
    //         .then(json => receiveData(json));
    // }
};
