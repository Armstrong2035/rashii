"use client"

import { Button } from "@/components/ui/button"

export type FormActionButtonsProps = {
  onEdit?: () => void
  onSave?: () => void
  editLabel?: string
  saveLabel?: string
  isSaving?: boolean
  disableSave?: boolean
}

export default function FormActionButtons({
  onEdit,
  onSave,
  editLabel = "Edit",
  saveLabel = "Save",
  isSaving = false,
  disableSave = false,
}: FormActionButtonsProps) {
  return (
    <div className="flex gap-4">
      <Button onClick={onEdit} className="bg-rashii-green hover:bg-[#70eb8b] rounded-md px-8">
        {editLabel}
      </Button>
      <Button
        onClick={onSave}
        disabled={disableSave || isSaving}
        className="bg-rashii-green hover:bg-[#70eb8b] rounded-md px-8"
      >
        {isSaving ? "Saving..." : saveLabel}
      </Button>
    </div>
  )
}
