import { Navigate, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { API_URL } from '../utils/constants'
import { Pet } from '../types'

const PetDetail = () => {
  // get petId from router params
  const { id } = useParams()

  const { data, isLoading, hasError } = useFetch<Pet>(`${API_URL}/${id}`)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError}</div>
  }

  if (!data) {
    return <Navigate to="/" />
  }

  return <div>PetDetail</div>
}

export default PetDetail
