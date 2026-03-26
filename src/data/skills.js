export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    color: "#6C63FF",
    bgGradient: "linear-gradient(135deg, #6C63FF22, #8B5CF622)",
    skills: [
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#1572B6" },
      { name: "JavaScript", icon: "js", color: "#F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "SCSS", icon: "sass", color: "#CC6699" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    color: "#61DAFB",
    bgGradient: "linear-gradient(135deg, #61DAFB22, #DD003122)",
    skills: [
      { name: "React.js", icon: "react", color: "#61DAFB" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express.js", icon: "express", color: "#aaaaaa" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Redux", icon: "redux", color: "#764ABC" },
      { name: "Redux Toolkit", icon: "redux", color: "#9B59B6" },
      { name: "Zustand", icon: "zustand", color: "#F97316" },
      { name: "Angular", icon: "angular", color: "#DD0031" },
      { name: "Angular Material", icon: "material", color: "#009688" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
      { name: "NgRx", icon: "ngrx", color: "#BA2BD2" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    color: "#FF6C37",
    bgGradient: "linear-gradient(135deg, #FF6C3722, #4479A122)",
    skills: [
      { name: "Postman", icon: "postman", color: "#FF6C37" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
      { name: "MySQL Workbench", icon: "mysql", color: "#4479A1" },
      { name: "AWS S3", icon: "awss3", color: "#FF9900" },
      { name: "Cloudflare", icon: "cloudflare", color: "#F6821F" },
    ],
  },
  {
    id: "uiux",
    label: "UI / UX",
    color: "#F24E1E",
    bgGradient: "linear-gradient(135deg, #F24E1E22, #8B5CF622)",
    skills: [
      { name: "Figma", icon: "figma", color: "#F24E1E" },
      { name: "Media Queries", icon: "mediaqueries", color: "#06B6D4" },
      { name: "Responsive Design", icon: "responsive", color: "#8B5CF6" },
    ],
  },
];

// Legacy exports kept for any other components that may reference them
export const skills = {
  frontend: [
    { name: "React.js / Next.js", level: 95, icon: "react", color: "#61DAFB" },
    { name: "Angular (MEAN)", level: 90, icon: "angular", color: "#DD0031" },
    { name: "TypeScript", level: 90, icon: "typescript", color: "#3178C6" },
    { name: "Tailwind CSS", level: 93, icon: "tailwind", color: "#06B6D4" },
    { name: "GSAP / Framer Motion", level: 85, icon: "gsap", color: "#88CE02" },
    { name: "HTML5 / CSS3", level: 97, icon: "threejs", color: "#E34F26" },
  ],
  backend: [
    { name: "Node.js / Express.js", level: 94, icon: "node", color: "#339933" },
    {
      name: "MongoDB / Mongoose",
      level: 92,
      icon: "mongodb",
      color: "#47A248",
    },
    { name: "REST API Design", level: 95, icon: "graphql", color: "#E10098" },
    { name: "JWT / OAuth2 Auth", level: 88, icon: "redis", color: "#DC382D" },
    {
      name: "PostgreSQL / MySQL",
      level: 82,
      icon: "postgresql",
      color: "#336791",
    },
    {
      name: "Socket.io / WebSockets",
      level: 80,
      icon: "python",
      color: "#3776AB",
    },
  ],
  devops: [
    { name: "Git / GitHub", level: 95, icon: "github", color: "#ffffff" },
    {
      name: "Docker / Containers",
      level: 78,
      icon: "docker",
      color: "#2496ED",
    },
    { name: "AWS / Vercel / Heroku", level: 76, icon: "aws", color: "#FF9900" },
    { name: "CI/CD Pipelines", level: 80, icon: "gsap", color: "#88CE02" },
    { name: "Linux / Shell", level: 80, icon: "nextjs", color: "#ffffff" },
    { name: "Nginx / PM2", level: 74, icon: "vue", color: "#009639" },
  ],
};

export const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Angular", color: "#DD0031" },
  { name: "Node.js", color: "#339933" },
  { name: "Express.js", color: "#ffffff" },
  { name: "MongoDB", color: "#47A248" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "REST API", color: "#E10098" },
  { name: "JWT Auth", color: "#DC382D" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Git", color: "#F05032" },
  { name: "Tailwind", color: "#06B6D4" },
];
