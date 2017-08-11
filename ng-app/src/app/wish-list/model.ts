export interface IWishItem {
  id?: number;
  name: string;
  created?: Date;
}

export interface IWishListState {
  isLoading: boolean;
  wishList: IWishItem[];
}

export const WISH_LIST_INIT_STATE: IWishListState = {
  isLoading: false,
  wishList: []
};
