import {
  API_URL,
  SESSION_STORAGE_SORTED_BY,
  SESSION_STORAGE_STORED_PETS
} from '@/utils/constants'
import { useCallback, useEffect, useState } from 'react'

import { Pet } from '@/types'
import { PetContext } from './PetContext'
import { useFetch } from '@/hooks/useFetch'

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [pets, setPets] = useState<Pet[]>(() => {
    const storedPets = sessionStorage.getItem(SESSION_STORAGE_STORED_PETS)
    return storedPets ? JSON.parse(storedPets) : []
  })
  const { data, isLoading, hasError } = useFetch<Pet[]>(
    pets.length === 0 ? API_URL : null
  )

  const onSortOptionChange = useCallback(
    (option: string) => {
      sessionStorage.setItem(SESSION_STORAGE_SORTED_BY, option)
      setPets(
        [...pets].sort((a: Pet, b: Pet) => {
          switch (option) {
            case 'navbar.name':
              return a.name.localeCompare(b.name)
            case 'navbar.kind':
              return a.kind.localeCompare(b.kind)
            case 'navbar.weight':
              return a.weight - b.weight
            case 'navbar.height':
              return a.height - b.height
            case 'navbar.length':
              return a.length - b.length

            default:
              return 0
          }
        })
      )
    },
    [pets]
  )

  useEffect(() => {
    const storedPets = sessionStorage.getItem(SESSION_STORAGE_STORED_PETS)
    if (!storedPets && data) {
      setPets(data)
      sessionStorage.setItem(SESSION_STORAGE_STORED_PETS, JSON.stringify(data))
    }
  }, [data])

  useEffect(() => {
    const sortedBy = sessionStorage.getItem(SESSION_STORAGE_SORTED_BY)
    if (sortedBy) onSortOptionChange(sortedBy)
  }, [])

  return (
    <PetContext.Provider
      value={{
        pets,
        isLoading,
        hasError,
        onSortOptionChange
      }}
    >
      {children}
    </PetContext.Provider>
  )
}

export default PetProvider
