"use client"

import { PropertyCard } from "./property-card"
import { useRef } from "react"

const featuredProperties = [
  {
    id: 1,
    title: "Villa",
    price: "$2,000",
    location: "20-30 Steinway St Dubai",
    description: "Newly 3 bed room bungalow available at giveaway price well furnished with furniture",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Top Pick", "8 Bungalow left"],
  },
  {
    id: 2,
    title: "Apartment",
    price: "$2,000",
    location: "20-30 Steinway St Dubai",
    description: "Newly 3 bed room bungalow available at giveaway price well furnished with furniture",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Top Pick", "8 Bungalow left"],
  },
  {
    id: 3,
    title: "Modern Bungalow",
    price: "$2,000",
    location: "20-30 Steinway St Dubai",
    description: "Newly 3 bed room bungalow available at giveaway price well furnished with furniture",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Top Pick", "8 Bungalow left"],
  },
]

export function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl p-12 mb-16 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between h-[316px]">
            <div className="flex items-center lg:w-1/2 mb-8 lg:mb-0 bg-[#D9F8FF] h-full">
            
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Featured
                <br />
                property
              </h2>
              <div className="w-32 h-32 bg-gray-300 rounded-lg">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/website-directory-959bd.firebasestorage.app/o/rashii-images%2FApartment%201.png?alt=media&token=6796ae9f-0d30-46c8-88c8-031e0b6de5a8"
                  alt="Featured building"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                Discover standout spaces that elevate your lifestyle — curated for comfort, design, and location. Find
                the one that feels like home.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredProperties.map((property) => (
            <div key={property.id} className="flex-shrink-0 w-80">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
