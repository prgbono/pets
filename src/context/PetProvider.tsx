import { useCallback, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { PetContext } from './PetContext'
import { Pet } from '../types'
import { API_URL } from '../utils/constants'

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [pets, setPets] = useState<Pet[]>(() => {
    const storedPets = sessionStorage.getItem('storedPets')
    return storedPets ? JSON.parse(storedPets) : []
  })
  const { data, isLoading, hasError } = useFetch<Pet[]>(
    pets.length === 0 ? API_URL : null
  )

  const onSortOptionChange = useCallback(
    (option: string) => {
      sessionStorage.setItem('sortedBy', option)
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
    const storedPets = sessionStorage.getItem('storedPets')
    if (!storedPets && data) {
      setPets(data)
      sessionStorage.setItem('storedPets', JSON.stringify(data))
    }
  }, [data])

  useEffect(() => {
    const sortedBy = sessionStorage.getItem('sortedBy')
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
