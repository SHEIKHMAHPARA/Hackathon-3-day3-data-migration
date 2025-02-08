import Image from "next/image"

export default function ClientLogos() {
  const clients = [
    {
      name: "Hooli",
      logo: "/fa-brands-1.png",
      width: 120,
      height: 40,
    },
    {
      name: "Lyft",
      logo: "/fa-brands-2.png",
      width: 100,
      height: 40,
    },
    {
      name: "Feather",
      logo: "/fa-brands-3.png",
      width: 80,
      height: 40,
    },
    {
      name: "Stripe",
      logo: "/fa-brands-4.png",
      width: 120,
      height: 40,
    },
    {
      name: "AWS",
      logo: "/fa-brands-5.png",
      width: 100,
      height: 40,
    },
    {
      name: "Reddit",
      logo: "/fa-brands-6.png",
      width: 80,
      height: 40,
    },
  ]

  return (
    <div className="w-full bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center w-full">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={client.width}
                height={client.height}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

