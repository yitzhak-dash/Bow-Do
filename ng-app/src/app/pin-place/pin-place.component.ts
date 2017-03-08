import { Component, OnInit, ElementRef } from '@angular/core';
//
import { Observable } from 'rxjs/Observable';
import { select, NgRedux } from 'ng2-redux';
//
import { PinPlaceActions } from '../store/pin-place.actions';
import { Place } from '../models/place.model';
import { AppState } from '../store/app-state';

// TODO: remove submit by enter
// TODO: load tags from the server
// TODO: clear auto-complete input.
// TODO: clear auto-complete list after cleaning input

@Component({
  moduleId: module.id,
  selector: 'pin-place',
  templateUrl: 'pin-place.component.html'
})
export class PinPlaceComponent implements OnInit {

  @select((state: AppState) => state.pinPlace.filteredTags) readonly filteredTags$: Observable<string[]>;
  model: Place;

  constructor(private actions: PinPlaceActions, private redux: NgRedux<AppState>) {

    this.loadFromState(redux.getState().pinPlace.place);

    redux.subscribe(() => {
      this.loadFromState(redux.getState().pinPlace.place);
    });
  }

  ngOnInit() {
    this.actions.initPlace();
  }

  tagPlace = (tagElement: any, event: any) => {
    if (event && event.which !== 13) {
      // wait for ENTER
      return;
    }

    this.actions.tagPlace({place: this.model, tagName: tagElement.value});
    tagElement.value = '';
  };

  createTag = () => {
    // TODO: implement me
  };

  pinPlace = () => {
    this.actions.addNewPlace(this.model);
  };

  filterTags(term: string) {
    if (term) {
      this.actions.filterTags(term);
    }
  }

  private loadFromState(model: Place) {
    this.model = model;
  }
}
