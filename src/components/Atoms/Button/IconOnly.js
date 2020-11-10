import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {ICBackDark} from '../../../assets/icon'

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    switch ({icon}) {
      case 'back-dark':
        return <ICBackDark />
        break
      case 'light-dark':
        return <ICBackDark />
        break

      default:
        return <ICBackDark />
        break
    }
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  )
}

export default IconOnly

const styles = StyleSheet.create({})
