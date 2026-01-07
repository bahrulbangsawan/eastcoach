import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Kontak", href: "#testimonials" },
];

const WA_LINK = "https://wa.me/6281376979947";

// Desktop breakpoint (lg = 1024px in Tailwind)
const DESKTOP_BREAKPOINT = 1024;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-close mobile menu when resizing to desktop
  const handleResize = useCallback(() => {
    if (window.innerWidth >= DESKTOP_BREAKPOINT && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full bg-dark/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - High priority for above-fold */}
          <a className="flex shrink-0 items-center" href="/">
            <img
              alt="East Coach"
              className="h-8 w-auto sm:h-9 lg:h-10"
              decoding="sync"
              fetchPriority="high"
              height={40}
              src="https://files.eastcoach.club/logo/eastcoach-logo.webp"
              width={140}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                className="text-sm text-white transition-colors hover:text-lime"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden items-center lg:flex">
            <Button
              asChild
              className="h-9 rounded-md bg-lime px-5 text-dark text-sm"
              size="sm"
              variant="accent"
            >
              <a href={WA_LINK} rel="noopener noreferrer" target="_blank">
                Mulai Sekarang
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle - Only visible on mobile */}
          <div className="lg:hidden">
            <Sheet onOpenChange={setIsOpen} open={isOpen}>
              <SheetTrigger
                aria-label="Buka menu navigasi"
                className="flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-colors hover:bg-white/15 active:bg-white/20"
              >
                <Menu className="size-7 text-white" />
              </SheetTrigger>

              <SheetContent className="border-none" side="right">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-white/10 border-b px-6 py-5">
                  <img
                    alt="East Coach"
                    className="h-9 w-auto"
                    decoding="async"
                    height={36}
                    loading="lazy"
                    src="https://files.eastcoach.club/logo/eastcoach-logo.webp"
                    width={126}
                  />
                  <SheetClose
                    aria-label="Tutup menu"
                    className="flex size-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-colors hover:bg-white/15 active:bg-white/20"
                  >
                    <X className="size-6 text-white" />
                  </SheetClose>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-1 flex-col px-6 py-8">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <a
                        className="flex items-center rounded-xl bg-white/5 px-5 py-4 font-medium text-lg text-white transition-colors hover:bg-white/10 active:bg-white/15"
                        href={item.href}
                        key={item.name}
                        onClick={handleNavClick}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  {/* Mobile CTA Button */}
                  <div className="mt-auto pt-8">
                    <Button
                      asChild
                      className="h-14 w-full rounded-xl font-semibold text-lg"
                      size="lg"
                      variant="accent"
                    >
                      <a
                        href={WA_LINK}
                        onClick={handleNavClick}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Mulai Sekarang
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
