import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'shopping-list',
  template: `<div>
            <h2>Shopping List</h2>
            <ul>
                    <li  *ngFor="let item of shoppingList">
                        <input type="checkbox" value="completed"/>{{item.name}}
                    </li>
            </ul>
           <input (keypress)="createItem($event)" />
        </div>`
})
export class ShoppingListComponent implements OnInit {

  shoppingList: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  createItem(evt: any) {
    if (evt.which !== 13) return;// wait for ENTER
    // var name = ReactDOM.findDOMNode(this.refs.add).value;
    // this.props.addShoppingItem(name);
    // this.props.hideAddItem();
    // this.props.showAddItem();
  }

}
