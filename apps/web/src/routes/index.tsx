import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="mb-4 font-bold text-2xl">Welcome</h1>
      <p className="text-muted-foreground">
        Your application is ready for development.
      </p>
    </main>
  );
}
