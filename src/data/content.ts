// Dunn Marketing - Site Content Data
// All content from site inventory

export const siteConfig = {
  name: "Dunn Marketing",
  tagline: "We fuel the success of good people doing great work",
  subTagline: "through Empathy-Driven Brand Building™ that connects, inspires, and converts.",
  phone: "(860) 481-3796",
  email: "info@dunnmarketing.com",
  address: "140 Main Street, Suite 1, Danielson, CT 06239",
  social: {
    facebook: "https://www.facebook.com/DunnMarketingCT/",
    instagram: "https://www.instagram.com/DunnMarketing/",
    linkedin: "https://www.linkedin.com/company/dunn-marketing/",
  },
};

export const services = [
  {
    id: "branding",
    title: "Branding",
    description: "Build a brand that resonates",
    items: ["New brand development", "Existing brand assessment/rebranding", "Brand strategy"],
    icon: "Palette",
  },
  {
    id: "strategy",
    title: "Strategy",
    description: "Data-driven strategic planning",
    items: ["Market analysis", "Messaging", "Campaigns"],
    icon: "Target",
  },
  {
    id: "content",
    title: "Content",
    description: "Compelling stories that convert",
    items: ["Copywriting", "Graphic design", "Podcasts", "Video"],
    icon: "FileText",
  },
  {
    id: "digital",
    title: "Digital",
    description: "Modern digital presence",
    items: ["Websites", "SEO", "Social media", "Email marketing"],
    icon: "Globe",
  },
  {
    id: "advertising",
    title: "Advertising",
    description: "Campaigns that deliver results",
    items: ["Creative", "Media buying", "Paid social", "Paid search", "Programmatic"],
    icon: "Megaphone",
  },
  {
    id: "public-relations",
    title: "Public Relations",
    description: "Build trust and awareness",
    items: ["Media relations", "Internal communications", "Stakeholder communications"],
    icon: "Users",
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Measure what matters",
    items: ["360° campaign measurement", "Data-informed tactical optimization", "KPI reporting tied to business goals"],
    icon: "BarChart3",
  },
  {
    id: "fractional-cmo",
    title: "Fractional CMO",
    description: "C-suite marketing leadership",
    items: ["Comprehensive marketing and communications management", "Consulting", "C-suite support"],
    icon: "Briefcase",
  },
];

export const processSteps = [
  {
    number: 1,
    title: "Listen",
    description: "We begin with discovery, learning about your organization, goals, and challenges.",
  },
  {
    number: 2,
    title: "Learn",
    description: "Understand your audience – their needs, challenges, values, goals, and desires.",
  },
  {
    number: 3,
    title: "Create",
    description: "Develop your brand persona and strategic messaging that resonates.",
  },
  {
    number: 4,
    title: "Communicate",
    description: "Share your messaging with your audience, using the channels and tactics best suited.",
  },
  {
    number: 5,
    title: "Engage",
    description: "Build real relationships through active listening and authentic interactions.",
  },
  {
    number: 6,
    title: "Evaluate",
    description: "Use data analytics and real-world feedback to refine and grow your business.",
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "I have been thrilled with all of Dunn Marketing's efforts... We've been working with them for a relatively short time but couldn't be happier with how they're raising awareness.",
    author: "Dr. Al Vario",
    title: "President & CEO",
    company: "J. Arthur Trudeau Memorial Center",
    image: "/images/testimonials/al-vario.jpg",
  },
  {
    id: 2,
    quote: "Laura and her team are brand builders... they think and act strategically across online and digital channels.",
    author: "Jim Zahansky, AWMA®",
    title: "Principal/Managing Partner",
    company: "Weiss, Hale & Zahansky Strategic Wealth Advisors",
    image: "/images/testimonials/jim-zahansky.jpg",
  },
  {
    id: 3,
    quote: "I highly recommend Laura Dunn... In over 20 years in higher education, I have never worked with anyone who comes close.",
    author: "Janet Castleman",
    title: "Former Dean",
    company: "PC School of Continuing Education",
    image: "/images/testimonials/janet-castleman.jpg",
  },
  {
    id: 4,
    quote: "If you're looking for a strategic partner... the team at Dunn Marketing is your go-to.",
    author: "Kate Pitts",
    title: "AVP, Client Experience & Relationships",
    company: "Weiss, Hale & Zahansky",
    image: "/images/testimonials/kate-pitts.jpg",
  },
  {
    id: 5,
    quote: "Dunn Marketing is an absolute pleasure to work with... they do a great job identifying important components.",
    author: "Jeff Corey, DVM",
    title: "Owner & Veterinarian",
    company: "Armory Animal Hospital",
    image: "/images/testimonials/jeff-corey.jpg",
  },
  {
    id: 6,
    quote: "Laura and the team are extremely creative, smart, organized, detail-oriented, and fun to work with!",
    author: "Anne Nagle",
    title: "Former Assistant Dean",
    company: "Providence College School of Continuing Education",
    image: "/images/testimonials/anne-nagle.jpg",
  },
];

export const caseStudies = [
  {
    id: "whz-strategic-wealth",
    client: "WHZ Strategic Wealth Advisors",
    headline: "Absolute Confidence. Unwavering Partnership. For Life.",
    category: "Branding & Advertising",
    results: [
      { metric: "75%", label: "Increase in organic brand searches" },
      { metric: "31%", label: "Increase in website users" },
      { metric: "23%", label: "Increase in qualified leads" },
    ],
    image: "/images/work/whz-case-study.jpg",
    award: "2025 Communicator Award",
  },
  {
    id: "trudeau-video",
    client: "J. Arthur Trudeau Memorial Center",
    headline: "Transforming Lives at Trudeau for 60 Years",
    category: "Video Storytelling",
    results: [
      { metric: "1,500+", label: "Video views" },
      { metric: "60", label: "Years of impact showcased" },
    ],
    image: "/images/work/trudeau-video.jpg",
    award: "2025 Communicator Award",
  },
  {
    id: "trudeau-billboard",
    client: "J. Arthur Trudeau Memorial Center",
    headline: "Creating Bright Futures",
    category: "Out of Home Campaign",
    results: [
      { metric: "200%", label: "Return on investment" },
      { metric: "↑", label: "Employment applications" },
    ],
    image: "/images/work/trudeau-billboard.jpg",
    award: "2025 Communicator Award",
  },
  {
    id: "brunet-website",
    client: "Brunet & Company Real Estate",
    headline: "Premier Real Estate Experience",
    category: "Website Development",
    results: [
      { metric: "MLS", label: "Integrated listings" },
      { metric: "SEO", label: "Optimized blog" },
    ],
    image: "/images/work/brunet-website.jpg",
  },
  {
    id: "2020by2020ri",
    client: "Memory and Aging Program",
    headline: "#2020by2020RI Campaign",
    category: "Multi-Channel Campaign",
    results: [
      { metric: "73%", label: "Enrollment increase" },
      { metric: "500%", label: "Participation rate increase" },
    ],
    image: "/images/work/2020by2020ri.jpg",
    award: "Gold NESHCo Award",
  },
];

export const team = [
  {
    name: "Laura Dunn",
    title: "Founder, CEO & Chief Brand Strategist",
    credentials: "PCM®, CDMP",
    image: "/images/team/laura-dunn.jpg",
  },
  {
    name: "Marci Seney",
    title: "Vice President, Client Services",
    image: "/images/team/marci-seney.jpg",
  },
  {
    name: "Cliff Dunn",
    title: "Administration",
    image: "/images/team/cliff-dunn.jpg",
  },
  {
    name: "Wendy Beaulac",
    title: "Web Developer",
    image: "/images/team/wendy-beaulac.jpg",
  },
  {
    name: "Laney Dunn",
    title: "Copywriter",
    image: "/images/team/laney-dunn.jpg",
  },
  {
    name: "Lilah Dunn",
    title: "Content Marketing Specialist",
    image: "/images/team/lilah-dunn.jpg",
  },
  {
    name: "Jay Gerardi",
    title: "Email Marketing Specialist",
    image: "/images/team/jay-gerardi.jpg",
  },
  {
    name: "Collin Hamilton",
    title: "Multimedia Production",
    image: "/images/team/collin-hamilton.jpg",
  },
  {
    name: "Xo Laur",
    title: "Web Developer",
    image: "/images/team/xo-laur.jpg",
  },
  {
    name: "Laura Molloy",
    title: "Graphic Design Specialist",
    image: "/images/team/laura-molloy.jpg",
  },
  {
    name: "Caitlin St. Jean",
    title: "Social Media Marketing Manager",
    image: "/images/team/caitlin-st-jean.jpg",
  },
  {
    name: "Samantha Wexler",
    title: "Social Media Marketing Manager",
    image: "/images/team/samantha-wexler.jpg",
  },
];

export const values = [
  {
    title: "Empathy",
    description: "Real progress on any front cannot come without real understanding. With that understanding, we can make real progress to benefit us all.",
  },
  {
    title: "Integrity",
    description: "The character to do what is right even when no one is watching, upholding values even when sacrifices are required.",
  },
  {
    title: "Strategic",
    description: "Using research, best practices, and ongoing data analysis to determine why each plan element should exist.",
  },
  {
    title: "Curious",
    description: "Curiosity is the mother of creativity and the catalyst for discovery.",
  },
  {
    title: "Creative",
    description: "Applied in words and in visuals, and in the ways we solve problems.",
  },
  {
    title: "Collaborative",
    description: "Success is a team sport requiring constant communication.",
  },
  {
    title: "Invested",
    description: "Operating with 100% commitment to client relationships and projects.",
  },
  {
    title: "Insightful",
    description: "Acting as business partners who ask thoughtful questions and provide impact analysis.",
  },
];

export const clientLogos = [
  "WHZ", "Trudeau", "MAP", "Prue Law", "Cerrone", "PC", "Alpine",
  "United Services", "JG", "Rock Lobster", "Brunet", "KBA",
  "Shoe Smith", "Carpentry Services", "NOW", "UMass Harrington",
  "Armory", "Moxie"
];

export const awards = [
  { year: "2025", title: "Communicator Awards", description: "3 awards - 2 silver, 1 gold" },
  { year: "2024", title: "Gramercy Institute FCMA Winner", description: "Person-Centered Content Marketing Campaign" },
  { year: "2021", title: "NESHCo Gold Award", description: "Writing" },
  { year: "2021", title: "NESHCo Gold Award", description: "Publications" },
  { year: "2020", title: "NESHCo Silver Award", description: "Publications" },
  { year: "2016", title: "NESHCo Best of New England", description: "" },
];

export const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  footer: [
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};
