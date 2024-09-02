import { Pet } from '../types'

const PetCard = ({ kind, name, photo_url }: Pet) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={photo_url} className="card-img" alt={kind} />
          </div>

          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{kind}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetCard
