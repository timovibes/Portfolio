
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding scroll-mt-20", className)}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="heading-lg mb-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
        {title}
      </h2>
      {subtitle && <p className="text-foreground/70 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
  isCircular?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export function ImageContainer({ 
  src, 
  alt, 
  className, 
  imageClassName, 
  objectPosition = "center",
  isCircular = false,
  objectFit = "cover"
}: ImageContainerProps) {
  return (
    <div className={cn(
      "relative bg-gradient-to-br from-primary/20 to-primary/40 overflow-hidden flex items-center justify-center", 
      isCircular ? "rounded-full" : "",
      className
    )}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "border-4 border-background", 
          isCircular ? "rounded-full" : "",
          imageClassName
        )}
        style={{ 
          objectPosition,
          objectFit
        }}
      />
    </div>
  );
}
