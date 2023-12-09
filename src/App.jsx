import './App.css'
import { AiProvider } from './context/AIContext'
import Home from './pages/Home'

function App() {
  return (
    <AiProvider>
      <Home/>
    </AiProvider>
  )
}

export default App
