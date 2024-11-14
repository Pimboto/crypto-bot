import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { Search, ChevronDown, Globe, Moon, Sun } from 'lucide-react'

const prisma = new PrismaClient()

async function getAnnouncements() {
  const announcements = await prisma.announcement.findMany({
    orderBy: {
      date: 'desc',
    },
  })
  return announcements
}

export default async function AnnouncementPage() {
  const announcements = await getAnnouncements()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="flex justify-between items-center p-4 border-b border-border">
        <div className="flex items-center space-x-6">
          <img src="/logo.png" alt="Binance Logo" className="h-8" />
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-foreground hover:text-primary">Buy Crypto</Link>
            <Link href="#" className="text-foreground hover:text-primary">Markets</Link>
            <Link href="#" className="text-foreground hover:text-primary">Trade</Link>
            <Link href="#" className="text-foreground hover:text-primary">Futures</Link>
            <Link href="#" className="text-foreground hover:text-primary">Earn</Link>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary">
                Square <ChevronDown className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg hidden group-hover:block bg-background">
                <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1">
                  <Link href="#" className="block px-4 py-2 text-foreground hover:bg-accent">Square</Link>
                  <Link href="#" className="block px-4 py-2 text-foreground hover:bg-accent">Academy (Learn & Earn)</Link>
                  <Link href="#" className="block px-4 py-2 text-foreground hover:bg-accent">Blog</Link>
                  <Link href="#" className="block px-4 py-2 text-foreground hover:bg-accent">Research</Link>
                </div>
              </div>
            </div>
            <Link href="#" className="text-foreground hover:text-primary">More</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-foreground hover:text-primary">Log In</button>
          <button className="bg-primary text-primary-foreground px-4 py-1 rounded">Sign Up</button>
          <button className="text-foreground hover:text-primary"><Globe /></button>
          <button className="text-foreground hover:text-primary">
            <Moon />
          </button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-16 border-r border-border hidden md:block">
          <nav className="flex flex-col items-center py-4 space-y-6">
            {['⌂', '?', '📢', '📊', '💼', '📜', '📚'].map((icon, index) => (
              <Link key={index} href="#" className="w-8 h-8 flex items-center justify-center rounded text-foreground hover:bg-accent">
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
                className="pl-10 pr-4 py-2 rounded-md w-80 bg-input text-foreground"
              />
              <Search className="absolute left-3 top-2.5 text-muted-foreground" />
              <button className="absolute right-2 top-1 px-3 py-1 rounded bg-primary text-primary-foreground">
                Search
              </button>
            </div>
          </div>
          <div className="text-sm mb-4 text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Home</Link> {'>'}
            <Link href="#" className="hover:text-foreground"> Support Center</Link> {'>'}
            <Link href="#" className="hover:text-foreground"> Announcement</Link> {'>'} New Cryptocurrency Listing
          </div>
          <h2 className="text-xl font-semibold mb-4">New Cryptocurrency Listing</h2>
          <ul className="space-y-4">
            {announcements.map((announcement) => (
              <li key={announcement.id} className="border-b border-border pb-4">
                <Link href={`/announcement/${announcement.id}`} className="block p-2 rounded hover:bg-accent">
                  <h3 className="text-base font-medium mb-1 css-1yxx6id">
                    {announcement.title}
                    <span className="text-sm text-muted-foreground ml-2">
                      {announcement.date.toLocaleDateString()}
                    </span>
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}
