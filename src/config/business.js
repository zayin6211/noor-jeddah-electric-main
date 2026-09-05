const SITE_URL =
  import.meta.env.VITE_SITE_URL ||
  "https://noor-jeddah-electric.vercel.app";

export const BUSINESS = {
  name: "نور جدة للكهرباء",
  nameEn: "Noor Jeddah Electricity",
  telephone: "0532355998",
  telephoneInternational: "+966532355998",
  whatsappUrl: "https://wa.me/966532355998",
  cityAr: "جدة",
  cityEn: "Jeddah",
  countryCode: "SA",
  language: "ar",
  locale: "ar_SA",
  experienceYears: 15,
  serviceAreaName: "جدة",
  socialImage: "/og/noor-jeddah-social.webp",
};

export const WHATSAPP_URL = BUSINESS.whatsappUrl;

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export { SITE_URL };