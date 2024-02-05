import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { DATA } from '../data/FlatlistData.js'
import globalStyles from "./globalStyles.js"
import Search from "../components/Search.js";

const Assignment04 = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(DATA)
    }, [])

    const executeSearch = (search) => {
        const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
        setItems(searchArray)
    }

    const renderItem = ({ item }) => (
        <Text>
            {`${item.lastname}, ${item.firstname}`}
        </Text>
    )

    return (
        <SafeAreaView style={globalStyles.container}>
            <Search executeSearch={executeSearch} />
            <FlatList
                data={items}
                renderItem={renderItem}
            >

            </FlatList>
        </SafeAreaView>
    )
}

export default Assignment04