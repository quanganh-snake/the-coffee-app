export type InitialStateZustand = {
  CoffeeList: any[]
  BeanList: any[],
  CartPrice: number,
  FavoritesList: any[],
  CartList: any[],
  OrderHistoryList: any[],
  addToCart: (cartItem: any) => void,
  removeFromCart: (cartItem: any) => void,
  calculateCartPrice: () => void,
  addToFavoriteList: (type: string, id: string) => void,
  deleteFavoriteList: (type: string, id: string) => void,
  incrementCartItemQuantity: (id: string, size: string) => void
  decrementCartItemQuantity: (id: string, size: string) => void
  addToOrderHistoryListFromCart: () => void
}