"use client"

import { PropertyCard } from "./property-card"
import { useRef } from "react"
import Image from "next/image"

const featuredProperties = [
  {
    id: 1,
    propertyType: "Villa",
    title: "North Dillard Street",
    price: "$2,000",
    location: "20-30 Steinway St Dubai",
    description: "Newly 3 bed room bungalow available at giveaway price well furnished with furniture",
    image: "https://firebasestorage.googleapis.com/v0/b/website-directory-959bd.firebasestorage.app/o/rashii-images%2Flisting-card.jpg?alt=media&token=800bac70-1754-49d0-8df2-99671eb48140",
    tags: ["Top Pick", "8 Bungalow left"],
  },
  {
    id: 2,
    propertyType: "Apartment",
    title: "North Dillard Street",
    price: "$2,000",
    location: "20-30 Steinway St Dubai",
    description: "Newly 3 bed room bungalow available at giveaway price well furnished with furniture",
    image: "https://firebasestorage.googleapis.com/v0/b/website-directory-959bd.firebasestorage.app/o/rashii-images%2Flisting-card.jpg?alt=media&token=800bac70-1754-49d0-8df2-99671eb48140",
    tags: ["Top Pick", "8 Bungalow left"],
  },
  {
    id: 3,
    propertyType: "Modern Bungalow",
    title: "North Dillard Street",
    price: "$2,000",
    location: "20-30 Steinway St Dubai",
    description: "Newly 3 bed room bungalow available at giveaway price well furnished with furniture",
    image: "https://firebasestorage.googleapis.com/v0/b/website-directory-959bd.firebasestorage.app/o/rashii-images%2Flisting-card.jpg?alt=media&token=800bac70-1754-49d0-8df2-99671eb48140",
    tags: ["Top Pick", "8 Bungalow left"],
  },
]

export function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className=" rounded-3xl mb-16 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-end justify-between">
            <div className="flex items-end gap-6 px-10 h-[316px] lg:w-3/4 mb-8 lg:mb-0 bg-[#E3E0F9] rounded-3xl">
              <h2 className="text-7xl font-medium text-gray-900 mb-4">
                Featured
                <br />
                property
              </h2>
              <div className="w-72 h-72  rounded-lg relative overflow-hidden">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/website-directory-959bd.firebasestorage.app/o/rashii-images%2FApartment%201.png?alt=media&token=6796ae9f-0d30-46c8-88c8-031e0b6de5a8"
                  alt="Featured building"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <p className="text-gray-700 text-2xl leading-6">
                Discover standout spaces that elevate your lifestyle — curated for comfort, design, and location. Find
                the one that feels like home.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex justify-center gap-6 overflow-x-auto scrollbar-hide pb-4"
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
