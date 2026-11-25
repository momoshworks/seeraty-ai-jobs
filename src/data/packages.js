// Pricing packages and business details for Egyptian job seekers
export const SERVICE_PACKAGES = [
  {
    id: "starter",
    title: "باقة الـ CV الاحترافي (ATS)",
    badge: "للخريجين الجدد",
    price: 199,
    originalPrice: 350,
    deliveryTime: "تسليم خلال 24 ساعة",
    features: [
      "إعادة صياغة الـ CV بالإنجليزية بمعايير هارفارد وستانفورد",
      "توافق 100% مع أنظمة فحص السير الذاتية (ATS Friendly)",
      "تضمين الكلمات المفتاحية لمجالك لرفع نسبة القبول",
      "تسليم نسختين: PDF للتقديم الفوري + ملف Word قابل للتعديل",
      "بحث مجاني في محرك وظائف الذكاء الاصطناعي"
    ],
    popular: false,
    ctaText: "اطلب باقة الـ CV (199 ج)",
    whatsappMessage: "أهلاً بك! أريد طلب باقة الـ CV بنظام الـ ATS (199 جنيه) وهذه بياناتي:"
  },
  {
    id: "professional",
    title: "الباقة الشاملة (CV + LinkedIn + خطاب)",
    badge: "الأكثر طلباً واختياراً 🔥",
    price: 299,
    originalPrice: 550,
    deliveryTime: "تسليم خلال 24 ساعة",
    features: [
      "سيرة ذاتية ATS احترافية بالإنجليزية متوافقة مع الشركات الكبرى",
      "خطاب تقديم مخصص ومقنع (Cover Letter) للشركة المستهدفة",
      "إعادة ضبط وتطوير بروفايل LinkedIn بالكامل (Headline + About)",
      "نصوص إنجليزية جاهزة للنسخ المباشر في حسابك",
      "5 عمليات بحث ذكية في محرك وظائف AI ومطابقة حية للشركات",
      "تعديلات ومراجعة مجانية لمدة أسبوع بعد التسليم"
    ],
    popular: true,
    ctaText: "اطلب الباقة الشاملة (299 ج)",
    whatsappMessage: "أهلاً بك! أريد طلب الباقة الشاملة (CV + LinkedIn + خطاب تقديم بـ 299 جنيه عبر انستا باي)."
  },
  {
    id: "vip",
    title: "باقة النخبة والتجهيز للمقابلات",
    badge: "VIP للشركات الكبرى",
    price: 399,
    originalPrice: 700,
    deliveryTime: "تسليم فوري (نفس اليوم)",
    features: [
      "كل ما في الباقة الشاملة (CV ATS + Cover Letter + ضبط LinkedIn)",
      "دليل أهم 20 سؤال في إنترفيو الشركات باللغة الإنجليزية مع إجابات نموذجية",
      "تحسين كلمات الـ SEO للينكد إن للظهور في أول نتائج بحث الـ HR",
      "وصول غير محدود لمحرك وظائف AI طوال فترة بحثك",
      "متابعة شخصية ودعم مباشر عبر واتساب"
    ],
    popular: false,
    ctaText: "اطلب باقة النخبة (399 ج)",
    whatsappMessage: "أهلاً بك! أريد حجز باقة النخبة والتجهيز للمقابلات (399 جنيه) بأولوية تسليم VIP."
  }
];

export const PAYMENT_CONFIG = {
  instapay: {
    handle: "career.jobs@instapay",
    accountName: "Career & CV AI Services",
    mobile: "01024896731",
    feeText: "تحويل لحظي مباشر بدون أي رسوم إضافية",
    instructions: "افتح تطبيق انستا باي (InstaPay)، اختر 'إرسال نقود'، وأدخل العنوان اللحظي (IPA) أو رقم الهاتف الموضح أعلاه، ثم اكتب رقم العملية للتأكيد الفوري."
  },
  whatsappSupport: "201024896731",
  searchPriceEGP: 10
};
