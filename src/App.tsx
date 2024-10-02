import './App.css'

import AppRouter from './router/AppRouter'
import PetProvider from './context/PetProvider'

function App() {
  return (
    <PetProvider>
      <AppRouter />
    </PetProvider>
  )
}

export default App
