import { FaInstagram , FaFacebook, FaGlobe, FaGithub, FaLinkedin  } from "react-icons/fa";
import { ReactNode } from "react";

interface Social {
  platform: string;
  url: string;
  icon: ReactNode; 
}

interface Leader {
  id: string;
  name: string;
  role: string;
  category: string;
  image: string;
  bio?: string;         
  bio_intro?: string;    
  full_bio?: string[];  
  socials?: Social[];   
}
export const LEADERS: Leader[] = [
  {
    id: "sudeep",
    name: "Sudeep Bajracharya",
    role: "Co-Founder & Chief Executive Officer",
    category: "Executive",
    image: "/assets/team/sudeep.jpg",
    bio_intro: "Sudeep is the strategic visionary behind Clover Tech Nepal, focusing on business growth and ecosystem building.",
    full_bio: [
      "Sudeep Bajracharya oversees the strategic direction and global partnerships of Clover Tech Nepal. With a keen eye for market trends, he has been instrumental in transitioning the company from a startup concept to a robust digital agency.",
      "He believes in fostering a culture of innovation where technology serves the community. His leadership style emphasizes sustainable growth and long-term value creation for clients.",
      "Beyond executive duties, Sudeep is a mentor to aspiring entrepreneurs in the local tech scene, advocating for digital literacy and tech-driven economic development."
    ],
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/sudeepsudeeeeep/", icon: <FaInstagram size={18} /> },
      { platform: "Facebook", url: "https://www.facebook.com/Paranoid.Sudeep", icon: <FaFacebook size={18} /> }
    ]
  },
  {
    id: "bijay",
    name: "Bijay Lama",
    role: "Co-Founder & Lead Engineer",
    category: "Engineering",
    image: "/assets/team/bijay.jpg",
    bio_intro: "Bijay Lama is the technical architect behind Clover Tech Nepal, overseeing the company's engineering roadmap.",
    full_bio: [
      "Bijay Lama is the technical architect behind Clover Tech Nepal, overseeing the company's engineering roadmap and startup growth strategies.",
      "Under his leadership, Clover Tech has prioritized 'Startup Agility'—a methodology that allows the team to navigate uncharted territories and adapt swiftly to changing industry landscapes.",
      "Before founding Clover, Bijay spent years refining his expertise in scalable architectures and intuitive engineering, which serves as the foundation for every project."
    ],
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/hyolmobijay/", icon: <FaInstagram size={18} /> },
      { platform: "Facebook", url: "https://www.facebook.com/kolamabijay", icon: <FaFacebook size={18} /> }
    ]
  },
  {
    id: "sujan",
    name: "Sujan Shrestha",
    role: "Co-Founder & Full Stack Dev",
    category: "Engineering",
    image: "/assets/team/fallback.jpg",
    bio_intro: "Sujan is a systems expert specializing in cloud infrastructure and high-performance backend logic.",
    full_bio: [
      "Sujan Shrestha bridges the gap between complex data structures and seamless user experiences. His expertise in Full Stack development ensures that Clover Tech projects are scalable from day one.",
      "He leads the backend security protocols, ensuring that client data is handled with industry-standard encryption and efficiency.",
      "Sujan is a firm believer in the 'clean code' philosophy, regularly conducting internal workshops to maintain high development standards within the engineering team."
    ],
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/sujan._.stha/", icon: <FaInstagram size={18} /> },
      { platform: "Facebook", url: "https://www.facebook.com/sujanMic3", icon: <FaFacebook size={18} /> }
    ]
  },
  {
    id: "dorje",
    name: "Dorje Lama",
    role: "Co-Founder & Web Developer",
    category: "Engineering",
    image: "/assets/team/dorje.jpg",
    bio_intro: "Dorje specializes in creating dynamic, high-performance web applications with a focus on speed.",
    full_bio: [
      "Dorje Lama brings a wealth of experience in modern JavaScript frameworks and responsive design principles.",
      "He is responsible for the rapid prototyping phase of our projects, turning complex wireframes into functional, interactive web experiences in record time.",
      "His technical focus lies in optimizing web performance and ensuring cross-browser compatibility for a global audience."
    ],
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/dorjee_._/", icon: <FaInstagram size={18} /> },
      { platform: "Facebook", url: "https://www.facebook.com/dorjehyolmo", icon: <FaFacebook size={18} /> }
    ]
  },
  {
    id: "pasang",
    name: "Pasang Dorje Lama",
    role: "Co-Founder & Web Developer",
    category: "Engineering",
    image: "/assets/team/pasang.jpg",
    bio_intro: "Pasang is the bridge between design and code, focusing on the aesthetics of the frontend.",
    full_bio: [
      "Pasang Dorje Lama specializes in UI/UX implementation, ensuring that every pixel on the screen aligns with the brand’s identity and user needs.",
      "With a deep understanding of CSS animations and frontend architecture, he creates interfaces that are not only functional but delightful to use.",
      "He works closely with the operations team to ensure that client feedback is seamlessly integrated into the development lifecycle."
    ],
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/pasang.dorje1422/", icon: <FaInstagram size={18} /> },
      { platform: "Facebook", url: "https://www.facebook.com/ganteVai", icon: <FaFacebook size={18} /> }
    ]
  },
  {
    id: "sonam",
    name: "Sonam Dorje Lama",
    role: "Operations Manager",
    category: "Management",
    image: "/assets/team/sonam.jpg",
    bio_intro: "Sonam orchestrates the internal workflows and UI/UX standards across the organization.",
    full_bio: [
      "Sonam Dorje Lama ensures that the engine of Clover Tech runs smoothly. From project timelines to internal resource management, she keeps the team focused and on track.",
      "With a background in UI/UX excellence, she acts as the final gatekeeper for quality assurance, ensuring that all deliverables meet the high standards expected by our partners.",
      "Her role is pivotal in balancing the technical demands of engineering with the business requirements of our diverse client portfolio."
    ],
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/sonaminmeta/", icon: <FaInstagram size={18} /> },
      { platform: "Facebook", url: "https://www.facebook.com/inmetaaaaa", icon: <FaFacebook size={18} /> }
    ]
  },
  {
    id: "tshering",
    name: "Tshering Netup Lama",
    role: "Project Manager & QA Lead",
    category: "Management",
    image: "/assets/team/tshering.jpg",
    bio_intro: "Tshering specializes in project coordination and rigorous quality assurance to ensure bug-free, high-performance deliveries.",
    full_bio: [
      "As a Project Manager & QA Lead at Clover Tech Nepal, Tshering Netup Lama is responsible for the end-to-end oversight of product development. He acts as the critical bridge between stakeholder requirements and technical implementation.",
      "He focuses on maintaining the integrity of project timelines while conducting deep-dive quality testing. His work ensures that every feature is polished and meets the high-performance benchmarks set by the agency.",
      "With a background that balances technical understanding and organizational strategy, Tshering ensures that development sprints remain efficient and that the final user experience is seamless and intuitive."
    ],
    socials: [
      { 
        platform: "LinkedIn", 
        url: "https://www.linkedin.com/in/tshering-netup-lama-a8647a216/", 
        icon: <FaLinkedin  size={18} /> 
      },
      { 
        platform: "Portfolio", 
        url: "https://www.tsheringnetuplama.com.np/", 
        icon: <FaGlobe size={18} /> 
      },
      { 
        platform: "Instagram", 
        url: "https://www.instagram.com/_tshering_hyolmo/",
        icon: <FaInstagram size={18} /> 
      }
    ]
  },
  {
    id: "kesang",
    name: "Kesang Lama",
    role: "Junior Frontend Developer",
    category: "Engineering",
    image: "/assets/team/kesang.jpg",
    bio_intro: "Kesang is a frontend specialist who excels at turning complex designs into high-performance, responsive web applications.",
    full_bio: [
      "Kesang Lama is a core member of the engineering team at Clover Tech Nepal, specializing in Next.js, TypeScript, and modern CSS frameworks. He is known for his ability to bridge the gap between aesthetic design and functional code.",
      "During his tenure, he has successfully led the frontend development of major projects like Kanto Best Price, a multi-vendor e-commerce platform. His technical philosophy centers on 'making pixels behave' and building scalable, user-centric architectures.",
      "Beyond his primary role, Kesang has a background in computer science education and community training, reflecting a deep commitment to the evolution of the local tech ecosystem and continuous learning."
    ],
    socials: [
      { 
        platform: "Portfolio", 
        url: "https://www.kesanglama.com.np", 
        icon: <FaGlobe size={18} /> 
      },
      { 
        platform: "Github", 
        url: "https://github.com/kesanglama7", 
        icon: <FaGithub  size={18} /> 
      }
    ]
  },
  {
    id: "dawa",
    name: "Dawa Dicky Lama",
    role: "Quality Assurance Engineer",
    category: "Management", 
    image: "/assets/team/dawa.jpg",
    bio_intro: "Dawa is a meticulous QA specialist dedicated to maintaining software integrity through rigorous testing and documentation.",
    full_bio: [
      "Joining Clover Tech Nepal in 2023, Dawa Dicky Lama has become a cornerstone of the quality control process. She specializes in creating comprehensive test plans and detailed documentation that ensure every project meets the highest industry standards.",
      "Her expertise lies in identifying edge cases and technical bottlenecks before they reach production. By bridging the gap between development and deployment, she ensures that the end-user experience is stable, secure, and intuitive.",
      "Dawa is a strong advocate for systematic documentation, believing that clear communication and thorough reporting are the keys to long-term project scalability and success."
    ],
    socials: [
      { 
        platform: "Instagram", 
        url: "https://www.instagram.com/dawa_dickey_shyangba/", 
        icon: <FaInstagram size={18} /> 
      },
      { 
        platform: "Facebook", 
        url: "https://www.facebook.com/dawa.dickey.7", 
        icon: <FaFacebook size={18} /> 
      }
    ]
  },
];