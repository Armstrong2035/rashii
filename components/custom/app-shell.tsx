"use client"

import { ReactNode } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AppSidebar } from "../app-sidebar"
import Topbar from "../topbar"

export default function AppShell({ children, title, subtitle }: { children: ReactNode; title?: string; subtitle?: string }) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset>
        <Topbar />
        <header className="px-6 pt-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {title ? (
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
                {subtitle ? <p className="text-sm text-muted-foreground mt-1">{subtitle}</p> : null}
              </div>
            ) : null}
          </div>
        </header>
        <main className="px-6 pb-10 pt-6 bg-muted/10 min-h-[calc(100dvh-4rem)]">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
