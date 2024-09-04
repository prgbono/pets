import { useCallback, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { PetContext } from './PetContext'
import { Pet } from '../types'
import { API_URL } from '../utils/constants'

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { data, isLoading, hasError } = useFetch<Pet[]>(API_URL)
  const [pets, setPets] = useState<Pet[]>(data ?? [])

  useEffect(() => {
    setPets(data ?? [])
  }, [data])

  const onSortOptionChange = useCallback(
    (option: string) => {
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
