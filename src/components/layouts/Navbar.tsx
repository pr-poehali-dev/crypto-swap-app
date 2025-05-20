
import { Button } from "@/components/ui/button";
import { NavLink } from "../shared/NavLink";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-6">
      <div className="flex items-center gap-2">
        <span className="text-[#F97316] text-xl font-bold">CryptoSwap</span>
        <div className="bg-[#F97316] rounded-full h-2 w-2"></div>
      </div>
      <div className="flex items-center gap-6">
        <NavLink href="#features">Возможности</NavLink>
        <NavLink href="#interface">Интерфейс</NavLink>
        <NavLink href="#partners">Партнеры</NavLink>
        <NavLink href="#roadmap">RoadMap</NavLink>
        <NavLink href="#testimonials">Отзывы</NavLink>
        <Button className="bg-[#F97316] hover:bg-[#FB923C] ml-4">
          Скачать сейчас
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
