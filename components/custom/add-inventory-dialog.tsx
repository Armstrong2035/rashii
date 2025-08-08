"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const schema = z.object({
  sellerName: z.string().min(1, "Required"),
  propertyName: z.string().min(1, "Required"),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  area: z.string().optional(),
  price: z.string().optional(),
  bath: z.string().optional(),
  beds: z.string().optional(),
  listingType: z.string().min(1, "Required"),
  description: z.string().optional(),
})

export default function AddInventoryDialog({
  triggerLabel = "Add Inventory",
}: {
  triggerLabel?: string
}) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      sellerName: "",
      propertyName: "",
      email: "",
      phone: "",
      area: "",
      price: "",
      bath: "",
      beds: "",
      listingType: "",
      description: "",
    },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log("Add listing", values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full h-10 rounded-full bg-green-600 hover:bg-green-600/90">{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl">Add New Inventory Listing</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="grid gap-1.5">
            <Label>Seller Name</Label>
            <Input placeholder="This name is for your reference only and won’t be visible to others." {...form.register("sellerName")} />
          </div>
          <div className="grid gap-1.5">
            <Label>Area(sqft)</Label>
            <Input placeholder="Area Sqft" {...form.register("area")} />
          </div>
          <div className="grid gap-1.5">
            <Label>Property Name</Label>
            <Input {...form.register("propertyName")} />
          </div>
          <div className="grid gap-1.5">
            <Label>Price</Label>
            <Input placeholder="Selling price" {...form.register("price")} />
          </div>
          <div className="grid gap-1.5">
            <Label>Email</Label>
            <Input placeholder="Email" {...form.register("email")} />
          </div>
          <div className="grid gap-1.5">
            <Label>Bath</Label>
            <Input placeholder="Number of Bathrooms" {...form.register("bath")} />
          </div>
          <div className="grid gap-1.5">
            <Label>Phone Number</Label>
            <Input placeholder="Phone Number (include Country Code, e.g., +971)" {...form.register("phone")} />
          </div>
          <div className="grid gap-1.5">
            <Label>Beds</Label>
            <Input placeholder="Number of Beds" {...form.register("beds")} />
          </div>
          <div className="md:col-span-2 grid gap-1.5">
            <Label>Listing Type</Label>
            <Select onValueChange={(v) => form.setValue("listingType", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Rent, Buy, Commercial Rent, Commercial Buy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="commercial-rent">Commercial Rent</SelectItem>
                <SelectItem value="commercial-buy">Commercial Buy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2 grid gap-1.5">
            <Label>Description</Label>
            <Textarea placeholder="Other details" rows={4} {...form.register("description")} />
          </div>
          <div className="md:col-span-2">
            <div className="text-center mb-2 text-sm">Upload Listing Image</div>
            <div className="border border-dashed rounded-2xl p-6 grid place-items-center text-center text-sm text-muted-foreground">
              <Camera className="h-6 w-6 mb-2 text-muted-foreground" />
              <button type="button" className="text-blue-600 underline">Upload Photo</button>
              <div className="text-[11px] mt-1">JPG, PNG, PDF</div>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-end gap-3 pt-2">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
