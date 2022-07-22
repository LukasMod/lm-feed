import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HomeScreenNavProp } from '../types/navigation'

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>()

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate('CreatePost')
        }}>
        HomeScreen
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
