import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Coaches",
      description:
        "Certified professionals with years of playing and coaching experience",
    },
    {
      title: "Personalized Training",
      description: "Customized programs tailored to your skill level and goals",
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art courts and equipment for optimal training",
    },
    {
      title: "All Skill Levels",
      description: "From complete beginners to competitive players",
    },
    {
      title: "Flexible Scheduling",
      description: "Morning, afternoon, and weekend sessions available",
    },
    {
      title: "Proven Results",
      description: "Track record of developing successful players",
    },
  ];

  return (
    <Section id="why-us">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl sm:text-4xl lg:text-5xl">
            Why Choose East Coach?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience the difference that professional coaching makes
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Card className="text-center" key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
