import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from "native-base";


// ---- RESOURCES ----
import logoStack from '../assets/logo-stack.png';

function LoginScreen({ navigation }) {
  const goTo = (location) => navigation.navigate(location);

  const handleGuestLogin = () => {
    //implement guest login
    goTo('Home');
  };

  const handleGoogleLogin = () => {
    //implement guest login

    goTo('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={logoStack} style={styles.image}/>
      <Button style={styles.button} onPress={handleGuestLogin}> Guest </Button>
      <Button style={styles.button} onPress={handleGoogleLogin}> Google Sign In </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: '50%',
    margin: 10,
  },

  image: {
    height: '50%',
    resizeMode: 'contain',
  },
});

export default LoginScreen;
