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

