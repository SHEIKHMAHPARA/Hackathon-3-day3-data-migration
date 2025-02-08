import Image from "next/image"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import { CalendarIcon, MessageSquare } from "lucide-react"

interface Post {
  id: number
  image: string
  title: string
  description: string
  date: string
  comments: number
}

const posts: Post[] = [
  {
    id: 1,
    image: "/bottom1.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: "/bottom2.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: "/bottom3.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
]

export default function BelowProducts() {
  return (
    <section className="container mx-auto px-4 py-16 bg-background">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
        <h3 className="text-blue-500 font-medium">Practice Advice</h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Featured Posts</h2>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white rounded-lg overflow-hidden border border-gray-200">
            {/* Image Container */}
            <div className="relative h-[300px]">
              <Badge className="absolute top-4 left-4 z-10 bg-red-500 hover:bg-red-600 text-white">NEW</Badge>
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>

            <CardContent className="p-6">
              {/* Tags */}
              <div className="flex gap-3 mb-4">
                <span className="text-blue-500 hover:text-blue-600 cursor-pointer">Google</span>
                <span className="text-slate-600 hover:text-slate-700 cursor-pointer">Trending</span>
                <span className="text-slate-600 hover:text-slate-700 cursor-pointer">New</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-500 cursor-pointer">{post.title}</h3>
              <p className="text-slate-600 mb-4 line-clamp-2">{post.description}</p>

              {/* Meta Information */}
              <div className="flex justify-between items-center py-3 border-t border-gray-200">
                <div className="flex items-center gap-2 text-slate-600">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm">{post.comments} comments</span>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="mt-4">
                <a href="#" className="text-slate-800 hover:text-blue-500 font-bold inline-flex items-center gap-2">
                  Learn More
                  <span className="text-lg">→</span>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

