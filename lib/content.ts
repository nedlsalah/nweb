// All copy lives here, taken from https://nedlsalah.github.io/Web/ (EN).
// Arabic: the page text was not available in the scrape, so `ar` is empty and falls back to EN.
// Paste Arabic strings into `ar` using the same keys and the EN/AR toggle will switch them.

export type Cat = "Websites" | "Design" | "Photography" | "Video";

export interface WorkItem {
  cat: Cat;
  title: string;
  domain: string;
  desc: string;
  href: string;
  img: string; // poster / still image (served from /public/img/work)
  /** OPTIONAL. Add a compressed .mp4 to make this tile autoplay on scroll and open the lightbox. */
  videoSrc?: string;
}

export const en = {
  nav: [
    ["01", "Services", "services"], ["02", "Work", "work"], ["03", "About", "about"],
    ["04", "Process", "process"], ["05", "Experience", "experience"], ["06", "Skills", "skills"],
    ["07", "Credentials", "certifications"], ["08", "Testimonials", "testimonials"], ["09", "Contact", "contact"],
  ] as [string, string, string][],
  skip: "Skip to content",
  email: "nedlsalah@gmail.com",
  links: {
    behance: "https://www.behance.net/nedlsalah",
    photography: "https://photos.app.goo.gl/fsxX5cDCLViCtxLZ7",
    video: "https://photos.app.goo.gl/USEzX2LLwj4FP4Q19",
  },
  hero: {
    available: "Available for Projects",
    location: "Abu Dhabi, United Arab Emirates",
    title: "Digital Marketing Specialist",
    imgAlt: "NEDLSALAH — Digital Marketing Specialist",
    text: "I am a digital marketing specialist and web developer with over 7 years of experience in digital advertising, WordPress development, SEO, content creation, photography, and video production. I combine marketing knowledge with technical and creative skills to manage projects from planning to delivery, using AI tools to support ideation and content development.",
    cta1: "Explore My Services",
    cta2: "Get in Touch",
    stats: [["Years of Experience", "7+"], ["Based", "United Arab Emirates"], ["Services", "6"], ["Languages", "3"]] as [string, string][],
  },
  services: {
    eyebrow: "What I Do", title: "Services & Solutions",
    intro: "I combine strategy, design, development, and content creation to deliver integrated digital services tailored to the needs and objectives of each brand.",
    items: [
      { title: "Digital Marketing & Paid Advertising", desc: "Planning, launching, and monitoring advertising campaigns to reach relevant audiences and support business marketing objectives.", points: ["Meta Ads across Facebook and Instagram", "Google Ads and search campaigns", "Content planning and editorial calendars", "Campaign performance monitoring, reporting, and optimization opportunities"] },
      { title: "WordPress Web Development", desc: "Designing and developing websites and landing pages that reflect each business’s identity while providing a clear, user-friendly experience across devices.", points: ["WordPress website development and maintenance", "Custom landing page development", "Responsive layouts for mobile and desktop", "Content organization and user experience improvements"] },
      { title: "Graphic Design & Brand Identity", desc: "Creating visual materials that reflect a brand’s identity and maintain consistency across digital platforms and print materials.", points: ["Logo design and visual identity development", "Social media graphics and advertising creatives", "Marketing materials and print design", "Visual consistency across brand communications"] },
      { title: "Photography & Video Production", desc: "Producing visual content that showcases products, services, and business environments in a style suited to each brand and its target audience.", points: ["Product, restaurant, and business photography", "Short-form video and Reels production", "Video editing and preparation for publishing", "Visual content for social platforms and marketing campaigns"] },
      { title: "Social Media Management", desc: "Organizing a brand's social media presence through content planning, publishing coordination, and creative development tailored to each platform.", points: ["Content planning and publishing calendars", "Social media account management and coordination", "Post planning and visual content coordination", "Engagement monitoring and content performance reviews"] },
      { title: "Content Creation & Copywriting", desc: "Developing clear, consistent content that reflects a brand's identity and communicates its services, ideas, and marketing messages effectively.", points: ["Marketing and advertising copywriting", "Short-form video scripts and concepts", "Website and landing page copy", "Using AI tools to support research, ideation, and content development"] },
    ],
  },
  work: {
    eyebrow: "Selected Work", title: "Selected Work",
    intro: "A collection of websites and creative projects I have contributed to across different industries and business sectors. These projects showcase my work in web development, graphic design, photography, and video production.",
    filters: ["All", "Websites", "Design", "Photography", "Video"],
    outro: "My role varies from project to project, covering website development, visual design, content production, and marketing campaign support.",
    newTab: "(opens in a new tab)",
    items: [
      { cat: "Websites", title: "Sanhan Soiree", domain: "sanhansoiree.com", desc: "A website for event planning and design services, featuring service information, a portfolio gallery, and inquiry forms.", href: "https://sanhansoiree.com/", img: "/img/work/sanhansoiree.webp" },
      { cat: "Websites", title: "Avenir Energy", domain: "avenirenergy.me", desc: "A corporate website for a renewable energy company, developed using WordPress.", href: "https://avenirenergy.me/", img: "/img/work/avenirenergy.webp" },
      { cat: "Websites", title: "Riskonex", domain: "riskonex.com", desc: "A corporate website for a risk management consultancy serving the oil and gas and industrial sectors.", href: "https://riskonex.com/", img: "/img/work/riskonex.webp" },
      { cat: "Websites", title: "Nobilis Premier", domain: "nobilis-premier.com", desc: "A corporate website for a contracting company, showcasing its services and projects.", href: "https://nobilis-premier.com/", img: "/img/work/nobilis-premier.webp" },
      { cat: "Websites", title: "Hakima Coaching", domain: "hakimacoaching.com", desc: "A website for a personal coaching brand, presenting its programs and providing inquiry options.", href: "https://hakimacoaching.com/", img: "/img/work/hakimacoaching.webp" },
      { cat: "Websites", title: "Fincastra", domain: "fincastra.com", desc: "A corporate website for a business consultancy, developed using WordPress.", href: "https://fincastra.com/", img: "/img/work/fincastra.webp" },
      { cat: "Websites", title: "Napa", domain: "napa.ae", desc: "A website for home maintenance services in Abu Dhabi, developed using WordPress.", href: "https://napa.ae/", img: "/img/work/napa.webp" },
      { cat: "Design", title: "Graphic Design Portfolio", domain: "behance.net/nedlsalah", desc: "A selection of visual identities, digital designs, marketing materials, and print projects.", href: "https://www.behance.net/nedlsalah", img: "/img/work/ill-design.svg" },
      { cat: "Photography", title: "Photography Portfolio", domain: "photos.app.goo.gl", desc: "A curated collection of photography work across different subjects and settings.", href: "https://photos.app.goo.gl/fsxX5cDCLViCtxLZ7", img: "/img/work/photography.webp" },
      {
        cat: "Video", title: "Video Portfolio", domain: "photos.app.goo.gl", desc: "A selection of video production and visual content created for digital platforms.", href: "https://photos.app.goo.gl/USEzX2LLwj4FP4Q19", img: "/img/work/video.webp",
        // videoSrc: "/videos/video-portfolio.mp4", // TODO: drop your compressed .mp4 in /public/videos and uncomment
      },
    ] as WorkItem[],
  },
  about: {
    eyebrow: "About Me", title: "One Professional. Multiple Digital Skills.", imgAlt: "NEDLSALAH portrait",
    paras: [
      "I am NEDLSALAH, a digital marketing specialist, WordPress developer, and graphic designer based in Abu Dhabi, United Arab Emirates. With over 7 years of practical experience working with agencies and brands, I combine marketing strategy with technical and creative execution across a range of digital projects.",
      "Whether you need an advertising campaign, a website to present your services, a consistent visual identity, or content for your digital channels, I focus on understanding your requirements and translating them into practical deliverables through direct communication and structured execution.",
      "Throughout my career, I have contributed to projects across several sectors, including restaurants, retail, events, and services. My approach starts with understanding the project's needs, followed by planning, execution, and review, while keeping the client's objectives and agreed scope of work in focus.",
    ],
    stats: [["Years of Experience", "7+"], ["Based", "United Arab Emirates"], ["Core Service Areas", "6"], ["Languages", "3"]] as [string, string][],
  },
  process: {
    eyebrow: "My Process", title: "A Clear Process from Start to Finish",
    intro: "A structured workflow with direct communication and regular reviews to keep project requirements and expectations clear throughout execution.",
    steps: [
      ["Discovery", "I begin by understanding the project's objectives, target audience, and key requirements, then define the scope of work and expected deliverables."],
      ["Planning", "I develop a practical plan outlining priorities, timelines, and the tools needed to carry out the project according to the agreed requirements."],
      ["Execution", "I work on the required deliverables, whether websites, marketing campaigns, designs, or content, while reviewing progress and coordinating with the client throughout the process."],
      ["Launch & Review", "I review the final deliverables and prepare the project for launch or handover. Where relevant performance data is available, I can help identify opportunities for further improvement."],
    ] as [string, string][],
  },
  experience: {
    eyebrow: "Track Record", title: "Professional Experience",
    intro: "Practical experience across digital marketing, web development, and content creation, working with agencies and brands in the UAE.",
    items: [
      "Planning and developing social media content aligned with brand identity and target audiences.",
      "Producing visual content, including photography, short-form videos, and Reels, from shooting through editing and publishing preparation.",
      "Supporting Meta and Google advertising campaigns, including campaign setup, audience targeting, creative reviews, and performance monitoring.",
      "Collaborating with design teams to develop visual materials aligned with brand identity and campaign requirements.",
      "Developing and maintaining WordPress websites and landing pages, with attention to usability and responsive design.",
      "Working directly with clients to understand requirements and translate ideas into practical marketing and digital deliverables.",
      "Updating websites and improving on-page SEO elements.",
      "Contributing to visual identity development and consistent design across digital channels.",
      "Coordinating tasks and revisions with clients and team members through to the delivery of agreed work.",
    ],
  },
  skills: {
    eyebrow: "Expertise", title: "Skills & Tools",
    intro: "The tools I use day to day to plan, build, measure, and ship digital work.",
    groups: [
      ["Digital Marketing & Analytics", ["Meta Ads", "Google Ads", "SEO", "Google Analytics", "Facebook", "LinkedIn", "Instagram", "Reels", "Mailchimp", "Hootsuite"]],
      ["Web Development", ["WordPress", "WooCommerce", "HTML", "CSS", "Responsive Design"]],
      ["Graphic Design", ["Adobe Photoshop", "Adobe Illustrator", "Adobe Lightroom", "Canva", "Logo & Brand Identity Design"]],
      ["Photography & Video", ["Photography", "Video Editing", "Short-Form Video Production"]],
      ["Workflow & AI Tools", ["ChatGPT", "AI Tools", "Trello", "Notion"]],
      ["Languages", ["Arabic · English · French"]],
    ] as [string, string[]][],
  },
  certs: {
    eyebrow: "Certifications & Learning", title: "Certifications", intro: "Professional certifications and continuous learning.",
    items: [
      ["2021", "Fundamentals of Digital Marketing", "Google"],
      ["2020", "Web Development Track", "Udacity"],
      ["2020", "WordPress Website Development", "OpenClassrooms"],
      ["2019", "Responsive Web Design Fundamentals", "Coursera"],
      ["2019", "Microsoft Office Specialist: Excel", "Microsoft"],
    ] as [string, string, string][],
  },
  testimonials: {
    eyebrow: "Client Testimonials", title: "Experiences Across Digital Projects",
    items: [
      ["Marketing & Content", "He understands the idea behind the content, not just how it looks. Communication was clear, and he helped us turn our ideas into practical content suited to our needs.", "Marketing Manager"],
      ["Website Development", "The website development process was clear and organized. He paid attention to detail, considered our requirements, and worked to ensure the website functioned across mobile and desktop devices.", "Business Client"],
      ["Content Creation", "We needed content that reflected our brand identity. Communication was flexible, and he helped us develop materials suited to our social media channels.", "Operations Manager"],
      ["Project Collaboration", "Communication around tasks and revisions was clear. The work covered website updates and creative tasks, with feedback and project requirements taken into consideration.", "Project Coordinator"],
    ] as [string, string, string][],
  },
  contact: {
    eyebrow: "Contact", title: "Have a Project in Mind?",
    text: "If you need support with digital marketing, website development, visual identity, or creative content, I can discuss your project requirements with you and determine a suitable scope of work.",
    rows: [["Location", "Abu Dhabi, United Arab Emirates"], ["Email", "nedlsalah@gmail.com"], ["Availability", "Available for Projects"], ["Languages", "Arabic · English · French"]] as [string, string][],
    buttons: ["Email Me", "Behance", "Photography Portfolio", "Video Portfolio"],
    strip: ["Over 7 Years of Practical Experience", "Based in the United Arab Emirates", "Multiple Digital Services, One Streamlined Workflow", "Arabic · English · French"],
  },
  footer: {
    rights: "© 2026 NEDLSALAH. All Rights Reserved.",
    privacy: ["Privacy Policy", "https://nedlsalah.github.io/Web/legal/privacy-policy.html"],
    terms: ["Terms of Use", "https://nedlsalah.github.io/Web/legal/terms-of-use.html"],
    note: "No tracking cookies. No analytics. No visitor monitoring.",
    motion: "Motion",
  },
};

export type Content = typeof en;
export const ar: Partial<Content> = {}; // TODO: paste Arabic copy here (same keys as `en`)
