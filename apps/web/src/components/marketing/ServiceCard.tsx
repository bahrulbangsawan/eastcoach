import type { ComponentProps } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ServiceCardProps extends ComponentProps<typeof Card> {
  title: string;
  description: string;
  badge?: string;
}

export function ServiceCard({
  title,
  description,
  badge,
  className,
  ...props
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col transition-shadow hover:shadow-lg",
        className
      )}
      {...props}
    >
      <CardHeader>
        {badge && (
          <Badge className="mb-2 w-fit" variant="secondary">
            {badge}
          </Badge>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
