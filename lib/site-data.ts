export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Sustainable Cleaning Solutions", href: "/sustainable-cleaning-solutions" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export type Category = {
  name: string;
  slug: string;
  icon:
    | "machinery"
    | "bin"
    | "trolley"
    | "broom"
    | "squeegee"
    | "mop"
    | "brush"
    | "dispenser"
    | "household"
    | "kitchen";
  description: string;
};

export const categories: Category[] = [
  {
    name: "Cleaning Machinery",
    slug: "cleaning-machinery",
    icon: "machinery",
    description:
      "Our cleaning machinery is an advanced wheeled system that can clean several properties at once.",
  },
  {
    name: "Garbage Bin",
    slug: "garbage-bins",
    icon: "bin",
    description:
      "Explore wide varieties of dustbins. Get High Quality Plastic Dustbins, Stainless Steel Dustbins, and more.",
  },
  {
    name: "Mop Trolleys",
    slug: "mop-trolleys",
    icon: "trolley",
    description:
      "Clean your way with the Janitorial Trolley. We have a Wide Range of Mop Trolley and Janitorial Trolleys.",
  },
  {
    name: "Brooms",
    slug: "brooms",
    icon: "broom",
    description:
      "Wide Range of PP, Coco, and Outdoor Brooms. Sourced From Italy, Sri Lanka and China.",
  },
  {
    name: "Squeegees",
    slug: "squeegees",
    icon: "squeegee",
    description:
      "Say goodbye to streaky windows and mirrors with these hardwood-handled squeegees! Explore quality squeegees.",
  },
  {
    name: "Mops",
    slug: "mops",
    icon: "mop",
    description:
      "We have mops for every job. Variety of Cotton, Rayon, Viscose, Acrylic and Microfiber mops suited for all your needs.",
  },
  {
    name: "Cleaning Accessories",
    slug: "cleaning-accessories",
    icon: "brush",
    description:
      "All types of Cleaning accessories such as Static Duster, Toilet Pump, Spray Bottle, and many more.",
  },
  {
    name: "Household Products",
    slug: "household-products",
    icon: "household",
    description:
      "Need Clothes Hangers, Personal Care Products, Storage Jars, Bath products, we got you covered.",
  },
  {
    name: "Kitchenware",
    slug: "kitchenware",
    icon: "kitchen",
    description:
      "From Kitchen Knives to Kitchen Towels, we have a wide range of everyday Kitchenware Products.",
  },
];

export const brands = [
  "HaoTian",
  "IPC Pulex",
  "TMB Italy",
  "Martinazzo",
  "Tramontina",
  "Aqua ChemPac",
];

export type Benefit = {
  title: string;
  description: string;
  icon: "tag" | "thumb" | "truck" | "shield" | "percent";
};

export const benefits: Benefit[] = [
  {
    title: "Affordable Prices",
    description: "Competitive pricing across our full catalogue of cleaning equipment.",
    icon: "tag",
  },
  {
    title: "100% Customer Satisfaction",
    description: "Decades of relationships built on reliable service and support.",
    icon: "thumb",
  },
  {
    title: "Quick Delivery",
    description: "Fast turnaround from our Umm Al Qwain warehouse to your door.",
    icon: "truck",
  },
  {
    title: "Best Quality",
    description: "Sourced from trusted manufacturers in Italy, Taiwan and beyond.",
    icon: "shield",
  },
  {
    title: "Bulk Discounts",
    description: "Special pricing for wholesale and large-volume orders.",
    icon: "percent",
  },
];

export const heroSlides = [
  {
    title: "Cleaning Machinery for Every Facility",
    subtitle: "Scrubbers, polishers and vacuums built for daily commercial use.",
    cta: "Shop Machinery",
    href: "/products/cleaning-machinery",
  },
  {
    title: "Marble Expert Polishing Systems",
    subtitle: "Restore and maintain natural stone floors to a mirror finish.",
    cta: "Explore Marble Expert",
    href: "/products",
  },
  {
    title: "Garbage Bins in Every Size",
    subtitle: "Indoor, outdoor and recycling bins for offices and facilities.",
    cta: "Browse Bins",
    href: "/products/garbage-bins",
  },
  {
    title: "Professional Kitchenware",
    subtitle: "Commercial knives and kitchen tools from Tramontina.",
    cta: "View Kitchenware",
    href: "/products/kitchenware",
  },
];

export const companyInfo = {
  phone: "04-2261889",
  email: "inquiry@califorca.ae",
  address: "Umm Dera, Umm Al Qwain, UAE (near Apollo Tubes)",
  hoursShowroom: "Saturday – Thursday, 8:00 AM – 1:00 PM & 4:00 PM – 8:30 PM",
  hoursWarehouse: "Saturday – Thursday, 8:30 AM – 1:00 PM & 3:30 PM – 6:00 PM",
  wholesaleUrl: "https://shop.califorca.ae",
  founded: 1984,
  staffCount: "40+",
  origins: ["Italy", "Taiwan", "Brazil", "India", "Pakistan", "Sri Lanka", "China"],
};

export const footerInfoLinks: NavLink[] = [
  { label: "Delivery System", href: "/delivery-system" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
];

export const socialLinks: NavLink[] = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];
