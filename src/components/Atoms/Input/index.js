import React from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {colors, fonts} from '../../../utils'

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  title: {
    color: colors.text.secondary,
    fontFamily: fonts.primary['400'],
    fontSize: 16,
    marginBottom: 6
  },
  input: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 11,
    paddingLeft: 12,
    paddingBottom: 12,
    fontFamily: fonts.primary['900'],
    fontSize: 16,
    color: colors.text['default']
  }
})
