import { fireEvent, render, screen } from '@testing-library/react'

import AppRouter from './AppRouter'
import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/constants'
import Home from '@/components/pets/Home'
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

describe('Testing <AppRouter />', () => {
  beforeEach(() => {
    ;(mockedUseFetch as jest.Mock).mockReturnValue({
      data: pets,
      isLoading: false,
      hasError: null
    })
  })

  test('it must display Home', () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    )
    expect(screen.getByText('sort_by')).toBeTruthy()
  })

  test('it must display the pet detail page', () => {
    render(
      <MemoryRouter initialEntries={['/pets/1']}>
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

    expect(screen.getByTestId('link-to-pet-detail')).toBeTruthy()
    fireEvent.click(screen.getByTestId('link-to-pet-detail'))
    expect(screen.getByText('mock name')).toBeTruthy()
  })
})
