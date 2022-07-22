import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { BottomTabNavigator } from './bottom-tab-navigator'

interface IRootNavigator extends Omit<NavigationContainerProps, 'children'> {
  onReady: () => void
}

export const RootNavigator = (props: IRootNavigator) => {
  return (
    <NavigationContainer {...props}>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
