import Image from "next/image"

interface ColorVariant {
  color: string
  class: string
}

interface ProductCardProps {
  imageUrl: string
  title: string
  department: string
  originalPrice: number
  salePrice: number
  colorVariants: ColorVariant[]
}

export function ClassicProduct({
  imageUrl,
  title,
  department,
  originalPrice,
  salePrice,
  colorVariants,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <Image
          src={imageUrl || "/Boy.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-1 p-4">
        <h3 className="text-center text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-center text-sm text-gray-500">{department}</p>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
          <span className="text-sm font-medium text-green-600">${salePrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-center space-x-2 pt-2">
          {colorVariants.map((variant, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full ${variant.class} border border-gray-200`}
              title={variant.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

