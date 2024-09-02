import { useFetch } from '../hooks/useFetch'
import { Pet } from '../types'
import { API_URL } from '../utils/constants'

const Home = () => {
  const { data, isLoading, hasError } = useFetch<Pet[]>(API_URL)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError}</div>
  }

  return (
    <div>
      <h1>Pets</h1>
      <ul>
        {data?.map((pet) => (
          <li key={pet.id}>
            <h2>{pet.name}</h2>
            <h3>{pet.kind}</h3>
            <img src={pet.photo_url} alt={pet.kind} />
            <p>{pet.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
