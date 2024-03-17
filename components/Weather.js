import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WEATHER_API_URL, WEATHER_API_KEY, WEATHER_API_ICONS } from '@env'

const api = {
    url: WEATHER_API_URL,
    key: WEATHER_API_KEY,
    icons: WEATHER_API_ICONS
}

const Weather = (props) => {
    const [temp, setTemp] = useState(0)
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        const url = api.url +
            'lat=' + props.latitude +
            '&lon=' + props.longitude +
            '&units=metric' +
            '&appid=' + api.key

        fetch(url)
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                setTemp(json.main.temp)
                setDescription(json.weather[0].description)
                setIcon(api.icons + json.weather[0].icon + '@2x.png')
            })
            .catch((error) => {
                setDescription('Error retrieving weather information.')
                console.error(error)
            })
    }, [])

    return (
        <View>
            <Text>{temp}</Text>
            {icon &&
                <Image source={{ uri: icon }} style={{width: 100, height: 100}} />
            }
            <Text>{description}</Text>
        </View>
    )
}

export default Weather
