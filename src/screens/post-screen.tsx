import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, ViewStyle, Text, TextStyle } from 'react-native'
import { PostItem } from '../components'
import { spacing } from '../theme'
import { PostScreenNavProp, PostScreenRouteProp } from '../types/navigation'
import { observer } from 'mobx-react-lite'

import { useStores } from '../hooks'

const FULL: ViewStyle = {
  flex: 1,
  padding: spacing.screen,
}
const TEXT_NO_DATA: TextStyle = {
  padding: spacing.screen,
}

export const PostScreen = observer(() => {
  const navigation = useNavigation<PostScreenNavProp>()
  const route = useRoute<PostScreenRouteProp>()

  const postId = route.params?.postId || ''

  const {
    stores: {
      postStore: { posts },
    },
  } = useStores()

  const post = posts.find(p => p.id === postId)

  if (!post) {
    return <Text style={TEXT_NO_DATA}>Brak danych</Text>
  }

  return (
    <View style={FULL}>
      <PostItem item={post} open/>
    </View>
  )
})
