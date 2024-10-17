import { Navigate, useNavigate, useParams } from 'react-router-dom'

import { API_URL } from '@/utils/constants'
import { Pet } from '@/types'
import { useFetch } from '@/hooks/useFetch'

const PetDetail = () => {
  // get petId from router params
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, hasError } = useFetch<Pet>(`${API_URL}/${id}`)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError}</div>
  }

  const goBack = () => {
    navigate('/')
  }

  if (!data) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex flex-wrap mt-20">
      <div className="relative w-full overflow-hidden border rounded-md h-96 animate-fade-in-left">
        <img
          src={data.photo_url}
          alt={data.name}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="w-1/2 pl-5">
        <h5 className="mb-2 text-xl font-semibold text-gray-800">
          {data.name}
        </h5>
        <ul className="list-disc list-inside">
          <li className="py-2">
            <b>Kind:</b> {data.kind}
          </li>
          <li className="py-2">
            <b>Weight:</b> {data.weight}
          </li>
          <li className="py-2">
            <b>Height:</b> {data.height}
          </li>
          <li className="py-2">
            <b>Length:</b> {data.length}
          </li>
          {data.kind === 'cat' && (
            <li className="py-2">
              <b>Number of lives:</b> {data.number_of_lives}
            </li>
          )}
        </ul>

        <h5 className="mt-4">
          <b>Description:</b>
        </h5>
        <p>{data.description}</p>

        <button
          className="px-4 py-2 mt-4 text-blue-500 bg-transparent border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
          onClick={goBack}
        >
          Go back
        </button>
      </div>
    </div>
  )
}

export default PetDetail
