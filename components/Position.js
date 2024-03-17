import * as Location from 'expo-location'
import Weather from './Weather'
import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

const Position = () => {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [message, setMessage] = useState('Retrieving location...')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            console.log(status)
            try {
                if (status !== 'granted') {
                    setMessage('Location not permitted.')
                } else {
                    const position = await Location.getCurrentPositionAsync({
                        accuracy: Location.Accuracy.High
                    })
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                    setMessage('Location retrieved')
                }
            } catch (error) {
                setMessage('Error retrieving location.')
                console.error(error)
            }
            setIsLoading(false)
        })()
    }, [])

    return (
        <View>
            <Text>{latitude}, {longitude}</Text>
            <Text>{message}</Text>
            {isLoading === false &&
                <Weather latitude={latitude} longitude={longitude} />
            }
        </View>
    )
}

export default Position