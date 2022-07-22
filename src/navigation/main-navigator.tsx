import React from 'react'
import { CreatePostScreen, HomeScreen, PostScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainNavigatorParamList } from '../types/navigation'

export const MainStack = createNativeStackNavigator<MainNavigatorParamList>()

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        title: 'test home',
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="CreatePost" component={CreatePostScreen} />
      <MainStack.Screen name="Post" component={PostScreen} />
    </MainStack.Navigator>
  )
}
