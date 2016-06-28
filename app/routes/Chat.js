import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D882D',
  },
});

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;
