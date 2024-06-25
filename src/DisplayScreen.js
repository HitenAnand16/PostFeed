// DisplayScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DisplayScreen = ({ navigation }) => {
    const [user1Text, setUser1Text] = useState('');
    const [user2Text, setUser2Text] = useState('');
    const [user3Text, setUser3Text] = useState('');

    useEffect(() => {
        const loadText = async () => {
            try {
                const text1 = await AsyncStorage.getItem('user1Text');
                const text2 = await AsyncStorage.getItem('user2Text');
                const text3 = await AsyncStorage.getItem('user3Text');
                if (text1 !== null) setUser1Text(text1);
                if (text2 !== null) setUser2Text(text2);
                if (text3 !== null) setUser3Text(text3);
            } catch (error) {
                console.error('Error loading text:', error);
            }
        };
        loadText();
    }, []);

    const handleClearInputs = async () => {
        try {
            await AsyncStorage.removeItem('user1Text');
            await AsyncStorage.removeItem('user2Text');
            await AsyncStorage.removeItem('user3Text');
            setUser1Text('');
            setUser2Text('');
            setUser3Text('');
        } catch (error) {
            console.error('Error clearing inputs:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>User 1: {user1Text}</Text>
            <Text style={styles.text}>User 2: {user2Text}</Text>
            <Text style={styles.text}>User 3: {user3Text}</Text>
            <Button title="Clear Inputs" onPress={handleClearInputs} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Light gray background
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default DisplayScreen;
