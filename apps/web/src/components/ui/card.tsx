import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "group/card flex flex-col overflow-hidden text-card-foreground",
  {
    variants: {
      variant: {
        default: "bg-card ring-1 ring-foreground/10",
        glass: "border border-white/10 bg-white/[0.13] backdrop-blur-[6.8px]",
        image: "relative bg-center bg-cover bg-no-repeat",
        dark: "bg-dark text-white",
        lime: "bg-lime text-dark",
      },
      size: {
        default: "gap-4 rounded-xl py-4 text-sm/relaxed",
        sm: "gap-2 rounded-lg py-3 text-xs/relaxed",
        lg: "gap-6 rounded-2xl py-6 text-base/relaxed",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type CardProps = React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants>;

function Card({ className, variant, size, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, size }), className)}
      data-slot="card"
      data-variant={variant}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 px-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] group-data-[variant=glass]/card:px-6 [.border-b]:pb-4",
        className
      )}
      data-slot="card-header"
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("font-semibold text-lg leading-tight", className)}
      data-slot="card-title"
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-muted-foreground text-sm/relaxed", className)}
      data-slot="card-description"
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      data-slot="card-action"
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-5 group-data-[variant=glass]/card:px-6", className)}
      data-slot="card-content"
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mt-auto flex items-center border-border/50 border-t p-5",
        className
      )}
      data-slot="card-footer"
      {...props}
    />
  );
}

function CardOverlay({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
        className
      )}
      data-slot="card-overlay"
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardOverlay,
  cardVariants,
};
