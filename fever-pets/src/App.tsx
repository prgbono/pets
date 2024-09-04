import './App.css'
import PetProvider from './context/PetProvider'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <PetProvider>
      <AppRouter />
    </PetProvider>
  )
}

export default App
