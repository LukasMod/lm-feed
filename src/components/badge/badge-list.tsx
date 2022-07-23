import * as React from 'react'
import { ViewStyle, FlatList, View } from 'react-native'
import { color, spacing } from '../../theme'
import { IBadge } from '../../types/badge'
import { BadgeItem } from './badge-item'

export interface IBadgeList {
  badges?: IBadge[]
}

const CONTENT: ViewStyle = {
  padding: spacing.screen,
  backgroundColor: color.background,
}

const keyExtractor = (item: IBadge) => item.id

export const BadgeList = ({ badges }: IBadgeList) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={CONTENT}
        data={badges}
        renderItem={BadgeItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
