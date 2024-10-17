import { useCallback, useState } from 'react'

import { DAYS_PER_MONTH } from '@/utils/constants'
import Footer from '@/ui/Footer'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import { Pet } from '@/types'
import PetCard from './PetCard'
import PetOfTheDay from './PetOfTheDay'
import SortingBar from '@/ui/SortingBar'
import { usePetContext } from '@/hooks/pets/usePetContext'

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
      <LanguageSwitcher />
      <SortingBar
        onSortOptionChange={onSortOptionChange}
        onPetOfTheDayClick={onPetOfTheDayClick}
      />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-3 pb-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pets?.map((pet) => (
            <div key={pet.id}>
              <PetCard {...pet} />
            </div>
          ))}
        </div>
      </div>

      {showPetOfTheDay && petOfTheDay && (
        <PetOfTheDay
          pet={petOfTheDay}
          onCloseModal={onCloseModal}
          showPetOfTheDay={showPetOfTheDay}
        />
      )}
      {showPetOfTheDay && petOfTheDay && (
        <div className="transition-opacity duration-300 bg-black bg-opacity-50"></div>
      )}

      <Footer />
    </>
  )
}

export default Home
