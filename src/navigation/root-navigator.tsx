import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { BottomTabNavigator } from './bottom-tab-navigator'
import { ActivityIndicator } from 'react-native'
import { color } from '../theme'

export const RootNavigator = () => {
  return (
    <NavigationContainer fallback={<ActivityIndicator color={color.primary} />}>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
