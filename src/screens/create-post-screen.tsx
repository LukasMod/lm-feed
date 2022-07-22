import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CreatePostScreenNavProp } from '../types/navigation'

export const CreatePostScreen = () => {
  const navigation = useNavigation<CreatePostScreenNavProp>()

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate('Home')
        }}>
      CreatePostScreen
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
