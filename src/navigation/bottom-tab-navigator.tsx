import React from 'react'
import { ViewStyle } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabNavigatorParamList } from '../types/navigation'
import { color } from '../theme'
import { HomeStackNavigator } from './home-stack-navigator'
import { IconTabBar } from '../components'
import { Icons } from '../components/icon/icons'

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>()

const TAB_BAR: ViewStyle = {
  backgroundColor: color.primary,
  height: 70,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 8,
}

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.white,
        tabBarStyle: TAB_BAR,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => <IconTabBar icon={Icons.HOME} isFocused={focused} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ConversationStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => <IconTabBar icon={Icons.CONVERSATION} isFocused={focused} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="FriendStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => <IconTabBar icon={Icons.FRIENDS} isFocused={focused} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PaymentStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => <IconTabBar icon={Icons.DOLLAR} isFocused={focused} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
