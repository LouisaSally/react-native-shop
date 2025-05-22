import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView,
  StatusBar,
  Modal
} from 'react-native';

// Mock data for each category
const CATEGORIES = [
  {
    id: 'you',
    name: 'You',
    color: '#FF5E3A',
    messages: [
      { id: '1', text: 'Personal profile information' },
      { id: '2', text: 'Your recent activities' },
      { id: '3', text: 'Account settings' },
      { id: '4', text: 'Notification preferences' },
      { id: '5', text: 'Privacy settings' }
    ]
  },
  {
    id: 'home',
    name: 'Home',
    color: '#4CD964',
    messages: [
      { id: '1', text: 'Living room furniture' },
      { id: '2', text: 'Kitchen appliances' },
      { id: '3', text: 'Home decor items' },
      { id: '4', text: 'Bedroom essentials' },
      { id: '5', text: 'Garden accessories' }
    ]
  },
  {
    id: 'love',
    name: 'Love',
    color: '#2196F3',
    messages: [
      { id: '1', text: 'Gift ideas for partner' },
      { id: '2', text: 'Relationship advice' },
      { id: '3', text: 'Date night suggestions' },
      { id: '4', text: 'Anniversary planning' },
      { id: '5', text: 'Romantic getaways' }
    ]
  },
  {
    id: 'family',
    name: 'Family',
    color: '#9C27B0',
    messages: [
      { id: '1', text: 'Family events calendar' },
      { id: '2', text: 'Shared shopping list' },
      { id: '3', text: 'Family photos' },
      { id: '4', text: 'Household chores' },
      { id: '5', text: 'Family trip ideas' }
    ]
  },
  {
    id: 'friends',
    name: 'Friends',
    color: '#FF4081',
    messages: [
      { id: '1', text: 'Friends birthday reminders' },
      { id: '2', text: 'Group chat updates' },
      { id: '3', text: 'Hangout plans' },
      { id: '4', text: 'Game night ideas' },
      { id: '5', text: 'Weekend activities' }
    ]
  },
  {
    id: 'school',
    name: 'School',
    color: '#00BCD4',
    messages: [
      { id: '1', text: 'Homework assignments' },
      { id: '2', text: 'Exam schedule' },
      { id: '3', text: 'Study material' },
      { id: '4', text: 'Project deadlines' },
      { id: '5', text: 'Class notes' }
    ]
  },
];

const CategoryIcon = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.categoryIcon, { backgroundColor: category.color }]}
      onPress={() => onPress(category)}
    >
      <Text style={styles.categoryIconText}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const MessageItem = ({ message }) => {
  return (
    <View style={styles.messageItem}>
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <Text style={styles.title}>React Native Shop</Text>
      
      <View style={styles.categoriesContainer}>
        {CATEGORIES.map((category) => (
          <CategoryIcon 
            key={category.id} 
            category={category} 
            onPress={handleCategoryPress} 
          />
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedCategory && (
              <>
                <View style={[styles.modalHeader, { backgroundColor: selectedCategory.color }]}>
                  <Text style={styles.modalHeaderText}>{selectedCategory.name}</Text>
                </View>
                <FlatList
                  data={selectedCategory.messages}
                  renderItem={({ item }) => <MessageItem message={item} />}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={styles.messagesList}
                />
              </>
            )}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#333',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  categoryIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    // Add shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Add elevation for Android
    elevation: 3,
  },
  categoryIconText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    maxHeight: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    // Add shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // Add elevation for Android
    elevation: 5,
  },
  modalHeader: {
    padding: 15,
    alignItems: 'center',
  },
  modalHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messagesList: {
    padding: 15,
  },
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
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#EEEEEE',
    padding: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default App;