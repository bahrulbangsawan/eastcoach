import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "@/components/ui/count-up";
import { LazyVideo } from "@/components/ui/lazy-video";

export function AboutUs() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20" id="about">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Overlapping Images */}
          <div className="relative h-[420px] sm:h-[450px] lg:h-[480px]">
            {/* Green decoration effect */}
            <div className="absolute top-0 left-0 h-[180px] w-[140px] rounded-2xl bg-gradient-to-br from-lime/30 to-lime/10 sm:h-[220px] sm:w-[180px] lg:h-[260px] lg:w-[200px]" />

            {/* Main video with white border - BIGGER on mobile */}
            <div className="absolute top-6 right-0 z-10 h-[320px] w-[75%] overflow-hidden rounded-2xl border-4 border-white bg-gray-300 sm:top-8 sm:right-auto sm:left-16 sm:h-[340px] sm:w-[280px] lg:top-0 lg:left-[18%] lg:h-[400px] lg:w-[340px]">
              <LazyVideo
                className="h-full w-full"
                priority="low"
                src="https://files.eastcoach.club/content/eastcoach-player.mp4"
              />
            </div>

            {/* Secondary image below */}
            <div className="absolute bottom-0 left-0 h-[200px] w-[65%] overflow-hidden rounded-2xl bg-gray-400 sm:h-[240px] sm:w-[300px] lg:h-[300px] lg:w-[380px]">
              <img
                alt="East Coach tennis player"
                className="h-full w-full object-cover"
                decoding="async"
                height={300}
                loading="lazy"
                src="https://files.eastcoach.club/content/eastcoach-player-1.webp"
                width={380}
              />
            </div>

            {/* Decorative points */}
            <div className="absolute right-4 bottom-4 hidden lg:block">
              <div className="flex size-20 items-center justify-center rounded-full bg-dark">
                <ArrowDownLeft className="size-6 text-lime" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center space-y-5">
            <h2 className="max-w-lg font-semibold text-2xl text-foreground leading-tight sm:text-3xl lg:text-4xl">
              Memberdayakan Atlet Tenis Sejak Hari Pertama
            </h2>

            <p className="max-w-lg text-base text-foreground/70 leading-relaxed">
              East Coach berkomitmen memberikan pengalaman pelatihan tenis yang
              tak tertandingi. Kami bangga dengan pendekatan personal,
              memastikan setiap kebutuhan dan tujuan unik pemain terpenuhi.
            </p>

            {/* Business Stats */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <div>
                <p className="font-semibold text-3xl text-foreground lg:text-4xl">
                  <CountUp duration={2.5} to={100} />
                  <span className="text-lime">+</span>
                </p>
                <p className="text-base text-foreground/70">Klien</p>
              </div>
              <div>
                <p className="font-semibold text-3xl text-foreground lg:text-4xl">
                  <CountUp duration={2} to={12} />
                  <span className="text-lime">+</span>
                </p>
                <p className="text-base text-foreground/70">Prestasi</p>
              </div>
              <div>
                <p className="font-semibold text-3xl text-foreground lg:text-4xl">
                  <CountUp duration={2} to={15} />
                  <span className="text-lime">+</span>
                </p>
                <p className="text-base text-foreground/70">Tahun Pengalaman</p>
              </div>
            </div>

            <p className="max-w-lg text-base text-foreground/70 leading-relaxed">
              Kenali lebih dekat tim yang menjadikan East Coach sebagai
              destinasi pelatihan tenis terkemuka di Makassar
            </p>

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
                  Bergabung Sekarang
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
        </div>
      </div>
    </section>
  );
}
