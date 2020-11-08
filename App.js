import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {HomeScreen, TestApiScreen} from './src/pages'

const App = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Hallo Dunia</Text>
      <HomeScreen />

      <View style={styles.kotak} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f2f3e1',
    color: '#ff90ff',
    paddingHorizontal: 30
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    borderLeftWidth: 3,
    borderLeftColor: 'gray'
  },
  kotak: {
    height: 50,
    width: 50,
    backgroundColor: '#909090'
  }
})
