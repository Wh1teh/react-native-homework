import { useState } from "react"
import { View, Text, Button } from "react-native"

import ScreenOrientation from 'expo-screen-orientation'

import { PaperProvider } from "react-native-paper"
import Login from "./Login"

const Assignment03 = () => {

    return (
        <PaperProvider>
            <Login />
        </PaperProvider>
    )
}

export default Assignment03