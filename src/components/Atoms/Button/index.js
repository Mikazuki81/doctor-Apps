import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const Button = ({children, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10
  }),
  text: (type) => ({
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: type === 'secondary' ? '#112340' : 'white',
    fontFamily: 'Nunito'
  })
})
