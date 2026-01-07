import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "@/components/ui/count-up";
import { LazyVideo } from "@/components/ui/lazy-video";

export function Hero() {
  return (
    <section className="relative h-svh min-h-[600px] overflow-hidden bg-secondary">
      {/* Video Background - High priority for above-fold */}
      <LazyVideo
        className="absolute inset-0 h-full w-full"
        priority="high"
        src="https://files.eastcoach.club/content/eastcoach-profile.mp4"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-5 pt-20 pb-6 sm:px-6 lg:px-8 lg:pt-28 lg:pb-8">
        {/* Main Content */}
        <div className="flex flex-1 items-center">
          <div className="grid w-full gap-6 lg:grid-cols-[1fr_280px] lg:gap-8">
            {/* Left Content */}
            <div className="space-y-5 sm:space-y-6">
              {/* Tagline */}
              <div className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="size-6 rotate-[39deg] text-lime sm:size-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3c0 4.97-4.03 9-9 9M12 3c0 4.97 4.03 9 9 9M12 21c0-4.97-4.03-9-9-9M12 21c0-4.97 4.03-9 9-9" />
                </svg>
                <span className="font-medium text-base text-lime sm:text-lg">
                  Tingkatkan Permainan Anda Bersama East Coach
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="max-w-2xl font-bold text-3xl text-white leading-[1.15] sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                Kembangkan Potensi Terbaik Anda dengan Pelatihan Tenis
                Profesional
              </h1>

              {/* Description */}
              <p className="max-w-lg text-base text-white/80 leading-relaxed sm:text-lg lg:text-base">
                East Coach adalah layanan pelatihan tenis berbasis di Makassar
                yang berfokus pada pengembangan teknik, fisik, dan mental
                pemain. Program latihan terstruktur dan personal untuk semua
                tingkat kemampuan
              </p>

              {/* CTA Button */}
              <div className="flex items-center gap-3 pt-1">
                <Button
                  asChild
                  className="h-12 gap-0 rounded-full bg-lime px-7 font-semibold text-base text-dark hover:bg-lime/90 sm:h-14 sm:px-8 sm:text-lg lg:h-12 lg:px-8 lg:text-base"
                  variant="accent"
                >
                  <a
                    href="https://wa.me/6281376979947"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Mulai Sekarang
                  </a>
                </Button>
                <a
                  aria-label="Hubungi kami di WhatsApp"
                  className="flex size-12 items-center justify-center rounded-full bg-dark sm:size-14 lg:size-12"
                  href="https://wa.me/6281376979947"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ArrowUpRight className="size-5 text-lime sm:size-6" />
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-end gap-8 pt-3 sm:gap-10">
                <div className="text-white">
                  <p className="font-bold text-4xl sm:text-5xl lg:text-4xl">
                    <CountUp duration={2.5} to={100} />
                    <span className="text-lime">+</span>
                  </p>
                  <p className="text-base sm:text-lg lg:text-base">
                    Murid Terlatih
                  </p>
                </div>
                <div className="text-white">
                  <p className="font-bold text-4xl sm:text-5xl lg:text-4xl">
                    <CountUp duration={2} to={15} />
                    <span className="text-lime">+</span>
                  </p>
                  <p className="text-base sm:text-lg lg:text-base">
                    Tahun Pengalaman
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar Content - Hidden on mobile */}
            <div className="hidden space-y-3 text-right lg:block">
              <h2 className="text-white text-xl xl:text-2xl">
                Wujudkan Impian{" "}
                <span className="font-semibold text-lime">Tenis</span> Anda
              </h2>
              <p className="text-sm text-white/70 leading-relaxed lg:text-base">
                East Coach berkomitmen mengembangkan pemain tenis hingga
                mencapai potensi tertinggi mereka dengan pendekatan modern dan
                disiplin
              </p>
            </div>
          </div>
        </div>

        {/* Explore More */}
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-base text-white sm:text-lg lg:text-base">
            Jelajahi Lebih
          </span>
          <ChevronDown className="size-6 animate-bounce text-white sm:size-7 lg:size-6" />
        </div>
      </div>
    </section>
  );
}
