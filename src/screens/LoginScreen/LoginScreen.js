import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [animation] = useState(new Animated.Value(0));
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const logoHeight = screenHeight * 0.4;
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        Alert.alert('Login Successful', 'Welcome back!');
        navigation.navigate('Bottomtabnavigator'); 
      } else {
        // Failed login
        Alert.alert('Login Failed', 'Please Enter correct username or password.');
        animateButton();
      }
    }
    catch {
      console.error('Error storing credentials:', error);
    }
  };
  const storeCredentials = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
    } catch (error) {
      console.error('Error storing credentials:', error);
    }
  };

  const animateButton = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const buttonInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#EDF2F7', '#2ecc71'],
  });

  const animatedStyle = {
    backgroundColor: buttonInterpolation,
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.goauto.com.au/assets/contents/d23f46d3569f95df41c832b03c279b39bee82a3c.jpg' }} // Use your transport image URL here
        style={[styles.logo, { height: logoHeight, width: screenWidth }]}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => {
          console.log('Forgot password pressed');
        }}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.buttonContainer, animatedStyle]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            storeCredentials();
            handleLogin();
            animateButton();
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
      <Text style={styles.orText}>OR</Text>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  logo: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#2ecc71',
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    width: '48%',
    padding: 15,
    backgroundColor: '#3b5998', // Facebook Blue color
    borderRadius: 10,
  },
  socialButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginScreen;
