import * as React from 'react'
import { ViewStyle, FlatList, ActivityIndicator } from 'react-native'
import { color, spacing } from '../../theme'
import { IPost } from '../../types'
import { PostItem } from './post-item'
import { observer, useLocalObservable } from 'mobx-react-lite'
import { useStores } from '../../hooks'
import { makeAutoObservable } from 'mobx'

const CONTENT: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing.screen,
}
const LOADING: ViewStyle = {
  marginVertical: 30,
}

const keyExtractor = (item: IPost) => item.id

const renderItem = ({ item }: { item: IPost }) => {
  return <PostItem item={item} />
}

class LocalStore {
  constructor() {
    makeAutoObservable(this)
  }

  isRefreshing = false

  setIsRefreshing = (isRefreshing: boolean) => {
    this.isRefreshing = isRefreshing
  }
}

export const PostList = observer(() => {
  const {
    stores: {
      postStore: { getPosts, postsOffset, postLoading, posts },
    },
  } = useStores()

  const { isRefreshing, setIsRefreshing } = useLocalObservable(() => new LocalStore())

  const loadMorePosts = () => {
    getPosts(postsOffset)
  }

  const onRefresh = async () => {
    setIsRefreshing(true)
    await getPosts()
    setIsRefreshing(false)
  }

  return (
    <FlatList
      contentContainerStyle={CONTENT}
      data={posts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      onEndReached={loadMorePosts}
      onEndReachedThreshold={0.7}
      ListFooterComponent={
        postLoading && <ActivityIndicator style={LOADING} color={color.primary} />
      }
    />
  )
})
