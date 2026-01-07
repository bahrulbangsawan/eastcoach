import { Instagram } from "lucide-react";

const menuLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Kontak", href: "#testimonials" },
  { name: "FAQ", href: "/faq" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/_eastcoach",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@eastcoach",
    icon: TikTokIcon,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6281376979947",
    icon: WhatsAppIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a className="inline-block" href="/">
            <img
              alt="East Coach"
              className="h-10 w-auto lg:h-12"
              decoding="async"
              height={48}
              loading="lazy"
              src="https://files.eastcoach.club/logo/eastcoach-logo.webp"
              width={160}
            />
          </a>

          {/* Description */}
          <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed lg:text-base">
            Tingkatkan permainan tenis Anda dengan pelatihan ahli dari
            profesional berpengalaman di Makassar.
          </p>

          {/* Menu Links */}
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {menuLinks.map((link) => (
              <a
                className="text-sm text-white/70 transition-colors hover:text-lime lg:text-base"
                href={link.href}
                key={link.name}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-lime hover:text-dark"
                href={link.href}
                key={link.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-white/60 text-xs lg:text-sm">
            © {new Date().getFullYear()} East Coach. Hak Cipta Dilindungi.
          </p>
          <p className="text-white/60 text-xs">Makassar, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
