import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {ICAddPhoto, ILNullPhoto} from '../../assets'
import {Button, Gap, Header, Link} from '../../components'
import {colors, fonts} from '../../utils'

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header label="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <ICAddPhoto style={styles.addIcon} />
          </View>

          <Text style={styles.name}>Zulfa Azhariyah</Text>
          <Text style={styles.profesion}>UI UX Designer</Text>
        </View>

        <View>
          <Button onPress={() => alert('go main Menu')}>
            Upload And Continue
          </Button>

          <Gap height={30} />
          <Link align="center" size={16}>
            Skip For This
          </Link>
        </View>
      </View>
    </View>
  )
}

export default UploadPhoto

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    paddingBottom: 64
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  avatarWrapper: {
    position: 'relative',
    width: 130,
    height: 130,
    borderWidth: 1,
    padding: 10,
    borderRadius: 130 / 2,
    borderColor: colors.border
  },
  avatar: {
    width: 110,
    height: 110
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  name: {
    fontFamily: fonts.primary['600'],
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: 24
  },
  profesion: {
    fontFamily: fonts.primary['400'],
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4
  }
})
