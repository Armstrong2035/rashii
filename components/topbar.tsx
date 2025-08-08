"use client"

import Image from "next/image"
import { Bell, ChevronDown } from 'lucide-react'
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function Topbar() {
  return (
    <div className="h-16 w-full bg-white flex items-center justify-between px-3 sm:px-6 border-b">
      {/* Left: Sidebar collapse trigger */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-5 hidden sm:block" />
      </div>

      {/* Right: notifications, language, user */}
      <div className="flex items-center gap-6">
        <button aria-label="Notifications" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </button>
        <div className="hidden sm:flex items-center gap-2">
          <Image src="/images/uk-flag.png" alt="UK Flag" width={20} height={14} className="rounded-sm object-cover" />
          <span className="text-sm">English</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <Image src="/images/user-avatar.png" alt="User avatar" width={28} height={28} className="rounded-full" />
          <div className="hidden md:flex flex-col leading-4">
            <span className="text-sm">Moni Roy</span>
            <span className="text-[11px] text-muted-foreground">Admin</span>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  )
}
