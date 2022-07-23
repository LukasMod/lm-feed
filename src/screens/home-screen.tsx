import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import { BadgeList, InputSearchbar } from '../components'
import { spacing, tpBoldTextL } from '../theme'
import { IBadge } from '../types/badge'
import { HomeScreenNavProp } from '../types/navigation'

const FULL: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.screen,
}

const TEXT: TextStyle = {
  ...tpBoldTextL,
  flex: 1,
}

const BADGES: IBadge[] = [
  { id: 'badge-1', label: 'Tablica', isSelected: true },
  { id: 'badge-2', label: 'Wydarzenia' },
  { id: 'badge-3', label: 'Artykuły' },
  { id: 'badge-4', label: 'Wiadomości' },
]

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>()
  const [searchText, setSearchText] = useState('')

  return (
    <View style={FULL}>
      <InputSearchbar setText={setSearchText} text={searchText} />
      <BadgeList badges={BADGES} />
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
