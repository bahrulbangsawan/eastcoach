import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: '#D9D9D9' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-600 via-transparent to-transparent" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl space-y-2 text-center">
          <div className="flex items-center justify-center pt-4">
            <img
              src="/logo.png"
              alt="East Coach"
              className="h-auto w-full max-w-sm drop-shadow-2xl transition-all duration-300 hover:scale-105 hover:drop-shadow-3xl"
            />
          </div>
          <p className="text-2xl font-medium sm:text-3xl lg:text-4xl" style={{ color: '#2E8B57' }}>
            Professional Tennis Coaching in Makassar
          </p>
          <p className="mx-auto max-w-3xl text-xl text-black sm:text-2xl">
            Transform your game with expert coaching, personalized training
            programs, and state-of-the-art facilities for all skill levels.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row sm:gap-8">
            <Button
              className="w-full rounded-full px-12 py-7 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-black/50 sm:w-auto"
              size="lg"
              style={{ backgroundColor: 'black' }}
            >
              Start Your Journey
            </Button>
            <Button
              className="w-full rounded-full border-3 border-white bg-transparent px-10 py-7 text-xl font-bold text-white transition-all duration-300 hover:bg-white hover:text-neutral-900 sm:w-auto"
              size="lg"
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
