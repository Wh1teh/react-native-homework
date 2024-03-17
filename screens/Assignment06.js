import { View, Text, StyleSheet } from "react-native"
import Position from '../components/Position'

const Assignment06 = () => {

    return (
        <View style={styles.container}>
            <Text>Current weather</Text>
            <Position />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Assignment06
