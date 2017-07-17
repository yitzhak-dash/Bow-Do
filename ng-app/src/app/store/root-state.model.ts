export interface  IAppState {
  routes?: any,
  shoppingList: ShoppingItem[],
  pinPlace: PinPlaceState
}

export interface ShoppingItem {
  name: string,
  id: number
}

export interface PinPlaceState {
  place: Place,
  filteredTags: string[]
}

export interface Place {
  loc?: {
    type: string,
    coordinates: number[],
  },
  address?: {
    city: string,
    zip?: string,
    state?: string,
    country: string,
    lines?: string[],
  },
  placedIn?: string,
  name?: string,
  description?: string,
  tags?: string[],
}

export const PLACE_INIT_STATE: Place = {};

export const INIT_STATE: IAppState = {
  shoppingList: [],
  pinPlace: {
    place: PLACE_INIT_STATE,
    filteredTags: []
  }
};

