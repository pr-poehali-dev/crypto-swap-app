
// Навигация
export interface NavLinkType {
  href: string;
  label: string;
}

// Особенности
export interface FeatureType {
  icon: string;
  title: string;
  description: string;
}

// Дорожная карта
export interface RoadmapItemType {
  date: string;
  title: string;
  description: string;
  right: boolean;
  highlight?: boolean;
}

// Отзывы
export interface TestimonialType {
  name: string;
  position: string;
  testimonial: string;
  image: string;
}

// Партнеры
export interface PartnerType {
  name: string;
  logo?: string;
}

// Футер
export interface FooterLinkType {
  href: string;
  label: string;
}

export interface FooterColumnType {
  title: string;
  links: FooterLinkType[];
}
