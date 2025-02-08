import { Button } from "../../components/ui/button";
import Image from "next/image"

export default function ClassicProduct() {
  return (
    <section className="bg-emerald-600 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row px-112px py-112px items-center gap-8">
          {/* Text Content */}
          <div className="text-white space-y-6 md:max-w-xl">
            <span className="text-lg md:text-xl font-medium">SUMMER 2020</span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Vita Classic Product</h1>

            <p className="text-lg md:text-xl opacity-90">
              We know how large objects will act, We know how are objects will act, We know
            </p>

            <div className="flex items-center gap-6">
              <span className="text-3xl md:text-4xl font-bold">$16.48</span>

              <Button className="bg-emerald-400 hover:bg-emerald-500 text-white px-8 py-6 text-lg rounded-md transition-colors">
                ADD TO CART
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="md:flex-1 w-510px h-685px gap-30px left-209 py-112 md:w-auto">
            <Image
              src="/Boy.png"
              alt="Vita Classic Product"
              className="w-full h-auto max-w-xl mx-auto md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

