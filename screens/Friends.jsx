import React from 'react';
import {
  StyleSheet, View, Image, Platform,
} from 'react-native';
import {
  Input, KeyboardAvoidingView, Button, VStack, Text, Heading, Center, NativeBaseProvider,
} from 'native-base';

// ---- RESOURCES ----

function FriendsScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      h={{
        base: '400px',
        lg: 'auto',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Center>
        <VStack flex="1" justifyContent="flex-end" w="100%" maxW="300">
          <Heading mb="3">Forgot Password</Heading>
          <Text color="muted.400">
            Not to worry! Enter email address associated with your account and
            we’ll send a link to reset your password.
          </Text>
          <Input placeholder="Email Address" mt="10" mb="4" />
          <Button mb="4">Proceed</Button>
        </VStack>
      </Center>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
});

export default FriendsScreen;
