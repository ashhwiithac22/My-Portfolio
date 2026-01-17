import { Project, Hackathon, Certification, Publication, SkillCategory } from '../types';

export const developerResume = "/assets/Developer_Resume.pdf";
export const dataResume = "/assets/Data_Resume.pdf";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "MySQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Java (JDBC/Swing)", "MongoDB"]
  },
  {
    title: "Data / Analytics",
    skills: ["Python", "ML", "NLP", "DL", "R", "Power BI", "JAX", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
  }
];

export const developerProjects: Project[] = [
  {
    title: "CodeBuddy Learning Platform",
    description: "AI powered learning and Interview preparation platform using MEAN stack and Gemini API.",
    technologies: ["Angular", "Node.js", "Express", "MongoDB", "Gemini API", "JWT"],
    githubLink: "https://github.com/ashhwiithac22/codebuddyapp",
    liveLink: "https://codebuddy-backend-oind.onrender.com/"
  },
  {
    title: "Blood Bank Management System",
    description: "Full-stack application streamlining blood donation tracking and hospital coordination.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Nodemailer", "JWT"],
    githubLink: "https://github.com/ashhwiithac22/lifelink-bloodbank",
    liveLink: "https://lifelink-bloodbank.vercel.app/"
  },
  {
    title: "Ride Share Optimizer",
    description: "Python app using graph algorithms to optimize cost-efficient, multi-stop ride-sharing routes.",
    technologies: ["Python", "Streamlit", "Dijkstra", "BFS", "Prim's Algorithm"],
    githubLink: "https://github.com/ashhwiithac22/RideShare-Optimizer",
    liveLink: "https://rideshareoptimizer.streamlit.app/"
  },
  {
    title: "Customer Relationship Management (CRM) System",
    description: "Java-based desktop CRM application enabling role-based user management, customer handling, order tracking, and transaction monitoring with a secure MySQL backend.",
    technologies: ["Java", "Java Swing", "MySQL", "JDBC", "IntelliJ IDEA"],
    githubLink: "https://github.com/ashhwiithac22/Customer_Realtionship_Management-System",
    liveLink: null
  }
];

export const dataProjects: Project[] = [
  {
    title: "AI - Powered Option Pricing Platform",
    description: "JAX and yFinance based platform for options pricing and implied volatility analysis.",
    technologies: ["JAX", "yFinance", "OpenAI API", "Streamlit", "Python", "Pandas", "NumPy", "Plotly"],
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
    technologies: ["Python", "TF-IDF", "Scikit-learn", "WordCloud", "TextBlob", "Plotly", "MultiNomial Naive Bayes"],
    githubLink: "https://github.com/ashhwiithac22/Smart-Civic-Complaint-Analyzer-with-NLP",
    liveLink: "https://complaint-analyzer-using-nlp.streamlit.app/"
  },
  {
    title: "Student Dropout Prediction System",
    description: "Machine learning system predicting student dropout risk using 15 features, delivering actionable insights for early intervention and personalized learning paths with 81% accuracy and 0.87 AUC.",
    technologies: ["Python", "Gradient Boosting", "Random Forest", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubLink: "https://github.com/ashhwiithac22/student-dropout-prediction-ml",
    liveLink: "https://student-dropout-prediction-ml.streamlit.app/"
  },
  {
  title: "Employee Burnout Risk Analysis Dashboard",
  description: "Machine learning–based dashboard for predicting employee burnout risk using HR data, combining EDA, feature engineering, and multiple ML models with explainability to support proactive workforce well-being decisions.",
  technologies: [
    "Python",
    "Logistic Regression",
    "Decision Tree",
    "Random Forest",
    "XGBoost",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Streamlit"
  ],
  githubLink: "https://github.com/ashhwiithac22/Employee-Burnout-Prediction",
  liveLink: "https://employee-burnout-prediction-using-ml.streamlit.app/"
}

];

export const hackathons: Hackathon[] = [
  {
    name: "EY Techathon 6.0",
    description: "Shortlisted in Round 2 out of 1,83,253+ participants for developing a smart vehicle technology solution.",
    certificateLink: "#"
  },
  {
    name: "TechSprint 2025 – Google Campus Edition",
    description: "Shortlisted in Top 20 teams out of 400+ registrations for developing an innovative SmartWallet vault-based solution.",
    certificateLink: "/assets/GDG.pdf"
  },
  {
    name: "Google Cloud Agentic AI Day",
    description: "Participated in Google Cloud Agentic AI Day, developing AI-driven solutions for real-time event safety and crowd monitoring.",
    certificateLink: "/assets/Hack2skill.png"
  }
];

export const certifications: Certification[] = [
  {
    name: "Data Analytics Job Simulation",
    platform: "Accenture",
    link: "/assets/accenture.pdf"
  },
  {
    name: "Database for Developers",
    platform: "Oracle",
    link: "/assets/Oracle.pdf"
  },
  {
    name: "Data Analytics Virtual Internship (3 Months)",
    platform: "Trainity",
    link: "/assets/Trainity.pdf"
  },
  {
    name: "Cloud Computing",
    platform: "IBM",
    link: "https://courses.yl-ptech.skillsnetwork.site/certificates/0adf29258d3b42a09c1db20f07f908e6#"
  },
  {
    name: "Software Engineering Job Simulation",
    platform: "JPMORGAN CHASE & CO",
    link: "/assets/JPMORGAN CHASE.pdf"
  },
   {
    name: "Bug Bounty",
    platform: "Prompt Infotech",
    link: "/assets/BugBounty.pdf"
  },
     {
    name: "Cyber Security & Privacy",
    platform: "NPTEL",
    link: "/assets/NPTEL.pdf"
  },
       {
    name: "Cyber Security Internship (3 Months)",
    platform: "Prompt Infotech",
    link: "/assets/Prompt Infotech.png"
  },
  {
    name: "Digital Marketing",
    platform: "Google",
    link: "/assets/Digital_Marketing.jpg"
  }
];

export const publications: Publication[] = [
  {
    title: "Phishing URL Detection using Machine Learning",
    description: "Co-authored a published research paper on phishing URL detection using machine learning, achieving 88.3% accuracy on 10,000 URLs.",
    paperLink: "/assets/IJRTI - Paper.pdf",
    certificateLink: "/assets/IJRTI - certificate.pdf"
  },
  {
  title: "Smart Civic Complaint Analyzer Using NLP",
  description: "Co-authored an IJIRT-published research paper on an NLP-driven civic complaint analysis system using TF-IDF and Multinomial Naive Bayes for real-time issue classification, urgency detection, and location extraction.",
  paperLink: "/assets/IJIRT - Paper.pdf",
  certificateLink: "/assets/IJIRT - Certificate.pdf"
}

];

export const interests = [
  { name: "Full Stack Development", icon: "💻" },
  { name: "Data Science & Analytics", icon: "📊" },
  { name: "Machine Learning & Artificial Intelligence", icon: "🤖" },
  { name: "Databases", icon: "🗄️" },
  { name: "Generative AI & Agentic AI", icon: "🧩" },
  { name: "Cloud Computing", icon: "☁️" },
  { name: "Bug Hunting", icon: "🐞" },
  {name: "Cyber Security",icon: " 🕵 "},
  { name: "Research & Problem Solving", icon: "🔍" },


  

];