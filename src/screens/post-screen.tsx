import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { PostScreenNavProp } from '../types/navigation'
import { observer } from 'mobx-react-lite'

export const PostScreen = observer(() => {
  const navigation = useNavigation<PostScreenNavProp>()

  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('Home')
        }}>
        PostScreen
      </Text>
      <StatusBar style="auto" />
    </View>
  )
})
