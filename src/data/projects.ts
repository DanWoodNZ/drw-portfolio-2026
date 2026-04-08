export type Project = {
  slug: string;
  title: string;
  description: string;
  imageSrc?: string;
  placeholderColor?: string;
  companyLogo?: string;
  companyName?: string;
  companySubtitle?: string;
  projectShortName?: string;
  projectRole?: string;
  heroText?: string;
  credits: { role: string; name: string }[];
};

export const projects: Project[] = [
  {
    slug: "current-ia",
    title: "Unlocking the value of the Current.",
    description: "Led an information architecture overhaul to add visibility for core features and launched a 'Discover' tab for rewards and partner offers.",
    imageSrc: "/pt-current-ia.webp",
    companyLogo: "/icons/icon-current.png",
    companyName: "Current",
    companySubtitle: "Modern fintech banking app",
    projectShortName: "Information architecture",
    projectRole: "Visual Design and Architecture",
    heroText: "Refreshed the company’s digital framework and booking flow to align the customers’ digital experience with the incredible campervan experience.",
    credits: [
      { role: "Product Design Lead", name: "Dan Wood" },
      { role: "Product Manager", name: "Sarah Connor" },
    ]
  },
  {
    slug: "current-direct-deposit",
    title: "Driving growth through Current’s core banking.",
    description: "Optimizing the direct deposit flow for new and existing users for improved conversion, retention and cost reduction.",
    imageSrc: "/pt-current-direct-deposit.webp",
    companyLogo: "/icons/icon-current.png",
    companyName: "Current",
    companySubtitle: "Modern fintech banking app",
    projectShortName: "Direct deposit",
    projectRole: "Product Design",
    heroText: "Overhauled the direct deposit flow to drastically increase activation rates while simultaneously reducing user friction.",
    credits: [
      { role: "Product Design Lead", name: "Dan Wood" },
      { role: "Product Manager", name: "John Smith" },
    ]
  },
  {
    slug: "tmrw",
    title: "Defining TMRW from day zero.",
    description: "Led all branding efforts, creating the visual identity, marketing resources, brand guidelines, and the launch website.",
    imageSrc: "/pt-tmrw.webp",
    companyLogo: "/icons/icon-tmrw.png",
    companyName: "TMRW",
    companySubtitle: "Cutting edge longevity supplements",
    projectRole: "Brand Art Direction",
    heroText: "Defined the complete visual identity and marketing presence from day zero to launch.",
    credits: [
      { role: "Art Director", name: "Dan Wood" },
      { role: "Copywriter", name: "Alex Johnson" },
    ]
  },
  {
    slug: "kismet",
    title: "Transforming Kismet’s booking ecosystem.",
    description: "Redesigned the internal and external booking systems and launched the foundation for the upcoming marketplace and website.",
    imageSrc: "/pt-kismet.webp",
    companyLogo: "/icons/icon-kismet.png",
    companyName: "Kismet",
    companySubtitle: "Golf event booking ecosystem",
    projectRole: "UX Research & Design",
    heroText: "Designing a high-fidelity platform for seed-stage success",
    credits: [
      { role: "UX Lead", name: "Dan Wood" },
      { role: "Engineering Lead", name: "Michael Chang" },
    ]
  },
  {
    slug: "quimbee",
    title: "Empowering the next generation of legal professionals.",
    description: "Evolved the digital platform and study tools used by over 500,000 law students and practicing lawyers across the US.",
    imageSrc: "/pt-quimbee.webp",
    companyLogo: "/icons/icon-quimbee.png",
    companyName: "Quimbee",
    companySubtitle: "Top-tier legal education platform",
    projectShortName: "Study aids",
    projectRole: "Senior Product Designer",
    heroText: "Elevated the core learning and assessment products empowering the next generation of top-tier legal talent.",
    credits: [
      { role: "Product Designer", name: "Dan Wood" },
      { role: "Director of Product", name: "Emily Watson" },
    ]
  },

  {
    slug: "simply-nootropics",
    title: "Simply Nootropics",
    description: "Simply Nootropics is a leading nootropics brand operating out of New Zealand/Australia.",
    imageSrc: "/pt-simply-nootropics.webp",
    companyLogo: "/icons/icon-simply.png",
    companyName: "Simply Nootropics",
    companySubtitle: "Supplements for brain performance",
    projectRole: "Design & Art Direction",
    heroText: "Built the Simply Nootropics brand from the ground up, including branding, packaging, e-commerce web design, and photography.",
    credits: [
      { role: "Design Lead", name: "Dan Wood" },
      { role: "Founder", name: "Anthony" },
    ]
  },
  {
    slug: "wing",
    title: "Elevating cognitive wellness.",
    description: "Created a high-performance digital storefront and brand presence for a premium e-bike manufacturer.",
    imageSrc: "/pt-wing.webp",
    companyLogo: "/icons/icon-wing.png",
    companyName: "Wing",
    companySubtitle: "Premium e-bikes based in NYC",
    projectRole: "Digital Designer",
    heroText: "Designed and deployed a massive digital storefront optimized completely for aesthetic edge and maximal e-commerce conversion.",
    credits: [
      { role: "Digital Designer", name: "Dan Wood" },
      { role: "Brand Strategist", name: "Laura Palmer" },
    ]
  },
  {
    slug: "mbw",
    title: "Building a platform for authentic leadership.",
    description: "Developed a comprehensive re-brand and digital membership portal to support a growing community of professionals.",
    imageSrc: "/pt-mbw.webp",
    companyLogo: "/icons/icon-mbw.png",
    companyName: "MBW",
    companySubtitle: "Professional leadership community",
    projectRole: "Product & UX Design",
    heroText: "Built out the fundamental architecture for a private digital membership portal targeting authentic professional growth.",
    credits: [
      { role: "UX Designer", name: "Dan Wood" },
      { role: "Creative Director", name: "James Holden" },
    ]
  }
];
