import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type BottomTabNavigatorParamList = {
  HomeStack: undefined
}
export type HomeStackNavigatorParamList = {
  Home: undefined
  CreatePost: undefined
  Post: undefined
}

export type HomeScreenNavProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Home'>
export type CreatePostScreenNavProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'CreatePost'
>
export type PostScreenNavProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Post'>
