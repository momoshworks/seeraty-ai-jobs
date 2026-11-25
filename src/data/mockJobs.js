// Comprehensive bilingual jobs database for Egypt with smart search tags
export const INITIAL_JOBS = [
  {
    id: "job-1",
    title: "Junior Frontend Developer (React.js)",
    titleAr: "مطور واجهات أمامية مبتدئ (React.js)",
    company: "Vodafone Intelligent Solutions (_VOIS)",
    location: "القاهرة (القرية الذكية)",
    cityId: "cairo",
    type: "هجين (Hybrid)",
    field: "tech",
    experience: "fresh",
    salary: "14,000 - 18,000 ج.م",
    postedDate: "منذ يومين",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Tailwind CSS"],
    searchKeywords: ["مطور", "مبرمج", "برمجة", "فرونت", "رياكت", "سوفت وير", "developer", "frontend", "react", "javascript", "software", "web", "فودافون"],
    description: "فرصة للخريجين الجدد لتطوير تطبيقات ويب حديثة بالتعاون مع فريق هندسة البرمجيات في ڤويس مصر.",
    requirements: [
      "إتقان React.js وJavaScript ES6+",
      "معرفة جيدة بمبادئ Responsive Design وGit",
      "إتقان اللغة الإنجليزية تحدثاً وكتابة"
    ]
  },
  {
    id: "job-2",
    title: "English Call Center & Customer Advisor",
    titleAr: "خدمة عملاء وكول سنتر لغة إنجليزية",
    company: "Concentrix Egypt",
    location: "القاهرة (المعادي / 6 أكتوبر)",
    cityId: "cairo",
    type: "من المقر (On-Site)",
    field: "customer-service",
    experience: "fresh",
    salary: "16,000 - 21,000 ج.م + بدلات",
    postedDate: "اليوم",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["Fluent English (C1/B2)", "Communication Skills", "Problem Solving", "Customer Care"],
    searchKeywords: ["كول سنتر", "خدمة عملاء", "انجليزي", "دعم فني", "call center", "customer service", "english", "concentrix", "advisor", "support"],
    description: "مطلوب خريجين جدد لحسابات دولية مرموقة (UK / US). تأمين صحي شامل ومواصلات متوفرة.",
    requirements: [
      "لغة إنجليزية بطلاقة (B2 أو C1)",
      "مؤهل عالٍ (جميع الكليات مقبولة)",
      "مرونة في نظام الشفتات"
    ]
  },
  {
    id: "job-3",
    title: "Junior Accountant (محاسب مالي مبتدئ)",
    titleAr: "محاسب مالي وخزينة مبتدئ",
    company: "مجموعة السويدي إلكتريك (ElSewedy)",
    location: "القاهرة الجديدة (التجمع الخامس)",
    cityId: "cairo",
    type: "دوام كامل (Full-Time)",
    field: "accounting",
    experience: "fresh",
    salary: "11,000 - 15,000 ج.م",
    postedDate: "منذ 3 أيام",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["Excel (Advanced)", "Financial Statements", "General Ledger", "ERP", "Tax Compliance"],
    searchKeywords: ["محاسب", "محاسبة", "مالية", "اكسيل", "ضرائب", "بنوك", "خزينة", "accountant", "accounting", "finance", "excel", "elsewedy"],
    description: "إعداد القيود اليومية والتسويات البنكية ومطابقة حسابات الموردين والعملاء بالتعاون مع الإدارة المالية.",
    requirements: [
      "بكالوريوس تجارة (قسم محاسبة عربي أو إنجليزي)",
      "إجادة برنامج Excel وإعداد التقارير المالية",
      "دقة عالية في التعامل مع الحسابات"
    ]
  },
  {
    id: "job-4",
    title: "Digital Marketing Specialist",
    titleAr: "أخصائي تسويق رقمي وإعلانات ممولة",
    company: "Breadfast Egypt",
    location: "القاهرة (مدينة نصر / التجمع)",
    cityId: "cairo",
    type: "دوام كامل (Full-Time)",
    field: "marketing",
    experience: "mid",
    salary: "15,000 - 20,000 ج.م",
    postedDate: "منذ يومين",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["Meta Ads", "Google Ads", "Copywriting", "SEO", "Google Analytics 4"],
    searchKeywords: ["تسويق", "ماركتنج", "سوشيال ميديا", "اعلانات", "كتابة محتوى", "marketing", "digital marketing", "media buyer", "seo", "content"],
    description: "إدارة الحملات الإعلانية على فيسبوك وإنستجرام ومتابعة العائد وتحسين استهداف العملاء للطلبات اليومية.",
    requirements: [
      "خبرة 1-3 سنوات في إعلانات السوشيال ميديا",
      "معرفة بتحليل النتائج عبر Google Analytics",
      "شغف بصناعة محتوى إبداعي"
    ]
  },
  {
    id: "job-5",
    title: "Sales Representative (مسؤول مبيعات خارجية)",
    titleAr: "مسؤول مبيعات تعاقدات وعلاقات عملاء",
    company: "شركة أمان للخدمات المالية (Raya)",
    location: "الجيزة / الدقي",
    cityId: "giza",
    type: "دوام كامل (Full-Time)",
    field: "sales",
    experience: "fresh",
    salary: "9,000 ج.م + عمولات مجزية",
    postedDate: "اليوم",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["B2B Sales", "Negotiation", "Client Relations", "Cold Calling"],
    searchKeywords: ["مبيعات", "سيلز", "تسويق ميداني", "علاقات عملاء", "sales", "account executive", "commercial", "indoor sales", "outdoor sales"],
    description: "التواصل مع التجار والشركات لعقد اتفاقيات نقاط البيع والتمويل مع حوافز وعمولات شهرية منتظمة.",
    requirements: [
      "مهارات تواصل وإقناع عالية",
      "مؤهل عالي مناسب",
      "الرغبة في تحقيق التارجت والترقي"
    ]
  },
  {
    id: "job-6",
    title: "Human Resources (HR) Specialist",
    titleAr: "أخصائي موارد بشرية وتوظيف (HR)",
    company: "مجموعة العز للصناعات",
    location: "الإسكندرية (برج العرب)",
    cityId: "alex",
    type: "دوام كامل (Full-Time)",
    field: "hr",
    experience: "fresh",
    salary: "10,000 - 13,000 ج.م + مواصلات",
    postedDate: "منذ 4 أيام",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["Recruitment", "Labor Law", "Personnel", "Interviews", "Onboarding"],
    searchKeywords: ["اتش ار", "موارد بشرية", "توظيف", "شؤون عاملين", "hr", "human resources", "recruiter", "talent acquisition"],
    description: "إجراء مقابلات العمل وتنسيق التوظيف ومتابعة ملفات العاملين والتأمينات الاجتماعية.",
    requirements: [
      "مؤهل جامعي مناسب",
      "فهم أساسي لقانون العمل والتأمينات المصرية",
      "إجادة برامج مايكروسوفت أوفيس"
    ]
  },
  {
    id: "job-7",
    title: "Graphic & Social Media Designer",
    titleAr: "مصمم جرافيك وسوشيال ميديا",
    company: "وكالة أفق للإعلان الرقمي",
    location: "المنصورة، الدقهلية",
    cityId: "mansoura",
    type: "دوام كامل (أو هجين)",
    field: "design",
    experience: "fresh",
    salary: "8,000 - 12,000 ج.م",
    postedDate: "اليوم",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["Photoshop", "Illustrator", "Branding", "Social Media Designs", "Creativity"],
    searchKeywords: ["مصمم", "جرافيك", "تصميم", "فوتوشوب", "اليستريتور", "سوشيال ميديا", "designer", "graphic design", "photoshop", "illustrator"],
    description: "تصميم بوستات السوشيال ميديا والهويات البصرية لعملاء ومتاجر متنوعة بالدلتا.",
    requirements: [
      "وجود بورتفوليو أو نماذج أعمال سابقة",
      "إتقان برامج Adobe (Photoshop, Illustrator)",
      "سرعة في إنجاز الأفكار والتعديلات"
    ]
  },
  {
    id: "job-8",
    title: "Remote Python / AI Web Scraper",
    titleAr: "مبرمج بايثون للعمل عن بُعد من المنزل",
    company: "DataMena (عن بُعد)",
    location: "العمل عن بُعد من المنزل (Remote)",
    cityId: "remote",
    type: "عن بُعد (Remote)",
    field: "tech",
    experience: "mid",
    salary: "$800 - $1,400 شهرياً (بالدولار)",
    postedDate: "اليوم",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["Python", "FastAPI", "Web Scraping", "Pandas", "Automation"],
    searchKeywords: ["بايثون", "ريموت", "عمل من البيت", "مبرمج", "دولار", "python", "remote", "developer", "backend", "django"],
    description: "بناء أدوات جمع البيانات والأتمتة لعملاء بالخليج وأوروبا مع دوام مرن من أي محافظة في مصر.",
    requirements: [
      "خبرة مثبتة في كتابة سكريبتات Python",
      "التزام بمواعيد تسليم المهام",
      "لغة إنجليزية جيدة للتواصل"
    ]
  },
  {
    id: "job-9",
    title: "Site Civil Engineer (مهندس موقع مدني)",
    titleAr: "مهندس موقع مدني وتشطيبات",
    company: "المقاولون العرب (عثمان أحمد عثمان)",
    location: "القاهرة (العاصمة الإدارية)",
    cityId: "cairo",
    type: "دوام كامل (Full-Time)",
    field: "engineering",
    experience: "fresh",
    salary: "12,000 - 16,000 ج.م + إقامة",
    postedDate: "منذ 3 أيام",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["AutoCAD", "Site Supervision", "Quantity Surveying", "Concrete Works"],
    searchKeywords: ["مهندس", "مدني", "موقع", "تشطيبات", "هندسة", "اوتوكاد", "civil engineer", "engineer", "site", "autocad", "construction"],
    description: "الإشراف على تنفيذ الأعمال الإنشائية ومطابقة المواصفات الفنية وجداول الاستلام في مشاريع العاصمة الإدارية.",
    requirements: [
      "بكالوريوس هندسة مدنية (دفعة 2022 - 2024)",
      "إجادة برنامج AutoCAD",
      "القدرة على العمل في بيئة الموقع الإنشائي"
    ]
  },
  {
    id: "job-10",
    title: "Administrative Assistant & Receptionist",
    titleAr: "مساعد إداري وسكرتارية واستقبال",
    company: "المستشفى الجوي التخصصي",
    location: "القاهرة الجديدة",
    cityId: "cairo",
    type: "دوام كامل (Full-Time)",
    field: "admin",
    experience: "fresh",
    salary: "8,500 - 11,000 ج.م",
    postedDate: "منذ يومين",
    source: "بيت.كوم / Bayt",
    applyUrl: "https://www.bayt.com/ar/egypt/jobs/",
    skills: ["MS Office", "Communication", "Filing", "Email Correspondence", "Data Entry"],
    searchKeywords: ["ادارة", "سكرتارية", "استقبال", "اداري", "مدخل بيانات", "اوفيس", "admin", "receptionist", "secretary", "data entry", "office"],
    description: "تنظيم المواعيد واستقبال المراجعين وتنسيق المراسلات الإدارية الرسمية وحفظ الملفات.",
    requirements: [
      "مؤهل عالي مناسب",
      "إجادة برامج Word وExcel",
      "لباقة وحسن مظهر"
    ]
  }
];

export const JOB_LOCATIONS = [
  { id: "all", label: "كل المحافظات (مصر)" },
  { id: "cairo", label: "القاهرة والجيزة" },
  { id: "alex", label: "الإسكندرية" },
  { id: "mansoura", label: "الدلتا والمنصورة" },
  { id: "remote", label: "العمل عن بُعد (من المنزل)" }
];

export const JOB_CATEGORIES = [
  { id: "all", label: "جميع المجالات والتخصصات" },
  { id: "accounting", label: "محاسبة ومالية" },
  { id: "customer-service", label: "خدمة عملاء وكول سنتر" },
  { id: "tech", label: "برمجة وتكنولوجيا المعلومات" },
  { id: "marketing", label: "تسويق وإعلانات وميديا" },
  { id: "sales", label: "مبيعات وتطوير أعمال" },
  { id: "hr", label: "موارد بشرية وتوظيف (HR)" },
  { id: "engineering", label: "هندسة ومقاولات" },
  { id: "design", label: "تصميم وفنون" },
  { id: "admin", label: "إدارة وسكرتارية" }
];

// Robust Search Engine Function supporting bilingual and synonyms
export function filterJobsList(jobs, { query = "", location = "all", category = "all" }) {
  const cleanQuery = query.toLowerCase().trim();

  return jobs.filter(job => {
    // 1. Location match
    if (location !== "all") {
      if (location === "cairo" && !job.cityId.includes("cairo") && !job.cityId.includes("giza")) return false;
      if (location === "alex" && !job.cityId.includes("alex")) return false;
      if (location === "mansoura" && !job.cityId.includes("mansoura")) return false;
      if (location === "remote" && !job.cityId.includes("remote")) return false;
    }

    // 2. Category match
    if (category !== "all" && job.field !== category) {
      return false;
    }

    // 3. Query match (if empty, matches all)
    if (!cleanQuery) return true;

    // Check title, titleAr, company, skills, or searchKeywords
    const matchesTitle = job.title.toLowerCase().includes(cleanQuery) || job.titleAr.toLowerCase().includes(cleanQuery);
    const matchesCompany = job.company.toLowerCase().includes(cleanQuery);
    const matchesSkills = job.skills.some(s => s.toLowerCase().includes(cleanQuery));
    const matchesKeywords = job.searchKeywords.some(k => k.toLowerCase().includes(cleanQuery) || cleanQuery.includes(k.toLowerCase()));

    return matchesTitle || matchesCompany || matchesSkills || matchesKeywords;
  });
}
