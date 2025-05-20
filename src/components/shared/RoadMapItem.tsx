
interface RoadMapItemProps {
  date: string;
  title: string;
  description: string;
  right: boolean;
  highlight?: boolean;
}

export const RoadMapItem = ({ 
  date, 
  title, 
  description, 
  right, 
  highlight = false
}: RoadMapItemProps) => (
  <div className={`flex items-center mb-12 ${right ? 'justify-start flex-row-reverse' : 'justify-end'}`}>
    <div className={`w-5/12 ${right ? 'text-left' : 'text-right'}`}>
      <span className={`text-sm font-semibold ${highlight ? 'text-[#F97316]' : 'text-gray-400'}`}>{date}</span>
      <h3 className={`text-xl font-bold mt-2 ${highlight ? 'text-[#F97316]' : 'text-white'}`}>{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
    
    <div className="relative mx-6">
      <div className={`absolute w-4 h-4 rounded-full ${highlight ? 'bg-[#F97316]' : 'bg-white'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20`}></div>
      <div className={`w-10 h-10 rounded-full ${highlight ? 'bg-[#F97316]/30' : 'bg-white/10'} flex items-center justify-center relative z-10`}></div>
    </div>
    
    <div className="w-5/12"></div>
  </div>
);
