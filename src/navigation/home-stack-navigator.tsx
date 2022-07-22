import React from 'react'
import { CreatePostScreen, HomeScreen, PostScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from '../types/navigation'

export const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>()

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={'Home'}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="CreatePost" component={CreatePostScreen} />
      <HomeStack.Screen name="Post" component={PostScreen} />
    </HomeStack.Navigator>
  )
}
