import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const prisma = new PrismaClient()

async function getAnnouncement(id: string) {
  const announcement = await prisma.announcement.findUnique({
    where: { id: parseInt(id) },
  })
  return announcement
}

export default async function AnnouncementDetail({ params }: { params: { id: string } }) {
  const announcement = await getAnnouncement(params.id)

  if (!announcement) {
    return <div>Announcement not found</div>
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <Link href="/" className="flex items-center text-primary hover:underline mb-4">
        <ChevronLeft className="mr-2" /> Back to Announcements
      </Link>
      <article className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{announcement.title}</h1>
        <p className="text-muted-foreground mb-6">
          {announcement.date.toLocaleDateString()}
        </p>
        <div className="prose dark:prose-invert">
          {announcement.content}
        </div>
      </article>
    </div>
  )
}
