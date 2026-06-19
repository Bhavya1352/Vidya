import { cn } from "../../lib/utils";

export const GlowingEffect = ({
  spread = 40,
  glow = true,
  disabled = false,
  borderWidth = 3,
}: {
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  borderWidth?: number;
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500",
        glow && "opacity-100",
        !disabled && "group-hover:opacity-100"
      )}
      style={{
        boxShadow: `0 0 ${spread}px rgba(212, 168, 83, 0.15)`,
        border: `${borderWidth}px solid rgba(212, 168, 83, 0.3)`,
      }}
    />
  );
};
