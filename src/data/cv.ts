export type EducationItem = {
  institution: string;
  degree: string;
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
  title: "Undergraduate Student in Mathematics",
  location: "Hong Kong",
  emailLabel: "1155233234 [at] link [dot] cuhk [dot] edu [dot] hk",
  emailParts: {
    local: "1155233234",
    domain: ["link", "cuhk", "edu", "hk"]
  },
  website: "https://www.gaoshiqing.space/",
  github: "https://github.com/gaoshiqingcuhk",
  education: [
    {
      institution: "The Chinese University of Hong Kong",
      degree: "B.Sc. in Mathematics, expected 2028"
    }
  ] satisfies EducationItem[],
  interests: [
    "Computational Inverse Problems",
    "Scientific Computing",
    "Numerical Methods",
    "Uncertainty Quantification",
    "Machine Learning-related Inverse Problems",
    "Applied Mathematics"
  ],
  projects: [
    {
      name: "Image Inverse Problems: Denoising and Deblurring",
      bullets: [
        "Completed a reproducible undergraduate computational study of denoising and deblurring under controlled synthetic degradations.",
        "Compared Gaussian filtering, Tikhonov regularization, TV denoising, non-local means, Wiener deconvolution, Richardson-Lucy deconvolution, and a small CNN baseline.",
        "Evaluated PSNR, SSIM, runtime, visual comparisons, error maps, parameter sensitivity, and degradation robustness."
      ],
      tools: ["Python", "NumPy", "pandas", "matplotlib", "scikit-image"],
      url: "/projects/image-inverse-problems-denoising"
    },
    {
      name: "Subdiffusion Mode Decay",
      bullets: [
        "Completed a toy spectral visualization comparing Fourier mode decay in normal diffusion and time-fractional subdiffusion.",
        "Used a sine eigenbasis on Omega = (0, 1) with exponential and Mittag-Leffler-type decay factors.",
        "Documented the limitation that the project is a visualization, not a full inverse solver."
      ],
      tools: ["Python", "NumPy", "matplotlib"],
      url: "/projects/subdiffusion-mode-decay"
    },
    {
      name: "Machine Learning Uncertainty Quantification",
      bullets: [
        "Completed a reproducible regression uncertainty project using the UCI Energy Efficiency dataset with Heating Load as the target.",
        "Compared approximate Gaussian process intervals, split conformal prediction, naive bootstrap intervals, and residual-corrected bootstrap intervals.",
        "Studied empirical coverage, interval width, repeated-split stability, reduced-training-size behavior, and perturbed-input robustness."
      ],
      tools: ["Python", "NumPy", "pandas", "scikit-learn", "matplotlib"],
      url: "/projects/machine-learning-uncertainty-quantification"
    },
    {
      name: "Mathematical Modeling and Optimization",
      bullets: [
        "Completed a chip thermal management modeling workflow using surrogate models for thermal resistance, pressure drop, and temperature nonuniformity.",
        "Used Pareto filtering, weighted-sum ranking, TOPSIS, weight-scenario analysis, random weight sampling, and Monte Carlo perturbation checks.",
        "Produced tables, figures, and written analysis focused on assumptions, trade-offs, robustness, and limitations."
      ],
      tools: ["Python", "NumPy", "pandas", "matplotlib", "LaTeX"],
      url: "/projects/mathematical-modeling-optimization"
    }
  ] satisfies CvProject[],
  skills: [
    { category: "Programming", items: ["Python", "C++", "TypeScript basics"] },
    {
      category: "Scientific Computing / Data",
      items: ["NumPy", "pandas", "matplotlib", "scikit-image", "scikit-learn"]
    },
    { category: "Web", items: ["Astro", "HTML", "CSS", "Vercel"] },
    { category: "Writing / Tools", items: ["LaTeX", "Markdown", "Git"] }
  ] satisfies SkillGroup[],
  coursework: [
    "Linear Algebra I",
    "Honours Linear Algebra II",
    "Advanced Calculus I-II",
    "Mathematical Analysis I",
    "Complex Variables with Applications",
    "Basic Concepts in Statistics and Probability I",
    "Fundamental Computing with C++",
    "Data Structures and Applications"
  ],
  awardsActivities: [] as string[]
};
