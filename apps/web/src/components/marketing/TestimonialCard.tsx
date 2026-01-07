import { Quote } from "lucide-react";
import type { ComponentProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps extends ComponentProps<typeof Card> {
  quote: string;
  author: string;
  role?: string;
  imageSrc?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  imageSrc,
  className,
  ...props
}: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className={cn(className)} {...props}>
      <CardContent className="pt-6">
        <Quote className="mb-4 h-8 w-8 text-primary/20" />
        <p className="mb-6 text-base italic">"{quote}"</p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage alt={author} src={imageSrc} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{author}</p>
            {role && <p className="text-muted-foreground text-sm">{role}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
