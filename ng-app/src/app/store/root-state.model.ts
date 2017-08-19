import { WISH_LIST_INIT_STATE, IWishListState } from '../wish-list/model';
import { IPlace, PIN_PLACE_INIT_STATE } from '../pin-place/model';
import { CURRENT_LOCATION_INIT_STATE, ICurrentLocation } from '../common/location.model';

export interface IAppState {
  router?: string;
  wishes: IWishListState;
  pinPlace: {
    loading: boolean,
    addedPlace: IPlace
  };
  location: ICurrentLocation
}


export const INIT_STATE: IAppState = {
  wishes: WISH_LIST_INIT_STATE,
  pinPlace: PIN_PLACE_INIT_STATE,
  location: CURRENT_LOCATION_INIT_STATE
};

