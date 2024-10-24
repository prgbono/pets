import { useCallback, useEffect, useState } from 'react'

import { Pet } from '@/types'
import { usePetContext } from './pets/usePetContext'

type FetchState<T> = {
  data: T | null
  isLoading: boolean
  hasError: string | null
}

export const useFetch = <T = unknown>(baseUrl: string | null) => {
  // TODO: Uncouple pagination with useFetch!!
  const { currentPage, itemsPerPage, setPets } = usePetContext()

  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: baseUrl !== null,
    hasError: null
  })

  const getFetch = useCallback(async () => {
    if (!baseUrl) return
    const url = `${baseUrl}?_page=${currentPage}&_per_page=${itemsPerPage}`
    setState((prevState) => ({
      ...prevState,
      isLoading: true
    }))

    try {
      const resp = await fetch(url as string)

      if (!resp.ok) {
        throw new Error('Failed to fetch')
      }

      const data: T = await resp.json()

      setPets(data as Pet[])

      setState({
        data,
        isLoading: false,
        hasError: null
      })
    } catch (error) {
      let errorMessage = 'An unknown error occurred'
      if (error instanceof Error) {
        errorMessage = error.message
      }
      setState({
        data: null,
        isLoading: false,
        hasError: errorMessage
      })
    }
  }, [baseUrl, currentPage, itemsPerPage, setPets])

  useEffect(() => {
    getFetch()
  }, [getFetch])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
