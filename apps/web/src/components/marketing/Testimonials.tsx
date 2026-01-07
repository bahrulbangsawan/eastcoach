import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "East Coach transformed my game. The personalized attention from Coach Ahmad helped me improve my technique and confidence on the court.",
      author: "Rina Wijaya",
      role: "Adult Student",
    },
    {
      quote:
        "My son has been training here for 6 months and his progress has been incredible. The coaches are patient, knowledgeable, and truly care about their students.",
      author: "Hendra Setiawan",
      role: "Parent",
    },
    {
      quote:
        "The group sessions are fun and challenging. I've made great friends and improved my tennis significantly. Highly recommend for players of all levels!",
      author: "Maya Sari",
      role: "Group Student",
    },
  ];

  return (
    <Section id="testimonials">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl sm:text-4xl lg:text-5xl">
            What Our Students Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hear from players who have trained with East Coach
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              author={testimonial.author}
              key={index}
              quote={testimonial.quote}
              role={testimonial.role}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
