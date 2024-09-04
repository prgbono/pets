import { Link } from 'react-router-dom'
import { Pet } from '../types'
import { calculatePetHealth, getTextColorClass } from '../utils'

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
    <div className="col animate__animated animate__fadeIn">
      <div className="card border border-dark">
        <Link to={`/pets/${id}`}>
          <div className="row no-gutters">
            <div className="col-4">
              <img src={photo_url} className="card-img" alt={kind} />
            </div>

            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">
                  {name}
                  <span className="text-secondary fs-6">
                    &nbsp;&nbsp;{kind}
                  </span>
                </h5>
                <h6 className="card-text text-black">
                  {`Weight: ${weight}, Height: ${height}`}
                </h6>
                <h6 className={`card-subtitle ${getTextColorClass(health)}`}>
                  {health}
                </h6>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PetCard
