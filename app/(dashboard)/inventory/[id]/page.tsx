"use client"

import PropertyHeader from "@/components/custom/property-header"
import PropertyForm from "@/components/custom/property-form"

export default function Page() {
  return (

      <div className="max-w-[1100px] mx-auto space-y-6">
        <PropertyHeader />
        <PropertyForm />
      </div>

  )
}
