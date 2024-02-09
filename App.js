import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { useState, useEffect, lazy, Suspense  } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import Assignment01 from './screens/Assignment01'
import Assignment02 from './screens/Assignment02'
import Assignment03 from './screens/Assignment03'
import Assignment04 from './screens/Assignment04'
import Assignment05 from './screens/Assignment05'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Assignment01" component={Assignment01} />
        <Stack.Screen name="Assignment02" component={Assignment02} />
        <Stack.Screen name="Assignment03" component={Assignment03} />
        <Stack.Screen name="Assignment04" component={Assignment04} />
        <Stack.Screen name="Assignment05" component={Assignment05} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
