// HomeScreen.js
import React from 'react';
import { View, ScrollView, Button, Text, Pressable } from 'react-native';
import { tests } from '../assignments';

import globalStyles from './globalStyles'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <ScrollView>
                <Text style={globalStyles.h1}>Helloust</Text>
                {tests.map((test) => (
                    <Pressable key={test.name} style={globalStyles.button}
                        onPress={() => navigation.navigate(test.name)}>
                        <Text style={globalStyles.buttonText}>{test.name}</Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
