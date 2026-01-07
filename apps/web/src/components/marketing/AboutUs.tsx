import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function AboutUs() {
  return (
    <Section className="bg-muted/30" id="about">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
            <span className="text-lg text-muted-foreground">
              Tennis Court Image Placeholder
            </span>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
              About East Coach
            </h2>
            <p className="text-lg text-muted-foreground">
              East Coach is a Makassar-based tennis training service focused on
              developing players' technical skills, physical conditioning, and
              mental strength across all skill levels.
            </p>
            <p className="text-lg text-muted-foreground">
              We deliver structured, personalized, and performance-oriented
              training programs, guided by experienced coaches using modern and
              disciplined coaching methods. Suitable for beginners through
              competitive-level players.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to make tennis accessible and enjoyable for
              everyone in Makassar, while maintaining the highest standards of
              coaching excellence.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
