
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

export interface Hackathon {
  name: string;
  description: string;
  certificateLink: string;
}

export interface Certification {
  name: string;
  platform?: string;
  link: string;
}

export interface Publication {
  title: string;
  paperLink: string;
  certificateLink: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
