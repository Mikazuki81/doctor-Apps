import React from 'react'
import {ImageBackground, StyleSheet, Text, View} from 'react-native'
import {ILGetstarted, ILLogo} from '../../assets'
import {Button, Gap} from '../../components'
import {colors} from '../../utils'

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetstarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.description}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button onPress={() => navigation.navigate('Register')}>
          Get Started
        </Button>
        <Gap height={16} />
        <Button type="secondary" onPress={() => navigation.navigate('Login')}>
          Sign In
        </Button>
      </View>
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 40,
    justifyContent: 'space-between'
  },
  description: {
    fontWeight: '600',
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito',
    maxWidth: 235,
    lineHeight: 33.6
  }
})
