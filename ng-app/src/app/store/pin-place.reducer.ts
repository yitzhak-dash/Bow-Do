import { Reducer } from 'redux';
import { PinPlaceState } from './app-state';
import { TAG_PLACE, INIT_PLACE, ADD_NEW_PLACE_COMPLETED, FILTER_TAGS_COMPLETED } from './pin-place.actions';

export const pinPlace: Reducer<PinPlaceState> = (state: any, action: any): PinPlaceState => {
  switch (action.type) {
    case INIT_PLACE:
      state.place = {name: '', description: '', placedIn: '', tags: []};
      return state;
    case TAG_PLACE:
      state.place.tags = [...action.data.place.tags, action.data.tagName];
      return state;
    case ADD_NEW_PLACE_COMPLETED:
      return state;
    case FILTER_TAGS_COMPLETED:
      console.log(`FILTER_TAGS_COMPLETED ${action.data}`);
      state.filteredTags = [...action.data];
      return state;
    default:
      return state || {filteredTags: [], place: {name: '', description: '', placedIn: '', tags: []}};
  }
};
