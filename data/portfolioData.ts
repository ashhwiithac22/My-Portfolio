
import { Project, Hackathon, Certification, Publication, SkillCategory } from '../types';

export const developerResume = "/resumes/developer_resume.pdf";
export const dataResume = "/resumes/data_resume.pdf";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Java (JDBC/Swing)", "C", "MySQL", "MongoDB"]
  },
  {
    title: "Data / Analytics",
    skills: ["Python", "R", "Pandas", "NumPy", "Matplotlib", "Seaborn", "JAX", "Power BI", "Scikit-learn", "ML/NLP"]
  }
];

export const developerProjects: Project[] = [
  {
    title: "CodeBuddy Learning Platform",
    description: "AI powered learning and Interview preparation platform using MERN stack and Gemini API.",
    technologies: ["Angular", "Node.js", "Express", "MongoDB", "Gemini API", "JWT"],
    githubLink: "https://github.com/ashhwiithac22/codebuddyapp",
    liveLink: "https://codebuddy-backend-oind.onrender.com/"
  },
  {
    title: "Livelink Blood Bank",
    description: "Full-stack application streamlining blood donation tracking and hospital coordination.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com/ashhwiithac22/lifelink-bloodbank",
    liveLink: "https://lifelink-bloodbank.vercel.app/"
  },
  {
    title: "Ride Share Optimizer",
    description: "Python app using graph algorithms to optimize cost-efficient, multi-stop ride-sharing routes.",
    technologies: ["Python", "Streamlit", "BFS", "Prim's Algorithm"],
    githubLink: "https://github.com/ashhwiithac22/RideShare-Optimizer",
    liveLink: "https://rideshareoptimizer.streamlit.app/"
  }
];

export const dataProjects: Project[] = [
  {
    title: "Financial AI Analytics",
    description: "JAX and yFinance based platform for options pricing and implied volatility analysis.",
    technologies: ["Python", "Pandas", "NumPy", "JAX", "yFinance", "Streamlit"],
    githubLink: "https://github.com/ashhwiithac22/Financial-AI--Analytics-Platform",
    liveLink: "https://financial-ai--analytics-platform.streamlit.app/"
  },
  {
    title: "Phishing URL Detector",
    description: "XGBoost-based detection system achieving 86.6% accuracy on 10,000 URLs.",
    technologies: ["Python", "XGBoost", "SVM", "Scikit-learn", "Streamlit"],
    githubLink: "https://github.com/ashhwiithac22/phishing-url-detector-application",
    liveLink: "https://phishing-url-classification.streamlit.app/"
  },
  {
    title: "SmartCivic Complaint Analyzer",
    description: "NLP-driven platform for real-time civic issue analysis using Multinomial Naive Bayes.",
    technologies: ["Python", "TF-IDF", "Scikit-learn", "TextBlob", "Plotly"],
    githubLink: "https://github.com/ashhwiithac22/Smart-Civic-Complaint-Analyzer-with-NLP",
    liveLink: "https://complaint-analyzer-using-nlp.streamlit.app/"
  }
];

export const hackathons: Hackathon[] = [
  {
    name: "InnovateX Hackathon",
    description: "Secured top 10 position for developing a decentralized identity solution.",
    certificateLink: "#"
  },
  {
    name: "CodeForGood 2023",
    description: "Developed a platform for NGOs to track donor contributions in real-time.",
    certificateLink: "#"
  }
];

export const certifications: Certification[] = [
  {
    name: "Google Data Analytics Professional",
    platform: "Coursera",
    link: "#"
  },
  {
    name: "Full Stack Web Development",
    platform: "Meta",
    link: "#"
  },
  {
    name: "Machine Learning Specialization",
    platform: "DeepLearning.AI",
    link: "#"
  }
];

export const publications: Publication[] = [
  {
    title: "Efficiency in Decision Computing: A Deep Learning Approach",
    paperLink: "#",
    certificateLink: "#"
  },
  {
    title: "Predictive Modeling in Student Dropout Trends",
    paperLink: "#",
    certificateLink: "#"
  }
];

export const interests = [
  { name: "Artificial Intelligence", icon: "🤖" },
  { name: "Strategic Chess", icon: "♟️" },
  { name: "Open Source", icon: "🚀" },
  { name: "Financial Markets", icon: "📈" }
];
