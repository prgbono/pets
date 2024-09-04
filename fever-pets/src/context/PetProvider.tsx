import { useCallback, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { PetContext } from './PetContext'
import { Pet, SORTING_OPTIONS_TYPE } from '../types'
import { API_URL } from '../utils/constants'

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { data, isLoading, hasError } = useFetch<Pet[]>(API_URL)

  const [pets, setPets] = useState<Pet[]>(data ?? [])

  useEffect(() => {
    setPets(data ?? [])
  }, [data])

  const handleSortOptionChange = useCallback(
    (option: SORTING_OPTIONS_TYPE) => {
      setPets(
        [...pets].sort((a: Pet, b: Pet) => {
          switch (option) {
            case 'Name':
              return a.name.localeCompare(b.name)

            case 'Kind':
              return a.kind.localeCompare(b.kind)

            case 'Weight':
              return a.weight - b.weight

            case 'Height':
              return a.height - b.height

            case 'Length':
              return a.length - b.length

            default:
              return 0
          }
        })
      )
    },
    [pets]
  )

  return (
    <PetContext.Provider
      value={{
        pets,
        isLoading,
        hasError,
        handleSortOptionChange
      }}
    >
      {children}
    </PetContext.Provider>
  )
}

export default PetProvider
