import React from 'react'
import { CreatePostScreen, HomeScreen, PostScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from '../types/navigation'
import { color, fontSize, typography } from '../theme'
import { ImageUser } from '../components'

export const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>()

const headerTitleStyle = {
  fontFamily: typography.bold,
  fontSize: fontSize.l,
  color: color.text,
}
const headerStyle = {
  backgroundColor: color.background,
}

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerStyle,
        headerTitleStyle,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Newsfeed', headerRight: () => <ImageUser withBorder/> }}
      />
      <HomeStack.Screen name="CreatePost" component={CreatePostScreen} />
      <HomeStack.Screen name="Post" component={PostScreen} />
    </HomeStack.Navigator>
  )
}
