import { useCallback, useState } from 'react'

import { DAYS_PER_MONTH } from '@/utils/constants'
import Footer from '@/ui/Footer'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import { Pet } from '@/types'
import PetOfTheDay from './PetOfTheDay'
import SortingBar from '@/ui/SortingBar'
import { usePetContext } from '@/hooks/pets/usePetContext'
import Pagination from '../common/Pagination'
import PetList from './PetList'

const Home = () => {
  const { pets, onSortOptionChange } = usePetContext()

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

  const onCloseModal = () => setShowPetOfTheDay(false)

  return (
    <>
      <LanguageSwitcher />
      <SortingBar
        onSortOptionChange={onSortOptionChange}
        onPetOfTheDayClick={onPetOfTheDayClick}
      />
      <PetList />
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

      <Pagination />
      <Footer />
    </>
  )
}

export default Home
