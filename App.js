import React from 'react';
import Navigation from './src/core/navigation/Navigation';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/core/store/store';


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
