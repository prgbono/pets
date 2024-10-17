import { calculatePetHealth, getTextColorClass } from '@/utils'

import { Link } from 'react-router-dom'
import { Pet } from '@/types'

const PetCard = ({
  height,
  id,
  kind,
  length,
  name,
  number_of_lives,
  photo_url,
  weight
}: Pet) => {
  const health = calculatePetHealth(
    kind,
    weight,
    height,
    length,
    number_of_lives ?? 0
  ).toLocaleUpperCase()

  return (
    <div className="flex w-full animate__animated animate__fadeIn">
      <div className="flex flex-col items-center justify-center w-full h-48 bg-white border-gray-500 rounded-lg shadow-xl">
        <Link to={`/pets/${id}`} data-testid="link-to-pet-detail">
          <div className="flex mx-4">
            <div className="w-full h-auto overflow-hidden">
              <img
                src={photo_url}
                alt={kind}
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-2/3 px-4">
              <div className="p-4">
                <h5 className="text-lg font-semibold">
                  {name}
                  <span className="text-sm text-gray-600">
                    &nbsp;&nbsp;{kind}
                  </span>
                </h5>
                <h6 className="text-black">
                  {`Weight: ${weight}, Height: ${height}`}
                </h6>
                <h6 className={`${getTextColorClass(health)}`}>{health}</h6>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PetCard
