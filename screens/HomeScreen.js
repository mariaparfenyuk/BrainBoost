import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleSelectTask = (taskType) => {
    navigation.navigate('Task', { taskType });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите тип задания</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleSelectTask('memory')}>
        <Text style={styles.buttonText}>Тренировка памяти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleSelectTask('logic')}>
        <Text style={styles.buttonText}>Тренировка логики</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#4286f4',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
