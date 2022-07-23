import * as React from 'react'
import { ViewStyle, FlatList, View } from 'react-native'
import { color, spacing } from '../../theme'
import { IPost } from '../../types'
import { PostItem } from './post-item'

export interface IPostList {
  posts?: IPost[]
}

const CONTENT: ViewStyle = {
  padding: spacing.screen,
  backgroundColor: color.background,
}

const keyExtractor = (item: IPost) => item.id

export const PostList = ({ posts }: IPostList) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={CONTENT}
        data={posts}
        renderItem={PostItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}
