import React, { useEffect } from 'react'

import { API_URL } from '@/utils/constants'
import { Pet } from '@/types'
import { useFetch } from '@/hooks/useFetch'
import { usePetContext } from '@/hooks/pets/usePetContext'
import PetCard from './PetCard'
import Pagination from '../common/Pagination'

const PetList: React.FC = () => {
  const { currentPage, itemsPerPage, pets, setPets } = usePetContext()

  const { data, isLoading, hasError } = useFetch<Pet[]>(
    `${API_URL}?_page=${currentPage}&_per_page=${itemsPerPage}`
  )

  useEffect(() => {
    if (data) {
      setPets(data)
    }
  }, [data, setPets])

  if (isLoading) return <div>Loading...</div>
  if (hasError) return <div>Error: {hasError}</div>

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-3 pb-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.isArray(pets) && pets.length > 0 ? (
            <>
              {pets.map((pet) => (
                <div key={pet.id}>
                  <PetCard {...pet} />
                </div>
              ))}
            </>
          ) : (
            <p>No pets available</p>
          )}
        </div>
      </div>
      <Pagination />
    </>
  )
}

export default PetList
