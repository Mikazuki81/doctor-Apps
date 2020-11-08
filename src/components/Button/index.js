import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})
