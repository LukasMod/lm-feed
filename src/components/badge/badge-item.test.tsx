import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react-native'
import { BadgeItem } from './badge-item'
import { IBadge } from '../../types'
import { rootStore } from '../../hooks'
import { renderWithStore } from '../../test/renderWithStore'
import { toJS } from 'mobx'
import { color } from '../../theme'

describe('<BadgeItem />', () => {
  describe('without Store', () => {
    const itemNotSelected: IBadge = { id: 'id-1', label: 'label' }

    it('should have correct label', async () => {
      render(<BadgeItem item={itemNotSelected} />)
      expect(screen.getAllByText('label').length).toBe(1)
    })
    it('should have correct backgroundColor when not selected', async () => {
      render(<BadgeItem item={itemNotSelected} />)
      const elementToFind = screen.getByTestId('badgeItemId')
      expect(elementToFind.props.style.backgroundColor === color.background).toBe(true)
    })
    it('should have correct backgroundColor when selected', async () => {
      const item = { ...itemNotSelected, isSelected: true }
      render(<BadgeItem item={item} />)
      const elementToFind = screen.getByTestId('badgeItemId')
      expect(elementToFind.props.style.backgroundColor === color.primary).toBe(true)
    })
  })
  describe('with Store', () => {
    it('press item and select it, change background', async () => {
      renderWithStore(<BadgeItem item={rootStore.stores.postStore.badges[0]} />)

      const {
        stores: {
          postStore: { badges },
        },
      } = rootStore

      const elementToFind = screen.getByTestId('badgeItemId')
      const backgroundColorNotSelected = elementToFind.props.style.backgroundColor

      fireEvent.press(elementToFind)

      const backgroundColorSelected = elementToFind.props.style.backgroundColor
      const badgesSelected = toJS(badges).filter(bg => bg.isSelected)?.length

      expect(badgesSelected).toEqual(1)
      expect(backgroundColorNotSelected !== backgroundColorSelected).toBe(true)
    })
  })
})
