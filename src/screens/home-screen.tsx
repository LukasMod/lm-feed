import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import { BadgeList, InputSearchbar, PostList } from '../components'
import { spacing, tpBoldTextL } from '../theme'
import { IPost, IBadge } from '../types'
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
const POSTS: IPost[] = [
  {
    id: 'post-1',
    avatarImageUrl: undefined,
    name: 'Antoni Kowalski',
    imageUrl: undefined,
    title: 'Jaki trening wybrać na początek?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid. Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor inc.',
    date: new Date().toISOString(),
    isLiked: false,
  },
  {
    id: 'post-2',
    avatarImageUrl: undefined,
    name: 'Antoni Kowalski 2',
    imageUrl: undefined,
    title: 'Jaki trening wybrać na początek?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid. Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor inc.',
    date: new Date().toISOString(),
    isLiked: false,
  },
  {
    id: 'post-3',
    avatarImageUrl: undefined,
    name: 'Antoni Kowalski 3',
    imageUrl: undefined,
    title: 'Jaki trening wybrać na początek?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid. Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor inc.',
    date: new Date().toISOString(),
    isLiked: true,
  },
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
