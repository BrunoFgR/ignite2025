import * as React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => {
    const ariaOrientation = orientation === "vertical" ? "vertical" : undefined;

    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={ariaOrientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";

export { Divider };
