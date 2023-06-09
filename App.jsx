/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NativeBaseProvider,
} from 'native-base';

// ---- SCREENS ----
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

// ---- COMPONENTS ----
import { Options, LogoTitle } from './screens/components/header';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerBackVisible: false,
              headerTitle: () => <LogoTitle />,
              headerRight: () => <Options />,
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
