import { IPost } from '../types'
import postsMock from '../mocks/posts.json'
import { delay, paginate } from '../utils/helpers'

class PostApi {
  async getPosts(offset: number, limit?: number): Promise<IPost[]> {
    try {
      // api call
      await delay(1000)
      const response: IPost[] = paginate(postsMock, offset, limit)

      return response
    } catch (e) {
      throw Error(e)
    }
  }
}

export default new PostApi()
