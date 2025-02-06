import React, { useEffect, useState } from 'react'

const DarkModeButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const darkModeClass = 'dark'
    const element = document.documentElement

    if (localStorage.getItem('theme') === 'dark') {
      element.classList.add(darkModeClass)
      setIsDarkMode(true)
    } else {
      element.classList.remove(darkModeClass)
      setIsDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    const darkModeClass = 'dark'
    const element = document.documentElement

    if (element.classList.contains(darkModeClass)) {
      element.classList.remove(darkModeClass)
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      element.classList.add(darkModeClass)
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  )
}

export default DarkModeButton
