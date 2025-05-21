// components/sidebar/AppSidebar.tsx

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Schema", url: "/schemes", icon: Inbox },
  { title: "Blog", url: "/blog", icon: Calendar },
  { title: "Ecommerce", url: "/ecommerce", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar className="h-full">
      <SidebarContent className="flex flex-col h-full justify-between">
        <div>
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold text-2xl mt-4 mb-5">
              Bharath Hub
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-2">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-5 px-2 py-1">
                        <item.icon size={18} />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Avatar placed at the bottom */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">ShadCN</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
