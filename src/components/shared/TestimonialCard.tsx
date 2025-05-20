
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface TestimonialCardProps {
  name: string;
  position: string;
  testimonial: string;
  image: string;
}

export const TestimonialCard = ({ 
  name, 
  position, 
  testimonial, 
  image 
}: TestimonialCardProps) => (
  <Card className="bg-[#1A1F2C] border-0 shadow-lg">
    <CardContent className="p-6">
      <div className="mb-4">
        <Icon name="Quote" className="text-[#F97316]/40" size={32} />
      </div>
      <p className="text-gray-300 mb-6">{testimonial}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);
