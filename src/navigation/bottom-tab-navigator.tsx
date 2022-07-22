import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabNavigatorParamList } from '../types/navigation'
import { color } from '../theme'
import { HomeStackNavigator } from './home-stack-navigator'

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.primary,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Text style={{ color }}>Icon 1</Text>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HomeStack2"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Text style={{ color }}>Icon 2</Text>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HomeStack3"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Text style={{ color }}>Icon 3</Text>,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
