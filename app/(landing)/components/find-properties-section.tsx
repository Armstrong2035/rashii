import { PropertyCard } from "./property-card"

const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Umm Al Quwain"]

const properties = Array(6)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: "Modern Bungalow",
    price: "$2,000",
    location: "20-30 Steinway St Dubai",
    description: "Newly 3 bed room bungalow available at giveaway price well furnished with furniture",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Top Pick", "8 Bungalow left"],
  }))

export function FindPropertiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find properties in These cities</h2>
          <p className="text-gray-600 text-lg">Handpicked properties by our team</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {cities.map((city, index) => (
            <button
              key={city}
              className={`px-6 py-3 rounded-full border transition-colors ${
                index === 0
                  ? "bg-[#57AE73] text-white border-[#57AE73]"
                  : "bg-white text-gray-600 border-gray-300 hover:border-[#57AE73] hover:text-[#57AE73]"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
