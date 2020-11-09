import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ICBackDark} from '../../../assets'
import {colors} from '../../../utils'
import {Gap} from '../../Atoms'

const Header = ({label}) => {
  return (
    <View style={styles.container}>
      <ICBackDark />
      <Text style={styles.text}>{label}</Text>
      <Gap width={24} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: colors.text.primary,
    fontSize: 20,
    fontFamily: 'Nunito',
    fontWeight: '600'
  }
})
