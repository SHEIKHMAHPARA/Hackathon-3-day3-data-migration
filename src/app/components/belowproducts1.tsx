"use client"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CalendarIcon, MessageSquare } from "lucide-react"

const posts = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/container-4RMA8UDmDHGbuTXvhJNjartIJG0nPT.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  // Additional posts would follow the same structure
]

export default function BelowProducts() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-blue-500 font-medium">Practice Advice</h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Featured Posts</h1>
        <p className="max-w-2xl mx-auto text-slate-600">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden group">
            {/* Card Image Container */}
            <div className="relative h-64 overflow-hidden">
              <Badge className="absolute top-4 left-4 z-10 bg-red-500 text-white">NEW</Badge>
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Tags */}
            <CardHeader className="flex flex-row gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm text-slate-500 hover:text-blue-500 cursor-pointer">
                  {tag}
                </span>
              ))}
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-3">
              <h3 className="text-xl font-bold text-slate-800 line-clamp-2">{post.title}</h3>
              <p className="text-slate-600 line-clamp-2">{post.description}</p>
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex justify-between items-center border-t pt-4">
              <div className="flex items-center gap-2 text-slate-500">
                <CalendarIcon className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">{post.comments} comments</span>
              </div>
            </CardFooter>

            <div className="p-4 border-t">
              <Button variant="ghost" className="text-slate-800 hover:text-blue-500 p-0 h-auto font-semibold">
                Learn More →
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

