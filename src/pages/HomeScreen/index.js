import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fa9000',
          fontSize: 40,
          textAlign: 'center',
          marginBottom: 40
        }}>
        HomeScreen
      </Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  }
})
