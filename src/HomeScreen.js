import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleUserPress = (userName) => {
    navigation.navigate('PostImage', { user: userName });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleUserPress('User 1')}
      >
        <Text style={styles.buttonText}>User 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleUserPress('User 2')}
      >
        <Text style={styles.buttonText}>User 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleUserPress('User 3')}
      >
        <Text style={styles.buttonText}>User 3</Text>
      </TouchableOpacity>
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
  button: {
    width: '80%',
    backgroundColor: '#007bff', // Blue color for buttons
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
