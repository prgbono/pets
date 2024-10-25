import { useCallback, useEffect, useState } from 'react'

type FetchState<T> = {
  data: T | null
  isLoading: boolean
  hasError: string | null
}

export const useFetch = <T = unknown>(url: string | null) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: !!url,
    hasError: null
  })

  const fetchData = useCallback(async () => {
    if (!url) return

    setState({ data: null, isLoading: true, hasError: null })

    try {
      const resp = await fetch(url)

      if (!resp.ok) {
        throw new Error('Failed to fetch data')
      }

      const data: T = await resp.json()

      setState({ data, isLoading: false, hasError: null })
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
    fetchData()
  }, [fetchData])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
