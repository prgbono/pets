import { createContext } from 'react'
import { PetContextType } from '../types'

export const PetContext = createContext<PetContextType | []>([])
