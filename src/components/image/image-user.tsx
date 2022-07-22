import * as React from 'react'
import { ImageStyle, TouchableOpacity, StyleProp, ViewStyle, Image } from 'react-native'
import { color } from '../../theme'
import { metrics } from '../../utils'
import { icons, Icons } from '../icon/icons'

export interface IUserImage {
  style?: StyleProp<ImageStyle>
  containerStyle?: StyleProp<ViewStyle>
  onPress?: () => void
  imageUri?: string
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.white,
  height: 50,
  width: 50,
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
}
const IMAGE: ImageStyle = {
  resizeMode: 'contain',
  height: 44,
  width: 44,
  borderRadius: 100,
}

export const ImageUser = ({ style, imageUri, containerStyle, onPress }: IUserImage) => {
  return (
    <TouchableOpacity
      style={[CONTAINER, containerStyle]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={metrics.activeOpacity}>
      <Image style={[IMAGE, style]} source={icons[Icons.DEFAULT_USER_IMAGE]} />
    </TouchableOpacity>
  )
}
