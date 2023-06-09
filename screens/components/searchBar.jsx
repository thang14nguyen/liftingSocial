import React from 'react';
import {
  VStack, Input, Icon, NativeBaseProvider, Center,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

function SearchBar({ ...props }) {
  return (
    <Input
      placeholder="Search"
      style={searchBar.search}
      variant="filled"
      py="1"
      props
      InputLeftElement={
        <Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />
      }
    />
  );
}

const searchBar = StyleSheet.create({
  search: {
    borderRadius: 10,
  },
});

export default SearchBar;
