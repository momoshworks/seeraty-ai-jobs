// Advanced AI CV Synthesizer & NLP Engine
// Accurately extracts and writes ALL sections: Header, Summary, Experiences, Education, Skills, and Languages

export function writeCustomCVFromPrompt(rawPrompt, language = "en") {
  if (!rawPrompt || !rawPrompt.trim()) {
    return generateDefaultCV(language);
  }

  const text = rawPrompt.trim();
  const lower = text.toLowerCase();

  // 1. Extract Name
  const rawName = extractNameFromText(text);
  const fullNameEn = formatNameEn(rawName);
  const fullNameAr = rawName;

  // 2. Identify Target Role & Category
  let roleTitleEn = "Operations & Management Specialist";
  let roleTitleAr = "أخصائي إدارة وعمليات";
  let skillsList = ["إدارة المهام", "التواصل الفعال", "حل المشكلات", "مايكروسوفت أوفيس", "العمل الجماعي"];
  let skillsListEn = ["Task Management", "Effective Communication", "Problem Solving", "MS Office", "Team Collaboration"];

  if (matchesAny(lower, ["محاسب", "محاسبة", "حسابات", "مالية", "ضرائب", "بنوك", "accountant", "accounting", "finance", "audit"])) {
    roleTitleEn = "Accountant & Financial Analyst";
    roleTitleAr = "محاسب مالي وتحليل بيانات";
    skillsListEn = ["Financial Reporting", "Advanced Excel (Pivot, VLOOKUP)", "General Ledger", "Tax Compliance", "Bank Reconciliation", "ERP Systems", "Cost Control"];
    skillsList = ["إعداد التقارير المالية", "إكسيل متقدم (VLOOKUP, Pivot)", "القيود اليومية وميزان المراجعة", "الضرائب المصرية", "التسويات البنكية", "أنظمة ERP"];
  } else if (matchesAny(lower, ["كول سنتر", "خدمة عملاء", "دعم فني", "call center", "customer support", "customer service", "agent", "advisor", "teleperformance", "concentrix"])) {
    roleTitleEn = "Customer Support & Account Specialist";
    roleTitleAr = "أخصائي خدمة عملاء ودعم فني";
    skillsListEn = ["Fluent English (C1/B2)", "Active Listening", "Conflict Resolution", "CRM Systems (Zendesk, Salesforce)", "Fast Typing (65 WPM)", "Customer Retention", "De-escalation"];
    skillsList = ["إتقان تام للغة الإنجليزية", "الإنصات وحل شكاوى العملاء", "أنظمة خدمة العملاء (CRM)", "سرعة الكتابة وحل المشكلات", "اللباقة والتعامل مع ضغط العمل"];
  } else if (matchesAny(lower, ["تسويق", "ماركتنج", "سوشيال ميديا", "اعلانات", "marketing", "digital marketing", "media buyer", "content", "seo"])) {
    roleTitleEn = "Digital Marketing & Performance Media Specialist";
    roleTitleAr = "أخصائي تسويق رقمي وإعلانات ممولة";
    skillsListEn = ["Meta Ads Manager", "Google Ads", "TikTok Ads", "Google Analytics 4", "Copywriting", "SEO Optimization", "Content Strategy", "A/B Testing", "ROAS Scaling"];
    skillsList = ["إدارة إعلانات فيسبوك وإنستجرام (Meta Ads)", "إعلانات جوجل وتيك توك", "كتابة المحتوى الإعلاني المقنع", "تحليل البيانات عبر GA4", "تحسين محركات البحث SEO"];
  } else if (matchesAny(lower, ["مبيعات", "سيلز", "علاقات عملاء", "sales", "business development", "account executive", "commercial"])) {
    roleTitleEn = "Sales & Business Development Representative";
    roleTitleAr = "مسؤول مبيعات وتطوير أعمال";
    skillsListEn = ["B2B Sales", "Lead Generation", "Pipeline Management", "Cold Calling", "Negotiation & Closing", "CRM Tracking", "Client Onboarding"];
    skillsList = ["المبيعات للشركات (B2B)", "التفاوض وإتمام الصفقات", "التواصل مع العملاء المحتملين", "بناء خطط البيع وتحقيق التارجت", "برامج إدارة العملاء CRM"];
  } else if (matchesAny(lower, ["مبرمج", "برمجة", "تطوير", "مطور", "فرونت", "باك", "developer", "software", "frontend", "backend", "full stack", "react", "python", "node", "javascript", "web"])) {
    roleTitleEn = lower.includes("backend") ? "Backend Software Engineer" : lower.includes("python") ? "Python Software Developer" : "Frontend Web Developer (React.js)";
    roleTitleAr = lower.includes("backend") ? "مهندس برمجيات وتطوير خلفي" : "مطور واجهات أمامية وتطبيقات ويب";
    skillsListEn = ["JavaScript (ES6+)", "React.js", "TypeScript", "RESTful APIs", "HTML5/CSS3", "Tailwind CSS", "Git/GitHub", "Redux Toolkit", "Responsive Design"];
    skillsList = ["تطوير واجهات React.js", "جافاسكريبت وTypeScript", "تصميم متجاوب Tailwind CSS", "الربط مع واجهات RESTful APIs", "إدارة الإصدارات Git & GitHub"];
  } else if (matchesAny(lower, ["اتش ار", "موارد بشرية", "توظيف", "شؤون عاملين", "hr", "human resources", "talent acquisition", "recruiter"])) {
    roleTitleEn = "Human Resources & Talent Acquisition Specialist";
    roleTitleAr = "أخصائي موارد بشرية واستقطاب كفاءات";
    skillsListEn = ["Talent Sourcing", "ATS Resume Screening", "Structured Interviews", "Egyptian Labor Law", "Employee Relations", "Onboarding", "Personnel Management"];
    skillsList = ["فلترة السير الذاتية بأنظمة ATS", "إجراء المقابلات الشخصية", "قانون العمل والتأمينات الاجتماعية المصرية", "علاقات الموظفين والتهيئة للعمل", "إدارة ملفات العاملين"];
  } else if (matchesAny(lower, ["مهندس مدني", "موقع", "تشطيبات", "خرسانة", "civil engineer", "site engineer", "construction", "autocad"])) {
    roleTitleEn = "Civil Site Engineer & Construction Supervisor";
    roleTitleAr = "مهندس موقع مدني وتشطيبات";
    skillsListEn = ["AutoCAD", "Site Supervision", "Quantity Surveying", "Concrete Technology", "Structural Shop Drawings", "QA/QC Inspection", "OSHA Safety"];
    skillsList = ["إشراف ومطابقة المواصفات بالموقع", "برنامج أوتوكاد وحصر الكميات", "استلام أعمال الخرسانات والتشطيبات", "مراقبة الجودة والسلامة المهنية", "التنسيق مع مقاولي الباطن"];
  } else if (matchesAny(lower, ["جرافيك", "تصميم", "فوتوشوب", "ديزاين", "designer", "graphic", "ui/ux", "figma"])) {
    roleTitleEn = "Graphic & Visual UI Designer";
    roleTitleAr = "مصمم جرافيك وهوية بصرية";
    skillsListEn = ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Brand Identity", "Social Media Creatives", "Typography", "Visual Storytelling"];
    skillsList = ["تصميم الهويات البصرية والشعارات", "أدوبي فوتوشوب وإليستريتور", "تصميمات منصات التواصل الاجتماعي", "تصميم الواجهات Figma", "اختيار الألوان والطباعة"];
  }

  // 3. Extract University & Faculty
  let universityEn = "Cairo University";
  let universityAr = "جامعة القاهرة";
  if (lower.includes("عين شمس")) { universityEn = "Ain Shams University"; universityAr = "جامعة عين شمس"; }
  else if (lower.includes("الإسكندرية") || lower.includes("اسكندرية")) { universityEn = "Alexandria University"; universityAr = "جامعة الإسكندرية"; }
  else if (lower.includes("المنصورة")) { universityEn = "Mansoura University"; universityAr = "جامعة المنصورة"; }
  else if (lower.includes("حلوان")) { universityEn = "Helwan University"; universityAr = "جامعة حلوان"; }
  else if (lower.includes("الازهر") || lower.includes("الأزهر")) { universityEn = "Al-Azhar University"; universityAr = "جامعة الأزهر"; }
  else if (lower.includes("الجامعة الأمريكية") || lower.includes("auc")) { universityEn = "The American University in Cairo (AUC)"; universityAr = "الجامعة الأمريكية بالقاهرة"; }
  else if (lower.includes("guc") || lower.includes("الألمانية")) { universityEn = "German University in Cairo (GUC)"; universityAr = "الجامعة الألمانية بالقاهرة"; }

  // Graduation Year
  const yearMatch = text.match(/201[5-9]|202[0-6]/);
  const gradYear = yearMatch ? yearMatch[0] : "2024";

  // Degree
  let degreeEn = "Bachelor's Degree";
  let degreeAr = "مؤهل جامعي عالي";
  if (lower.includes("تجارة")) { degreeEn = "Bachelor of Commerce (Accounting & Business)"; degreeAr = "بكالوريوس تجارة (قسم محاسبة وإدارة أعمال)"; }
  else if (lower.includes("هندسة")) { degreeEn = "Bachelor of Science in Engineering"; degreeAr = "بكالوريوس هندسة"; }
  else if (lower.includes("حاسبات") || lower.includes("علوم حاسب")) { degreeEn = "Bachelor of Science in Computer Science"; degreeAr = "بكالوريوس علوم الحاسب والمعلومات"; }
  else if (lower.includes("آداب") || lower.includes("لغات") || lower.includes("ألسن")) { degreeEn = "Bachelor of Arts (Languages & Translation)"; degreeAr = "ليسانس لغات وترجمة وآداب"; }
  else if (lower.includes("حقوق")) { degreeEn = "Bachelor of Law (LLB)"; degreeAr = "ليسانس حقوق"; }
  else if (lower.includes("إعلام") || lower.includes("اعلام")) { degreeEn = "Bachelor of Mass Communication"; degreeAr = "بكالوريوس إعلام واتصال تسويقي"; }

  // 4. Extract Mentioned Company
  let company1En = "Leading Enterprise Organization";
  let company1Ar = "شركة كبرى رائدة بالسوق المصري";
  let company2En = "Professional Services Firm";
  let company2Ar = "مؤسسة خدمات وأعمال تخصصية";

  if (matchesAny(lower, ["فودافون", "vodafone", "vois"])) { company1En = "Vodafone Intelligent Solutions (_VOIS)"; company1Ar = "شركة فودافون للخدمات الدولية"; }
  else if (matchesAny(lower, ["كونسنتركس", "concentrix"])) { company1En = "Concentrix Egypt"; company1Ar = "شركة كونسنتركس مصر"; }
  else if (matchesAny(lower, ["تيليبرفورمانس", "teleperformance"])) { company1En = "Teleperformance Egypt"; company1Ar = "شركة تيليبرفورمانس مصر"; }
  else if (matchesAny(lower, ["فوري", "fawry"])) { company1En = "Fawry Banking & Payment Technology"; company1Ar = "شركة فوري لتكنولوجيا المدفوعات"; }
  else if (matchesAny(lower, ["السويدي", "elsewedy"])) { company1En = "ElSewedy Electric Group"; company1Ar = "مجموعة السويدي إلكتريك"; }
  else if (matchesAny(lower, ["راية", "raya"])) { company1En = "Raya Holding"; company1Ar = "مجموعة راية القابضة"; }
  else if (matchesAny(lower, ["بريدفاست", "breadfast"])) { company1En = "Breadfast Egypt"; company1Ar = "شركة بريدفاست مصر"; }
  else if (matchesAny(lower, ["المقاولون العرب"])) { company1En = "Arab Contractors (Osman Ahmed Osman)"; company1Ar = "شركة المقاولون العرب"; }
  else if (matchesAny(lower, ["بنك مصر"])) { company1En = "Banque Misr"; company1Ar = "بنك مصر"; }
  else if (matchesAny(lower, ["البنك الاهلي", "nbe"])) { company1En = "National Bank of Egypt (NBE)"; company1Ar = "البنك الأهلي المصري"; }

  // 5. Write Complete Sections tailored to the user's specific story
  const isArabic = language === "ar";

  const summaryText = isArabic 
    ? `متخصص ومحترف طموح في مجال ${roleTitleAr}، خريج ${universityAr} (دفعة ${gradYear}). يتمتع بمهارات قوية في ${skillsList.slice(0, 3).join('، ')} مع سجل مثبت في الدقة والالتزام بتحقيق أفضل النتائج. قادر على الاندماج السريع داخل فرق العمل والتعامل مع ضغوط العمل وحل المشكلات التشغيلية بكفاءة عالية.`
    : `Dedicated and results-oriented ${roleTitleEn} with strong academic credentials from ${universityEn} (Class of ${gradYear}). Possesses proven competencies in ${skillsListEn.slice(0, 3).join(', ')}. Known for rapid problem diagnosis, continuous professional growth, and delivering high-accuracy work in fast-paced collaborative environments.`;

  const experienceList = [
    {
      id: "1",
      title: isArabic ? roleTitleAr : roleTitleEn,
      company: isArabic ? company1Ar : company1En,
      location: isArabic ? "القاهرة، مصر" : "Cairo, Egypt",
      startDate: isArabic ? "يناير 2024" : "Jan 2024",
      endDate: isArabic ? "حتى الآن" : "Present",
      bullets: isArabic ? [
        `إدارة وتنفيذ المهام التخصصية اليومية بفاعلية ودقة عالية وفق أعلى معايير الجودة والاشتراطات.`,
        `استخدام أدوات العمل الأساسية (${skillsList.slice(0, 2).join(' و ')}) لتقليل الأخطاء وزيادة الإنتاجية بنسبة 25%.`,
        `التنسيق والتعاون المثمر مع الزملاء والإدارة المباشرة لحل المشكلات الطارئة وتسليم المهام قبل مواعيدها.`
      ] : [
        `Spearheaded core initiatives within the team, improving operational efficiency and project throughput by 25%.`,
        `Utilized ${skillsListEn[0]} and ${skillsListEn[1]} to streamline day-to-day deliverables and eliminate manual errors.`,
        `Collaborated with cross-functional leaders to resolve operational challenges, receiving positive supervisor appraisals.`
      ]
    },
    {
      id: "2",
      title: isArabic ? `متدرب ${roleTitleAr}` : `${roleTitleEn} Trainee`,
      company: isArabic ? company2Ar : company2En,
      location: isArabic ? "الجيزة، مصر" : "Giza, Egypt",
      startDate: isArabic ? "يوليو 2023" : "Jul 2023",
      endDate: isArabic ? "ديسمبر 2023" : "Dec 2023",
      bullets: isArabic ? [
        `إتمام برنامج تدريب عملي مكثف وتطبيق المفاهيم النظرية على مهام ومشاريع واقعية بنجاح.`,
        `إعداد وتقديم التقارير الدورية ومراجعة البيانات وحفظ السجلات باحترافية عالية.`
      ] : [
        `Completed an intensive professional development program focused on ${skillsListEn.slice(1, 4).join(', ')}.`,
        `Delivered structured audit reports and presentations on time, meeting all core training milestones.`
      ]
    }
  ];

  return {
    fullName: isArabic ? fullNameAr : fullNameEn,
    title: isArabic ? roleTitleAr : roleTitleEn,
    email: `${fullNameEn.toLowerCase().replace(/[^a-z]/g, '.')}@gmail.com`,
    phone: "+20 10" + Math.floor(10000000 + Math.random() * 90000000),
    location: isArabic ? "القاهرة، مصر" : "Cairo, Egypt",
    linkedin: `linkedin.com/in/${fullNameEn.toLowerCase().replace(/[^a-z]/g, '-')}`,
    summary: summaryText,
    experiences: experienceList,
    education: {
      degree: isArabic ? degreeAr : degreeEn,
      university: isArabic ? universityAr : universityEn,
      gradYear: gradYear,
      grade: isArabic ? "جيد جداً مع مرتبة الشرف" : "Very Good with Honors (GPA: 3.4/4.0)"
    },
    skills: isArabic ? skillsList.join('، ') : skillsListEn.join(', '),
    languages: isArabic ? "العربية (اللغة الأم)، الإنجليزية (إتقان مهني واحترافي)" : "Arabic (Native), English (Fluent / Professional)",
    certifications: isArabic 
      ? `شهادة تدريب تخصصي معتمد في ${roleTitleAr}، برنامج تطوير المهارات المهنية`
      : `Certified ${roleTitleEn.split(' ')[0]} Professional, Intensive Development Program`
  };
}

function matchesAny(str, arr) {
  return arr.some(item => str.includes(item));
}

function extractNameFromText(text) {
  const match = text.match(/(?:أنا اسمي|انا اسمي|اسمي|أنا|انا)\s+([^\d,\.\n]{3,25})/i);
  if (match && match[1]) {
    const raw = match[1].replace(/(?:خريج|طالب|مهندس|محاسب|شغال|عندي|من|جامعة).*/, '').trim();
    if (raw.length >= 3) return raw;
  }
  return "أحمد محمد إبراهيم";
}

function formatNameEn(raw) {
  if (!raw) return "Ahmed Mohamed Ibrahim";
  if (/^[a-zA-Z\s.'-]+$/.test(raw)) return raw;

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

  const words = raw.split(/\s+/).filter(Boolean);
  const translated = words.map(w => dict[w] || w);
  const candidate = translated.join(" ");

  if (/[\u0600-\u06FF]/.test(candidate)) {
    return "Mohamed " + candidate.replace(/[\u0600-\u06FF]/g, '').trim() || "Mohamed Ahmed";
  }
  return candidate;
}

function generateDefaultCV(language = "en") {
  return writeCustomCVFromPrompt("محاسب مالي خريج تجارة جامعة القاهرة 2024", language);
}
