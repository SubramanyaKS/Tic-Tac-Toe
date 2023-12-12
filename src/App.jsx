import './App.css'
import Navbar from './components/NavBar/Navbar'
import { AiProvider } from './context/AIContext'
import Home from './pages/Home'

function App() {
  return (
    <AiProvider>
      <Navbar/>
      <Home/>
    </AiProvider>
  )
}

export default App
