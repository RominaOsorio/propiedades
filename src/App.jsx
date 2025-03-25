import Header from './components/Header'
import { DarkModeProvider } from './context/DarkModeContext'
import About from './layout/About'
import Hero from './layout/Hero'
import PopularAreas from './layout/PopularAreas'
import Properties from './layout/Properties'
import Services from './layout/Services'
import Clients from './layout/Clients'

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
      </DarkModeProvider>
    </>
  )
}

export default App
