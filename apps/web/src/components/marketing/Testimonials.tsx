import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "East Coach benar-benar mengubah cara saya bermain tenis. Pelatihan personal dan perhatian terhadap detail telah membantu saya menyempurnakan teknik dan pendekatan mental saya",
    author: "Rini Wulandari",
    role: "Pemain Kompetitif",
  },
  {
    id: 2,
    quote:
      "Program latihan di East Coach sangat terstruktur dan efektif. Dalam 6 bulan, permainan saya meningkat drastis. Pelatihnya profesional dan sangat mendukung",
    author: "Andi Prasetyo",
    role: "Pemain Junior",
  },
  {
    id: 3,
    quote:
      "Sebagai pemula, saya sangat terbantu dengan metode pengajaran East Coach yang sabar dan sistematis. Sekarang saya sudah bisa bermain dengan percaya diri",
    author: "Siti Rahayu",
    role: "Pemain Rekreasi",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-background py-16 lg:py-20" id="testimonials">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-5">
            {/* Header */}
            <h2 className="max-w-md font-semibold text-2xl text-foreground leading-tight sm:text-3xl lg:text-4xl">
              Cerita Peningkatan dari Pemain Kami
            </h2>

            <p className="max-w-md text-base text-foreground/70 leading-relaxed">
              Dengarkan langsung dari pemain kami yang telah mencapai
              peningkatan luar biasa melalui program pelatihan khusus kami
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 pt-2">
              <button
                aria-label="Testimoni sebelumnya"
                className="flex size-12 items-center justify-center rounded-full bg-dark transition-colors hover:bg-dark/80"
                onClick={handlePrev}
                type="button"
              >
                <ArrowLeft className="size-5 text-white" />
              </button>
              <button
                aria-label="Testimoni berikutnya"
                className="flex size-12 items-center justify-center rounded-full bg-lime transition-colors hover:bg-lime/80"
                onClick={handleNext}
                type="button"
              >
                <ArrowRight className="size-5 text-dark" />
              </button>
              {/* Indicator */}
              <span className="ml-2 text-foreground/70 text-sm">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* Right - Testimonial Card */}
          <div className="relative">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>
        </div>
      </div>
    </section>
  );
}

type TestimonialCardProps = {
  testimonial: (typeof testimonials)[number];
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative">
      {/* Large Quote Mark */}
      <div className="absolute -top-4 right-0 z-0 lg:-top-6">
        <svg
          aria-hidden="true"
          className="size-24 text-lime/30 lg:size-32"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote Content */}
      <div className="relative z-10 space-y-5">
        <p className="max-w-lg font-semibold text-foreground text-xl leading-relaxed sm:text-2xl lg:text-3xl">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="size-14 overflow-hidden rounded-full bg-lime/20 lg:size-16">
            <div className="flex h-full w-full items-center justify-center font-semibold text-dark text-lg">
              {testimonial.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground text-lg">
              {testimonial.author}
            </p>
            <p className="text-base text-foreground/70">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
