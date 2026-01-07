import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CoachCard } from "./CoachCard";

export function OurCoaches() {
  const coaches = [
    {
      name: "Ahmad Rizky",
      role: "Head Coach",
      bio: "15+ years of coaching experience. Former national junior champion with ITF Level 2 certification.",
    },
    {
      name: "Sari Dewi",
      role: "Senior Coach",
      bio: "10+ years coaching all age groups. Specializes in junior development and technique refinement.",
    },
    {
      name: "Budi Santoso",
      role: "Coach",
      bio: "Former professional player. Expert in tactical training and match preparation for competitive players.",
    },
    {
      name: "Linda Pratiwi",
      role: "Coach",
      bio: "Certified fitness and tennis coach. Focuses on physical conditioning and footwork development.",
    },
  ];

  return (
    <Section className="bg-muted/30" id="coaches">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl sm:text-4xl lg:text-5xl">
            Meet Our Coaches
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Learn from experienced professionals dedicated to your improvement
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach, index) => (
            <CoachCard
              bio={coach.bio}
              key={index}
              name={coach.name}
              role={coach.role}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
