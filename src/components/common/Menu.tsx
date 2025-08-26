"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { aboutItems, fresherJobs, hotJobs, itJobs, otherCategories, tools  } from "@/constants/menuContent"

export function Menu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[17px] cursor-pointer">
            Về Mee<span className="text-[var(--primary-color-website)] font-semibold">Job</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full flex-col justify-end rounded-md bg-green-100 p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-semibold">
                      Mee<span className="text-[var(--primary-color-website)]">Job</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Nền tảng tìm kiếm việc làm hàng đầu tại Việt Nam.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {aboutItems.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[17px] cursor-pointer">Việc làm IT</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] p-4 grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              <div className="col-span-1">
                <h3 className="text-sm font-semibold mb-2 text-red-500">IT</h3>
                <ul className="space-y-2">
                  {itJobs.map((job) => (
                    <li key={job.title}>
                      <NavigationMenuLink asChild>
                        <Link href={job.href} className="text-sm text-gray-700 hover:text-gray-900">
                          {job.title}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <h3 className="text-sm font-semibold mb-2">Khác</h3>
                <ul className="space-y-2">
                  {otherCategories.map((category) => (
                    <li key={category.title}>
                      <NavigationMenuLink asChild>
                        <Link href={category.href} className="text-sm text-gray-700 hover:text-gray-900">
                          {category.title}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs" className="text-[17px]">Công ty</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[17px] cursor-pointer">Công cụ</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              {tools.map((tool) => (
                <li key={tool.title}>
                  <NavigationMenuLink asChild>
                    <Link href={tool.href}>
                      <div className="font-medium">{tool.title}</div>
                      <div className="text-muted-foreground">{tool.description}</div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs" className="text-[17px]">Blog IT</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className="font-bold text-red-600 text-[17px] cursor-pointer">🔥 Hot Jobs</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2">
              {hotJobs.map((status) => (
                <li key={status.title}>
                  <NavigationMenuLink asChild>
                    <Link href={status.href} className="flex-row items-center gap-2">
                      {status.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className="font-bold text-blue-600 text-[17px] cursor-pointer">❄️ Fresher Jobs</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2">
              {fresherJobs.map((status) => (
                <li key={status.title}>
                  <NavigationMenuLink asChild>
                    <Link href={status.href} className="flex-row items-center gap-2">
                      {status.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({ title, children, href }: { href: string; title: string; children: React.ReactNode }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}