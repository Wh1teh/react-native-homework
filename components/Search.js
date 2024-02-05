import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const Search = ({executeSearch}) => {
    const [search, setSearch] = useState('')

    return (
        <View style={styles.searchBox}>
            <TextInput
                onChangeText={text => setSearch(text)}
                placeholder='Search...'
                returnKeyType='search'
                onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 1,
        padding: 5,
    }
})

export default Search