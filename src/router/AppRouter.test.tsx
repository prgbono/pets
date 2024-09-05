import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import Home from '../components/pets/Home'
import { PetContext } from '../context/PetContext'

describe('Testing <AppRouter />', () => {
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
            isLoading: false,
            hasError: null,
            onSortOptionChange: jest.fn()
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
