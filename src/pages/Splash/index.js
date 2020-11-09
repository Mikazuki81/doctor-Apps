import React, {useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ILLogo} from '../../assets'
import {colors, fonts} from '../../utils'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 2000)
  }, [])
  return (
    <View style={styles.page}>
      <ILLogo style={styles.image} />
      <Text style={styles.title}>MyDoctor</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: fonts.primary['600'],
    fontSize: 20,
    color: colors.text.default,
    marginTop: 20
  }
})
