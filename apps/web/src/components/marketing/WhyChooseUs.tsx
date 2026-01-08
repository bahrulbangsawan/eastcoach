import { ArrowUpRight, Award, Brain, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LazyVideo } from "@/components/ui/lazy-video";

const features = [
  {
    id: 1,
    icon: Award,
    title: "Pelatih Berpengalaman",
    description:
      "Profesional berpengalaman dengan rekam jejak luas di dunia tenis profesional",
  },
  {
    id: 2,
    icon: Target,
    title: "Latihan Personal",
    description:
      "Program latihan disesuaikan untuk kebutuhan dan tujuan unik setiap pemain",
  },
  {
    id: 3,
    icon: Brain,
    title: "Pendekatan Holistik",
    description:
      "Fokus pada teknik, mental, dan kondisi fisik secara menyeluruh dan terintegrasi",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Rekam Jejak Terbukti",
    description:
      "Ratusan pemain telah mentransformasi permainan mereka bersama kami",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-16 lg:py-20" id="why-us">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Header */}
            <h2 className="max-w-lg font-semibold text-2xl text-foreground leading-tight sm:text-3xl lg:text-4xl">
              Pendekatan Holistik untuk Pengembangan Tenis
            </h2>

            <p className="max-w-lg text-base text-foreground/70 leading-relaxed">
              Pendekatan holistik kami tidak hanya fokus pada keterampilan
              teknik tetapi juga ketangguhan mental, kondisi fisik, dan
              pemikiran strategis
            </p>

            {/* Feature Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {features.map((feature) => (
                <div className="space-y-3" key={feature.id}>
                  {/* Icon */}
                  <div className="flex size-12 items-center justify-center rounded-full bg-lime/20 lg:size-14">
                    <feature.icon className="size-6 text-dark lg:size-7" />
                  </div>
                  {/* Title */}
                  <h3 className="font-semibold text-foreground text-lg lg:text-xl">
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3 pt-2">
              <Button
                asChild
                className="h-12 gap-0 rounded-full bg-lime px-8 font-semibold text-base text-dark hover:bg-lime/90"
                variant="accent"
              >
                <a
                  href="https://wa.me/6281376979947"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lihat Selengkapnya
                </a>
              </Button>
              <a
                aria-label="Hubungi kami di WhatsApp"
                className="flex size-12 items-center justify-center rounded-full bg-dark"
                href="https://wa.me/6281376979947"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ArrowUpRight className="size-5 text-lime" />
              </a>
            </div>
          </div>

          {/* Right - Video */}
          <div className="relative order-first lg:order-last">
            <div className="h-[280px] w-full overflow-hidden rounded-2xl bg-dark sm:h-[360px] lg:h-[520px]">
              <LazyVideo
                className="h-full w-full"
                priority="low"
                src="https://files.eastcoach.club/content/eastcoach-action4.mp4"
              />
            </div>
            {/* Decorative arrow */}
            <div className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-lg bg-dark lg:size-12">
              <ArrowUpRight className="size-4 rotate-90 text-lime lg:size-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
