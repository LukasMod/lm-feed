import React from 'react'
import { CreatePostScreen, HomeScreen, PostScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from '../types/navigation'
import { color, fontSize, typography } from '../theme'
import { ButtonHeader, ImageUser } from '../components'
import { observer } from 'mobx-react-lite'

export const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>()

const headerTitleStyle = {
  fontFamily: typography.bold,
  fontSize: fontSize.l,
  color: color.text,
}
const headerStyle = {
  backgroundColor: color.background,
}

export const HomeStackNavigator = observer(() => {
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
        options={({ navigation }) => ({
          title: 'Newsfeed',
          headerRight: () => <ImageUser withBorder />,
          headerLeft: () => {
            const onPressAddPost = () => {
              navigation.navigate('CreatePost')
            }

            return <ButtonHeader onPress={onPressAddPost} title="Dodaj post" />
          },
        })}
      />
      <HomeStack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          title: 'Nowy post',
        }}
      />
      <HomeStack.Screen name="Post" component={PostScreen} />
    </HomeStack.Navigator>
  )
})
