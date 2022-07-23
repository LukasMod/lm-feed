import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import { InputSearchbar } from '../components'
import { tpBoldTextL } from '../theme'
import { HomeScreenNavProp } from '../types/navigation'

const FULL: ViewStyle = {
  flex: 1,
  backgroundColor: 'rgba(255, 100, 2, 0.2)',
  paddingVertical: 20,
}

const TEXT: TextStyle = {
  ...tpBoldTextL,
}

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>()
  const [searchText, setSearchText] = useState('')

  return (
    <View style={FULL}>
      <InputSearchbar setText={setSearchText} text={searchText} />
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
