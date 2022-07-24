import * as React from 'react'
import { ViewStyle, FlatList, View } from 'react-native'
import { color, spacing } from '../../theme'
import { IBadge } from '../../types'
import { BadgeItem } from './badge-item'
import { observer } from 'mobx-react-lite'

export interface IBadgeList {
  badges?: IBadge[]
}

const CONTENT: ViewStyle = {
  padding: spacing.screen,
  backgroundColor: color.background,
}

const keyExtractor = (item: IBadge) => item.id

const renderItem = ({ item }: { item: IBadge }) => {
  return <BadgeItem item={item} />
}

export const BadgeList = observer(({ badges }: IBadgeList) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={CONTENT}
        data={badges}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
})
