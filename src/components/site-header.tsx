"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

function getPageTitle(pathname: string): string {
  if (pathname.startsWith("/home")) return "Home";
  if (pathname.startsWith("/game")) return "Game";
  if (pathname.startsWith("/players")) return "Players";
  if (pathname.startsWith("/history")) return "History";
  if (pathname.startsWith("/settings")) return "Settings";
  return "App"; // Default title
}

export function SiteHeader() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{pageTitle}</h1>
        <Link href="/home" className="ml-auto">
          <Button variant="ghost" size="icon">
            <HomeIcon />
          </Button>
        </Link>
      </div>
    </header>
  );
}
