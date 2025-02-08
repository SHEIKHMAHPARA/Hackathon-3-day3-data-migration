import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ShopHeader() {
  return (
    <header className="w-full bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Shop Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Shop</h1>

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </li>
              <li>
                <span className="text-slate-400" aria-current="page">
                  Shop
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  )
}

