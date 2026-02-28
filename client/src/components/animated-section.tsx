import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type AnimationType = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleIn";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  "data-testid"?: string;
}

function getInitialStyles(animation: AnimationType): React.CSSProperties {
  switch (animation) {
    case "fadeUp":
      return {
        opacity: 0,
        transform: "translateY(30px)",
      };
    case "fadeIn":
      return {
        opacity: 0,
      };
    case "fadeLeft":
      return {
        opacity: 0,
        transform: "translateX(30px)",
      };
    case "fadeRight":
      return {
        opacity: 0,
        transform: "translateX(-30px)",
      };
    case "scaleIn":
      return {
        opacity: 0,
        transform: "scale(0.95)",
      };
    default:
      return {
        opacity: 0,
        transform: "translateY(30px)",
      };
  }
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  "data-testid": testId,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const initialStyles = getInitialStyles(animation);
  const finalStyles: React.CSSProperties = {
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
  };

  const style: React.CSSProperties = {
    ...(isVisible ? finalStyles : initialStyles),
    transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-testid={testId}
    >
      {children}
    </div>
  );
}
