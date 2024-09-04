import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Pet } from '../../types'
import { API_URL } from '../../utils/constants'

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
    <div className="row mt-5">
      <div className="col-6">
        <img
          src={data.photo_url}
          alt={data.name}
          className="img-thumbnail img-fluid w-100 animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-6">
        <h3>{data.name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Kind:</b> {data.kind}
          </li>
          <li className="list-group-item">
            <b>Weight:</b> {data.weight}
          </li>
          <li className="list-group-item">
            <b>Height:</b> {data.height}
          </li>
          <li className="list-group-item">
            <b>Length:</b> {data.length}
          </li>
          {data.kind === 'cat' && (
            <li className="list-group-item">
              <b>Number of lives:</b> {data.number_of_lives}
            </li>
          )}
        </ul>

        <h5 className="mt-3"> Description: </h5>
        <p>{data.description}</p>

        <button className="btn btn-outline-primary" onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  )
}

export default PetDetail
