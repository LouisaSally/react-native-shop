import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
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
});

export default CategoryIcon;