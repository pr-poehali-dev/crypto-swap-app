import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

import {
  Navbar,
  Footer,
  HeroSection,
  FeaturesSection,
  InterfaceSection,
  PartnersSection,
  RoadmapSection,
  TestimonialsSection,
  CTASection,
} from "@/components";

const Index = () => {
  return (
    <div className="bg-[#1A1F2C] text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <InterfaceSection />
      <PartnersSection />
      <RoadmapSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

// Компоненты для повторного использования
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
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

const RoadMapItem = ({
  date,
  title,
  description,
  right,
  highlight,
}: {
  date: string;
  title: string;
  description: string;
  right: boolean;
  highlight?: boolean;
}) => (
  <div
    className={`flex items-center mb-12 ${right ? "justify-start flex-row-reverse" : "justify-end"}`}
  >
    <div className={`w-5/12 ${right ? "text-left" : "text-right"}`}>
      <span
        className={`text-sm font-semibold ${highlight ? "text-[#F97316]" : "text-gray-400"}`}
      >
        {date}
      </span>
      <h3
        className={`text-xl font-bold mt-2 ${highlight ? "text-[#F97316]" : "text-white"}`}
      >
        {title}
      </h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>

    <div className="relative mx-6">
      <div
        className={`absolute w-4 h-4 rounded-full ${highlight ? "bg-[#F97316]" : "bg-white"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20`}
      ></div>
      <div
        className={`w-10 h-10 rounded-full ${highlight ? "bg-[#F97316]/30" : "bg-white/10"} flex items-center justify-center relative z-10`}
      ></div>
    </div>

    <div className="w-5/12"></div>
  </div>
);

const TestimonialCard = ({
  name,
  position,
  testimonial,
  image,
}: {
  name: string;
  position: string;
  testimonial: string;
  image: string;
}) => (
  <Card className="bg-[#1A1F2C] border-0 shadow-lg">
    <CardContent className="p-6">
      <div className="mb-4">
        <Icon name="Quote" className="text-[#F97316]/40" size={32} />
      </div>
      <p className="text-gray-300 mb-6">{testimonial}</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);
