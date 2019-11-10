import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import TodoList from './components/TodoList';

function App() {
  return (
    <SafeAreaView style={styles.container}>
     <TodoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
