'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="focus:outline-none ml-6 mr-10">
      {theme === 'light' ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
};

const Logo = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <img 
      src={theme === 'dark' ? "https://newcryptorder.com/img/logos/logo01.svg" : "https://newcryptorder.com/img/logos/logo09.svg"}
      alt="Matrix"
      className='h-18 w-36 ml-8'
    />
  )
}

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <img 
      src={theme === 'dark' ? "https://i.pinimg.com/474x/05/dd/f7/05ddf781b8f60fd88371923c0047595c.jpg" : "https://i.pinimg.com/474x/05/dd/f7/05ddf781b8f60fd88371923c0047595c.jpg"}
      alt="TMT"
      className='h-full object-contain object-bottom'
      width={360}
    />
  )
}

export default ThemeToggle;
export { Logo };
export { Hero };