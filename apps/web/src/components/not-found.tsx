import { Link } from "@tanstack/react-router";
import { ArrowLeft, Home } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center bg-background px-4 pt-28 pb-16 text-center lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-md">
          {/* 404 Number with Tennis Ball */}
          <div className="relative mb-8">
            <span className="font-bold text-[8rem] text-foreground/10 leading-none sm:text-[10rem]">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-20 rounded-full border-4 border-lime bg-lime/30 sm:size-24" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="mb-4 font-bold text-2xl text-foreground sm:text-3xl">
            Halaman Tidak Ditemukan
          </h1>
          <p className="mb-8 text-foreground/70">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. Mari
            kembali ke lapangan!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row justify-center gap-3">
            <Button
              asChild
              className="h-10 px-4 text-sm sm:h-11 sm:px-5 sm:text-base"
              variant="accent"
            >
              <Link to="/">
                <Home className="size-4 sm:size-5" />
                Beranda
              </Link>
            </Button>
            <Button
              asChild
              className="h-10 px-4 text-sm sm:h-11 sm:px-5 sm:text-base"
              variant="outline"
            >
              <button onClick={() => window.history.back()} type="button">
                <ArrowLeft className="size-4 sm:size-5" />
                Kembali
              </button>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
