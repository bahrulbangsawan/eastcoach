import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function JoinUs() {
  return (
    <Section className="bg-primary/5" id="join">
      <Container>
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
            Ready to Start Your Tennis Journey?
          </h2>
          <p className="text-muted-foreground text-xl">
            Join East Coach today and take your game to the next level with
            professional coaching tailored to your goals.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="w-full px-8 py-6 text-lg sm:w-auto" size="lg">
              Book Your First Session
            </Button>
            <Button
              className="w-full px-8 py-6 text-lg sm:w-auto"
              size="lg"
              variant="outline"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
