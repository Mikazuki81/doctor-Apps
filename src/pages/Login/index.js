import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ILLogo} from '../../assets'
import {Button, Input, Link} from '../../components'

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.description}>Masuk dan mulai berkonsultasi</Text>
      <Input title="Email Address" />
      <Input title="Password" />
      <Link />
      <Button>Sign In</Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff'
  },
  description: {
    fontSize: 20,
    fontFamily: 'Nunito',
    fontWeight: '600',
    maxWidth: 153,
    marginVertical: 40,
    color: '#112340'
  }
})
