
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="bg-[#1A1F2C] border-0 shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 transform transition-transform">
    <CardContent className="p-6">
      <div className="w-12 h-12 rounded-lg bg-[#F97316]/20 flex items-center justify-center mb-4">
        <Icon name={icon} className="text-[#F97316]" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </CardContent>
  </Card>
);
