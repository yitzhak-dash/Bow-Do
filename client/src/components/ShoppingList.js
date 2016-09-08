/**
 * Created by Yitzh on 9/6/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {addShoppingItem, showAddItem, hideAddItem} from '../actions'

const mapStateToProps = ({shoppingList, addingShoppingItem}) => ({
    shoppingList,
    addingShoppingItem
});

const mapDispatchToProps = (dispatch) =>({
    addShoppingItem: (name) => dispatch(addShoppingItem(name)), // using action creator
    showAddItem: () => dispatch(showAddItem()),
    hideAddItem: () => dispatch(hideAddItem())
});

const ShoppingList = React.createClass({
    componentDidMount(){
        this.props.showAddItem();
    },
    componentDidUpdate(){
        var el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    },
    render(){
        let props = this.props;
        return (<div>
            <h2>Shopping List</h2>
            <ul>
                {props.shoppingList.map((item, i)=>
                    <li key={i}>
                        <input key={i} type="checkbox" ref="status" value="completed"/>{item.name}
                    </li>
                )}
            </ul>
            {props.addingShoppingItem && <input ref="add" onKeyPress={this.createItem}/>}
        </div>)
    },
    createItem(evt){
        if (evt.which !== 13) return;// wait for ENTER
        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addShoppingItem(name);
        this.props.hideAddItem();
        this.props.showAddItem();

        //ReactDOM.findDOMNode(this.refs.add).value = '';
    }
});

export default  connect(mapStateToProps, mapDispatchToProps)(ShoppingList);