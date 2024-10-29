import {
  DEFAULT_ITEMS_PER_PAGE,
  SESSION_STORAGE_SORTED_BY,
  SESSION_STORAGE_STORED_PETS
} from '@/utils/constants'
import { useCallback, useEffect, useState } from 'react'

import { Pet } from '@/types'
import { PetContext } from './PetContext'

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [pets, setPets] = useState<Pet[]>(() => {
    const storedPets = sessionStorage.getItem(SESSION_STORAGE_STORED_PETS)
    return storedPets ? JSON.parse(storedPets) : []
  })

  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage: number = DEFAULT_ITEMS_PER_PAGE

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

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
    if (pets.length > 0) {
      sessionStorage.setItem(SESSION_STORAGE_STORED_PETS, JSON.stringify(pets))
    }
  }, [pets])

  useEffect(() => {
    const storedPets = sessionStorage.getItem(SESSION_STORAGE_STORED_PETS)
    if (storedPets) {
      setPets(JSON.parse(storedPets))
    }
  }, [])

  useEffect(() => {
    const sortedBy = sessionStorage.getItem(SESSION_STORAGE_SORTED_BY)
    if (sortedBy) onSortOptionChange(sortedBy)
  }, [onSortOptionChange])

  return (
    <PetContext.Provider
      value={{
        pets,
        setPets,
        currentPage,
        itemsPerPage,
        onSortOptionChange,
        handlePrevPage,
        handleNextPage
      }}
    >
      {children}
    </PetContext.Provider>
  )
}

export default PetProvider
