import * as React from 'react'
import { TouchableOpacity, ViewStyle, TextStyle, Text } from 'react-native'
import { color, rounding, spacing, tpMediumDescriptionM } from '../../theme'
import { IBadge } from '../../types/badge'
import { metrics } from '../../utils'

const CONTAINER: ViewStyle = {
  height: 30,
  backgroundColor: color.background,
  paddingVertical: 6,
  paddingHorizontal: 26,
  borderRadius: rounding.regular,
  borderColor: color.descriptionText,
  borderWidth: 2,
  marginHorizontal: spacing.itemSmall,
}
const CONTAINER_SELECTED: ViewStyle = {
  backgroundColor: color.primary,
  borderColor: color.primary,
}

const TEXT: TextStyle = {
  ...tpMediumDescriptionM,
}
const TEXT_SELECTED: TextStyle = {
  color: color.white,
}

export interface IBadgeItem {
  item: IBadge
}

export const BadgeItem = ({ item }: IBadgeItem) => {
  const onPressBadge = () => {
    console.log('onPressBadge', item.label, item.id)
  }

  if (!item) return null

  return (
    <TouchableOpacity
      style={[CONTAINER, item.isSelected && CONTAINER_SELECTED]}
      activeOpacity={metrics.activeOpacity}
      onPress={onPressBadge}>
      <Text style={[TEXT, item.isSelected && TEXT_SELECTED]}>{item.label}</Text>
    </TouchableOpacity>
  )
}
