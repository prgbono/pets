import Footer from '../ui/Footer'
import PetCard from './PetCard'
import { usePetContext } from '../hooks/usePetContext'
import SortingBar from '../ui/SortingBar'
import { useCallback, useState } from 'react'
import PetOfTheDay from './PetOfTheDay'
import { Pet } from '../types'
import { DAYS_PER_MONTH } from '../utils/constants'

const Home = () => {
  const { pets, isLoading, onSortOptionChange, hasError } = usePetContext()

  const [showPetOfTheDay, setShowPetOfTheDay] = useState(false)
  const [petOfTheDay, setPetOfTheDay] = useState<Pet | null>(null)

  const onPetOfTheDayClick = useCallback(() => {
    const today = new Date()
    const dayOfYear = today.getMonth() * DAYS_PER_MONTH + today.getDate()
    const petIndex = dayOfYear % pets.length
    const selectedPet = pets[petIndex]
    setPetOfTheDay(selectedPet)
    setShowPetOfTheDay(true)
  }, [pets])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError}</div>
  }

  const onCloseModal = () => setShowPetOfTheDay(false)

  return (
    <>
      <SortingBar
        onSortOptionChange={onSortOptionChange}
        onPetOfTheDayClick={onPetOfTheDayClick}
      />

      <div className="row rows-cols-1 row-cols-md-3 g-3 pb-3">
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>

      {showPetOfTheDay && petOfTheDay && (
        <PetOfTheDay
          pet={petOfTheDay}
          onCloseModal={onCloseModal}
          showPetOfTheDay={showPetOfTheDay}
        />
      )}
      {showPetOfTheDay && petOfTheDay && (
        <div className="modal-backdrop fade show"></div>
      )}

      <Footer />
    </>
  )
}

export default Home
