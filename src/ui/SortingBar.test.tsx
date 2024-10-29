import { fireEvent, render, screen } from '@testing-library/react'

import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/constants'
import { PetContext } from '@/context/PetContext'
import SortingBar from './SortingBar'

describe('Testing in <SortingBar /> (Navbar)', () => {
  const pets = [
    {
      id: 1,
      name: 'mock name',
      kind: 'dog',
      weight: 7652,
      height: 55,
      length: 145,
      photo_url: 'https://cdn2.thedogapi.com/images/BJT0Jx5Nm_1280.jpg',
      description: 'Mocked description'
    }
  ]

  beforeEach(() => jest.clearAllMocks())

  test('it must call the function to sort pets', () => {
    const mockOnSortOptionChange = jest.fn()
    render(
      <PetContext.Provider
        value={{
          pets,
          setPets: jest.fn(),
          currentPage: 1,
          itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
          onSortOptionChange: jest.fn(),
          handleNextPage: jest.fn(),
          handlePrevPage: jest.fn()
        }}
      >
        <SortingBar
          onSortOptionChange={mockOnSortOptionChange}
          onPetOfTheDayClick={jest.fn()}
        />
      </PetContext.Provider>
    )

    const sortButtons = screen.getAllByRole('button')
    const sortByNameButton = sortButtons[1]
    fireEvent.click(sortByNameButton)

    expect(mockOnSortOptionChange).toHaveBeenCalled()
  })
})
