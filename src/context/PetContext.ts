import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/constants'
import { PetContextType } from '@/types'
import { createContext } from 'react'

const defaultPetContext: PetContextType = {
  pets: [],
  setPets: () => {},
  currentPage: 1,
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
  onSortOptionChange: () => {},
  handleNextPage: () => {},
  handlePrevPage: () => {}
}

export const PetContext = createContext<PetContextType | []>(defaultPetContext)
