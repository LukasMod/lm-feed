import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, TextStyle, View } from 'react-native'
import { tpBoldTextL } from '../theme'
import { HomeScreenNavProp } from '../types/navigation'

const TEXT: TextStyle = {
  ...tpBoldTextL,
}

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>()

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate('CreatePost')
        }}
        style={TEXT}>
        HomeScreen22
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})
