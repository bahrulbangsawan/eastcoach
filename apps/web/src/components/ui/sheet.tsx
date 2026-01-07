import * as React from "react"

import { cn } from "@/lib/utils"

type SheetContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextValue | undefined>(undefined)

const Sheet = ({
  children,
  open = false,
  onOpenChange,
}: {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false)

  const isControlled = onOpenChange !== undefined
  const isOpen = isControlled ? open : internalOpen

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    if (isControlled) {
      onOpenChange?.(newOpen)
    } else {
      setInternalOpen(newOpen)
    }
  }, [isControlled, onOpenChange])

  return (
    <SheetContext.Provider value={{ open: isOpen, setOpen: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  )
}

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, onClick, ...props }, ref) => {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error("SheetTrigger must be used within Sheet")

  return (
    <button
      ref={ref}
      className={cn(className)}
      onClick={(e) => {
        onClick?.(e)
        context.setOpen(true)
      }}
      {...props}
    >
      {children}
    </button>
  )
})
SheetTrigger.displayName = "SheetTrigger"

const SheetClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, onClick, ...props }, ref) => {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error("SheetClose must be used within Sheet")

  return (
    <button
      ref={ref}
      className={cn(className)}
      onClick={(e) => {
        onClick?.(e)
        context.setOpen(false)
      }}
      {...props}
    >
      {children}
    </button>
  )
})
SheetClose.displayName = "SheetClose"

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: "top" | "right" | "bottom" | "left"
  }
>(({ side = "right", className, children, ...props }, ref) => {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error("SheetContent must be used within Sheet")

  if (!context.open) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/80"
        onClick={() => context.setOpen(false)}
      />
      <div
        ref={ref}
        className={cn(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          "animate-in slide-in-from-right",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  )
})
SheetContent.displayName = "SheetContent"

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
)
SheetHeader.displayName = "SheetHeader"

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
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = "SheetDescription"

const SheetPortal = ({ children }: { children: React.ReactNode }) => <>{children}</>

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
}
