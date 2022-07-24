import * as React from 'react'
import { ImageStyle, ViewStyle, Image, View } from 'react-native'
import { color } from '../../theme'
import { icons, Icons } from './icons'
import { observer } from 'mobx-react-lite'

export interface IIconTabBar {
  icon: Icons
  isFocused: boolean
}

const CONTAINER: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
}
const ICON: ImageStyle = {
  resizeMode: 'contain',
  height: 24,
  aspectRatio: 1,
  tintColor: color.white,
}

const DOT: ImageStyle = {
  marginTop: 7,
  resizeMode: 'contain',
  height: 4,
  aspectRatio: 1,
  tintColor: color.primary,
}
const DOT_SELECTED: ImageStyle = {
  tintColor: color.text,
}

export const IconTabBar = observer(({ isFocused, icon }: IIconTabBar) => {
  if (!icon) return null

  return (
    <View style={CONTAINER}>
      <Image style={ICON} source={icons[icon]} />
      <Image style={[DOT, isFocused && DOT_SELECTED]} source={icons[Icons.DOT]} />
    </View>
  )
})
