import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '@/components/pets/Home'
import PetDetail from '@/components/pets/PetDetail'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pets/:id" element={<PetDetail />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default AppRouter
