/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ---- SCREENS ----
import YouScreen from './You';
import FriendsScreen from './Friends';
import WorldwideScreen from './Worldwide';

// ---- COMPONENTS ----

// ---- RESOURCES ----

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="You" component={YouScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Worldwide" component={WorldwideScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  banner: {
    display: 'flex',
    height: '25%',
  },
  image: {
    height: '10%',
  },
});

export default HomeScreen;
