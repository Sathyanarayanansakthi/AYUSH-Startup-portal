"use client";

import React, { useState } from "react";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const items = [
  { title: "Home", url: "/dashboard", icon: Home },
  { title: "Schema", url: "/schemes", icon: Inbox },
  { title: "Blog", url: "/blog", icon: Calendar },
  { title: "Ecommerce", url: "/ecommerce", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <>
      <Sidebar className="h-full">
        <SidebarContent className="flex flex-col h-full justify-between">
          {/* Top Section */}
          <div>
            <SidebarGroup>
              <SidebarGroupLabel className="font-bold text-2xl mt-4 mb-5 text-green-500">
                AYUSH Hub
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="gap-2">
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          className="flex items-center gap-7 px-2 py-1"
                        >
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

          {/* Bottom Section with Avatar */}
          <div className="p-4 border-t">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">ShadCN</p>
                    <p className="text-xs text-muted-foreground">Admin</p>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault();
                    setOpenSheet(true);
                  }}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />

                {/* Alert Dialog trigger directly */}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem className="text-red-600 cursor-pointer">
                      Logout
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to logout?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        You will be logged out of your session. You can log back in anytime.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          console.log("Close");
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Logout
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </SidebarContent>
      </Sidebar>

      {/* Sheet for Profile */}
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>User Profile</SheetTitle>
            <SheetDescription>
              View and edit your profile information here.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4 flex flex-col gap-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Button variant="ghost" className="w-full bg-green-500 text-white">
              Submit
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
