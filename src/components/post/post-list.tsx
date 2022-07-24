import * as React from 'react'
import { ViewStyle, FlatList, View } from 'react-native'
import { color, spacing } from '../../theme'
import { IPost } from '../../types'
import { PostItem } from './post-item'
import { observer } from 'mobx-react-lite'

export interface IPostList {
  posts?: IPost[]
}

const CONTENT: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing.screen,
  paddingBottom: spacing.screen + 70,
}

const keyExtractor = (item: IPost) => item.id

const renderItem = ({ item }: { item: IPost }) => {
  return <PostItem item={item} />
}

export const PostList = observer(({ posts }: IPostList) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={CONTENT}
        data={posts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
})
