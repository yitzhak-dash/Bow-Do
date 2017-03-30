import { Place } from '../models/place.model';
export interface AppState {
  shoppingList: ShoppingItem[],
  pinPlace: PinPlaceState
}

export interface ShoppingItem {
  name: string,
  id: number
}

export interface PinPlaceState {
  place:Place,
  filteredTags: string[]
}
