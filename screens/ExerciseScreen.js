import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExerciseScreen(props) {
  const { type, exerciseNumber, instruction, task, answer, onPressCheck } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>
      <Text style={styles.subTitle}>{`Exercise ${exerciseNumber}`}</Text>
      <Text style={styles.instruction}>{instruction}</Text>
      <View style={styles.taskContainer}>
        <Image source={{ uri: task.image }} style={styles.taskImage} />
        <Text style={styles.taskText}>{task.text}</Text>
      </View>
      <TouchableOpacity style={styles.checkButton} onPress={onPressCheck}>
        <Text style={styles.checkButtonText}>Check Answer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 16,
  },
  taskContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  taskImage: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
  taskText: {
    fontSize: 16,
    textAlign: 'center',
  },
  checkButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
