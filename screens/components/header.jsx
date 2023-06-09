import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Menu, Pressable, HamburgerIcon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import logoFlat from '../../assets/logo-flat.png';

function LogoTitle() {
  const navigation = useNavigation();
  const handleImagePress = () => navigation.navigate('Home');
  return (
    <Image style={logo} source={logoFlat} onPress={handleImagePress}/>
  );
}

const logo = StyleSheet.create({
  height: 40,
  resizeMode: 'center',
  width: 100,
});

function Options() {
  const navigation = useNavigation();
  const handleLogOut = () => navigation.navigate('Login');

  return (
    <Menu trigger={(triggerProps) => (
      <Pressable {...triggerProps}>
        <HamburgerIcon />
      </Pressable>
    )}
    >
      <Menu.Item> Profile </Menu.Item>
      <Menu.Item> Setting </Menu.Item>
      <Menu.Item onPress={handleLogOut}> Log Out </Menu.Item>
    </Menu>
  );
}

export { Options, LogoTitle };
