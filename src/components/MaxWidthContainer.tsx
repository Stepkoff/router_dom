import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils.ts";

interface MaxWidthContainerProps extends PropsWithChildren{
  className?: string
}

export const MaxWidthContainer = ({className, children}:MaxWidthContainerProps) => {
  return (
    <div className={cn('max-w-4xl mx-auto px-4', className)}>
      {children}
    </div>
  );
};
