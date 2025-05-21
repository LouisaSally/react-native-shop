import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import MessageItem from '../components/MessageItem';

const MessagesScreen = ({ route, navigation }) => {
  const { category } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: category.name,
      headerStyle: {
        backgroundColor: category.color,
      },
      headerTintColor: '#fff',
    });
  }, [navigation, category]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={category.messages}
        renderItem={({ item }) => <MessageItem message={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
      />
      
      <TouchableOpacity 
        style={[styles.backButton, { backgroundColor: category.color }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Categories</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  messagesList: {
    padding: 15,
  },
  backButton: {
    margin: 15,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    // Add shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Add elevation for Android
    elevation: 3,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MessagesScreen;