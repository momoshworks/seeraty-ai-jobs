// Intelligent AI CV Generator engine with Harvard ATS templates for Egyptian Job Seekers

export const POPULAR_ROLES = [
  {
    id: "accounting",
    label: "محاسب مالي (Accountant)",
    field: "accounting",
    titleEn: "Junior Accountant & Financial Analyst",
    defaultDegree: "Bachelor of Commerce (Accounting Major)",
    defaultUniversity: "Cairo University",
    skills: "Advanced Excel, Financial Statements, General Ledger, Bank Reconciliation, Egyptian Tax Law, ERP Systems, SAP Basics, Cash Flow Analysis, Cost Accounting",
    summary: "Detail-oriented Accountant with a solid academic background in Accounting and hands-on experience in financial record-keeping, ledger entries, and tax compliance. Highly skilled in Advanced Excel (VLOOKUP, Pivot Tables, SUMIFS) and financial reporting. Proven track record of reconciling financial statements with 99.8% accuracy and streamlining monthly reporting cycles.",
    experiences: [
      {
        title: "Accountant",
        company: "Al-Mansour Trading & Distribution",
        location: "Giza, Egypt",
        startDate: "Oct 2023",
        endDate: "Present",
        bullets: [
          "Processed and verified daily ledger entries, accounts payable (AP), and accounts receivable (AR) with 100% adherence to Egyptian Accounting Standards.",
          "Reconciled 15+ corporate bank accounts monthly, identifying discrepancies and decreasing reconciliation cycle time by 20%.",
          "Prepared monthly VAT declarations and withholding tax reports for submission to the Egyptian Tax Authority."
        ]
      },
      {
        title: "Accounting Trainee",
        company: "National Bank of Egypt (NBE)",
        location: "Cairo, Egypt",
        startDate: "Jul 2023",
        endDate: "Sep 2023",
        bullets: [
          "Assisted senior accountants in reviewing corporate financial statements and financial ratio analysis.",
          "Audited vendor invoices against purchase orders, identifying and resolving overbilling errors.",
          "Drafted weekly cash-flow tracking sheets using Microsoft Excel."
        ]
      }
    ],
    certifications: "CMA Candidate (Part 1), Advanced Financial Accounting Certificate",
    languages: "Arabic (Native), English (Fluent / C1)"
  },
  {
    id: "callcenter",
    label: "خدمة عملاء وكول سنتر (Customer Support)",
    field: "customer-service",
    titleEn: "Customer Experience & English Account Specialist",
    defaultDegree: "Bachelor of Arts (English Department)",
    defaultUniversity: "Ain Shams University",
    skills: "Fluent English (C1/B2), Active Listening, Conflict Resolution, CRM Systems, Zendesk, Salesforce, Fast Typing (65 WPM), De-escalation, Cross-selling",
    summary: "Customer-focused English Support Specialist with near-native fluency (C1 level) and a proven record of delivering exceptional customer service for premier US and UK enterprise accounts. Skilled in resolving complex customer inquiries, reducing resolution times, and consistently maintaining a 97% Customer Satisfaction (CSAT) rating in high-volume contact centers.",
    experiences: [
      {
        title: "Customer Support Advisor (UK Account)",
        company: "Concentrix Egypt",
        location: "Maadi Technology Park, Cairo",
        startDate: "Sep 2023",
        endDate: "Present",
        bullets: [
          "Resolved 60+ inbound calls, emails, and live chat queries daily for UK retail accounts with high professionalism and cultural empathy.",
          "Achieved a 97% Customer Satisfaction (CSAT) score and maintained a First Contact Resolution (FCR) rate above 92%.",
          "Mentored 4 newly onboarded agents on product features, active listening techniques, and de-escalation protocols."
        ]
      },
      {
        title: "Customer Service Trainee",
        company: "Vodafone International Services (_VOIS)",
        location: "Smart Village, Giza",
        startDate: "Jun 2023",
        endDate: "Aug 2023",
        bullets: [
          "Handled billing inquiries and account troubleshooting with an average response time of under 45 seconds.",
          "Documented customer feedback and trends in CRM to support root-cause analysis by the operations team."
        ]
      }
    ],
    certifications: "Business English Communication Certificate, Customer Excellence Specialist",
    languages: "Arabic (Native), English (Fluent / Near-Native C1)"
  },
  {
    id: "marketing",
    label: "تسويق وسوشيال ميديا (Marketing)",
    field: "marketing",
    titleEn: "Digital Marketing & Performance Media Specialist",
    defaultDegree: "Bachelor of Business Administration (Marketing)",
    defaultUniversity: "Helwan University",
    skills: "Meta Ads Manager, Google Ads, TikTok Ads, Google Analytics 4, Copywriting, SEO, Email Marketing, Content Strategy, ROAS Optimization, Canva",
    summary: "Results-driven Digital Marketer with proven expertise in executing performance advertising campaigns across Meta, Google, and TikTok. Successfully managed advertising budgets exceeding EGP 400,000, maintaining an average ROAS of 4.5x. Passionate about conversion rate optimization, data-backed A/B testing, and compelling Egyptian Arabic and English copywriting.",
    experiences: [
      {
        title: "Performance Marketing Executive",
        company: "BrandScale Digital Agency",
        location: "New Cairo, Egypt",
        startDate: "Jan 2024",
        endDate: "Present",
        bullets: [
          "Spearheaded paid advertising campaigns across Meta and Google, delivering 15,000+ qualified leads and decreasing Cost Per Acquisition (CPA) by 32%.",
          "Conducted multivariate A/B testing on ad copies, hooks, and video creatives, increasing campaign click-through rate (CTR) from 1.4% to 3.1%.",
          "Built real-time marketing reporting dashboards using Looker Studio and Google Analytics 4."
        ]
      },
      {
        title: "Social Media Coordinator",
        company: "Urban Retail Egypt",
        location: "Cairo, Egypt",
        startDate: "Jul 2023",
        endDate: "Dec 2023",
        bullets: [
          "Managed content scheduling and community engagement across Facebook, Instagram, and LinkedIn, growing follower base by 45%.",
          "Wrote engaging captions and coordinated monthly promotional campaigns with the graphic design team."
        ]
      }
    ],
    certifications: "Google Digital Marketing Certificate, Meta Certified Digital Marketing Associate",
    languages: "Arabic (Native), English (Professional B2)"
  },
  {
    id: "sales",
    label: "مبيعات وتطوير أعمال (Sales)",
    field: "sales",
    titleEn: "Sales & Business Development Representative",
    defaultDegree: "Bachelor of Commerce",
    defaultUniversity: "Mansoura University",
    skills: "B2B Sales, Cold Calling, Pipeline Management, Lead Qualification, Negotiation, Salesforce CRM, Closing Deals, Client Onboarding, Presentation Skills",
    summary: "High-energy Sales Representative with a strong track record of prospecting, qualifying leads, and closing deals in competitive commercial markets. Adept at building lasting client relationships and identifying untapped business opportunities. Consistently exceeded monthly sales quotas by an average of 125%.",
    experiences: [
      {
        title: "Business Development Representative",
        company: "Prime Logistics Solutions",
        location: "Dokki, Giza",
        startDate: "Nov 2023",
        endDate: "Present",
        bullets: [
          "Generated 40+ qualified corporate leads monthly through targeted cold outreach and LinkedIn Sales Navigator.",
          "Closed deals valued at EGP 1.2M in annual recurring revenue, exceeding quarterly quota by 130%.",
          "Conducted in-person and virtual product demos for C-level executives and procurement managers."
        ]
      }
    ],
    certifications: "Certified Professional Salesperson (CPS), Inbound Sales Certification",
    languages: "Arabic (Native), English (Good Working Proficiency B2)"
  },
  {
    id: "developer",
    label: "مبرمج ويب (Frontend / React Developer)",
    field: "tech",
    titleEn: "Junior Frontend Web Developer (React.js)",
    defaultDegree: "Bachelor of Science in Computer Science",
    defaultUniversity: "Cairo University",
    skills: "React.js, JavaScript (ES6+), TypeScript, Next.js, Tailwind CSS, HTML5, CSS3, Git/GitHub, REST APIs, Redux Toolkit, Responsive Design, Agile/Scrum",
    summary: "Detail-oriented Frontend Developer with 2+ years of hands-on experience building performant, accessible web applications using React.js, TypeScript, and modern CSS frameworks. Adept at translating complex Figma designs into clean, reusable components. Proven track record of improving web loading speed by 35% and enhancing user engagement.",
    experiences: [
      {
        title: "Frontend Developer",
        company: "NileTech Digital Solutions",
        location: "Cairo, Egypt",
        startDate: "Jan 2024",
        endDate: "Present",
        bullets: [
          "Developed and launched 6+ responsive web portals using React.js and Tailwind CSS, increasing mobile user retention by 28%.",
          "Integrated RESTful APIs and optimized state management with Redux Toolkit, decreasing application latency by 35%.",
          "Collaborated closely with UI/UX designers and backend engineers in bi-weekly Agile sprints."
        ]
      },
      {
        title: "Web Development Intern",
        company: "Information Technology Institute (ITI)",
        location: "Smart Village, Egypt",
        startDate: "Jul 2023",
        endDate: "Nov 2023",
        bullets: [
          "Built a full-featured e-commerce web application with authentication, cart management, and payment gateway simulation.",
          "Achieved 85% code coverage through unit testing with Jest and React Testing Library."
        ]
      }
    ],
    certifications: "Meta Front-End Developer Professional Certificate (Coursera), ITI 3-Month Intensive Code Camp",
    languages: "Arabic (Native), English (Fluent / C1)"
  },
  {
    id: "hr",
    label: "موارد بشرية وتوظيف (HR Specialist)",
    field: "hr",
    titleEn: "Human Resources & Talent Acquisition Specialist",
    defaultDegree: "Bachelor of Business Administration (HR Major)",
    defaultUniversity: "Alexandria University",
    skills: "Talent Acquisition, ATS Recruitment, Employee Relations, Egyptian Labor Law, Social Insurance, Personnel Management, Structured Interviews, Onboarding",
    summary: "Results-oriented HR Specialist with hands-on experience managing end-to-end recruitment pipelines, applicant tracking systems, and employee onboarding. In-depth knowledge of the Egyptian Labor Law and social insurance regulations. Successfully reduced average time-to-hire by 25% while elevating candidate experience.",
    experiences: [
      {
        title: "Talent Acquisition Specialist",
        company: "Apex Industrial Group",
        location: "Alexandria, Egypt",
        startDate: "Oct 2023",
        endDate: "Present",
        bullets: [
          "Screened 500+ resumes monthly using ATS filters and conducted structured competency-based phone interviews.",
          "Successfully filled 35+ technical and commercial positions, reducing time-to-hire from 45 to 30 days.",
          "Prepared employment contracts, job descriptions, and onboarding packages compliant with Egyptian Labor regulations."
        ]
      }
    ],
    certifications: "SHRM-CP Candidate, Professional Human Resources Diploma",
    languages: "Arabic (Native), English (Professional Working B2)"
  },
  {
    id: "engineer",
    label: "مهندس مدني / موقع (Civil Site Engineer)",
    field: "engineering",
    titleEn: "Civil Site Engineer & Construction Supervisor",
    defaultDegree: "Bachelor of Science in Civil Engineering",
    defaultUniversity: "Zagazig University",
    skills: "AutoCAD, Site Supervision, Quantity Surveying, Concrete Technology, Quality Control (QA/QC), Structural Drawings, Health & Safety, Primavera P6",
    summary: "Dedicated Civil Site Engineer with practical experience in supervising concrete casting, finishing works, and structural surveying for major residential and commercial developments. Proficient in AutoCAD and reading shop drawings. Committed to strict site safety compliance and delivering projects on schedule.",
    experiences: [
      {
        title: "Site Civil Engineer",
        company: "Modern Builders Contracting",
        location: "New Administrative Capital, Egypt",
        startDate: "Aug 2023",
        endDate: "Present",
        bullets: [
          "Supervised daily concrete casting, rebar reinforcement, and structural surveying in accordance with project specifications.",
          "Monitored subcontractors' work progress against schedule milestones, mitigating potential project delays.",
          "Prepared daily progress reports, quantity surveying sheets, and material inspection requests (MIR)."
        ]
      }
    ],
    certifications: "Site Engineer Professional Program, OSHA 30-Hour Construction Safety",
    languages: "Arabic (Native), English (Good Working Proficiency B2)"
  },
  {
    id: "admin",
    label: "إدارة وسكرتارية (Administrative Assistant)",
    field: "admin",
    titleEn: "Executive Administrative Assistant & Office Coordinator",
    defaultDegree: "Bachelor of Arts",
    defaultUniversity: "Cairo University",
    skills: "Microsoft Office Suite, Calendar Management, Executive Correspondence, Filing & Archiving, Data Entry, Travel Coordination, Meeting Minutes, Reception",
    summary: "Organized and resourceful Administrative Assistant with strong proficiency in managing executive schedules, office operations, and bilingual correspondence (Arabic and English). Known for high confidentiality, fast problem-solving, and optimizing filing systems to save executive team hours weekly.",
    experiences: [
      {
        title: "Administrative Assistant",
        company: "Horizon Consulting Partners",
        location: "Zamalek, Cairo",
        startDate: "Sep 2023",
        endDate: "Present",
        bullets: [
          "Managed calendars, travel arrangements, and meeting schedules for 3 senior managing directors.",
          "Drafted formal business letters, memorandums, and detailed meeting minutes in both Arabic and English.",
          "Digitized office paper archives into secure cloud storage, improving record retrieval time by 50%."
        ]
      }
    ],
    certifications: "Executive Secretarial Skills Certificate, Advanced MS Office Specialist",
    languages: "Arabic (Native), English (Fluent / C1)"
  }
];

// Helper to convert Arabic input names into clean English transliteration if needed
export function formatEnglishName(rawName) {
  if (!rawName || !rawName.trim()) return "Ahmed Mohamed Ibrahim";
  const name = rawName.trim();
  // If already in English characters
  if (/^[a-zA-Z\s.'-]+$/.test(name)) {
    return name;
  }
  // Common Egyptian names dictionary for quick accurate translation
  const dict = {
    "أحمد": "Ahmed", "احمد": "Ahmed", "محمد": "Mohamed", "محمود": "Mahmoud",
    "علي": "Ali", "حسن": "Hassan", "حسين": "Hussein", "إبراهيم": "Ibrahim",
    "ابراهيم": "Ibrahim", "خالد": "Khaled", "طارق": "Tarek", "عمر": "Omar",
    "عمرو": "Amr", "كريم": "Karim", "يوسف": "Youssef", "مصطفى": "Mostafa",
    "سارة": "Sara", "نورهان": "Nourhan", "مريم": "Mariam", "آية": "Aya",
    "اية": "Aya", "ياسمين": "Yasmine", "فاطمة": "Fatma", "مي": "Mai",
    "هدى": "Hoda", "رنا": "Rana", "سلمى": "Salma", "ندى": "Nada",
    "السيد": "El-Sayed", "عثمان": "Osman", "رمضان": "Ramadan", "شريف": "Sherif"
  };

  const words = name.split(/\s+/);
  const translated = words.map(w => dict[w] || w);
  const result = translated.join(" ");

  // If still Arabic characters remain, fallback to clean English name with user token
  if (/[\u0600-\u06FF]/.test(result)) {
    return "Mohamed " + name.replace(/[\u0600-\u06FF]/g, '').trim() || "Mohamed Ahmed";
  }
  return result;
}

// Generate complete CV instantly based on selected role and level
export function generateInstantCV({ name, roleId, experienceLevel = "fresh", university, customField }) {
  const matchedRole = POPULAR_ROLES.find(r => r.id === roleId) || POPULAR_ROLES[0];
  const englishName = formatEnglishName(name);

  const gradYear = experienceLevel === "fresh" ? "2024" : experienceLevel === "mid" ? "2022" : "2020";

  return {
    fullName: englishName,
    title: matchedRole.titleEn,
    email: `${englishName.toLowerCase().replace(/[^a-z]/g, '.')}@email.com`,
    phone: "+20 10" + Math.floor(10000000 + Math.random() * 90000000),
    location: "Cairo, Egypt",
    linkedin: `linkedin.com/in/${englishName.toLowerCase().replace(/[^a-z]/g, '-')}`,
    github: matchedRole.field === "tech" ? `github.com/${englishName.toLowerCase().replace(/[^a-z]/g, '')}` : "",
    summary: matchedRole.summary,
    experiences: matchedRole.experiences.map((exp, i) => ({
      ...exp,
      id: (i + 1).toString()
    })),
    education: {
      degree: matchedRole.defaultDegree,
      university: university || matchedRole.defaultUniversity,
      gradYear: gradYear,
      grade: "Very Good (GPA: 3.4/4.0)"
    },
    skills: matchedRole.skills,
    languages: matchedRole.languages,
    certifications: matchedRole.certifications
  };
}
