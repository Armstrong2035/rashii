"use client"

import { Cuboid, Package } from 'lucide-react'
import StatCard from "@/components/custom/stat-card"
import FilterBar from "@/components/custom/filter-bar"
import InventoryTable from "@/components/custom/inventory-table"
import AddInventoryDialog from "@/components/custom/add-inventory-dialog"
import Image from 'next/image'

export default function Page() {
  return (
    <div className=''>
        <section className="mb-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your inventory and sell requests from one place.
        </p>
      </section>

      <section className="flex gap-10">
        <StatCard title="Total Inventory" value="5" icon={<Image src="/icon2.svg" width={50} height={50} alt='icon' />} iconBgStyles='bg-[#8280FF] rounded-2xl' />
        <StatCard title="Total Prospects" value="1" icon={<Image src="/stat-icon2.svg" width={50} height={50} alt='icon' />} iconBgStyles='bg-[#FEC53D] rounded-2xl' />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">My Inventory</h2>
        <p className="text-sm text-muted-foreground mt-1">List of all your inventory</p>
        <div className="mt-4">
          <FilterBar />
        </div>
      </section>

      <section className="mt-6">
        <InventoryTable
          title="Inventory Details"
          onRowClick={(id) => {
            window.location.href = `/inventory/${id}`
          }}
          showAddButton={false}
        />
        <div className="mt-4">
          <AddInventoryDialog />
        </div>
      </section>
    </div>
  )
}
