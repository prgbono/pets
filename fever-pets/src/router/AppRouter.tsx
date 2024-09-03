import { Navigate, Route, Routes } from 'react-router-dom'
import PetDetail from '../components/PetDetail'
import Home from '../components/Home'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pets/:id" element={<PetDetail />} />
        {/* TODO:  <Route path="*" element={<NotFound />}*/}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default AppRouter
