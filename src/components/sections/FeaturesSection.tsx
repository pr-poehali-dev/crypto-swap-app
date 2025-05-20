
import { FeatureCard } from "../shared/FeatureCard";

const featuresList = [
  {
    icon: "Wallet",
    title: "Без комиссии",
    description: "Обменивайте криптовалюту с нулевой комиссией в любом объеме"
  },
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Защита данных на уровне банков и ваши ключи всегда остаются только у вас"
  },
  {
    icon: "Zap",
    title: "Молниеносно",
    description: "Транзакции подтверждаются за считанные секунды"
  },
  {
    icon: "Globe",
    title: "Глобальная поддержка",
    description: "Доступно для пользователей по всему миру 24/7"
  },
  {
    icon: "Unlock",
    title: "Без ограничений",
    description: "Нет лимитов на количество и объем транзакций"
  },
  {
    icon: "LineChart",
    title: "Торговая история",
    description: "Отслеживайте все ваши обмены и анализируйте статистику"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#242B3D] py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Почему выбирают <span className="text-[#F97316]">CryptoSwap</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
