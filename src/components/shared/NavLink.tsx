
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "hover:text-[#F97316] transition-colors",
        className
      )}
    >
      {children}
    </a>
  );
};
