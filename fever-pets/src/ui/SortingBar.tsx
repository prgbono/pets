import { useState } from 'react'
import { SORTING_OPTIONS } from '../utils/constants'
import { SORTING_OPTIONS_TYPE } from '../types'

interface SortingProps {
  onSortOptionChange: (option: SORTING_OPTIONS_TYPE) => void
  onPetOfTheDayClick: () => void
}

const SortingBar = ({
  onSortOptionChange,
  onPetOfTheDayClick
}: SortingProps) => {
  const [activeOption, setActiveOption] = useState<string>(SORTING_OPTIONS[0])

  const onSortOptionClick = (option: string) => {
    setActiveOption(option)
    onSortOptionChange(option as SORTING_OPTIONS_TYPE)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent mb-4">
      <div className="navbar-brand">Sort by...</div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          {SORTING_OPTIONS.map((option) => (
            <li
              key={option}
              className={`nav-item nav-link ${
                activeOption === option ? 'active' : ''
              }`}
              onClick={() => onSortOptionClick(option)}
            >
              <a className="nav-link" href="#" role="button">
                {option}
              </a>
            </li>
          ))}
        </ul>
        <div className="ms-auto">
          <button className="btn btn-outline-info" onClick={onPetOfTheDayClick}>
            Pet of the day
          </button>
        </div>
      </div>
    </nav>
  )
}

export default SortingBar
