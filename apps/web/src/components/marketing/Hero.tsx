import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <Container>
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h1 className="font-bold text-4xl tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            East Coach
          </h1>
          <p className="text-muted-foreground text-xl sm:text-2xl lg:text-3xl">
            Professional Tennis Coaching in Makassar
          </p>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Transform your game with expert coaching, personalized training
            programs, and state-of-the-art facilities for all skill levels.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="w-full px-8 py-6 text-lg sm:w-auto" size="lg">
              Start Your Journey
            </Button>
            <Button
              className="w-full px-8 py-6 text-lg sm:w-auto"
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
