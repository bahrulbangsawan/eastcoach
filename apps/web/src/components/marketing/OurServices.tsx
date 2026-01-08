import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Program Tenis Personal",
    description:
      "Rasakan program tenis personal yang dirancang sesuai tingkat kemampuan dan tujuan Anda. Baik Anda pemula atau bertujuan untuk sukses kompetitif.",
    image: "https://files.eastcoach.club/content/eastcoach-service-1.webp",
    arrowDirection: "down-left" as const,
  },
  {
    id: 2,
    title: "Pelatihan Komprehensif",
    description:
      "Pelatihan menyeluruh untuk semua aspek permainan tenis Anda dengan metode modern.",
    image: "https://files.eastcoach.club/content/eastcoach-service-2.webp",
    arrowDirection: "up-right" as const,
  },
  {
    id: 3,
    title: "Sesi Latihan Intensif",
    description:
      "Sesi latihan intensif untuk meningkatkan performa kompetitif Anda secara signifikan.",
    image: "https://files.eastcoach.club/content/eastcoach-service-3.webp",
    arrowDirection: "up-right" as const,
  },
];

export function OurServices() {
  return (
    <section className="bg-background py-16 lg:py-20" id="services">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <h2 className="max-w-lg font-semibold text-2xl text-foreground leading-tight sm:text-3xl lg:text-4xl">
            Program latihan terstruktur dan berorientasi performa
          </h2>
          <p className="max-w-md self-end text-base text-foreground/70 leading-relaxed">
            Pelatih berpengalaman kami menyediakan latihan intensif yang
            berfokus pada peningkatan kekuatan dan perbaikan area yang perlu
            dikembangkan
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  service: (typeof services)[number];
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative h-[280px] overflow-hidden rounded-2xl lg:h-[340px]">
      {/* Background Image */}
      <img
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        decoding="async"
        height={340}
        loading="lazy"
        src={service.image}
        width={400}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative flex h-full flex-col p-6">
        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 flex size-12 items-center justify-center rounded-full bg-dark/80 backdrop-blur-sm">
          {service.arrowDirection === "down-left" ? (
            <ArrowDownLeft className="size-5 text-lime" />
          ) : (
            <ArrowUpRight className="size-5 text-lime" />
          )}
        </div>

        {/* Content - positioned at bottom */}
        <div className="mt-auto space-y-3">
          <h3 className="font-medium text-white text-xl lg:text-2xl">
            {service.title}
          </h3>
          <p className="line-clamp-3 text-sm text-white/80 leading-relaxed lg:text-base">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
