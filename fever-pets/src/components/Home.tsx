import Footer from '../ui/Footer'
import PetCard from './PetCard'
import { usePetContext } from '../hooks/usePetContext'
import SortingBar from '../ui/SortingBar'

const Home = () => {
  const { pets, isLoading, handleSortOptionChange, hasError } = usePetContext()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError}</div>
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
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Home
