import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ILLogo} from '../../assets'
import {Button, Gap, Input, Link} from '../../components'
import {colors, fonts} from '../../utils'

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.description}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />

      <Input label="Password" />
      <Gap height={10} />

      <Link size={12} onPress={() => alert('hallo')}>
        Forgot My Password
      </Link>
      <Gap height={40} />

      <Button>Sign In</Button>
      <Gap height={30} />

      <Link onPress={() => navigation.navigate('Register')} align="center">
        Create New Account
      </Link>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: colors.white
  },
  description: {
    fontSize: 20,
    fontFamily: fonts.primary['600'],
    maxWidth: 153,
    marginVertical: 40,
    color: colors.text.default
  }
})
