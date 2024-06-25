import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const PostImageScreen = ({ route, navigation }) => {
  const { user } = route.params;

  const [text, setText] = useState('');
  const [permissionGranted, setPermissionGranted] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermissionGranted(status === 'granted');
    })();
  }, []);

  const handleTextChange = (value) => {
    setText(value);
  };

  const handlePostText = async () => {
    try {
      if (user === 'User 1') {
        await AsyncStorage.setItem('user1Text', text);
      } else if (user === 'User 2') {
        await AsyncStorage.setItem('user2Text', text);
      } else if (user === 'User 3') {
        await AsyncStorage.setItem('user3Text', text);
      }
      navigation.navigate('Display');
    } catch (error) {
      console.error('Error saving text:', error);
    }
  };
  
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {!permissionGranted && (
            <Text style={styles.permissionText}>
              Please grant permission to access the photo library to continue.
            </Text>
          )}

          {permissionGranted && (
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Write something..."
                onChangeText={handleTextChange}
                value={text}
                multiline
              />
              <TouchableOpacity style={styles.button} onPress={handlePostText}>
                <Text style={styles.buttonText}>Post Text</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray background
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {
    fontSize: 16,
    color: '#777', // Gray color for text
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  textInput: {
    width:350,
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc', // Light gray border
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff', // Blue color for button
    marginTop:10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PostImageScreen;
