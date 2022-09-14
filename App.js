import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from "react-native-splash-screen";

import reduxStore from './redux/store';
import AppNavigator from './Navigation';

//<---------------------------------------------------------App------------------------------------------------------------------------>

export default function App() {

  const { store, persistor } = reduxStore();

  //Hide Splash screen on app load.
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 650);

  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

const mapToState = state => ({
  name: state.name,
  token: state.token,
  loginState: state.loginState
});

connect(mapToState)(App);

const styles = StyleSheet.create({
  buttonImageIconStyle: {
    padding: 10,
    marginRight: 20,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});