import { PetContext } from '@/context/PetContext'
import { PetContextType } from '@/types'
import { useContext } from 'react'

export const usePetContext = (): PetContextType => {
  const petContext = useContext(PetContext)
  if (!petContext) {
    throw new Error('usePetContext must be used within a PetProvider')
  }

  return petContext as PetContextType
}
