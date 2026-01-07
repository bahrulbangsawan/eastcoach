import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type SheetContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SheetContext = React.createContext<SheetContextValue | undefined>(
  undefined
);

function useSheetContext() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet components must be used within a Sheet");
  }
  return context;
}

const Sheet = ({
  children,
  open = false,
  onOpenChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false);

  const isControlled = onOpenChange !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      if (isControlled) {
        onOpenChange?.(newOpen);
      } else {
        setInternalOpen(newOpen);
      }
    },
    [isControlled, onOpenChange]
  );

  return (
    <SheetContext.Provider value={{ open: isOpen, setOpen: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
};

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, onClick, type = "button", ...props }, ref) => {
  const { setOpen } = useSheetContext();

  return (
    <button
      className={cn(className)}
      onClick={(e) => {
        onClick?.(e);
        setOpen(true);
      }}
      ref={ref}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
});
SheetTrigger.displayName = "SheetTrigger";

const SheetClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, onClick, type = "button", ...props }, ref) => {
  const { setOpen } = useSheetContext();

  return (
    <button
      className={cn(className)}
      onClick={(e) => {
        onClick?.(e);
        setOpen(false);
      }}
      ref={ref}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
});
SheetClose.displayName = "SheetClose";

const SLIDE_ANIMATIONS = {
  right: {
    enter: "translate-x-0",
    exit: "translate-x-full",
    base: "inset-y-0 right-0",
  },
  left: {
    enter: "translate-x-0",
    exit: "-translate-x-full",
    base: "inset-y-0 left-0",
  },
  top: {
    enter: "translate-y-0",
    exit: "-translate-y-full",
    base: "inset-x-0 top-0",
  },
  bottom: {
    enter: "translate-y-0",
    exit: "translate-y-full",
    base: "inset-x-0 bottom-0",
  },
};

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: "top" | "right" | "bottom" | "left";
  }
>(({ side = "right", className, children, ...props }, ref) => {
  const { open, setOpen } = useSheetContext();
  const [mounted, setMounted] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  // Handle mounting and animation timing
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      // Small delay to trigger CSS transition
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
      return () => cancelAnimationFrame(timer);
    }
    setVisible(false);
    const timer = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(timer);
  }, [open]);

  // Handle escape key
  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  // Lock body scroll when open (with SSR guard)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  // Focus trap - focus first focusable element
  React.useEffect(() => {
    if (open && contentRef.current) {
      const focusable = contentRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }
  }, [open]);

  if (!mounted) return null;

  const animation = SLIDE_ANIMATIONS[side];

  const content = (
    <div aria-modal="true" className="fixed inset-0 z-[9999]" role="dialog">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-black/80 transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Content Panel */}
      <div
        className={cn(
          "fixed flex h-full flex-col shadow-2xl",
          "w-full sm:w-[320px] sm:max-w-[85vw]",
          "bg-[#0a0a0a]",
          "transition-transform duration-300 ease-out",
          animation.base,
          visible ? animation.enter : animation.exit,
          className
        )}
        ref={(node) => {
          // Merge refs
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          (
            contentRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = node;
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  );

  // Use portal to render at document body
  return createPortal(content, document.body);
});
SheetContent.displayName = "SheetContent";

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    className={cn("font-semibold text-foreground text-lg", className)}
    ref={ref}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn("text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";

const SheetPortal = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export {
  Sheet,
  SheetPortal,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
