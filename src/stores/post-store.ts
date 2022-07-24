import { makeObservable, observable, action, flow } from 'mobx'
import postApi from '../services/post-api'
import { GetPostsType, IBadge, IPost } from '../types'
import { INCREMENT_DATA } from '../utils'
import RootStore from './root-store'

const BADGES: IBadge[] = [
  { id: 'badge-1', label: 'Tablica' },
  { id: 'badge-2', label: 'Wydarzenia' },
  { id: 'badge-3', label: 'Artykuły' },
  { id: 'badge-4', label: 'Wiadomości' },
]

export default class PostStore {
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this, {
      badges: observable,
      posts: observable,
      postsOffset: observable,
      postsTotal: observable,
      incrementPostsOffset: action,
      postLoading: observable,
      resetPostsOffset: action,
      setPostLoading: action,
      setPosts: action,
      setBadgeSelected: action,
    })
  }

  rootStore: RootStore
  badges: IBadge[] = BADGES
  posts: IPost[] = []
  postsOffset = 0
  postsTotal = 0
  postLoading = false

  incrementPostsOffset = (limit: number) => {
    this.postsOffset = this.postsOffset + limit
  }

  resetPostsOffset = () => {
    this.postsOffset = 0
  }

  setPostLoading = (isLoading: boolean) => {
    this.postLoading = isLoading
  }

  setPosts = (posts: IPost[]) => {
    this.posts = posts
  }

  setBadgeSelected = (id: string) => {
    const badge = this.badges.find(badge => badge.id === id)
    if (badge) {
      badge.isSelected = !badge.isSelected
    }
  }

  getPosts = flow(function* (this: PostStore, offset = 0, limit: number = INCREMENT_DATA) {
    try {
      if (this.postLoading) return

      if (offset > this.postsTotal) {
        console.log('reached getPosts total')
        return
      }

      this.setPostLoading(true)
      const response: GetPostsType = yield postApi.getPosts(offset, limit)

      this.postsTotal = response.total

      if (offset === 0) {
        this.resetPostsOffset()
        this.setPosts(response.data)
      } else {
        console.log('loaded more posts')
        this.setPosts([...this.posts, ...response.data])
      }

      this.incrementPostsOffset(limit)

      this.setPostLoading(false)
    } catch (e) {
      this.setPosts([])
      this.setPostLoading(false)
      console.log('getPosts', e.message)
    }
  }).bind(this)
}
