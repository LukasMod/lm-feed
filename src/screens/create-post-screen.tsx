import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import { CreatePostScreenNavProp } from '../types/navigation'
import { observer } from 'mobx-react-lite'
import { color, spacing, tpBoldTextM, tpMediumDescriptionS } from '../theme'
import { ButtonHeader, Icon, ImageUser } from '../components'
import { Icons } from '../components/icon/icons'

const FULL: ViewStyle = {
  flex: 1,
  paddingTop: spacing.screen,
}
const SECTION: ViewStyle = {
  borderColor: color.separator,
  borderTopWidth: 1,
  flexDirection: 'row',
  paddingVertical: spacing.item,
  paddingHorizontal: spacing.screen,
  alignItems: 'center',
}
const SECTION_DESCRIPTION: ViewStyle = {
  borderColor: color.separator,
  borderTopWidth: 1,
  flexDirection: 'row',
  paddingVertical: 20,
  paddingHorizontal: spacing.screen,
}

const TEXT_TITLE: TextStyle = {
  ...tpBoldTextM,
}

const TEXT_INPUT_TITLE: TextStyle = {
  ...tpMediumDescriptionS,
  marginLeft: spacing.item,
  paddingHorizontal: spacing.itemSmall,
  flex: 1,
}
const TEXT_INPUT_DESCRIPTION: TextStyle = {
  ...tpMediumDescriptionS,
  marginLeft: spacing.item,
  paddingHorizontal: spacing.itemSmall,
  flex: 1,
}
const ICON: ViewStyle = { marginRight: spacing.item }


export const CreatePostScreen = observer(() => {
  const navigation = useNavigation<CreatePostScreenNavProp>()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonHeader onPress={() => console.log('TEST ADD POST')} title="Dodaj" />
      ),
    });
  }, [navigation]);

  return (
    <View style={FULL}>
      <View style={SECTION}>
        <Text style={TEXT_TITLE}>Dodaj tytuł:</Text>
        <TextInput style={TEXT_INPUT_TITLE} placeholder="Tytuł..." />
      </View>
      <View style={SECTION_DESCRIPTION}>
        <ImageUser withBorder />
        <TextInput
          style={TEXT_INPUT_DESCRIPTION}
          placeholder="Napisz coś..."
          multiline
          textAlignVertical="center"
        />
      </View>
      <View style={SECTION}>
        <Icon icon={Icons.ADD_IMAGE} size={21} containerStyle={ICON} />
        <Text style={TEXT_TITLE}>Dodaj zdjęcie</Text>
      </View>
    </View>
  )
})
