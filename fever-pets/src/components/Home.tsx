import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Pet, SORTING_OPTIONS_TYPE } from '../types'
import Footer from '../ui/Footer'
import SortingBar from '../ui/SortingBar'
import { API_URL } from '../utils/constants'
import PetCard from './PetCard'

const Home = () => {
  const { data, isLoading, hasError } = useFetch<Pet[]>(API_URL)

  const [pets, setPets] = useState<Pet[]>(data ?? [])

  useEffect(() => {
    setPets(data ?? [])
  }, [data])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError}</div>
  }

  const handleSortOptionChange = (option: SORTING_OPTIONS_TYPE) => {
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
  }

  function handlePetOfTheDay(): void {
    // TODO:
  }

  return (
    <>
      <SortingBar
        onSortOptionChange={handleSortOptionChange}
        onPetOfTheDayClick={handlePetOfTheDay}
      />

      <div className="row rows-cols-1 row-cols-md-3 g-3 pb-3">
        {/* {data?.map((pet) => ( */}
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Home
