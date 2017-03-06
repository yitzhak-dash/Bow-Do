import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pin-place',
  templateUrl: 'pin-place.component.html'
})
export class PinPlaceComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  savePlace = (name: string, description: string) => {

  };

  createCategory(evt: any, input: any) {
    if (evt.which !== 13) return;// wait for ENTER
    // this.actions.addShoppingItem(input.value);
    input.value = '';
    // this.actions.findExcalibur(input.value);
  }

}
