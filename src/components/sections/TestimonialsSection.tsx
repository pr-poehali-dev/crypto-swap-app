
import { TestimonialCard } from "../shared/TestimonialCard";

const testimonials = [
  {
    name: "Алекс Джонсон",
    position: "CEO, Crypto Ventures",
    testimonial: "CryptoSwap изменил наш подход к управлению криптоактивами. Нулевая комиссия и моментальные обмены — это именно то, что нужно рынку.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3"
  },
  {
    name: "Сара Ли",
    position: "Блокчейн разработчик",
    testimonial: "Как технический специалист, я оценила архитектуру и безопасность CryptoSwap. Это приложение устанавливает новые стандарты в индустрии.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
  },
  {
    name: "Макс Петров",
    position: "Инвестор",
    testimonial: "Я ежедневно совершаю десятки обменов, и CryptoSwap позволяет мне экономить тысячи долларов на комиссиях. Отличный продукт!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-[#242B3D] py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Что говорят <span className="text-[#F97316]">пользователи</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Отзывы наших клиентов и партнеров
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
