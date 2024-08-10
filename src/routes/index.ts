import { ParamListBase, RouteProp } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import CartScreen from "../screens/Cart";
import DetailsScreen from "../screens/Details";
import FavoritesScreen from "../screens/Favorites";
import OrderHistoryScreen from "../screens/OrderHistory";
import PaymentScreen from "../screens/Payment";
import { RouteMapper } from "../types/route.type";

const AppRoutes: RouteMapper = {
  HomeScreen: {
    name: 'Home',
    component: HomeScreen,

  },
  CartScreen: {
    name: 'Cart',
    component: CartScreen,
  },
  DetailsScreen: {
    name: 'Details',
    component: DetailsScreen,
  },
  FavoritesScreen: {
    name: 'Favorites',
    component: FavoritesScreen,
  },
  OrderHistoryScreen: {
    name: 'Order',
    component: OrderHistoryScreen,
  },
  PaymentScreen: {
    name: 'Payment',
    component: PaymentScreen,
  },
  // Add more routes as needed...
};

export default AppRoutes

