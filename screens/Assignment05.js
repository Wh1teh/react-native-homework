import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Map from '../components/Map'
// import Constants from 'expo-constants'

const Assignment05 = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Map />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
    }
})

export default Assignment05