import type { ComponentProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface CoachCardProps extends ComponentProps<typeof Card> {
  name: string;
  role: string;
  bio?: string;
  imageSrc?: string;
}

export function CoachCard({
  name,
  role,
  bio,
  imageSrc,
  className,
  ...props
}: CoachCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="flex flex-col items-center text-center">
        <Avatar className="mb-4 h-32 w-32">
          <AvatarImage alt={name} src={imageSrc} />
          <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="font-medium text-base text-primary">
          {role}
        </CardDescription>
      </CardHeader>
      {bio && (
        <CardContent className="flex-1">
          <p className="text-center text-muted-foreground text-sm">{bio}</p>
        </CardContent>
      )}
    </Card>
  );
}
