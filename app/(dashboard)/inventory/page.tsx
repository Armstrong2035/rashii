"use client"

import FilterBar from "@/components/custom/filter-bar"
import InventoryTable from "@/components/custom/inventory-table"
import AddInventoryDialog from "@/components/custom/add-inventory-dialog"

export default function Page() {
  return (
    <div>
      <section className="mb-6">
        <h1 className="text-3xl font-semibold">My Inventory</h1>
        <p className="text-sm text-muted-foreground mt-1">
        List of all your inventory
        </p>
      </section>

      <div className="mt-3">
        <FilterBar />
      </div>
      <div className="mt-6">
        <InventoryTable
          onRowClick={(id) => {
            window.location.href = `/inventory/${id}`
          }}
          showAddButton={false}
        />
      </div>
      <div className="mt-4">
        <AddInventoryDialog />
      </div>
    </div>
  )
}
