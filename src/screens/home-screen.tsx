import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, ViewStyle } from 'react-native'
import { BadgeList, InputSearchbar, PostList } from '../components'
import { spacing } from '../theme'
import { IBadge } from '../types'
import { HomeScreenNavProp } from '../types/navigation'

import POSTS from '../mocks/posts.json'

const FULL: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.screen,
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
      <PostList posts={POSTS} />
      <StatusBar style="auto" />
    </View>
  )
}
