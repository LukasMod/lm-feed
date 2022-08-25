import { render } from '@testing-library/react-native'
import React, { ReactNode } from 'react'
import { storesContext, rootStore } from '../hooks'

export const renderWithStore = (children: ReactNode) => {
  render(<storesContext.Provider value={rootStore}>{children}</storesContext.Provider>)
}
