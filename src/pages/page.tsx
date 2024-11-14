'use client'

import { useState, useEffect } from 'react'
import { Search, ChevronDown, Globe, Moon, Sun } from 'lucide-react'
import Link from 'next/link'

const announcements = [
  { id: 1, title: "Notice on New Trading Pairs & Trading Bots Services on Binance Spot - 2024-11-15", date: "2024-11-14" },
  { id: 2, title: "Introducing Usual (USUAL) on Binance Launchpool and Pre-Market!", date: "2024-11-14" },
  { id: 3, title: "Binance Futures Will Launch USDⓈ-Margined HIPPOUSDT and 1000XUSDT Perpetual Contract With up to 75x Leverage", date: "2024-11-13" },
]

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center space-x-6">
          <img src="/logo.png" alt="Binance Logo" className="h-8" />
          <nav className="hidden md:flex space-x-6">
            <Link href="#">Buy Crypto</Link>
            <Link href="#">Markets</Link>
            <Link href="#">Trade</Link>
            <Link href="#">Futures</Link>
            <Link href="#">Earn</Link>
            <div className="relative group">
              <button className="flex items-center">
                Square <ChevronDown className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg hidden group-hover:block">
                <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1">
                  <Link href="#" className="block px-4 py-2">Square</Link>
                  <Link href="#" className="block px-4 py-2">Academy (Learn & Earn)</Link>
                  <Link href="#" className="block px-4 py-2">Blog</Link>
                  <Link href="#" className="block px-4 py-2">Research</Link>
                </div>
              </div>
            </div>
            <Link href="#">More</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button>Log In</button>
          <button>Sign Up</button>
          <button><Globe /></button>
          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-16 border-r hidden md:block">
          <nav className="flex flex-col items-center py-4 space-y-6">
            {['⌂', '?', '📢', '📊', '💼', '📜', '📚'].map((icon, index) => (
              <Link key={index} href="#" className="w-8 h-8 flex items-center justify-center rounded">
                {icon}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Announcement</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search announcements"
                className="pl-10 pr-4 py-2 rounded-md w-80"
              />
              <Search className="absolute left-3 top-2.5" />
              <button className="absolute right-2 top-1 px-3 py-1 rounded">
                Search
              </button>
            </div>
          </div>
          <div className="text-sm mb-4">
            <Link href="#">Home</Link> {'>'}
            <Link href="#"> Support Center</Link> {'>'}
            <Link href="#"> Announcement</Link> {'>'} New Cryptocurrency Listing
          </div>
          <h2 className="text-xl font-semibold mb-4">New Cryptocurrency Listing</h2>
          <ul className="space-y-4">
            {announcements.map((announcement) => (
              <li key={announcement.id} className="border-b pb-4">
                <Link href="#" className="block p-2 rounded">
                  <h3 className="text-base font-medium mb-1">{announcement.title}    <span className="text-sm">{announcement.date}</span></h3>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}
