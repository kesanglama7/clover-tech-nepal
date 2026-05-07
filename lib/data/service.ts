import {
  Code2,
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  Search,
  Zap,
  Layers,
  Microscope,
} from "lucide-react";

export const SERVICES_DETAILED = [
  {
    id: "software",
    number: "01",
    title: "Custom Software",
    shortDesc: "Tailored systems designed around your business process.",
    fullDesc:
      "We build custom software solutions based on your actual workflow, business logic, and operational needs. From internal tools to enterprise-grade platforms, we focus on reliability, scalability, and usability.",
    icon: Code2,
    expertise: ["Business Automation", "Internal Systems", "ERP / CRM", "Workflow Tools"],
  },
  {
    id: "web",
    number: "02",
    title: "Web Development",
    shortDesc: "Modern websites and platforms built for performance.",
    fullDesc:
      "We design and develop responsive websites, dashboards, portals, and e-commerce platforms using modern frontend and backend technologies.",
    icon: Globe,
    expertise: ["React / Next.js", "Angular", ".NET", "Node.js"],
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile Apps",
    shortDesc: "Mobile experiences for Android, iOS, and cross-platform use.",
    fullDesc:
      "We build mobile applications that are smooth, practical, and user-friendly, with support for APIs, authentication, payments, notifications, and business-specific features.",
    icon: Smartphone,
    expertise: ["Flutter", "React Native", "Android", "API Integration"],
  },
  {
    id: "consulting",
    number: "04",
    title: "Software Consulting",
    shortDesc: "Technical guidance before and during development.",
    fullDesc:
      "We help businesses choose the right technology, plan architecture, improve existing systems, and make better technical decisions before investing heavily in development.",
    icon: Search,
    expertise: ["Tech Planning", "System Architecture", "Code Review", "Scalability"],
  },
  {
    id: "uiux",
    number: "05",
    title: "UI/UX Design",
    shortDesc: "Clean interfaces that make complex systems easy to use.",
    fullDesc:
      "We design user interfaces that are visually clear, simple to navigate, and built around real user behavior. Our focus is on making digital products feel natural and efficient.",
    icon: Palette,
    expertise: ["Figma", "Wireframes", "Prototypes", "Design Systems"],
  },
  {
    id: "qa",
    number: "06",
    title: "QA and Testing",
    shortDesc: "Testing that helps deliver stable and reliable software.",
    fullDesc:
      "We test software through functional, usability, regression, and workflow-based testing to make sure the final product works correctly in real-world conditions.",
    icon: Microscope,
    expertise: ["Manual Testing", "Regression Testing", "Bug Reports", "Documentation"],
  },
  {
    id: "api",
    number: "07",
    title: "Custom API Development",
    shortDesc: "APIs that connect systems, apps, and business data.",
    fullDesc:
      "We develop APIs that allow different platforms, mobile apps, dashboards, and third-party services to communicate securely and efficiently.",
    icon: Zap,
    expertise: ["REST APIs", "GraphQL", "Webhooks", "Third-party Integration"],
  },
  {
    id: "product",
    number: "08",
    title: "Product Development",
    shortDesc: "From idea to launch-ready digital product.",
    fullDesc:
      "We help turn ideas into real software products by planning, designing, developing, testing, and improving them through practical development cycles.",
    icon: Layers,
    expertise: ["MVP Development", "SaaS Platforms", "Product Strategy", "Iteration"],
  },
  {
    id: "marketing",
    number: "09",
    title: "Digital Marketing",
    shortDesc: "Online growth support for brands and digital products.",
    fullDesc:
      "We support businesses with digital marketing strategies that improve visibility, reach the right audience, and help convert interest into real customers.",
    icon: Megaphone,
    expertise: ["SEO", "Social Media", "Content Strategy", "Paid Campaigns"],
  },
];