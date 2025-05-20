
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="bg-[#1A1F2C] text-white min-h-screen">
      {/* Навигация */}
      <nav className="container mx-auto flex justify-between items-center py-6">
        <div className="flex items-center gap-2">
          <span className="text-[#F97316] text-xl font-bold">CryptoSwap</span>
          <div className="bg-[#F97316] rounded-full h-2 w-2"></div>
        </div>
        <div className="flex items-center gap-6">
          <a className="hover:text-[#F97316] transition-colors" href="#features">Возможности</a>
          <a className="hover:text-[#F97316] transition-colors" href="#interface">Интерфейс</a>
          <a className="hover:text-[#F97316] transition-colors" href="#partners">Партнеры</a>
          <a className="hover:text-[#F97316] transition-colors" href="#roadmap">RoadMap</a>
          <a className="hover:text-[#F97316] transition-colors" href="#testimonials">Отзывы</a>
          <Button className="bg-[#F97316] hover:bg-[#FB923C] ml-4">
            Скачать сейчас
          </Button>
        </div>
      </nav>

      {/* Главная секция */}
      <section className="container mx-auto py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Обменивайте <span className="text-[#F97316]">BTC на USDT</span> без комиссии
          </h1>
          <p className="text-gray-300 text-xl mb-8">
            Первое в мире десктопное приложение с нулевой комиссией для обмена криптовалюты. Доступно для Windows и Mac.
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#F97316] hover:bg-[#FB923C] text-lg px-8 py-6">
              Скачать для Windows
            </Button>
            <Button className="bg-transparent border border-[#F97316] hover:bg-[#F97316]/10 text-lg px-8 py-6">
              Скачать для Mac
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-[#F97316]/20 w-80 h-80 rounded-full absolute -top-10 -right-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1644195658583-c0853ed9b0a3?ixlib=rb-4.0.3" 
              alt="CryptoSwap Dashboard" 
              className="rounded-xl shadow-2xl relative z-10"
              style={{ width: '500px', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Особенности */}
      <section id="features" className="bg-[#242B3D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают <span className="text-[#F97316]">CryptoSwap</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="Wallet" 
              title="Без комиссии" 
              description="Обменивайте криптовалюту с нулевой комиссией в любом объеме"
            />
            <FeatureCard 
              icon="Shield" 
              title="Безопасность" 
              description="Защита данных на уровне банков и ваши ключи всегда остаются только у вас"
            />
            <FeatureCard 
              icon="Zap" 
              title="Молниеносно" 
              description="Транзакции подтверждаются за считанные секунды"
            />
            <FeatureCard 
              icon="Globe" 
              title="Глобальная поддержка" 
              description="Доступно для пользователей по всему миру 24/7"
            />
            <FeatureCard 
              icon="Unlock" 
              title="Без ограничений" 
              description="Нет лимитов на количество и объем транзакций"
            />
            <FeatureCard 
              icon="LineChart" 
              title="Торговая история" 
              description="Отслеживайте все ваши обмены и анализируйте статистику"
            />
          </div>
        </div>
      </section>

      {/* Интерфейс программы */}
      <section id="interface" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Интуитивно понятный <span className="text-[#F97316]">интерфейс</span></h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Наше приложение разработано с учетом лучших практик UX/UI дизайна, чтобы сделать обмен криптовалюты максимально простым.
        </p>
        
        <div className="relative mt-20">
          <img 
            src="https://images.unsplash.com/photo-1640340434863-c5e919c50037?ixlib=rb-4.0.3"
            alt="CryptoSwap Interface" 
            className="rounded-xl shadow-2xl mx-auto"
            style={{ width: '80%', height: 'auto' }}
          />
          
          <div className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-[#1A1F2C]/90 p-6 rounded-xl border border-[#F97316]/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-[#F97316] mb-3">Быстрый обмен</h3>
            <p className="text-gray-300">Всего в 3 клика меняйте BTC на USDT без ожидания и комиссий</p>
          </div>
          
          <div className="absolute top-1/4 right-20 transform -translate-y-1/2 bg-[#1A1F2C]/90 p-6 rounded-xl border border-[#F97316]/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-[#F97316] mb-3">Аналитика в реальном времени</h3>
            <p className="text-gray-300">Актуальные курсы и тренды прямо в приложении</p>
          </div>
        </div>
      </section>

      {/* Партнеры */}
      <section id="partners" className="bg-[#242B3D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Нам <span className="text-[#F97316]">доверяют</span></h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Мы сотрудничаем с ведущими компаниями в сфере блокчейна и финансов
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <div className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">Coinbase</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">Binance</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">Tether</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">Kraken</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RoadMap */}
      <section id="roadmap" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-4 text-center"><span className="text-[#F97316]">RoadMap</span> развития</h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Наш план развития на ближайший год
        </p>
        
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#F97316]/30 transform -translate-x-1/2"></div>
          
          <div className="relative z-10">
            {/* Первый этап */}
            <RoadMapItem 
              date="Июнь 2025" 
              title="Запуск приложения" 
              description="Релиз первой версии для Windows и Mac"
              right={false}
            />
            
            {/* Второй этап */}
            <RoadMapItem 
              date="Август 2025" 
              title="Добавление новых пар" 
              description="Поддержка ETH, SOL, DOT и других популярных криптовалют"
              right={true}
            />
            
            {/* Третий этап */}
            <RoadMapItem 
              date="Октябрь 2025" 
              title="Интеграция с аппаратными кошельками" 
              description="Поддержка Ledger, Trezor и других популярных hardware-кошельков"
              right={false}
            />
            
            {/* Четвертый этап */}
            <RoadMapItem 
              date="Декабрь 2025" 
              title="Коллаборация с Apple" 
              description="Эксклюзивная интеграция с экосистемой Apple"
              highlight={true}
              right={true}
            />
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="testimonials" className="bg-[#242B3D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Что говорят <span className="text-[#F97316]">пользователи</span></h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Отзывы наших клиентов и партнеров
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Алекс Джонсон"
              position="CEO, Crypto Ventures"
              testimonial="CryptoSwap изменил наш подход к управлению криптоактивами. Нулевая комиссия и моментальные обмены — это именно то, что нужно рынку."
              image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3"
            />
            <TestimonialCard 
              name="Сара Ли"
              position="Блокчейн разработчик"
              testimonial="Как технический специалист, я оценила архитектуру и безопасность CryptoSwap. Это приложение устанавливает новые стандарты в индустрии."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
            />
            <TestimonialCard 
              name="Макс Петров"
              position="Инвестор"
              testimonial="Я ежедневно совершаю десятки обменов, и CryptoSwap позволяет мне экономить тысячи долларов на комиссиях. Отличный продукт!"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
            />
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="container mx-auto py-16 text-center">
        <div className="bg-[#2A3349] rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#F97316]/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#F97316]/10 rounded-full"></div>
          
          <h2 className="text-3xl font-bold mb-6 relative z-10">Начните обменивать <span className="text-[#F97316]">без комиссии</span> уже сегодня</h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto relative z-10">
            Присоединяйтесь к тысячам пользователей, которые уже экономят на комиссиях при обмене криптовалюты
          </p>
          
          <div className="flex gap-4 justify-center relative z-10">
            <Button className="bg-[#F97316] hover:bg-[#FB923C] text-lg px-8 py-6">
              <Icon name="Download" className="mr-2" />
              Скачать для Windows
            </Button>
            <Button className="bg-transparent border border-[#F97316] hover:bg-[#F97316]/10 text-lg px-8 py-6">
              <Icon name="Apple" className="mr-2" />
              Скачать для Mac
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#191E2B] py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#F97316] text-xl font-bold">CryptoSwap</span>
                <div className="bg-[#F97316] rounded-full h-2 w-2"></div>
              </div>
              <p className="text-gray-400 max-w-sm">
                Революционное приложение для обмена криптовалюты без комиссии. Доступно для Windows и Mac.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">Продукт</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-[#F97316]">Возможности</a></li>
                  <li><a href="#interface" className="text-gray-400 hover:text-[#F97316]">Интерфейс</a></li>
                  <li><a href="#roadmap" className="text-gray-400 hover:text-[#F97316]">RoadMap</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">Компания</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-[#F97316]">О нас</a></li>
                  <li><a href="#partners" className="text-gray-400 hover:text-[#F97316]">Партнеры</a></li>
                  <li><a href="#testimonials" className="text-gray-400 hover:text-[#F97316]">Отзывы</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">Связаться</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-[#F97316]">Поддержка</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#F97316]">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#F97316]">Discord</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© 2025 CryptoSwap. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#F97316]">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316]">
                <Icon name="Github" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316]">
                <Icon name="Linkedin" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Компоненты для повторного использования
const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
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
  highlight 
}: { 
  date: string; 
  title: string; 
  description: string; 
  right: boolean;
  highlight?: boolean;
}) => (
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

const TestimonialCard = ({ 
  name, 
  position, 
  testimonial, 
  image 
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

export default Index;
