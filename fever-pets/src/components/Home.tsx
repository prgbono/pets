import { useFetch } from '../hooks/useFetch'
import { Pet } from '../types'
import { API_URL } from '../utils/constants'
import PetCard from './PetCard'

const Home = () => {
  const { data, isLoading, hasError } = useFetch<Pet[]>(API_URL)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError}</div>
  }

  return (
    <>
      <h1>Pets</h1>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {data?.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>
    </>
  )
}

export default Home
