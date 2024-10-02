import { useCallback, useEffect, useState } from 'react'

type FetchState<T> = {
  data: T | null
  isLoading: boolean
  hasError: string | null
}

export const useFetch = <T = unknown>(url: string | null) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: url !== null,
    hasError: null
  })

  const getFetch = useCallback(async () => {
    if (!url) return

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
  }, [url])

  useEffect(() => {
    getFetch()
  }, [getFetch])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
