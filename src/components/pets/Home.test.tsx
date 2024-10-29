import { render, screen } from '@testing-library/react'

import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/constants'
import Home from './Home'
import { MemoryRouter } from 'react-router-dom'
import { PetContext } from '@/context/PetContext'
import { useFetch as mockedUseFetch } from '@/hooks/useFetch'

jest.mock('@/hooks/useFetch')

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
describe('Tests in <Home /> (PetContext)', () => {
  beforeEach(() => {
    ;(mockedUseFetch as jest.Mock).mockReturnValue({
      data: pets,
      isLoading: false,
      hasError: null
    })
  })

  test('it must show Home with no pets', () => {
    ;(mockedUseFetch as jest.Mock).mockReturnValueOnce({
      data: [],
      isLoading: false,
      hasError: null
    })
    render(
      <PetContext.Provider
        value={{
          pets: [],
          setPets: jest.fn(),
          currentPage: 1,
          itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
          onSortOptionChange: jest.fn(),
          handleNextPage: jest.fn(),
          handlePrevPage: jest.fn()
        }}
      >
        <Home />
      </PetContext.Provider>
    )
    expect(screen.queryByText('mock name')).not.toBeInTheDocument()
  })

  test('it must show Home with pets', () => {
    render(
      <MemoryRouter>
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
          <Home />
        </PetContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('mock name')).toBeTruthy()
  })
})
