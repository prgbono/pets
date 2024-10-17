import PetCard from './PetCard'
import { PetOfTheDayProps } from '@/types'

const PetOfTheDay: React.FC<PetOfTheDayProps> = ({
  pet,
  onCloseModal,
  showPetOfTheDay
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        showPetOfTheDay ? 'block' : 'hidden'
      }`}
      tabIndex={-1}
    >
      <div className="max-w-lg bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4">
          <h5 className="text-lg font-semibold">Pet of the Day</h5>
        </div>
        <div className="p-4">
          <PetCard {...pet} />
        </div>
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
            onClick={onCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default PetOfTheDay
