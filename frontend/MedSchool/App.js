import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import MyStack from './Navigation';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// Screens
// import LoginScreen from './screens/log-in'; 
// import Register from './screens/register';
// import PasswordReset from './screens/forgot-password';
// import Home from './screens/landing-page';
// import Contacts from './screens/contacts';
// import Glossary from './screens/glossary';
// import Deadlines from './screens/deadlines';
// import ToDoList from './screens/todo-list';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

export default App;