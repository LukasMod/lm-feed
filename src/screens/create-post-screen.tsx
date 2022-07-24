import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { CreatePostScreenNavProp } from '../types/navigation'
import { observer } from 'mobx-react-lite'

export const CreatePostScreen = observer(() => {
  const navigation = useNavigation<CreatePostScreenNavProp>()

  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('Home')
        }}>
        CreatePostScreen
      </Text>
      <StatusBar style="auto" />
    </View>
  )
})
