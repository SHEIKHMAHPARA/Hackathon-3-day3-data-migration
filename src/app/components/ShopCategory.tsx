"use client";
import Image from "next/image"
import Link from "next/link"

interface CategoryCard {
  id: number
  title: string
  itemCount: number
  image: string
  href: string
  backgroundColor: string
}

const categories: CategoryCard[] = [
  {
    id: 1,
    title: "",
    itemCount: 5,
    image:
      "/shop1.png",
    href: "/shop1/cloths",
    backgroundColor: "bg-gray-800",
  },
  {
    id: 2,
    title: "",
    itemCount: 5,
    image:
      "/shop2.png",
    href: "/shop2/cloths",
    backgroundColor: "bg-cyan-500",
  },
  {
    id: 3,
    title: "",
    itemCount: 5,
    image:
      "/shop3.png",
    href: "/shop3/cloths",
    backgroundColor: "bg-pink-300",
  },
  {
    id: 4,
    title: "",
    itemCount: 5,
    image:
      "/shop4.png",
    href: "/shop4/cloths",
    backgroundColor: "bg-pink-400",
  },
  {
    id: 5,
    title: "",
    itemCount: 5,
    image:
      "/shop5.png",
    href: "/shop5/cloths",
    backgroundColor: "bg-pink-500",
  },
]

export default function ShopCategories() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex gap-2 m-8 py-5 w-1088 h-271 left-176 lg:w-1088 pb-48">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className={`relative w-1/5 min-w-[300px] aspect-[3/4] group ${category.backgroundColor}`}
          >
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={`${category.title} category`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-white">
              <h3 className="text-2xl font-bold tracking-wider mb-2">{category.title}</h3>
              <p className="text-sm font-medium">{category.itemCount} Items</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Scroll Version */}
      <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={`relative flex-none w-[85vw] aspect-[3/4] snap-start group ${category.backgroundColor} mr-4`}
            >
              {/* Image Container */}
              <div className="absolute inset-0">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={`${category.title} category`}
                  fill
                  className="object-cover"
                  sizes="85vw"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-bold tracking-wider mb-2">{category.title}</h3>
                <p className="text-sm font-medium">{category.itemCount} Items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

