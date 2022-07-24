import { makeObservable, observable, action } from 'mobx'
import { IPost } from '../types'
import { INCREMENT_DATA } from '../utils'
import RootStore from './root-store'

export default class AppStore {
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this, {
      posts: observable,
      postsOffset: observable,
      incrementPostsOffset: action,
      resetPostsOffset: action,
    })
  }

  rootStore: RootStore
  posts: IPost[] = []
  postsOffset = 0

  incrementPostsOffset = () => {
    this.postsOffset = this.postsOffset + INCREMENT_DATA
  }

  resetPostsOffset = () => {
    this.postsOffset = 0
  }
}
