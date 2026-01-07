import { Separator } from "@/components/ui/separator";
import { Container } from "./Container";

const footerLinks = {
  services: [
    { name: "Junior Development", href: "#services" },
    { name: "Teen Training", href: "#services" },
    { name: "Adult Coaching", href: "#services" },
    { name: "Private Lessons", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Coaches", href: "#coaches" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/30">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand & Contact */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">East Coach</h3>
              <p className="text-muted-foreground text-sm">
                Professional tennis coaching in Makassar for all skill levels.
              </p>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  <strong>Location:</strong> Makassar, South Sulawesi, Indonesia
                </p>
                <p>
                  <strong>Hours:</strong> Mon-Sun: 6:00 AM - 8:00 PM
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 font-semibold">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} East Coach. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                href="#"
              >
                Instagram
              </a>
              <a
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                href="#"
              >
                Facebook
              </a>
              <a
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                href="#"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
