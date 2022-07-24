import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type BottomTabNavigatorParamList = {
  HomeStack: undefined
  ConversationStack: undefined
  FriendStack: undefined
  PaymentStack: undefined
}
export type HomeStackNavigatorParamList = {
  Home: undefined
  CreatePost: undefined
  Post: { postId: string }
}

export type HomeScreenNavProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Home'>
export type CreatePostScreenNavProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'CreatePost'
>
export type PostScreenNavProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Post'>
export type PostScreenRouteProp = RouteProp<HomeStackNavigatorParamList, 'Post'>
