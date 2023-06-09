import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Menu, Pressable, HamburgerIcon, Box, Stack, Heading, Text, HStack,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

function StatsBoard({
  exercise, weight, date, reps, ...props
}) {
  const navigation = useNavigation();
  const handleLogOut = () => navigation.navigate('Login');

  return (
    <Box
      rounded="lg"
      overflow="hidden"
      background="white"
      borderColor="coolGray.200"
      borderWidth="1"
      justifyContent="center"
    >
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {exercise || 'undefined'}
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="500"
            ml="-0.5"
            mt="-2"
          >
            {`${weight || 0} lbs`}
          </Text>
          <Text
            fontSize="sm"
            fontWeight="500"
            ml="-0.5"
            mt="-2"
          >
            {`${reps || 0} reps`}
          </Text>
          <Text
            fontSize="xs"
            color="coolGray.600"
            fontWeight="400"
            mt="-2"
          >
            {date || 'undefined'}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default StatsBoard;
