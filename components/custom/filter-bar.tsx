"use client"

import { Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FilterBar() {
  return (
    <div className="bg-white border rounded-xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-3">
      <div className="flex items-center gap-2 pl-1 pr-2 text-sm">
        <Filter className="h-4 w-4" />
        <span className="hidden sm:inline">Filter By</span>
      </div>
      <Select defaultValue="today">
        <SelectTrigger className="w-[120px] h-9">
          <SelectValue placeholder="Date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Date</SelectItem>
          <SelectItem value="yesterday">Yesterday</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all">
        <SelectTrigger className="w-[140px] h-9">
          <SelectValue placeholder="Listing Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Listing Type</SelectItem>
          <SelectItem value="rent">Rent</SelectItem>
          <SelectItem value="buy">Buy</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all">
        <SelectTrigger className="w-[160px] h-9">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Property Type</SelectItem>
          <SelectItem value="apt">Apartment</SelectItem>
          <SelectItem value="villa">Villa</SelectItem>
        </SelectContent>
      </Select>
      <div className="ml-auto">
        <Button variant="ghost" className="text-red-500 hover:text-red-600">
          Reset Filter
        </Button>
      </div>
    </div>
  )
}
