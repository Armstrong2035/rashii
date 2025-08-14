import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

interface PropertyCardProps {
  title: string
  price: string
  location: string
  description: string
  image: string
  tags: string[]
}

export function PropertyCard({ title, price, location, description, image, tags }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4 bg-[#57AE73] text-white px-3 py-1 rounded-full font-semibold">
          {price}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

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
