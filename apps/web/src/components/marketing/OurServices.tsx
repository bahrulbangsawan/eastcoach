import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "./ServiceCard";

export function OurServices() {
  const services = [
    {
      title: "Junior Development",
      description:
        "Comprehensive tennis coaching for children ages 6-12, focusing on fundamental skills, hand-eye coordination, and building a love for the game.",
      badge: "Ages 6-12",
    },
    {
      title: "Teen Training",
      description:
        "Advanced coaching for teenagers ages 13-17, developing technical skills, tactical awareness, and competitive preparation.",
      badge: "Ages 13-17",
    },
    {
      title: "Adult Coaching",
      description:
        "Personalized training programs for adults of all skill levels, from beginners picking up a racquet for the first time to experienced players.",
      badge: "All Levels",
    },
    {
      title: "Private Lessons",
      description:
        "One-on-one coaching sessions with personalized attention to accelerate your improvement and address specific areas of your game.",
      badge: "1-on-1",
    },
    {
      title: "Group Sessions",
      description:
        "Small group training with players of similar skill levels, fostering a fun and social learning environment.",
      badge: "Groups",
    },
    {
      title: "Competition Prep",
      description:
        "Specialized training for tournament players, focusing on match strategy, mental toughness, and peak performance conditioning.",
      badge: "Competitive",
    },
  ];

  return (
    <Section id="services">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive tennis programs designed for every age and skill level
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              badge={service.badge}
              description={service.description}
              key={index}
              title={service.title}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
