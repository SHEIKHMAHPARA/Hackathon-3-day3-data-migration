import Image from "next/image"
import { Button } from "../../components/ui/button"

export default function PictureBelow() {
  return (
    <section className="container mx-auto px-4 py-12 lg:min-h-[600px] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Image container - full width on mobile, half on desktop */}
      <div className="w-full lg:w-1/2 relative">
        <Image
          src="/Below.png"
          alt="People wearing red and black plaid clothing"
          width={700}
          height={700}
          className="rounded-lg w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Content container - full width on mobile, half on desktop */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-4">
          <p className="text-gray-500 tracking-wider uppercase">SUMMER 2020</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
            Part of the Neural Universe
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            We know how large objects will act, but things on a small scale.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            BUY NOW
          </Button>
          <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
            READ MORE
          </Button>
        </div>
      </div>
    </section>
  )
}

