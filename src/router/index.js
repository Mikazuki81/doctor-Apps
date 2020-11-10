import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
  GetStarted,
  Splash,
  Login,
  Register,
  UploadPhoto,
  Doctor,
  Hospitals,
  Messages
} from '../pages'
import {BottomNavigator} from '../components'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="mainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mainApp"
        component={mainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

const mainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Hospitals" component={Hospitals} />
    </Tab.Navigator>
  )
}

export default Router
