import Header from './components/Header'
import { DarkModeProvider } from './context/DarkModeContext'
import Hero from './layout/Hero'

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
      </DarkModeProvider>
    </>
  )
}

export default App
