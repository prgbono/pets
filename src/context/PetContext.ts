import { PetContextType } from '@/types'
import { createContext } from 'react'

export const PetContext = createContext<PetContextType | []>([])
