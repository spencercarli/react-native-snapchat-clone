import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#58FE58',
  },
});

const Stories = () => {
  return (
    <View style={styles.container}>
      <Text>Stories</Text>
    </View>
  );
};

export default Stories;
