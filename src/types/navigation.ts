import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type MainNavigatorParamList = {
  Home: undefined
  CreatePost: undefined
  Post: undefined
}

export type HomeScreenNavProp = NativeStackNavigationProp<MainNavigatorParamList, 'Home'>
export type CreatePostScreenNavProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'CreatePost'
>
export type PostScreenNavProp = NativeStackNavigationProp<MainNavigatorParamList, 'Post'>
