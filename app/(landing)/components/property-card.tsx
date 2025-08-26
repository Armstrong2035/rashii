import { Button } from "@/components/ui/button"
import { Heart, MapPin } from "lucide-react"
import Image from "next/image"

interface PropertyCardProps {
  title: string
  price: string
  location: string
  description: string
  image: string
  tags: string[]
  propertyType: string
}

export function PropertyCard({ title, price, location, description, image, tags, propertyType }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="">
        <div className="relative p-4 rounded-2xl">
        <div className="relative w-full h-64">
          <Image
            src={image || "/placeholder.svg?height=256&width=320&query=modern property interior"}
            alt={title}
            fill
            className="object-cover rounded-2xl bg-blend-overlay"
          />
        </div>
        <div className="absolute top-8 left-8 bg-rashii-green text-white px-3 py-1 rounded-full font-semibold">
          For Sale
        </div>

        <Heart className="text-rashii-green h-12 w- 12 absolute top-6 right-8" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>
        </div>
      </div>
    {/* Bottom part */}
      <div className="p-6">
        <p className="text-sm font-bold text-gray-900 mb-2">{propertyType}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                index === 0 ? "bg-[#57AE73] text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <Button className="w-full bg-[#57AE73] hover:bg-[#4a9863] text-white rounded-full py-3">Get Enquiries</Button>
      </div>
    </div>
  )
}
