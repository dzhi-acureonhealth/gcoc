export const site = {
  name: "Global Clinical Outcomes Collaborative",
  shortName: "GCOC",
  tagline: "Better Recovery Begins with Better Evidence.",
  institutionalLine: "Independent Data Stewardship for Patient-Centered Care.",
  translationalLine:
    "Turning Clinical Experience into Evidence for the Public Good.",
  description:
    "An independent 501(c)(3) nonprofit research and data-governance organization. GCOC provides a trusted framework for multicenter outcomes research, responsible data stewardship, and patient-centered benchmarking across spine and musculoskeletal care.",
  location: "Bellevue, Washington",
  fullAddress: "Spaces Bellevue (Lincoln Square), Bellevue, Washington",
} as const;

export const nav = [
  { label: "Mission", href: "#mission" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Network", href: "#network" },
  { label: "Leadership", href: "#leadership" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
] as const;

export const hero = {
  eyebrow: "A nonprofit collaborative for patient-centered outcomes research",
  headline: "Better recovery begins with better evidence.",
  subcopy:
    "Global Clinical Outcomes Collaborative is an independent 501(c)(3) nonprofit that brings surgeons, hospitals, universities, and researchers together to study how patients actually recover after spine and musculoskeletal care. We provide trusted governance for multi-center clinical data so that everyday clinical experience can become evidence that improves care for future patients.",
  primaryCta: { label: "Support Our Mission", href: "#support" },
  secondaryCta: { label: "Learn How We Work", href: "#what-we-do" },
} as const;

export const mission = {
  eyebrow: "Our Mission",
  headline: "Turning real-world recovery into better care.",
  body: "To improve patient outcomes in spine and musculoskeletal medicine by supporting collaborative clinical research, responsible data stewardship, transparent benchmarking, and evidence-based clinical improvement.",
  legal:
    "We are organized exclusively for charitable, scientific, and educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code. Our work fosters independent scientific collaboration among surgeons, hospitals, universities, and researchers — with the goal of transforming real-world clinical experience into actionable evidence for the public benefit.",
  values: [
    {
      title: "Trust",
      description:
        "Independent governance and responsible stewardship of collaborative clinical data.",
    },
    {
      title: "Rigor",
      description:
        "Scientifically grounded outcomes research, transparent methods, and meaningful benchmarking.",
    },
    {
      title: "Together",
      description:
        "Cross-institutional collaboration that turns real-world experience into better care for future patients.",
    },
  ],
} as const;

export const whyItMatters = {
  eyebrow: "Why It Matters",
  headline: "Modern recovery happens outside the hospital.",
  body: [
    "Surgical care is changing faster than the systems we use to measure it. Procedures are increasingly outpatient and minimally invasive, and most of a patient’s recovery now happens at home — often invisible to the institutions that performed the surgery.",
    "Pain, anxiety, medication needs, wound concerns, mobility, return to work, and communication with the care team all evolve in the days and weeks after surgery. Traditional registries capture only isolated snapshots, often months after the procedure. The result is a persistent gap between what we measure and what actually matters to patients.",
    "Global Clinical Outcomes Collaborative was created to close that gap — scientifically, ethically, and at scale.",
  ],
} as const;

export type ServiceIcon =
  | "shield"
  | "database"
  | "chart"
  | "share"
  | "spark";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const whatWeDo = {
  eyebrow: "What We Do",
  headline: "A neutral home for multi-institutional outcomes research.",
  body: "The Collaborative provides the trusted framework that multi-center clinical research requires: independent governance, shared methodology, and a long-term nonprofit home for data that no single institution should own alone.",
  services: [
    {
      title: "Collaborative outcomes research",
      description:
        "We support multicenter studies that evaluate surgical recovery, complications, patient-reported outcomes, functional improvement, and the long-term value of care.",
      icon: "share",
    },
    {
      title: "Responsible data stewardship",
      description:
        "We provide governance principles for pooled clinical data — how data are collected, analyzed, shared, and used for research or quality improvement — with patient-entered outcomes protected as auditable, trustworthy evidence.",
      icon: "shield",
    },
    {
      title: "Patient-centered benchmarking",
      description:
        "We help institutions understand outcomes in clinically meaningful ways, going beyond administrative or claims data to capture the recovery patterns that matter most to patients and surgeons.",
      icon: "chart",
    },
    {
      title: "Education and dissemination",
      description:
        "We share findings through peer-reviewed publications, scientific presentations, educational resources, and collaborative learning across participating institutions.",
      icon: "database",
    },
    {
      title: "Quality improvement",
      description:
        "We translate real-world clinical data into opportunities to improve safety, recovery, access, and consistency of care across surgical specialties.",
      icon: "spark",
    },
  ] satisfies Service[],
} as const;

export const approach = {
  eyebrow: "Our Approach in Practice",
  headline: "Evidence already in motion.",
  body: "Our model is grounded in working surgical networks that already use digital tools to track recovery in real time. The patient-reported data being collected today demonstrates both the demand for, and the value of, the kind of trusted multi-center infrastructure the Collaborative is built to provide.",
  stats: [
    {
      value: "1,000+",
      label: "patients contributing real-world recovery data",
    },
    {
      value: "91%",
      label: "report a very good experience with digital recovery tracking",
    },
    {
      value: "30+",
      label: "surgeons across leading academic medical centers",
    },
  ],
  quote: {
    text: "Being able to share my progress with my care team and actually see my recovery on a graph made me feel connected and reassured.",
    attribution: "Patient, post-surgical recovery program",
  },
  closing:
    "Patients also tell us where surgical follow-up still falls short — in symptom domains beyond pain, in survey design, and in continuity of communication. These insights directly shape the research questions, instruments, and quality benchmarks the Collaborative supports.",
} as const;

export const network = {
  eyebrow: "Participating Network",
  headline: "A growing community of clinical and academic partners.",
  body: "The Collaborative supports specialty-specific research networks that meet its scientific and governance standards. Our founding partner network is the Endoscopic Spine Research Group (ESRG), a multi-center consortium of spine surgeons at leading academic medical centers conducting IRB-approved outcomes research on full-endoscopic spine surgery. ESRG demonstrates what is possible when surgeon-led collaboration is paired with modern digital tools — and the Collaborative provides its long-term nonprofit home.",
  institutions: [
    "University of Washington",
    "Washington University in St. Louis",
    "Vanderbilt University",
    "Weill Cornell Medicine",
    "Duke Health",
    "University of Utah",
    "University of South Florida",
    "Texas Back Institute",
    "Houston Methodist",
    "University of Miami",
    "SUNY Upstate Medical University",
    "Mayo Clinic",
    "Barrow Neurological Institute",
    "University of Wisconsin–Madison",
    "UC Davis",
    "University of Calgary",
    "Stanford Medicine",
  ],
  footnote:
    "Listed institutions reflect the affiliations of participating surgeons in the ESRG research network. Additional sites are pending administrative approval. The Collaborative welcomes new specialty networks aligned with its scientific and governance principles.",
} as const;

export const leadership = {
  eyebrow: "Leadership & Governance",
  headline: "Independent. Surgeon-led. Patient-centered.",
  body: "The Collaborative is governed by a board of practicing surgeons and clinical scientists committed to independent, evidence-based research. Our founding leadership combines clinical expertise with deep experience in multi-institutional research and digital health.",
  boardLabel: "Founding Board",
  board: [
    {
      name: "Christoph Hofstetter, MD, PhD",
      role: "Founder",
      description: "Spine surgeon and clinical researcher",
    },
    {
      name: "Mark Mahan, MD",
      role: "Founding Board",
      description: "Spine surgeon and multi-institutional research leader",
    },
    {
      name: "Cathryn Payne",
      role: "Founding Board",
      description: "Operations and program leadership",
    },
  ],
  closing:
    "The Collaborative is structured to maintain scientific independence from any commercial entity. All research outputs and benchmarks are governed by board-approved policies that prioritize patient benefit, scientific integrity, and transparent reporting.",
} as const;

export const support = {
  eyebrow: "Support Our Work",
  headline: "Help us build the evidence base patients deserve.",
  intro:
    "Every patient’s recovery tells a story — and too often, that story is lost after the patient leaves the hospital. Your support helps us capture, study, and learn from real-world recovery so that future patients receive safer, more effective, and more personalized care.",
  whyHeadline: "Why your gift matters",
  why: "As an independent 501(c)(3) nonprofit, the Collaborative depends on philanthropic support to preserve the scientific independence that makes our work trustworthy. Donations directly fund the research infrastructure, governance work, and educational programs that no single hospital, surgeon, or company can sustain alone.",
  enablesHeadline: "What your support enables",
  enables: [
    "Multi-center research studies that follow patients across the full arc of recovery, not just at fixed clinic visits.",
    "Independent data governance that protects the integrity of patient-reported outcomes.",
    "Open scientific dissemination so findings benefit patients and clinicians worldwide.",
    "Patient-centered benchmarking that gives hospitals a meaningful mirror for the care they deliver.",
    "Training and educational resources for the next generation of clinical researchers.",
  ],
  waysHeadline: "Ways to give",
  ways: [
    "Make a tax-deductible individual or family contribution.",
    "Establish a named research fund or program in your area of interest.",
    "Partner as an institutional or foundation funder of a specific study or initiative.",
    "Include the Collaborative in your estate or legacy planning.",
  ],
  primaryCta: { label: "Donate", href: "#contact" },
  secondaryCta: { label: "Partner With Us", href: "#contact" },
} as const;

export const getInvolved = {
  eyebrow: "Get Involved",
  headline: "Join the work.",
  intro:
    "We welcome surgeons, researchers, hospitals, and patient advocates who share our commitment to rigorous, transparent, and patient-centered clinical research.",
  audiences: [
    {
      title: "Surgeons and clinician-scientists",
      description:
        "Bring your patient cohort into a multi-center research framework.",
    },
    {
      title: "Hospitals and academic centers",
      description: "Partner on benchmarking and quality improvement.",
    },
    {
      title: "Patient advocates and recovery researchers",
      description:
        "Help us define what high-quality recovery actually looks like.",
    },
    {
      title: "Industry and foundation partners",
      description: "Support pre-competitive clinical evidence development.",
    },
  ],
  cta: { label: "Contact Us", href: "#contact" },
} as const;

export const about = {
  eyebrow: "About",
  headline: "About the Collaborative",
  body: [
    "Global Clinical Outcomes Collaborative was created to support a new model of clinical outcomes research: multicenter, digitally enabled, patient-centered, and governed with trust.",
    "The Collaborative provides a nonprofit structure for research oversight, data stewardship, benchmarking methodology, and scientific dissemination. Its work is grounded in the belief that the most meaningful insights in healthcare often come from patients’ real recovery journeys — not only from claims data, billing codes, or isolated follow-up visits.",
    "By working with surgeons and institutions across the country and internationally, the Collaborative aims to define better standards for measuring recovery, identifying complications, improving follow-up, and advancing evidence-based care across surgical specialties.",
  ],
  meta: [
    {
      label: "Where we are",
      value: site.fullAddress,
    },
    {
      label: "Tax status",
      value:
        "Recognized under Section 501(c)(3) of the Internal Revenue Code. Contributions are tax-deductible to the extent allowed by law.",
    },
    {
      label: "Independence",
      value:
        "Independent nonprofit research and data-governance organization. Related ecosystem brand to AcureonHealthcare; not owned, controlled, or directed by any commercial entity.",
    },
  ],
} as const;

export const footer = {
  brandLine: site.tagline,
  description:
    "Independent nonprofit research and data-governance organization based in Bellevue, WA.",
  contactHeadline: "Contact",
  contactLines: [
    site.fullAddress,
    "hello@gcoc.org",
  ],
  links: [
    { label: "Mission", href: "#mission" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Network", href: "#network" },
    { label: "Leadership", href: "#leadership" },
    { label: "Support", href: "#support" },
  ],
  legalLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Governance", href: "#" },
  ],
  copyright:
    "© {year} Global Clinical Outcomes Collaborative. All rights reserved.",
} as const;
