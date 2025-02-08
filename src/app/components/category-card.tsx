import Image from 'next/image'
import Link from 'next/link'
import { CategoryCard as CategoryCardType } from '../../types/category';

interface CategoryCardProps {
  category: CategoryCardType;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href="#" className="group block relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
      <div className={`relative aspect-[3/4] w-full ${category.backgroundColor}`}>
        <Image
          src={category.imageUrl || "/placeholder.svg"}
          alt={category.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
          <p className="text-sm opacity-90">{category.itemCount} Items</p>
        </div>
      </div>
    </Link>
  )
}
