import {StyleSheet} from 'react-native'
// Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Screens
import DetailsScreen from './src/screens/Details'
import PaymentScreen from './src/screens/Payment'

// Tab bottom navigation
import TabBottomNavigator from './src/navigators/TabBottomNavigator'
import OrderHistoryScreen from './src/screens/OrderHistory'

// Config Navigator && Stack Screen
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tab" component={TabBottomNavigator} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
