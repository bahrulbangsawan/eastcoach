import * as React from "react";

import { cn } from "@/lib/utils";

const NavigationMenuContext = React.createContext<
  { viewport: boolean } | undefined
>(undefined);

function useNavigationMenuContext() {
  const context = React.useContext(NavigationMenuContext);
  if (!context) {
    throw new Error(
      "NavigationMenu components must be used within a NavigationMenu"
    );
  }
  return context;
}

const NavigationMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuContext.Provider value={{ viewport: false }}>
    <nav
      className={cn("flex items-center gap-1", className)}
      ref={ref}
      {...props}
    >
      {children}
    </nav>
  </NavigationMenuContext.Provider>
));
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    className={cn("flex items-center gap-1", className)}
    ref={ref}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li className={cn("", className)} ref={ref} {...props} />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    className={cn(
      "inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
};
