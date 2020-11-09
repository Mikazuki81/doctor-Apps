import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {colors} from '../../../utils'

const Button = ({children, type, onPress}) => {
  // if (type === 'back-dark') {
  //   return <BackDark onPress={onPress}/>
  // }

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
