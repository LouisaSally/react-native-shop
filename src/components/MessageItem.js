// src/components/MessageItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageItem = ({ message }) => {
  return (
    <View style={styles.messageItem}>
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageItem: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    // Add shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Add elevation for Android
    elevation: 1,
  },
  messageText: {
    fontSize: 16,
  },
});

export default MessageItem;