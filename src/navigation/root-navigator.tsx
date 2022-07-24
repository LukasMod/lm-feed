import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { BottomTabNavigator } from './bottom-tab-navigator'
import { observer } from 'mobx-react-lite'

interface IRootNavigator extends Omit<NavigationContainerProps, 'children'> {
  onReady: () => void
}

export const RootNavigator = observer((props: IRootNavigator) => {
  return (
    <NavigationContainer {...props}>
      <BottomTabNavigator />
    </NavigationContainer>
  )
})
