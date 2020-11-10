import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {colors, fonts} from '../../../utils'

const Link = ({children, onPress, size, align}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.children(size, align)}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Link

const styles = StyleSheet.create({
  children: (size, align) => ({
    fontFamily: fonts.primary['400'],
    fontSize: size || 16,
    textDecorationLine: 'underline',
    color: colors.text.secondary,
    textAlign: align || 'left'
  })
})
