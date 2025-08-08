"use client"

import Image from "next/image"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper, type ColumnDef } from "@tanstack/react-table"

type Item = {
  id: string
  name: string
  location: string
  beds: number
  bath: number
  price: string
  image: string
}

const columnHelper = createColumnHelper<Item>()

const defaultData: Item[] = [
  {
    id: "1",
    name: "Azure Palms Residences",
    location: "Palm Oasis District,",
    beds: 2,
    bath: 5,
    price: "AED 348,295",
    image: "/Bitmap.png",
  },
  {
    id: "2",
    name: "Golden Dunes Villas",
    location: "Emirate Bay",
    beds: 3,
    bath: 2,
    price: "AED 348,295",
    image: "/Bitmap.png",
  },
  {
    id: "3",
    name: "Marina Heights Tower",
    location: "Desert Pearl Boulevard",
    beds: 5,
    bath: 4,
    price: "AED 348,295",
    image: "/Bitmap.png",
  },
]

export default function InventoryTable({
  showAddButton = true,
  onRowClick,
  title = "Inventory Details",
}: {
  showAddButton?: boolean
  onRowClick?: (id: string) => void
  title?: string
}) {
  const columns = useMemo<ColumnDef<Item, any>[]>(
    () => [
      columnHelper.accessor("name", {
        header: () => <span>Property Name</span>,
        cell: (info) => {
          const row = info.row.original
          return (
            <button
              onClick={() => onRowClick?.(row.id)}
              className="flex items-center gap-3 text-left hover:underline"
            >
              <Image
                src={row.image || "/Bitmap.png"}
                alt={row.name}
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="leading-tight">
                <div className="font-medium">{row.name}</div>
              </div>
            </button>
          )
        },
      }),
      columnHelper.accessor("location", {
        header: () => <span>Location</span>,
        cell: (info) => <span className="text-muted-foreground">{info.getValue()}</span>,
      }),
      columnHelper.accessor("beds", {
        header: () => <span>Bed</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("bath", {
        header: () => <span>Bath</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("price", {
        header: () => <span>Price</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: "listingType",
        header: () => <span>Listing type</span>,
        cell: () => (
          <Button className="rounded-full px-4" size="sm">
            Rent
          </Button>
        ),
      }),
    ],
    [onRowClick]
  )

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="border rounded-xl overflow-hidden">
          <Table>
            <TableHeader className="[&_tr]:bg-muted/50">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="text-muted-foreground">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="border-b">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-5">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {showAddButton && (
            <div className="p-4">
              <Button className="w-full h-10 rounded-full bg-green-600 hover:bg-green-600/90">Add Inventory</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
