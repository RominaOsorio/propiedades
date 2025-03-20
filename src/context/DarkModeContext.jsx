import { createContext, useContext, useState } from 'react'

export const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('UseDarkMode must be used with a DarkModeProvider')
  }
  return context
}

export { DarkModeProvider, useDarkMode }
