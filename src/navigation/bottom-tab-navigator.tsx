import React from 'react'
import { View, ViewStyle, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabNavigatorParamList } from '../types/navigation'
import { color } from '../theme'
import { HomeStackNavigator } from './home-stack-navigator'
import { IconTabBar } from '../components'
import { Icons } from '../components/icon/icons'
import { useRoute } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'

const FULL: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

const EmptyScreen = () => {
  const route = useRoute()
  return (
    <View style={FULL}>
      <Text>{route?.name}</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>()

const TAB_BAR: ViewStyle = {
  backgroundColor: color.primary,
  height: 70,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 8,
}

export const BottomTabNavigator = observer(() => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.white,
        tabBarStyle: TAB_BAR,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => <IconTabBar icon={Icons.HOME} isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name="ConversationStack"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) => <IconTabBar icon={Icons.CONVERSATION} isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name="FriendStack"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) => <IconTabBar icon={Icons.FRIENDS} isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name="PaymentStack"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) => <IconTabBar icon={Icons.DOLLAR} isFocused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
})
