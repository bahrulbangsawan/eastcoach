import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Container } from "./Container"

const navItems = [
  { name: "Home", href: "#" },
  { name: "Pricing", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#join" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center pl-8">
            <a className="flex items-center space-x-2" href="#">
              <img
                src="/logo.png"
                alt="East Coach Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex flex-1 justify-center">
            {navItems.map((item) => (
              <a
                className="font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:text-primary hover:scale-105"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <Button asChild className="rounded-full px-6 py-2 font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg" variant="default">
              <a href="#join">Join Member</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]" side="right">
              <nav className="mt-8 flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a
                    className="font-medium text-base tracking-wide uppercase transition-all duration-300 hover:text-primary hover:translate-x-1"
                    href={item.href}
                    key={item.name}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="border-t pt-6">
                  <Button asChild className="w-full rounded-full font-semibold tracking-wide uppercase">
                    <a href="#join" onClick={() => setIsOpen(false)}>
                      Join Member
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
