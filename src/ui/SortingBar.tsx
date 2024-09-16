import { useState } from 'react'
import { SORTING_OPTIONS } from '../utils/constants'
import { SortingBarProps } from '../types'
import { useTranslation } from 'react-i18next'

const SortingBar = ({
  onSortOptionChange,
  onPetOfTheDayClick
}: SortingBarProps) => {
  const { t } = useTranslation()
  const [activeOption, setActiveOption] = useState<string>(SORTING_OPTIONS[0])

  const onSortOptionClick = (option: string) => {
    setActiveOption(option)
    onSortOptionChange(option as string)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent mb-4">
      <div className="container-fluid">
        <a className="navbar-brand">{t('sort_by')}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav me-auto">
            {SORTING_OPTIONS.map((option) => (
              <li
                key={option}
                className={`nav-item ${
                  activeOption === option ? 'active nav-item-active' : ''
                }`}
                onClick={() => onSortOptionClick(option)}
              >
                <a className="nav-link" href="#" role="button">
                  {t(option)}
                </a>
              </li>
            ))}
          </ul>
          <div className="ms-auto">
            <button
              className="btn btn-outline-primary"
              onClick={onPetOfTheDayClick}
            >
              {t('navbar.pet_of_the_day')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SortingBar
