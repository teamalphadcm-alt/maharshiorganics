// ─────────────────────────────────────────────────────────────
// Maharshi Organics — single source of truth for business data
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Maharshi Organics",
  legalName: "Sri Maharshi Organics",
  tagline: "100% Certified, Authentic Organic Food",
  description:
    "Maharshi Organics, Rajajinagar, Bengaluru — certified organic groceries, millets, cold-pressed oils, pulses, spices, jaggery, Himalayan pink rock salt and natural products. Grown without chemical fertilizers, pesticides or preservatives.",
  // TODO: replace with the live domain before deploying
  url: "https://www.maharshiorganics.com",
  phoneDisplay: "076769 91488",
  phoneIntl: "+91 76769 91488",
  phoneHref: "tel:+917676991488",
  whatsappNumber: "917676991488",
  addressLines: [
    "Ground Floor, #751, Shop A, 60th Cross Rd",
    "Near Bhasyam Circle, Next to A2B",
    "5th Block, Rajajinagar",
    "Bengaluru, Karnataka 560010",
  ],
  addressShort: "Near Bhasyam Circle, next to A2B, Rajajinagar, Bengaluru",
  street: "Ground Floor, #751, Shop A, 60th Cross Rd, near Bhasyam Circle, next to A2B, 5th Block, Rajajinagar",
  locality: "Bengaluru",
  region: "Karnataka",
  postalCode: "560010",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Maharshi+Organics+Rajajinagar+Bengaluru",
  mapsEmbed: "https://www.google.com/maps?q=Maharshi+Organics+Bhasyam+Circle+Rajajinagar+Bengaluru&output=embed",
  instagram: "https://www.instagram.com/maharshiorganics2023/",
  facebook: "https://www.facebook.com/maharshiorganicsofficial/",
};

export const waLink = (message = "Hello Maharshi Organics! I would like to know more about your organic products.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/why-organic", label: "Why Organic" },
  { href: "/our-promise", label: "Our Promise" },
  { href: "/organic-living", label: "Organic Living" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export type Category =
  | "Millets & Grains"
  | "Pulses & Dals"
  | "Cold-Pressed Oils"
  | "Spices & Masalas"
  | "Sweeteners"
  | "Salt & Essentials"
  | "Flours"
  | "Dry Fruits & Nuts"
  | "Wellness & Bath";

export const CATEGORIES: { name: Category; emoji: string; blurb: string }[] = [
  { name: "Millets & Grains", emoji: "🌾", blurb: "Ragi, foxtail, little millet, red & brown rice" },
  { name: "Pulses & Dals", emoji: "🫘", blurb: "Unpolished toor, moong, urad & chana" },
  { name: "Cold-Pressed Oils", emoji: "🫒", blurb: "Wood-pressed groundnut, coconut & sesame" },
  { name: "Spices & Masalas", emoji: "🌶️", blurb: "Turmeric, chilli, coriander & pepper" },
  { name: "Sweeteners", emoji: "🍯", blurb: "Organic jaggery, honey & palm sugar" },
  { name: "Salt & Essentials", emoji: "🧂", blurb: "Himalayan pink rock salt & more" },
  { name: "Flours", emoji: "🥣", blurb: "Stone-ground atta & millet flours" },
  { name: "Dry Fruits & Nuts", emoji: "🥜", blurb: "Almonds, cashews, raisins & dates" },
  { name: "Wellness & Bath", emoji: "🛁", blurb: "Artisanal bath salts & self-care" },
];

export type Product = {
  name: string;
  category: Category;
  emoji: string;
  desc: string;
  tags: string[];
  featured?: boolean;
  /** Optional product photo/poster served from /public (shown instead of the emoji). */
  image?: string;
};

export const PRODUCTS: Product[] = [
  { name: "Himalayan Pink Rock Salt", category: "Salt & Essentials", emoji: "🧂", desc: "Unrefined, naturally mineral-rich rock salt with no anti-caking agents.", tags: ["Unrefined", "No additives"], featured: true },
  { name: "Ragi (Finger Millet)", category: "Millets & Grains", emoji: "🌾", desc: "Karnataka's favourite millet — perfect for mudde, dosa and porridge.", tags: ["Gluten-free", "Calcium-rich"], featured: true },
  { name: "Foxtail Millet", category: "Millets & Grains", emoji: "🌾", desc: "A light, versatile millet that replaces rice in everyday meals.", tags: ["Gluten-free", "High fibre"] },
  { name: "Little Millet (Saame)", category: "Millets & Grains", emoji: "🌾", desc: "Small-grained millet ideal for pongal, upma and khichdi.", tags: ["Gluten-free"] },
  { name: "Kodo Millet (Haraka)", category: "Millets & Grains", emoji: "🌾", desc: "Traditional millet with a nutty flavour, great for rice dishes.", tags: ["Gluten-free"] },
  { name: "Brown Sona Masoori Rice", category: "Millets & Grains", emoji: "🍚", desc: "Hand-pounded, bran-intact rice grown without chemical inputs.", tags: ["Unpolished"] },
  { name: "Red Rice", category: "Millets & Grains", emoji: "🍚", desc: "Wholesome heirloom red rice with a rich, earthy taste.", tags: ["Heirloom", "Unpolished"] },
  { name: "Toor Dal", category: "Pulses & Dals", emoji: "🫘", desc: "Unpolished toor dal for the perfect saaru and sambar.", tags: ["Unpolished"], featured: true },
  { name: "Moong Dal", category: "Pulses & Dals", emoji: "🫘", desc: "Easy-to-digest split green gram, yellow and wholesome.", tags: ["Unpolished"] },
  { name: "Urad Dal", category: "Pulses & Dals", emoji: "🫘", desc: "For soft idlis, crisp dosas and vadas.", tags: ["Unpolished"] },
  { name: "Chana Dal", category: "Pulses & Dals", emoji: "🫘", desc: "Split Bengal gram for curries, chutneys and sweets.", tags: ["Unpolished"] },
  { name: "Cold-Pressed Groundnut Oil", category: "Cold-Pressed Oils", emoji: "🥜", desc: "Wood-pressed (marachekku) oil with natural aroma intact.", tags: ["Wood-pressed", "Unrefined"], featured: true },
  { name: "Cold-Pressed Coconut Oil", category: "Cold-Pressed Oils", emoji: "🥥", desc: "Pure coconut oil for cooking, skin and hair.", tags: ["Wood-pressed", "Unrefined"] },
  { name: "Cold-Pressed Sesame Oil", category: "Cold-Pressed Oils", emoji: "🫒", desc: "Gingelly oil pressed slowly to retain nutrients.", tags: ["Wood-pressed", "Unrefined"] },
  { name: "Turmeric Powder", category: "Spices & Masalas", emoji: "🟡", desc: "Bright, aromatic turmeric — no colour, no fillers.", tags: ["No colour added"], featured: true },
  { name: "Red Chilli Powder", category: "Spices & Masalas", emoji: "🌶️", desc: "Sun-dried chillies ground for honest heat and colour.", tags: ["No colour added"] },
  { name: "Black Pepper", category: "Spices & Masalas", emoji: "⚫", desc: "Bold, pungent whole pepper from organic farms.", tags: ["Whole spice"] },
  { name: "Coriander Powder", category: "Spices & Masalas", emoji: "🌿", desc: "Freshly ground, fragrant dhaniya powder.", tags: ["Freshly ground"] },
  { name: "Organic Jaggery Powder", category: "Sweeteners", emoji: "🟤", desc: "Chemical-free jaggery — a natural swap for white sugar.", tags: ["No chemicals", "Unrefined"], featured: true },
  { name: "Raw Forest Honey", category: "Sweeteners", emoji: "🍯", desc: "Unprocessed honey with nothing added, nothing removed.", tags: ["Raw", "Unheated"] },
  { name: "Whole Wheat Atta", category: "Flours", emoji: "🥣", desc: "Stone-ground (chakki) atta for soft, wholesome rotis.", tags: ["Stone-ground"], featured: true },
  { name: "Ragi Flour", category: "Flours", emoji: "🥣", desc: "Finely milled ragi flour for mudde, rotti and malt.", tags: ["Gluten-free"] },
  { name: "Multi-Millet Flour", category: "Flours", emoji: "🥣", desc: "A blend of millets for nutritious dosas and rotis.", tags: ["Gluten-free", "Blend"] },
  { name: "Almonds", category: "Dry Fruits & Nuts", emoji: "🌰", desc: "Crunchy, wholesome almonds for everyday snacking.", tags: ["Naturally dried"] },
  { name: "Cashews", category: "Dry Fruits & Nuts", emoji: "🥜", desc: "Creamy whole cashews, carefully sourced.", tags: ["Whole"] },
  { name: "Black Raisins", category: "Dry Fruits & Nuts", emoji: "🍇", desc: "Sun-dried seedless raisins with no sulphur treatment.", tags: ["Sun-dried"] },
  { name: "Urja Revitalizing Salt", category: "Wellness & Bath", emoji: "🛁", desc: "Artisanal bath salts with Himalayan pink rock salt, Epsom salt, rose & chamomile petals, herbs and a special essential oil blend.", tags: ["100% Natural", "Bath Salt"], featured: true, image: "/products/urja-revitalizing-salt.png" },
];
