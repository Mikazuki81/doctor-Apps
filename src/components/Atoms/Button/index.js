import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {colors} from '../../../utils'
import IconOnly from './IconOnly'

const Button = ({children, type, onPress, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icon={icon} />
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary' ? colors.white : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10
  }),
  text: (type) => ({
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: type === 'secondary' ? colors.button.secondary.text : colors.white,
    fontFamily: 'Nunito'
  })
})
