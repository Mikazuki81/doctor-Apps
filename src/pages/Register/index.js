import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {Button, Gap, Header, Input} from '../../components'
import {colors} from '../../utils'

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header label="Sign Up" onPress={() => navigation.goBack()} />
      <Gap height={10} />

      <View style={styles.wrapper}>
        <Input label="Full Name" />

        <Gap height={24} />
        <Input label="Work" />

        <Gap height={24} />
        <Input label="Email Address" />

        <Gap height={24} />
        <Input label="Password" />

        <Gap height={40} />
        <Button onPress={() => navigation.navigate('UploadPhoto')}>
          Continue
        </Button>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    paddingHorizontal: 40,
    paddingBottom: 40
  }
})
