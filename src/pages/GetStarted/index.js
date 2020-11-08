import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ILLogo} from '../../assets'

const GetStarted = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'brown'
  }
})
