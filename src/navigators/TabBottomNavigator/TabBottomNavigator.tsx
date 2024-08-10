import React from 'react'
import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AppRoutes from '../../routes'
import IconMoonCustom from '../../components/CustomIcon'
import {styles} from './style'
import {BlurView} from '@react-native-community/blur'
import {COLORS} from '../../theme/theme'

const Tab = createBottomTabNavigator()

const TabBottomNavigator = () => {
  const {HomeScreen, FavoritesScreen, CartScreen, OrderHistoryScreen} = AppRoutes

  const screenTabOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBar,
    tabBarBackground: () => (
      <BlurView overlayColor="" blurAmount={14} style={styles.blurView}></BlurView>
    ),
  }

  return (
    <Tab.Navigator screenOptions={screenTabOptions}>
      <Tab.Screen
        name={HomeScreen.name}
        component={HomeScreen.component}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <IconMoonCustom
              name="home"
              size={24}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CartScreen.name}
        component={CartScreen.component}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <IconMoonCustom
              name="cart"
              size={24}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name={FavoritesScreen.name}
        component={FavoritesScreen.component}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <IconMoonCustom
              name="like"
              size={24}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name={OrderHistoryScreen.name}
        component={OrderHistoryScreen.component}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <IconMoonCustom
              name="bell"
              size={24}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabBottomNavigator
