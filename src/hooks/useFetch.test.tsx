import { render, renderHook, screen } from '@testing-library/react'

import Home from '@/components/pets/Home'
import { MemoryRouter } from 'react-router-dom'
import { Pet } from '@/types'
import { useFetch } from '@/hooks/useFetch'

jest.mock('./useFetch')

describe('Testing useFetch', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('it must fetch a pet', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    useFetch.mockReturnValue({
      mockData: [
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
      ],
      isLoading: false,
      hasError: null
    })

    render(
      <MemoryRouter>
        <Home />)
      </MemoryRouter>
    )
    expect(screen.getByText('navbar.name')).toBeTruthy()
  })

  test('it must handle the error', async () => {
    const { result } = renderHook(() => useFetch<Pet[]>(`url_error`))
    const { data, isLoading, hasError } = result.current

    expect(data).toBe(undefined)
    expect(isLoading).toBe(false)
    expect(hasError).toBe(null)
  })
})
