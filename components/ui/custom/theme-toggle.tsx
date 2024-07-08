"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-none bg-transparent p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">החלף ערכת נושא</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-karantina" align="end">
        <DropdownMenuItem className="text-xl" onClick={() => setTheme("light")}>
          מצב יום
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xl" onClick={() => setTheme("dark")}>
          מצב לילה
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xl" onClick={() => setTheme("system")}>
          מערכת
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
