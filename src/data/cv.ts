export type EducationItem = {
  institution: string;
  degree: string;
  standing: string;
  gpa?: string;
  showGpa?: boolean;
};

export type CvProject = {
  name: string;
  bullets: string[];
  tools: string[];
  note?: string;
  repoUrl?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type CvData = {
  name: string;
  title: string;
  location: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
  education: EducationItem[];
  interests: string[];
  projects: CvProject[];
  skills: SkillGroup[];
  coursework: string[];
  awardsActivities: string[];
};

export const cv: CvData = {
  name: "Shiqing Gao",
  title: "Mathematics Undergraduate",
  location: "Hong Kong",
  email: "TODO: add email",
  website: "TODO: add personal website",
  github: "TODO: add GitHub profile",
  linkedin: "TODO: add LinkedIn profile",
  education: [
    {
      institution: "The Chinese University of Hong Kong",
      degree: "B.Sc. in Mathematics",
      standing: "Sophomore",
      gpa: "3.4/4.0",
      // Set this to false if you prefer to hide GPA from the public CV.
      showGpa: true
    }
  ],
  interests: [
    "Applied Mathematics",
    "Computational Imaging",
    "Inverse Problems",
    "Statistical Modeling",
    "Data Science",
    "Scientific Computing",
    "Machine Learning"
  ],
  projects: [
    {
      name: "Image Inverse Problems / Denoising MVP",
      bullets: [
        "Built a small experimental pipeline for image denoising.",
        "Compared noisy images and Gaussian-filtered outputs.",
        "Evaluated performance using PSNR and SSIM.",
        "Conducted noise sensitivity and filter sigma sensitivity analysis."
      ],
      tools: ["Python", "NumPy", "scikit-image", "pandas", "matplotlib"],
      note: "TODO: link to GitHub repo"
    },
    {
      name: "Mathematical Modeling Competition Practice",
      bullets: [
        "Practiced problem formulation, assumption design, model construction, and result interpretation.",
        "Focused on translating open-ended problems into quantitative models."
      ],
      tools: ["Python", "LaTeX", "mathematical modeling"],
      note: "TODO: add competition/report details"
    },
    {
      name: "Statistical Data Analysis Mini Project",
      bullets: [
        "Performed descriptive statistics, visualization, and interpretation on structured datasets.",
        "Practiced statistical reasoning and communication."
      ],
      tools: ["Python", "pandas", "matplotlib", "statistics"],
      note: "TODO: replace with a concrete dataset/project later"
    }
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "C++", "TypeScript basics"]
    },
    {
      category: "Data / Scientific Computing",
      items: ["NumPy", "pandas", "matplotlib", "scikit-image"]
    },
    {
      category: "Web",
      items: ["Astro", "HTML", "CSS", "GitHub Pages or Vercel"]
    },
    {
      category: "Writing / Tools",
      items: ["LaTeX", "Markdown", "Git"]
    }
  ],
  coursework: [
    "Calculus",
    "Linear Algebra",
    "Probability",
    "Statistics",
    "Vector Calculus",
    "Mathematical Modeling",
    "TODO: add more exact course names later"
  ],
  awardsActivities: [
    "TODO: Add mathematical modeling competitions, student clubs, or academic activities later."
  ]
};
