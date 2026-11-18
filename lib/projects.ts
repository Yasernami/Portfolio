export type Project = {
  id: string;
  title: string;
  index: string;
  slides: string[];
  alt: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  name: string;
  descFa: string;
  descEn: string;
  tagFa: string;
  tagEn: string;
  wrapInfo?: boolean;
};

export const uiProjects: Project[] = [
  {
    id: "biterland",
    title: "Biterland",
    index: "01",
    slides: Array.from({ length: 6 }, (_, i) => `/ig/biterland/${String(i + 1).padStart(2, "0")}.jpg`),
    alt: "Biterland",
    cover: "/ig/biterland/01.jpg",
    coverWidth: 1200,
    coverHeight: 1500,
    name: "Biterland",
    descFa: "صرافی ارز دیجیتال",
    descEn: "Crypto exchange",
    tagFa: "UI/UX",
    tagEn: "UI/UX",
  },
  {
    id: "homino",
    title: "Homino",
    index: "02",
    slides: Array.from({ length: 7 }, (_, i) => `/ig/homino/${String(i + 1).padStart(2, "0")}.jpg`),
    alt: "Homino",
    cover: "/ig/homino/01.jpg",
    coverWidth: 1200,
    coverHeight: 1500,
    name: "Homino",
    descFa: "پلتفرم املاک و مسکن",
    descEn: "Real estate platform",
    tagFa: "UI/UX",
    tagEn: "UI/UX",
  },
  {
    id: "learnino",
    title: "Learnino",
    index: "03",
    slides: Array.from({ length: 5 }, (_, i) => `/ig/learnino/${String(i + 1).padStart(2, "0")}.jpg`),
    alt: "Learnino",
    cover: "/ig/learnino/01.jpg",
    coverWidth: 1200,
    coverHeight: 1500,
    name: "Learnino",
    descFa: "مرجع دوره‌های گرافیک",
    descEn: "Graphic design course hub",
    tagFa: "UI/UX",
    tagEn: "UI/UX",
  },
  {
    id: "changefa",
    title: "ChangeFa",
    index: "04",
    slides: Array.from({ length: 6 }, (_, i) => `/ig/changefa/${String(i + 1).padStart(2, "0")}.jpg`),
    alt: "ChangeFa",
    cover: "/ig/changefa/01.jpg",
    coverWidth: 1200,
    coverHeight: 1500,
    name: "ChangeFa",
    descFa: "صرافی ارز دیجیتال",
    descEn: "Crypto exchange",
    tagFa: "UI/UX",
    tagEn: "UI/UX",
  },
  {
    id: "detifi",
    title: "DetiFi AI",
    index: "05",
    slides: Array.from({ length: 4 }, (_, i) => `/ig/detifi/${String(i + 1).padStart(2, "0")}.jpg`),
    alt: "DetiFi AI",
    cover: "/ig/detifi/01.jpg",
    coverWidth: 1200,
    coverHeight: 1500,
    name: "DetiFi AI",
    descFa: "داشبورد مالی هوشمند",
    descEn: "Smart financial dashboard",
    tagFa: "UI/UX",
    tagEn: "UI/UX",
  },
  {
    id: "fundracing",
    title: "Fundracing",
    index: "06",
    slides: Array.from({ length: 10 }, (_, i) => `/ig/fundracing/${String(i + 1).padStart(2, "0")}.jpg`),
    alt: "Fundracing",
    cover: "/ig/fundracing/01.jpg",
    coverWidth: 1440,
    coverHeight: 1800,
    name: "Fundracing",
    descFa: "پلتفرم پراپ‌تریدینگ",
    descEn: "Prop trading platform",
    tagFa: "وب",
    tagEn: "Web",
  },
  {
    id: "blue",
    title: "Blue Account",
    index: "07",
    slides: Array.from({ length: 9 }, (_, i) => `/ig/blue/${String(i + 1).padStart(2, "0")}.jpg`),
    alt: "Blue Account UI/UX project",
    cover: "/ig/blue/01.jpg",
    coverWidth: 1200,
    coverHeight: 1500,
    name: "Blue Account",
    descFa: "پلتفرم اشتراک اسپاتیفای پرمیوم",
    descEn: "Spotify premium subscription platform",
    tagFa: "UI/UX",
    tagEn: "UI/UX",
    wrapInfo: true,
  },
];

export type SocialPost = {
  id: string;
  title: string;
  index: string;
  slides: string[];
  alt: string;
  cover: string;
  brand: string;
  descFa: string;
  descEn: string;
};

export const socialPosts: SocialPost[] = [
  {
    id: "social-01",
    title: "3 key questions before buying crypto",
    index: "01",
    slides: ["/ig/social/01.jpg"],
    alt: "3 key questions before buying crypto",
    cover: "/ig/social/01.jpg",
    brand: "ایکس پی",
    descFa: "۳ سوال کلیدی قبل از خرید ارز دیجیتال",
    descEn: "3 key questions before buying crypto",
  },
  {
    id: "social-02",
    title: "Not every digital asset is a cryptocurrency",
    index: "02",
    slides: ["/ig/social/02.jpg"],
    alt: "Not every digital asset is a cryptocurrency",
    cover: "/ig/social/02.jpg",
    brand: "ایکس پی",
    descFa: "هر ارز دیجیتالی رمزارز نیست!",
    descEn: "Not every digital asset is a cryptocurrency",
  },
  {
    id: "social-03",
    title: "Don't invest in Bitcoin!",
    index: "03",
    slides: ["/ig/social/03.jpg"],
    alt: "Don't invest in Bitcoin!",
    cover: "/ig/social/03.jpg",
    brand: "ایکس پی",
    descFa: "روی بیت کوین سرمایه‌گذاری نکن!",
    descEn: "Don't invest in Bitcoin!",
  },
  {
    id: "social-04",
    title: "Special discount for Blue artists",
    index: "04",
    slides: ["/ig/social/04.jpg"],
    alt: "Special discount for Blue artists",
    cover: "/ig/social/04.jpg",
    brand: "Blue Spotify",
    descFa: "تخفیف ویژه برای آرتیست‌های بلو",
    descEn: "Special discount for Blue artists",
  },
  {
    id: "social-05",
    title: "Christmas & New Year offer",
    index: "05",
    slides: ["/ig/social/05.jpg"],
    alt: "Christmas & New Year offer",
    cover: "/ig/social/05.jpg",
    brand: "Blue Spotify",
    descFa: "به مناسبت سال نو میلادی",
    descEn: "Christmas & New Year offer",
  },
];

export const stripItems = [
  { fa: "طراحی UI/UX", en: "UI/UX Design" },
  { fa: "طراحی گرافیک", en: "Graphic Design" },
  { fa: "پوستر", en: "Posters" },
  { fa: "پست‌های شبکه‌های اجتماعی", en: "Social Posts" },
  { fa: "بنر", en: "Banners" },
  { fa: "موشن‌گرافیک", en: "Motion Graphics" },
  { fa: "تدوین ویدیو", en: "Video Editing" },
] as const;
