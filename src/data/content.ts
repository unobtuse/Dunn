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
    bio: `Laura brings over two decades of marketing and communications expertise across diverse industries including healthcare, higher education, social services, and small business. Her journalism background informs her strategic approach to brand development and consumer engagement.

Her professional accomplishments span award-winning campaigns, publications, websites, and content. She specializes in building brands and facilitating meaningful connections between organizations and their audiences.

Laura holds a Bachelor's degree in Journalism from University of Rhode Island and has studied Public Relations and Political Science. She is a Professional Certified Marketer (PCM®) and Certified Digital Marketing Professional, as well as an American Marketing Association member and New England Society for Healthcare Communications member.

Laura is mother to three adult children, describing their upbringing as her biggest challenge and greatest accomplishment.`,
  },
  {
    name: "Marci Seney",
    title: "Vice President, Client Services",
    image: "/images/team/marci-seney.png",
    bio: `Marci brings over 20 years of award-winning marketing expertise to Dunn Marketing as a strategic leader. She directs integrated marketing initiatives for a diverse client portfolio, including health and human services, non-profit, legal, and wealth management.

Her skills encompass digital marketing, website development, content strategy, and public relations. Her collaboration in the financial sector earned Dunn Marketing and our client national recognition from Gramercy Institute for excellence in content marketing.

Prior to her current role, Marci led marketing efforts at a regional healthcare provider where she spearheaded a successful rebranding campaign and website redesign, both earning industry awards.

She holds a BSBA in Marketing from Nichols College and is an active member of the American Marketing Association. She has served on boards including the HealthQuest Coalition of NECT and Day Kimball Hospital's Woman's Board.`,
  },
  {
    name: "Cliff Dunn",
    title: "Administration",
    image: "/images/team/cliff-dunn.jpg",
    bio: `Cliff is a former award-winning client service professional with nearly 20 years of management and operations experience. He applies this expertise to his administrative role at Dunn Marketing, ensuring the agency functions smoothly and efficiently.

His background includes multimedia production work for the company. He earned a degree in Video and Audio Production from the New England Institute of Technology, and has occasionally contributed video and podcast editing to agency projects.

Outside of work, Cliff balances family responsibilities with his wife Laura Dunn, the agency's founder, while raising three daughters. He is passionate about sports and golf.`,
  },
  {
    name: "Wendy Beaulac",
    title: "Web Developer",
    image: "/images/team/wendy-beaulac.jpg",
    bio: `Wendy brings more than 14 years of experience in designing and building responsive, accessible websites and digital applications. She contributes strong front-end development skills, converting strategic design ideas into functional digital experiences.

Her specialization covers HTML, CSS, JavaScript, and jQuery, with particular strength in debugging, cross-browser compatibility, and performance optimization. Her approach emphasizes user experience, ensuring sites function smoothly across different devices and platforms.

Drawing from both design and production backgrounds, Wendy combines technical accuracy with creative teamwork. She collaborates with designers, strategists, and account managers to create websites that support marketing objectives while maintaining accessibility, usability, and brand consistency.`,
  },
  {
    name: "Laney Dunn",
    title: "Copywriter",
    image: "/images/team/laney-dunn.jpg",
    bio: `Laney holds a BA in English with a minor in Communications from the University of Connecticut. She crafts clear, compelling, audience-driven content that supports strategic brand goals across digital platforms, marketing campaigns, and client communications.

She specializes in developing blogs and website copy designed to strengthen audience relationships and increase measurable engagement. Her early experience managing communications and public relations for student organizations naturally led to her expertise in content strategy, editing, and purposeful writing.

At Dunn Marketing, Laney advances the agency's Empathy-Driven Brand Building™ methodology by ensuring every word reflects both audience needs and client purpose, helping organizations communicate with impact and authenticity.`,
  },
  {
    name: "Lilah Dunn",
    title: "Content Marketing Specialist",
    image: "/images/team/lilah-dunn.jpg",
    bio: `Lilah supports the creation of thoughtful, engaging written content for client partners by contributing to client blogs and other marketing materials while working closely with strategy and account teams to ensure content is clear, relevant, and aligned with brand voice.

She is currently pursuing her Bachelor of Arts in Marketing at Nichols College, combining academic studies with hands-on content marketing experience. Lilah is an active member of the Nichols College Women's Field Hockey and Women's Lacrosse teams, which have strengthened her time management skills, discipline, and collaborative abilities.

At Dunn Marketing, she contributes energy, organization, and eagerness to learn while supporting the agency's Empathy-Driven Brand Building™ approach by helping clients share meaningful stories through well-crafted, audience-focused content.`,
  },
  {
    name: "Jay Gerardi",
    title: "Email Marketing Specialist",
    image: "/images/team/jay-gerardi.jpg",
    bio: `Jay holds a bachelor's degree in Advertising and Integrated Communications from Quinnipiac University and is currently pursuing an MBA from the same institution.

He is a marketing professional with a background in advertising, digital content, and brand communications. His approach to marketing work emphasizes a practical, detail-oriented methodology, with particular focus on email marketing content development and campaign coordination.

Jay values reliability, adaptability, and clear communication, and takes pride in producing thoughtful, well-organized work that supports both clients and internal teams.`,
  },
  {
    name: "Collin Hamilton",
    title: "Multimedia Production",
    image: "/images/team/collin-hamilton.png",
    bio: `Collin serves as a multimedia producer at Dunn Marketing, bringing extensive photography and videography expertise to creative projects. Based in Pomfret, Connecticut, he quickly developed a deep talent and versatile skills in photography and video production at a young age.

Beyond his agency work, he operates C Hamilton Studios, offering professional photography, videography, and DJ services focused on weddings, senior portraits, and sports events. His technical abilities have earned recognition, including a Best Technical video award from The Woodstock Academy.

Currently, he pursues a Bachelor of Fine Arts in Entrepreneurial and Small Business Operations at Clark University, where he also provides multimedia production services to the institution.`,
  },
  {
    name: "Xo Laur",
    title: "Web Developer",
    image: "/images/team/xo-laur.jpg",
    bio: `Xo is a New England-based graphic and web designer with a passion for crafting meaningful designs that leave a lasting impression. She brings over 15 years of professional experience collaborating with clients in diverse sectors, including healthcare and technology startups.

Her skill set encompasses logo design, print design, and web design, combining artistic vision with strategic thinking to produce impactful visual communications. She holds a BFA from Metropolitan University of Denver with a focus on Communications Design.

At Dunn Marketing, Xo supports website content development for multiple client partners, helping maintain current, optimized user experiences on their digital properties.`,
  },
  {
    name: "Laura Molloy",
    title: "Graphic Design Specialist",
    image: "/images/team/laura-molloy.jpg",
    bio: `With a strong eye for detail and a thoughtful, concept-driven approach, Laura helps bring client strategies to life through clean, engaging, and purposeful graphic design.

She is currently pursuing her Bachelor of Fine Arts in Graphic Design at the Rocky Mountain College of Art & Design, where her work has been recognized with the Graphic Design Department Award at the college's 26th Annual Student Exhibition.

At Dunn Marketing, Laura applies her graphic design expertise across a wide range of client initiatives, including print collateral, website design, social media marketing, email marketing, and brand development. She collaborates closely with strategy, content, and account teams to ensure visual consistency and brand alignment across every touchpoint.

Outside of her professional work, Laura draws creative inspiration from her lifelong passion for figure skating, her love of Disney, and her two kittens, Parmesan and Pistachio.`,
  },
  {
    name: "Caitlin St. Jean",
    title: "Social Media Marketing Manager",
    image: "/images/team/caitlin-st-jean.jpg",
    bio: `Caitlin has more than a decade of experience building and executing strategic, results-driven digital content across a wide range of industries. She specializes in developing platform-specific social media strategies that elevate brand voice, drive meaningful engagement, and support broader organizational goals.

Throughout her career, Caitlin has led social media and content initiatives for organizations in healthcare, legal services, finance, real estate, and consumer brands, blending strong copywriting, visual storytelling, and data-informed decision-making. Her work spans content strategy, campaign development, performance analysis, and cross-functional collaboration.

At Dunn Marketing, Caitlin supports the social media presence of multiple client partners by producing and scheduling monthly content, refining social media strategies, and contributing strategic insights that align with the firm's Empathy-Driven Brand Building™ approach.`,
  },
  {
    name: "Samantha Wexler",
    title: "Social Media Marketing Manager",
    image: "/images/team/samantha-wexler.jpg",
    bio: `Samantha brings over 15 years of experience in digital content creation, visual storytelling, and results-driven marketing. Her work combines strategy and creativity, with a strong focus on developing social media content that builds brand visibility, drives engagement, and supports measurable business outcomes.

Her professional background spans agency, corporate, and high-growth settings. She has led social-first campaigns across Instagram, TikTok, YouTube, and LinkedIn, producing short-form video, podcast clips, graphics, and promotional content. Her achievements include growing social followings into the tens of thousands.

Beyond social media, Samantha possesses expertise in graphic design, video editing, and digital marketing, including website management, analytics, and paid advertising. At Dunn Marketing, she creates visually compelling, on-brand social media content and collaborates with strategy and account teams to align campaigns with the agency's Empathy-Driven Brand Building™ approach.`,
  },
];

export const values = [
  {
    title: "Empathy",
    description: "Empathy is the foundation on which we choose to interact with the world.\n\nWhy? Because real progress on any front cannot come without real understanding. And real understanding cannot come without empathy.\n\nThrough the conscious practice of empathy, we understand each other, our clients, our audience, and the world in a much deeper and more powerful way. And with that understanding, we can make real progress to benefit us all.",
  },
  {
    title: "Integrity",
    description: "Integrity is the character to do what is right even when no one is watching.\n\nIt's the conviction to uphold one's values even when there is nothing to gain – and even more importantly, even when there is something to lose.\n\nWe approach all of our client relationships and every moment of our work with integrity, because we believe our work is an extension of ourselves.",
  },
  {
    title: "Strategic",
    description: "When people think about strategy, they often equate it with how a plan is carried out. But the more important aspect of building a sound strategy is determining why each piece of the plan should exist – or if it should at all.\n\nWe use research, best practices, and ongoing data analysis to inform and continually refine the strategies we create with our clients.\n\nThis ensures we're doing the right things, at the right time, for the right audience, in order to achieve the right results.",
  },
  {
    title: "Curiosity",
    description: "Curiosity is the mother of creativity.\n\nIt's what pushes us to learn new things and forge new connections between disparate ideas, realms of knowledge, and ways of living. It's what propels us to wonder \"what if…\" and to discover new perspectives.\n\nCuriosity is the catalyst for change.",
  },
  {
    title: "Creative",
    description: "We seek to bring creativity to everything we do.\n\nCreative in words and in visuals, of course – that's where so much of our professional passion lies. But also creative in the ways we solve problems and approach challenges.\n\nCreativity is the prerequisite for never giving up, and the essential ingredient for rising above the crowd.",
  },
  {
    title: "Collaborative",
    description: "We believe that success is a team sport.\n\nThere are no star players, and it takes constant communication to make it to the end goal. The simple fact is that the team either wins together or not at all.\n\nWe like to win. And we love partnering with our clients every step of the way there.",
  },
  {
    title: "Invested",
    description: "Simply put, you can expect us to take things personally.\n\nOur work is our passion, and we aren't successful if you aren't. We are invested, 100%, in every relationship and every project we choose to invest ourselves in.",
  },
  {
    title: "Insightful",
    description: "We're not about deploying a menu of marketing tactics and calling it a day.\n\nWe're here to act as business partners for our clients. We ask thoughtful questions. We pitch ideas, not just when it's related to our scope of work but anytime we think it could add value. We raise opposing views if we think it might lead to greater success.\n\nAnd we provide insights on the impact of our work in a way that's aligned with your goals.",
  },
  {
    title: "Authenticity",
    description: "Authenticity is the courage to be genuine in everything we do.\n\nIn a world full of noise, we believe the most powerful brands are the ones that speak truthfully. We don't chase trends for the sake of trends – we help our clients find and amplify what makes them uniquely them.\n\nBecause when you're authentic, you don't just attract customers. You build believers.",
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
