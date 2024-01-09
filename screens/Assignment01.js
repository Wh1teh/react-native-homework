import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState, useEffect } from 'react';

const Assignment01 = () => {
  const [age, setAge] = useState('')
  const [heartRate, setHeartRate] = useState(' - ')

  useEffect(() => {
    calculate(age)
  }, [age])

  const calculate = (age) => {
    const ageFormatted = age.replace(',', '.')
    const lower = (220 - ageFormatted) * 0.65
    const upper = (220 - ageFormatted) * 0.85
    result = `${Math.round(lower)} - ${Math.round(upper)}`

    setHeartRate(result)
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput keyboardType='decimal-pad' style={styles.inputField}
        value={age} onChangeText={text => setAge(text)} />

      <Text>HR</Text>
      <Text>{heartRate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputField: {
      backgroundColor: '#eee',
      padding: 4,
      marginBottom: 16,
      minWidth: 64,
    },
  });

export default Assignment01