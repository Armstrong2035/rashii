"use client"

import { Calendar, Inbox, LayoutDashboard, LogOut, Settings, Table2, CheckCircle2 } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { cn } from '@/lib/utils'

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: CheckCircle2 },
  { title: "My Inventory", href: "/inventory", icon: Table2 },
  { title: "Inbox", href: "/inbox", icon: Inbox },
  { title: "Calender", href: "/calendar", icon: Calendar }, // spelling matches design
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "Logout", href: "/logout", icon: LogOut },
]

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar side="left" collapsible="offcanvas" className='bg-[#F6FCF7]'>
      <SidebarHeader>
        <div className="px-2 py-1.5">
          <Link href="/dashboard" className="font-bold text-xl tracking-tight text-[#4880FF]">RASHII</Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="sr-only">Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname?.startsWith(item.href)}
                  className={cn("p-6 data-[active=true]:bg-rashii-green data-[active=true]:text-[#F6FCF7]", )}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
