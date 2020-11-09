import React from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'

const Input = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  title: {
    color: '#7D8797',
    fontWeight: '400',
    fontFamily: 'Nunito',
    fontSize: 16,
    marginBottom: 6
  },
  input: {
    borderColor: '#e9e9e9',
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 11,
    paddingLeft: 12,
    paddingBottom: 12,
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: 16,
    color: '#112340'
  }
})
