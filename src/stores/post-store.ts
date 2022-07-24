import { makeObservable, observable, action, flow } from 'mobx'
import postApi from '../services/post-api'
import { IPost } from '../types'
import { INCREMENT_DATA } from '../utils'
import RootStore from './root-store'

export default class PostStore {
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this, {
      posts: observable,
      postsOffset: observable,
      incrementPostsOffset: action,
      postLoading: observable,
      resetPostsOffset: action,
      setPostLoading: action,
    })
  }

  rootStore: RootStore
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
