import Routes from './src/routes'
import React from 'react';
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#3B5998"/>
    <Routes />
    </>
  );
}

