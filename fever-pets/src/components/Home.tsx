import { useFetch } from '../hooks/useFetch'
import { Pet } from '../types'
import Footer from '../ui/Footer'
import SortingBar from '../ui/SortingBar'
import { API_URL } from '../utils/constants'
import PetCard from './PetCard'

const Home = () => {
  const { data, isLoading, hasError } = useFetch<Pet[]>(API_URL)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError}</div>
  }

  const handleSortOptionChange = (option: string) => {
    // TODO: 
    console.log('handleSortOptionChange, option: ' + option)
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
        {data?.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Home
