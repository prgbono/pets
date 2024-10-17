import { SORTING_OPTIONS } from '@/utils/constants'
import { SortingBarProps } from '@/types'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const SortingBar = ({
  onSortOptionChange,
  onPetOfTheDayClick
}: SortingBarProps) => {
  const { t } = useTranslation()
  const [activeOption, setActiveOption] = useState<string>(
    sessionStorage.getItem('sortedBy') || ''
  )

  const onSortOptionClick = (option: string) => {
    setActiveOption(option)
    onSortOptionChange(option as string)
  }

  return (
    <nav className="flex items-center justify-between mb-4 bg-transparent">
      <div className="container flex items-center justify-between mx-auto">
        <span className="text-lg text-blue-500 cursor-default">
          {t('sort_by')}
        </span>
        <div className="hidden p-4 md:flex" id="navbarResponsive">
          <ul className="flex space-x-4">
            {SORTING_OPTIONS.map((option) => (
              <li
                key={option}
                className={`cursor-pointer ${
                  activeOption === option
                    ? 'font-bold text-blue-500'
                    : 'text-gray-700'
                }`}
                onClick={() => onSortOptionClick(option)}
              >
                <span className="hover:text-blue-500" role="button">
                  {t(option)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto">
          <button
            className="px-4 py-2 text-blue-500 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
            onClick={onPetOfTheDayClick}
          >
            {t('navbar.pet_of_the_day')}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default SortingBar
