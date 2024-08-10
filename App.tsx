import {StyleSheet} from 'react-native'
// Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Screens
import HomeScreen from './src/screens/Home'
import DetailsScreen from './src/screens/Details'
import PaymentScreen from './src/screens/Payment'

// Tab bottom navigation
import TabBottomNavigator from './src/navigators/TabBottomNavigator'

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
