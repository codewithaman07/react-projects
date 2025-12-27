import stableMindImg from "../assets/projects/stable-mind.png";
import shopSmartyImg from "../assets/projects/shop-smarty.png";
import stocksSmartImg from "../assets/projects/stocks-smart.png";

export const HERO_CONTENT = `"I am a passionate full-stack developer with experience in building scalable web applications. I specialize in front-end technologies like React and Next.js, along with back-end technologies such as Node.js, Express, MySQL, and MongoDB. Additionally, I have worked on projects involving AI, chatbots, and data analytics. My goal is to leverage my skills to create impactful and user-centric digital solutions."`;
export const ABOUT_TEXT = `"I am a dedicated and versatile full-stack developer with a passion for building efficient and user-friendly web applications. With hands-on experience in technologies like React, Next.js, Node.js, Express, MySQL, and MongoDB, I enjoy solving complex problems and creating impactful digital solutions. My journey in web development has been fueled by curiosity and a drive to continuously learn and adapt. Beyond coding, I explore AI, competitive programming, and contribute to innovative projects that push technological boundaries."`;

export const EXPERIENCES = [
  {},
  {},
];

export const PROJECTS = [
  {
    title: "STABLE MIND",
    image: stableMindImg,
    description:
      "AI-powered mental health platform featuring Gen AI chat, RAG-based personalized responses, mood tracking, breathing exercises, and daily affirmations.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "RAG"],
    link: "https://stablemind.vercel.app/",
    github: "https://github.com/codewithaman07/stablemind",
  },
  {
    title: "SHOP SMARTY",
    image: shopSmartyImg,
    description:
      "Hackathon winning web extension with sentiment analysis and web scraping to empower data-driven purchase decisions, improving product selection efficiency by 40%.",
    technologies: ["JavaScript", "Node.js", "REST APIs", "Web Scraping"],
    link: "https://devfolio.co/projects/shopsmart-analyser-4fed",
    github: "https://github.com/psr-codes/hack-extension",
  },
  {
    title: "STOCKS SMART",
    image: stocksSmartImg,
    description:
      "Full-stack stock analysis dashboard with global stock search, watchlist management, interactive charts, and AI-powered news summarization with sentiment analysis.",
    technologies: ["Next.js", "Clerk", "Tailwind CSS", "AI/ML"],
    link: "https://thestocksmart.vercel.app/",
    github: "https://github.com/codewithaman07/Stock-Smart",
  },
];

export const CONTACT = {
  address: "Preet Vihar Delhi-51, India ",
  phoneNo: "+91 9899XXXXXX ",
  email: "aman_singh.ug22@nsut.ac.in",
};
