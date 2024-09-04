import { PetOfTheDayProps } from '../../types'
import PetCard from './PetCard'

const PetOfTheDay: React.FC<PetOfTheDayProps> = ({
  pet,
  onCloseModal,
  showPetOfTheDay
}) => {
  return (
    <div
      className={`modal fade ${showPetOfTheDay ? 'show' : ''}`}
      tabIndex={-1}
      style={{ display: showPetOfTheDay ? 'block' : 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Pet of the Day</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCloseModal}
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <PetCard {...pet} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetOfTheDay
