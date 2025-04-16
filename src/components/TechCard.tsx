
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TechCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  skills: string[];
}

export function TechCard({ title, icon, className, skills }: TechCardProps) {
  return (
    <Card className={cn("card-hover h-full", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="text-primary">{icon}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-2 gap-2">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
