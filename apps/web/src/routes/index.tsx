import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutUs } from "@/components/marketing/AboutUs";
import { Hero } from "@/components/marketing/Hero";
import { OurServices } from "@/components/marketing/OurServices";
import { Testimonials } from "@/components/marketing/Testimonials";
import { WhyChooseUs } from "@/components/marketing/WhyChooseUs";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  head: () => ({
    meta: [
      {
        title: "East Coach | Professional Tennis Coaching in Makassar",
      },
      {
        name: "description",
        content:
          "Premier tennis coaching services in Makassar. Expert coaches, personalized training programs for all skill levels. Book your first session today.",
      },
      {
        property: "og:title",
        content: "East Coach | Professional Tennis Coaching in Makassar",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://eastcoach.id/",
      },
      {
        property: "og:image",
        content: "https://eastcoach.id/og-image.jpg",
      },
      {
        property: "og:description",
        content:
          "Premier tennis coaching services in Makassar. Expert coaches, personalized training programs for all skill levels.",
      },
      {
        property: "og:locale",
        content: "id_ID",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
});

function HomeComponent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://eastcoach.id/#localbusiness",
    name: "East Coach",
    description:
      "Premier tennis coaching services in Makassar for all skill levels",
    url: "https://eastcoach.id/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Makassar",
      addressRegion: "South Sulawesi",
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "20:00",
    },
    priceRange: "Rp$$",
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Junior Development Program",
        description:
          "Comprehensive tennis coaching for children ages 6-12, focusing on fundamental skills and hand-eye coordination",
        provider: {
          "@id": "https://eastcoach.id/#localbusiness",
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: "Teen Training Program",
        description:
          "Advanced coaching for teenagers ages 13-17, developing technical skills and tactical awareness",
        provider: {
          "@id": "https://eastcoach.id/#localbusiness",
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: "Adult Coaching",
        description:
          "Personalized training programs for adults of all skill levels, from beginners to experienced players",
        provider: {
          "@id": "https://eastcoach.id/#localbusiness",
        },
      },
      {
        "@type": "Service",
        position: 4,
        name: "Private Lessons",
        description:
          "One-on-one coaching sessions with personalized attention to accelerate improvement",
        provider: {
          "@id": "https://eastcoach.id/#localbusiness",
        },
      },
      {
        "@type": "Service",
        position: 5,
        name: "Group Sessions",
        description:
          "Small group training with players of similar skill levels in a fun and social environment",
        provider: {
          "@id": "https://eastcoach.id/#localbusiness",
        },
      },
      {
        "@type": "Service",
        position: 6,
        name: "Competition Preparation",
        description:
          "Specialized training for tournament players, focusing on match strategy and mental toughness",
        provider: {
          "@id": "https://eastcoach.id/#localbusiness",
        },
      },
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
        type="application/ld+json"
      />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <OurServices />
          <AboutUs />
          <WhyChooseUs />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
}
