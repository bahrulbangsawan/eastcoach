import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./Container";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Coaches", href: "#coaches" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#join" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a className="flex items-center space-x-2" href="#">
              <span className="font-bold text-xl">East Coach</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <a
                className="font-medium text-sm transition-colors hover:text-primary"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <Button asChild variant="ghost">
              <a href="#join">Get Started</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet onOpenChange={setIsOpen} open={isOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]" side="right">
              <nav className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    className="py-2 font-medium text-lg transition-colors hover:text-primary"
                    href={item.href}
                    key={item.name}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="border-t pt-4">
                  <Button asChild className="w-full">
                    <a href="#join" onClick={() => setIsOpen(false)}>
                      Get Started
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
