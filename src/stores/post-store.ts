import { makeObservable, observable, action, flow } from 'mobx'
import postApi from '../services/post-api'
import { IBadge, IPost } from '../types'
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
      incrementPostsOffset: action,
      postLoading: observable,
      resetPostsOffset: action,
      setPostLoading: action,
      setBadgeSelected: action,
    })
  }

  rootStore: RootStore
  badges: IBadge[] = BADGES
  posts: IPost[] = []
  postsOffset = 0
  postLoading = false

  incrementPostsOffset = () => {
    this.postsOffset = this.postsOffset + INCREMENT_DATA
  }

  resetPostsOffset = () => {
    this.postsOffset = 0
  }

  setPostLoading = (isLoading: boolean) => {
    this.postLoading = isLoading
  }

  setBadgeSelected = (id: string) => {
    const badge = this.badges.find(badge => badge.id === id)
    if (badge) {
      badge.isSelected = !badge.isSelected
    }
  }

  getPosts = flow(function* (this: PostStore, offset = 0, limit: number = INCREMENT_DATA) {
    try {
      this.setPostLoading(true)
      const response: IPost[] = yield postApi.getPosts(offset, limit)
      this.posts = response
      this.setPostLoading(false)
    } catch (e) {
      this.posts = []
      this.setPostLoading(false)
      console.log('getPosts', e.message)
    }
  }).bind(this)
}
