
import { RoadMapItem } from "../shared/RoadMapItem";

const roadmapItems = [
  {
    date: "Июнь 2025",
    title: "Запуск приложения",
    description: "Релиз первой версии для Windows и Mac",
    right: false,
    highlight: false
  },
  {
    date: "Август 2025",
    title: "Добавление новых пар",
    description: "Поддержка ETH, SOL, DOT и других популярных криптовалют",
    right: true,
    highlight: false
  },
  {
    date: "Октябрь 2025",
    title: "Интеграция с аппаратными кошельками",
    description: "Поддержка Ledger, Trezor и других популярных hardware-кошельков",
    right: false,
    highlight: false
  },
  {
    date: "Декабрь 2025",
    title: "Коллаборация с Apple",
    description: "Эксклюзивная интеграция с экосистемой Apple",
    right: true,
    highlight: true
  }
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-4 text-center">
        <span className="text-[#F97316]">RoadMap</span> развития
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        Наш план развития на ближайший год
      </p>
      
      <div className="relative">
        {/* Вертикальная линия */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#F97316]/30 transform -translate-x-1/2"></div>
        
        <div className="relative z-10">
          {roadmapItems.map((item, index) => (
            <RoadMapItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              right={item.right}
              highlight={item.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
