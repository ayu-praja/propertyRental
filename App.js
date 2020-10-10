/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PropertyType from './Components/PropertyType/PropertyType'


import {Provider} from 'react-redux';
import Store from './Components/Store/Store'
import PropertyList from './Components/PropertyList/PropertyList';
import Toast from 'react-native-toast-message';

// const Stores=Store();



const App =() => {
  return (
    <Provider store={Store}>
      <PropertyList />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
    
  );
};


export default App;
