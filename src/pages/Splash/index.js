import React, {useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ILLogo} from '../../assets'

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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: '#112340',
    marginTop: 20
  }
})
