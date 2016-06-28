import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Me = () => {
  return (
    <View style={styles.container}>
      <Text>Me</Text>
    </View>
  );
};

export default Me;
