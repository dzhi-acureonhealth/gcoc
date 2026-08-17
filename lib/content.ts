export const site = {
  name: "Global Clinical Outcomes Collaborative",
  shortName: "GCOC",
  tagline: "Better Recovery Begins with Better Evidence.",
  institutionalLine: "Independent Data Stewardship for Patient-Centered Care.",
  translationalLine:
    "Turning Clinical Experience into Evidence for the Public Good.",
  description:
    "A Washington nonprofit corporation providing a trusted framework for multicenter outcomes research, responsible data stewardship, and patient-centered benchmarking across spine and musculoskeletal care. Application for federal tax exemption under Section 501(c)(3) is pending.",
  location: "Bellevue, Washington",
  principalOffice:
    "Spaces Bellevue — Lincoln Square, 500 108th Avenue NE, Bellevue, WA 98004",
  fullAddress:
    "Spaces Bellevue — Lincoln Square, 500 108th Avenue NE, Bellevue, WA 98004",
  email: "info@gcoc.org",
  ubi: "606 248 708",
  ein: "42-3624885",
  heroBadge: "Washington Nonprofit · Bellevue, WA",
  taxStatus:
    "Global Clinical Outcomes Collaborative is a Washington nonprofit corporation (UBI 606 248 708; EIN 42-3624885). Our application for recognition of federal tax exemption under Section 501(c)(3) of the Internal Revenue Code is pending. If recognition is granted, it is generally effective retroactively to the date of incorporation.",
} as const;

export const nav = [
  { label: "Mission", href: "/#mission" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Network", href: "/#network" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Governance and Transparency", href: "/governance/" },
  { label: "About", href: "/#about" },
  { label: "Support", href: "/#support" },
] as const;

export const hero = {
  eyebrow: "A nonprofit collaborative for patient-centered outcomes research",
  headline: "Better recovery begins with better evidence.",
  subcopy:
    "Global Clinical Outcomes Collaborative is a Washington nonprofit that brings surgeons, hospitals, universities, and researchers together to study how patients actually recover after spine and musculoskeletal care. We provide trusted governance for multi-center clinical data so that everyday clinical experience can become evidence that improves care for future patients.",
  primaryCta: { label: "Get Involved", href: "/#get-involved" },
  secondaryCta: { label: "Learn How We Work", href: "/#what-we-do" },
} as const;

export const mission = {
  eyebrow: "Our Mission",
  headline: "Turning real-world recovery into better care.",
  body: "To improve patient outcomes in spine and musculoskeletal medicine by supporting collaborative clinical research, responsible data stewardship, transparent benchmarking, and evidence-based clinical improvement.",
  legal:
    "We are organized exclusively for charitable, scientific, and educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code. Our application for recognition of federal tax exemption is pending. Our work fosters independent scientific collaboration among surgeons, hospitals, universities, and researchers — with the goal of transforming real-world clinical experience into actionable evidence for the public benefit.",
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
  attribution:
    "Data collected through the SPINEHealthie platform by ESRG surgeons at participating academic medical centers. Governance of the platform and registry is transitioning to GCOC under license from the University of Washington.",
  quote: {
    text: "Being able to share my progress with my care team and actually see my recovery on a graph made me feel connected and reassured.",
    attribution: "Patient, post-surgical recovery program",
  },
  closing:
    "Patients also tell us where surgical follow-up still falls short — in symptom domains beyond pain, in survey design, and in continuity of communication. These insights directly shape the research questions, instruments, and quality benchmarks the Collaborative supports.",
} as const;

export const network = {
  eyebrow: "Participating Network",
  headline: "A growing community of clinical collaborators.",
  body: "Our founding scientific network, the Endoscopic Spine Research Group (ESRG), brings together more than 30 spine surgeons affiliated with leading academic medical centers across North America.",
  partnerName: "Endoscopic Spine Research Group (ESRG)",
  partnerEyebrow: "Founding scientific network",
  partnerDescription:
    "A surgeon network conducting IRB-approved outcomes research on full-endoscopic spine surgery. ESRG demonstrates what is possible when surgeon-led collaboration is paired with modern digital tools — and the Collaborative is being built as its long-term nonprofit home.",
  footnote:
    "Named institutions will be listed as sites execute participation agreements. The Collaborative welcomes new specialty networks aligned with its scientific and governance principles.",
} as const;

export const leadership = {
  eyebrow: "Leadership & Governance",
  headline: "Surgeon-led. Patient-centered.",
  body: "The Collaborative is governed by a board of directors committed to evidence-based research and responsible data stewardship. Our founding leadership combines clinical expertise with experience in multi-institutional research and operations.",
  boardLabel: "Board of Directors",
  board: [
    {
      name: "Christoph Hofstetter, MD, PhD",
      role: "Founder, Chair & President",
      description:
        "Spine surgeon and clinical researcher; mission and scientific leadership.",
    },
    {
      name: "Cathryn Payne",
      role: "Director & Secretary",
      description:
        "Operations and program leadership; corporate records and minutes.",
    },
    {
      name: "Wolfgang Ries",
      role: "Director",
      description: "University liaison; research oversight and governance.",
    },
  ],
  operationsLabel: "Technology & Operations",
  operations: [
    {
      name: "Derek Zhi",
      role: "Technology & Operations",
      description: "Information technology and technical operations.",
    },
  ],
  closing:
    "The Collaborative is structured to maintain scientific independence from any commercial entity. All research outputs and benchmarks are governed by board-approved policies that prioritize patient benefit, scientific integrity, and transparent reporting. Related-party transactions are subject to the conflict-of-interest safeguards in GCOC’s Bylaws.",
  governanceCta: {
    label: "View Governance and Transparency",
    href: "/governance/",
  },
} as const;

export const support = {
  eyebrow: "Support Our Work",
  headline: "Learn about supporting the Collaborative’s work.",
  intro:
    "The Collaborative’s research, data stewardship, and education programs depend on people and institutions who share our commitment to patient-centered evidence. To learn about supporting this work, contact us.",
  whyHeadline: "Tax-exempt status",
  why: "GCOC’s application for 501(c)(3) recognition is pending; we will update this page when our determination is received.",
  enablesHeadline: "What this work enables",
  enables: [
    "Multi-center research studies that follow patients across the full arc of recovery, not just at fixed clinic visits.",
    "Independent data governance that protects the integrity of patient-reported outcomes.",
    "Open scientific dissemination so findings benefit patients and clinicians worldwide.",
    "Patient-centered benchmarking that gives hospitals a meaningful mirror for the care they deliver.",
    "Training and educational resources for the next generation of clinical researchers.",
  ],
  primaryCta: { label: "Contact Us", href: "/#contact" },
  secondaryCta: { label: "Get Involved", href: "/#get-involved" },
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
      title: "Industry data partners",
      description:
        "GCOC operates an industry data-partnership program with published criteria, standard participation tiers, standard flow-down protections, and standard pricing, open to qualified entities that meet its governance requirements. Program revenue supports the Collaborative’s charitable research, benchmarking, and education mission. Program criteria will be published when the Board adopts the program policy.",
    },
  ],
  cta: { label: "Contact Us", href: "/#contact" },
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
      label: "Principal office",
      value: site.fullAddress,
    },
    {
      label: "Tax status",
      value: site.taxStatus,
    },
    {
      label: "Independence",
      value:
        "GCOC shares certain visual brand elements with Acureon Health LLC to signal a related ecosystem and shared origin. GCOC is not owned, controlled, or directed by Acureon Health LLC or any commercial entity; the organizations operate under separate boards and governance. Transactions between GCOC and any related commercial entity are subject to the conflict-of-interest safeguards in GCOC’s Bylaws.",
    },
  ],
} as const;

export const governance = {
  eyebrow: "Governance & Transparency",
  headline: "How the Collaborative is governed.",
  intro:
    "This page discloses GCOC’s directors and officers, related-party safeguards, and the documents we will publish as they are adopted or become available. It is intended for contracting offices, collaborators, and the public record that accompanies our application for federal tax exemption.",
  sections: [
    {
      title: "Board of Directors and Officers",
      body: [
        "GCOC is a Washington nonmembership nonprofit corporation. The Board of Directors is the governing body.",
        "Christoph Hofstetter, MD, PhD — Founder, Chair & President. Cathryn Payne — Director & Secretary. Wolfgang Ries — Director.",
      ],
    },
    {
      title: "Bylaws",
      body: [
        "A summary of the Bylaws, and the Bylaws themselves, will be posted here once adopted by the Board.",
      ],
    },
    {
      title: "Conflict of interest",
      body: [
        "Directors, officers, and other covered persons are required to disclose actual and potential conflicts and to recuse themselves from deliberations and votes in which they have a conflicting interest. The Board reviews related-party matters under these safeguards before any transaction is approved.",
      ],
    },
    {
      title: "Related-party safeguards",
      body: [
        "GCOC shares certain visual brand elements with Acureon Health LLC to signal a related ecosystem and shared origin. GCOC is not owned, controlled, or directed by Acureon Health LLC or any commercial entity; the organizations operate under separate boards and governance.",
        "Transactions between GCOC and any related commercial entity are subject to the conflict-of-interest safeguards in GCOC’s Bylaws, including disclosure, recusal, and Board review. These related-party protections are the same safeguards summarized for sites in the Site Participation Agreement.",
      ],
    },
    {
      title: "Public documents",
      body: [
        "The following will be posted here as they become available: annual reports; the IRS determination letter, if recognition is granted; and Forms 990.",
        "GCOC’s application for recognition of federal tax exemption under Section 501(c)(3) is pending. We will update this page when a determination is received.",
      ],
    },
  ],
} as const;

export const footer = {
  brandLine: site.tagline,
  description: site.taxStatus,
  contactHeadline: "Contact",
  email: site.email,
  address: site.fullAddress,
  links: [
    { label: "Mission", href: "/#mission" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Network", href: "/#network" },
    { label: "Leadership", href: "/#leadership" },
    { label: "Governance and Transparency", href: "/governance/" },
    { label: "Support", href: "/#support" },
  ],
  legalLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Governance and Transparency", href: "/governance/" },
  ],
  copyright:
    "© {year} Global Clinical Outcomes Collaborative. All rights reserved.",
} as const;
