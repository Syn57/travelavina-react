import { forwardRef } from "react";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ children, className = '', ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={`${className}`}
          {...props}
        >
          {children}
        </div>
      );
    }
  );
  
CardContent.displayName = 'CardContent';