export type EducationItem = {
  institution: string;
  degree: string;
  standing: string;
  gpa?: string;
  showGpa: boolean;
};

export type CvProject = {
  name: string;
  bullets: string[];
  tools: string[];
  url?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const cv = {
  name: "Shiqing Gao",
  title: "Mathematics Undergraduate",
  location: "Hong Kong",
  website: "https://www.gaoshiqing.space/",
  education: [
    {
      institution: "The Chinese University of Hong Kong",
      degree: "B.Sc. in Mathematics",
      standing: "Sophomore",
      gpa: "3.4/4.0",
      showGpa: true
    }
  ] satisfies EducationItem[],
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
        "Built a small experimental pipeline for image denoising as an entry point to inverse problems.",
        "Compared Gaussian filtering, Tikhonov regularization, and total variation denoising.",
        "Evaluated reconstruction quality using PSNR and SSIM.",
        "Conducted parameter sensitivity analysis and multi-image testing."
      ],
      tools: ["Python", "NumPy", "pandas", "matplotlib", "scikit-image"],
      url: "/projects/image-inverse-problems-denoising"
    },
    {
      name: "Mathematical Modeling Practice",
      bullets: [
        "Practiced problem formulation, assumption design, model construction, and result interpretation.",
        "Focused on translating open-ended questions into quantitative models and structured reports."
      ],
      tools: ["Python", "LaTeX", "Mathematical Modeling"],
      url: "/projects/modeling-competition-practice"
    },
    {
      name: "Personal Website",
      bullets: [
        "Built a bilingual personal website for projects, writing, CV, and personal exploration.",
        "Developed as a static site with reusable content structures and a print-ready CV."
      ],
      tools: ["Astro", "TypeScript", "HTML", "CSS"],
      url: "/projects/personal-website"
    }
  ] satisfies CvProject[],
  skills: [
    { category: "Programming", items: ["Python", "C++", "TypeScript basics"] },
    {
      category: "Data / Scientific Computing",
      items: ["NumPy", "pandas", "matplotlib", "scikit-image"]
    },
    { category: "Web", items: ["Astro", "HTML", "CSS", "Vercel"] },
    { category: "Writing / Tools", items: ["LaTeX", "Markdown", "Git"] }
  ] satisfies SkillGroup[],
  coursework: [
    "Calculus",
    "Linear Algebra",
    "Probability",
    "Statistics",
    "Vector Calculus",
    "Mathematical Modeling"
  ],
  awardsActivities: [] as string[]
};
