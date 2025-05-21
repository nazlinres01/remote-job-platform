"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Globe, Menu } from "lucide-react"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserAvatar } from "@/components/user-avatar"

export function Header() {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link className="flex items-center" href="/">
                  <Globe className="h-6 w-6 mr-2 text-primary" />
                  <span className="font-bold text-gradient-primary">RemoteHub</span>
                </Link>
              </div>
              <div className="mt-8 px-7">
                <nav className="flex flex-col gap-6">
                  <Link
                    href="/jobs"
                    className={`text-base font-medium transition-colors ${isActive("/jobs") ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    İş İlanları
                  </Link>
                  <Link
                    href="/companies"
                    className={`text-base font-medium transition-colors ${isActive("/companies") ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    Şirketler
                  </Link>
                  {user && (
                    <>
                      <Link
                        href="/dashboard"
                        className={`text-base font-medium transition-colors ${isActive("/dashboard") ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className={`text-base font-medium transition-colors ${isActive("/profile") ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        Profilim
                      </Link>
                    </>
                  )}
                  <Link
                    href="/about"
                    className={`text-base font-medium transition-colors ${isActive("/about") ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    Hakkımızda
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link className="flex items-center" href="/">
            <Globe className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold text-gradient-primary">RemoteHub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/jobs"
              className={`text-sm font-medium relative transition-colors ${
                isActive("/jobs")
                  ? "text-primary font-semibold after:absolute after:bottom-[-18px] after:left-0 after:h-[2px] after:w-full after:bg-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              İş İlanları
            </Link>
            <Link
              href="/companies"
              className={`text-sm font-medium relative transition-colors ${
                isActive("/companies")
                  ? "text-primary font-semibold after:absolute after:bottom-[-18px] after:left-0 after:h-[2px] after:w-full after:bg-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Şirketler
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className={`text-sm font-medium relative transition-colors ${
                  isActive("/dashboard")
                    ? "text-primary font-semibold after:absolute after:bottom-[-18px] after:left-0 after:h-[2px] after:w-full after:bg-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Dashboard
              </Link>
            )}
            <Link
              href="/about"
              className={`text-sm font-medium relative transition-colors ${
                isActive("/about")
                  ? "text-primary font-semibold after:absolute after:bottom-[-18px] after:left-0 after:h-[2px] after:w-full after:bg-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Hakkımızda
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="sr-only">Bildirimler</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <UserAvatar user={user} className="h-8 w-8" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <UserAvatar user={user} className="h-8 w-8" />
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      Profilim
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      Ayarlar
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer text-destructive focus:text-destructive">
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="hidden sm:block">
                <Button variant="ghost" size="sm" className="font-medium">
                  Giriş Yap
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm" className="font-medium bg-gradient-primary">
                  Kayıt Ol
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
