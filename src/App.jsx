import Header from './components/Header'
import { DarkModeProvider } from './context/DarkModeContext'
import About from './layout/About'
import Hero from './layout/Hero'
import PopularAreas from './layout/PopularAreas'

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
      </DarkModeProvider>
    </>
  )
}

export default App
