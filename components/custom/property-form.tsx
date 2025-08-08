"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FormActionButtons from "./form-action-buttons"

const schema = z.object({
  firstName: z.string().optional(),
  community: z.string().optional(),
  propertyType: z.string().optional(),
  mortgageStatus: z.string().optional(),
  titleDeedNumber: z.string().optional(),
  areaSqm: z.string().optional(),
  titleDeedIssueDate: z.string().optional(),
  areaSqft: z.string().optional(),
})

export default function PropertyForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      community: "",
      propertyType: "",
      mortgageStatus: "",
      titleDeedNumber: "",
      areaSqm: "",
      titleDeedIssueDate: "",
      areaSqft: "",
    },
  })

  const handleEdit = () => {
    console.log("Edit clicked")
  }

  const handleSave = () => {
    const values = form.getValues()
    console.log("Save clicked", values)
  }

  return (
    <div className="bg-white border rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid gap-1.5">
          <Label>First Name</Label>
          <Input placeholder="Enter your first name" {...form.register("firstName")} />
        </div>
        <div className="grid gap-1.5">
          <Label>Community</Label>
          <Input placeholder="Community" {...form.register("community")} />
        </div>
        <div className="grid gap-1.5">
          <Label>Property Type</Label>
          <Select onValueChange={(v) => form.setValue("propertyType", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Residential, commercial, etc" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Mortgage status</Label>
          <Input placeholder="Mortgage status" {...form.register("mortgageStatus")} />
        </div>
        <div className="grid gap-1.5">
          <Label>Title Deed Number</Label>
          <Input placeholder="Unique identifier assigned to the property by the land registry" {...form.register("titleDeedNumber")} />
        </div>
        <div className="grid gap-1.5">
          <Label>Area(sqm)</Label>
          <Input placeholder="Optional" {...form.register("areaSqm")} />
        </div>
        <div className="grid gap-1.5">
          <Label>Title Deed Issue Date</Label>
          <Input placeholder="The official date when the title deed was issued" {...form.register("titleDeedIssueDate")} />
        </div>
        <div className="grid gap-1.5">
          <Label>Area(sqft)</Label>
          <Select onValueChange={(v) => form.setValue("areaSqft", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Optional" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="na">N/A</SelectItem>
              <SelectItem value="1000">1000</SelectItem>
              <SelectItem value="2000">2000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-6">
        <FormActionButtons onEdit={handleEdit} onSave={handleSave} />
      </div>
    </div>
  )
}
