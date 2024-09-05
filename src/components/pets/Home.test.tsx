import { render, screen } from '@testing-library/react'
import Home from './Home'
import { PetContext } from '../../context/PetContext'
import { MemoryRouter } from 'react-router-dom'

describe('Tests in <Home /> (PetContext)', () => {
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

  test('it must show Home with no pets', () => {
    render(
      <PetContext.Provider
        value={{
          pets: [],
          isLoading: false,
          hasError: null,
          onSortOptionChange: jest.fn()
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
            isLoading: false,
            hasError: null,
            onSortOptionChange: jest.fn()
          }}
        >
          <Home />
        </PetContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('mock name')).toBeTruthy()
  })
})
