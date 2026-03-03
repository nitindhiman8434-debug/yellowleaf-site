// Import CMS content files — these are edited via /admin
import settingsData from '../../content/settings.json';
import productsWrapper from '../../content/products.json';

// Handle both wrapped {body: [...]} and raw array formats
const productsData = Array.isArray(productsWrapper) ? productsWrapper : (productsWrapper.body || []);
import faqData from '../../content/pages/faq.json';
import aboutData from '../../content/pages/about.json';
import shippingData from '../../content/pages/shipping.json';
import returnsData from '../../content/pages/returns.json';
import loyaltyData from '../../content/pages/loyalty.json';

// ═══════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════
export const SITE_NAME = settingsData.site_name;
export const WHATSAPP_NUMBER = settingsData.whatsapp_number;
export const SUPPORT_EMAIL = settingsData.support_email;
export const VERIFY_EMAIL = settingsData.verify_email;
export const MIN_ORDER = settingsData.min_order;
export const FREE_SHIP_MIN = settingsData.free_ship_min;
export const POINTS_PER_DOLLAR = settingsData.points_per_dollar;
export const POINTS_TO_DOLLAR = settingsData.points_to_dollar;
export const ANNOUNCE_BAR = settingsData.announce_bar;
export const HERO = {
  title: settingsData.hero_title,
  subtitle: settingsData.hero_subtitle,
  cta_text: settingsData.hero_cta_text,
  cta_link: settingsData.hero_cta_link,
};
export const SERVICE_PILLARS = settingsData.service_pillars;

// ═══════════════════════════════════════
// PRODUCTS — restructure flat array into nested format
// ═══════════════════════════════════════
const EMOJI_MAP = {
  flowers: { indica: "🌿", sativa: "☀️", hybrid: "💜", preroll: "🚬" },
  edibles: { cookies: "🍪", brownies: "🟫", gummies: "🍬" },
  accessories: { grinder: "⚙️", "rolling-paper": "📜", "rolling-tray": "🎋", bong: "🧪" },
};

function getEmoji(cat, sub) {
  return EMOJI_MAP[cat]?.[sub] || "📦";
}

// Add emoji fallback for products without uploaded images
export const ALL_PRODUCTS = productsData.map(p => ({
  ...p,
  img: (p.image && !p.image.includes('default-'))
    ? p.image
    : getEmoji(p.category, p.subcategory),
  cat: p.category ? p.category.charAt(0).toUpperCase() + p.category.slice(1) : '',
  sub: p.subcategory ? p.subcategory.charAt(0).toUpperCase() + p.subcategory.slice(1).replace('-', ' ') : '',
}));

// Build nested PRODUCTS object for CategoryPage
export const PRODUCTS = {};
ALL_PRODUCTS.forEach(p => {
  if (!PRODUCTS[p.category]) PRODUCTS[p.category] = {};
  if (!PRODUCTS[p.category][p.subcategory]) PRODUCTS[p.category][p.subcategory] = [];
  PRODUCTS[p.category][p.subcategory].push(p);
});

export const FLASH_DEALS = ALL_PRODUCTS.filter(
  p => p.badge === "Flash Deal" || (p.badge && p.badge.includes("OFF"))
);

export const BEST_SELLERS = ALL_PRODUCTS.filter(
  p => p.badge === "Best Seller" || p.reviews > 200
);

// ═══════════════════════════════════════
// PAGE CONTENT
// ═══════════════════════════════════════
export const FAQ_DATA = faqData.items.map(i => ({ q: i.question, a: i.answer }));
export const FAQ_PAGE = { title: faqData.title, subtitle: faqData.subtitle };

export const ABOUT_PAGE = aboutData;
export const SHIPPING_PAGE = shippingData;
export const SHIPPING_PROVINCES = shippingData.provinces;
export const RETURNS_PAGE = returnsData;
export const LOYALTY_PAGE = loyaltyData;
