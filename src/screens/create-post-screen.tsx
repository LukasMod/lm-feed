import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import { CreatePostScreenNavProp } from '../types/navigation'
import { observer, useLocalObservable } from 'mobx-react-lite'
import { color, spacing, tpBoldTextM, tpMediumDescriptionS } from '../theme'
import { ButtonHeader, Icon, ImageUser } from '../components'
import { Icons } from '../components/icon/icons'
import { ModalLoading } from '../components/modal/modal-loading'
import { useStores } from '../hooks'
import { makeAutoObservable } from 'mobx'

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
const ICON: ViewStyle = {
  marginRight: spacing.item,
}

const TEXT_ERROR: TextStyle = {
  ...tpBoldTextM,
  color: color.error,
  margin: 20,
}

class LocalStore {
  constructor() {
    makeAutoObservable(this)
  }

  title = ''
  description = ''
  isError = false

  setTitle = (title: string) => {
    this.title = title
  }

  setDescription = (description: string) => {
    this.description = description
  }

  setIsError = (isError: boolean) => {
    this.isError = isError
  }

  get newPost() {
    return {
      id: `${Math.random()}`,
      avatarImageUrl: '',
      name: 'Test User',
      imageUrl: '',
      title: this.title,
      description: this.description,
      date: new Date().toISOString(),
      isLiked: false,
    }
  }
}

export const CreatePostScreen = observer(() => {
  const navigation = useNavigation<CreatePostScreenNavProp>()

  const { title, description, setTitle, setDescription, newPost, isError, setIsError } =
    useLocalObservable(() => new LocalStore())

  const {
    stores: {
      postStore: { createPost, postLoading },
    },
  } = useStores()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ButtonHeader onPress={onCreatePost} title="Dodaj" />,
    })
  }, [navigation, newPost])

  const onCreatePost = () => {
    if (!title || !description) {
      setIsError(true)
    } else {
      setIsError(false)
      createPost(newPost, navigation.goBack)
    }
  }

  return (
    <View style={FULL}>
      <View style={SECTION}>
        <Text style={TEXT_TITLE}>Dodaj tytuł:</Text>
        <TextInput
          style={TEXT_INPUT_TITLE}
          placeholder="Tytuł..."
          onChangeText={setTitle}
          value={title}
        />
      </View>
      <View style={SECTION_DESCRIPTION}>
        <ImageUser withBorder />
        <TextInput
          style={TEXT_INPUT_DESCRIPTION}
          placeholder="Napisz coś..."
          multiline
          textAlignVertical="center"
          onChangeText={setDescription}
          value={description}
        />
      </View>
      <View style={SECTION}>
        <Icon icon={Icons.ADD_IMAGE} size={21} containerStyle={ICON} />
        <Text style={TEXT_TITLE}>Dodaj zdjęcie</Text>
      </View>
      {isError && <Text style={TEXT_ERROR}>Nieprawidłowo uzupełniony formularz</Text>}
      <ModalLoading show={postLoading} />
    </View>
  )
})
