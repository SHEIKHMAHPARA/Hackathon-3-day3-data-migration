import { ClassicProduct } from "./product-card"

const products = [
  {
    imageUrl: "/product5.png", // Replace with yellow turtleneck image
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    colorVariants: [
      { color: "Blue", class: "bg-blue-500" },
      { color: "Teal", class: "bg-teal-500" },
      { color: "Orange", class: "bg-orange-500" },
      { color: "Black", class: "bg-black" },
    ],
  },
  {
    imageUrl: "/product6.png", // Replace with patterned t-shirt image
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    colorVariants: [
      { color: "Blue", class: "bg-blue-500" },
      { color: "Teal", class: "bg-teal-500" },
      { color: "Orange", class: "bg-orange-500" },
      { color: "Black", class: "bg-black" },
    ],
  },
  {
    imageUrl: "/product7.png", // Replace with pink top image
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    colorVariants: [
      { color: "Blue", class: "bg-blue-500" },
      { color: "Teal", class: "bg-teal-500" },
      { color: "Orange", class: "bg-orange-500" },
      { color: "Black", class: "bg-black" },
    ],
  },
  {
    imageUrl: "/product8.png", // Replace with brown jacket image
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    colorVariants: [
      { color: "Blue", class: "bg-blue-500" },
      { color: "Teal", class: "bg-teal-500" },
      { color: "Orange", class: "bg-orange-500" },
      { color: "Black", class: "bg-black" },
    ],
  },
  {
    imageUrl: "/product9.png", // Replace with gray coat image
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    colorVariants: [
      { color: "Blue", class: "bg-blue-500" },
      { color: "Teal", class: "bg-teal-500" },
      { color: "Orange", class: "bg-orange-500" },
      { color: "Black", class: "bg-black" },
    ],
  },
  {
    imageUrl: "/product10.png", // Replace with yellow cardigan image
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    colorVariants: [
      { color: "Blue", class: "bg-blue-500" },
      { color: "Teal", class: "bg-teal-500" },
      { color: "Orange", class: "bg-orange-500" },
      { color: "Black", class: "bg-black" },
    ],
  },
  {
    imageUrl: "/product11.png", // Replace with hoodie image
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    colorVariants: [
      { color: "Blue", class: "bg-blue-500" },
      { color: "Teal", class: "bg-teal-500" },
      { color: "Orange", class: "bg-orange-500" },
      { color: "Black", class: "bg-black" },
    ],
  },
  {
    imageUrl: "/product12.png", // Replace with black t-shirt image
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    colorVariants: [
      { color: "Blue", class: "bg-blue-500" },
      { color: "Teal", class: "bg-teal-500" },
      { color: "Orange", class: "bg-orange-500" },
      { color: "Black", class: "bg-black" },
    ],
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-xl text-gray-600">Featured Products</p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">BESTSELLER PRODUCTS</h2>
          <p className="mt-4 text-gray-600">Problems trying to resolve the conflict between</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ClassicProduct key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

