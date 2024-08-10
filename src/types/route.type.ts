import { ParamListBase, RouteProp } from "@react-navigation/native";


export type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList
> =
  | React.ComponentType<{
    route: RouteProp<ParamList, RouteName>;
    navigation: any;
  }>
  | React.ComponentType<{}>;

export type RouteConfigApp = {
  name: string;
  component: ScreenComponentType<ParamListBase, string>;
};

export type RouteMapper = {
  HomeScreen: RouteConfigApp;
  CartScreen: RouteConfigApp;
  DetailsScreen: RouteConfigApp;
  FavoritesScreen: RouteConfigApp;
  OrderHistoryScreen: RouteConfigApp;
  PaymentScreen: RouteConfigApp;
};