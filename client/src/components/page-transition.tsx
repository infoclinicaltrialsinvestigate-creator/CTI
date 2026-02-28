import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
  }, []);

  const style: React.CSSProperties = {
    opacity: isTransitioning ? 1 : 0,
    transform: isTransitioning ? "translateY(0)" : "translateY(12px)",
    transition: "opacity 400ms ease-out, transform 400ms ease-out",
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
