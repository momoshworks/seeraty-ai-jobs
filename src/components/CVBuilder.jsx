import React, { useState } from 'react';
import { 
  Sparkles, 
  Printer, 
  CheckCircle2, 
  Search, 
  RefreshCw, 
  Wand2, 
  MessageSquare,
  Send,
  Edit3,
  Lightbulb,
  Plus,
  Trash2,
  Globe,
  Briefcase,
  BookOpen,
  Award,
  User
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { writeCustomCVFromPrompt } from '../data/aiWriterEngine';

export function CVBuilder({ cvData, setCvData, onSearchJobsWithProfile, onSelectPackage }) {
  const [cvLanguage, setCvLanguage] = useState("en"); // 'en' | 'ar'
  const [userPrompt, setUserPrompt] = useState(
    "أنا أحمد محمد، خريج تجارة إنجليزي 2024 جامعة القاهرة، اشتغلت 6 شهور كول سنتر إنجليزي في كونسنتركس وعايز اشتغل محاسب مالي في شركة كبيرة، وشاطر في الإكسيل والتحليل المالي."
  );
  
  const [refinementPrompt, setRefinementPrompt] = useState("");
  const [isAiWriting, setIsAiWriting] = useState(false);
  const [activeTab, setActiveTab] = useState("writer"); // 'writer' | 'full-edit'

  const PROMPT_SUGGESTIONS = [
    {
      label: "محاسب خريج تجارة",
      text: "أنا أحمد محمد، خريج تجارة إنجليزي 2024 جامعة القاهرة، اشتغلت 6 شهور كول سنتر إنجليزي في كونسنتركس وعايز اشتغل محاسب مالي في شركة كبيرة، وشاطر في الإكسيل والتحليل المالي."
    },
    {
      label: "تسويق وسوشيال ميديا",
      text: "سارة خالد، خريجة إعلام 2023 جامعة عين شمس، اشتغلت سنة في وكالة إعلانات وعملت حملات ممولة على فيسبوك وتيك توك بميزانية 200 ألف جنيه، شاطرة في كتابة المحتوى والـ SEO."
    },
    {
      label: "خدمة عملاء إنجليزي",
      text: "عمر طارق، خريج لغات وترجمة 2023، إنجليزي بطلاقة C1، عندي مهارات تواصل وإقناع قوية وحابب اشتغل في حساب بريطاني أو أمريكي في خدمة العملاء والدعم الفني."
    },
    {
      label: "مبرمج ويب ومواقع",
      text: "محمد إبراهيم، خريج حاسبات ومعلومات 2024 جامعة المنصورة، مطور واجهات أمامية برياكت React.js وTypeScript، عملت 5 مشاريع مواقع حقيقية وببحث عن فرصة في شركة برمجيات."
    },
    {
      label: "مهندس موقع مدني",
      text: "محمود حسن، مهندس مدني دفعة 2024 جامعة الإسكندرية، اتدربت في شركة المقاولون العرب في العاصمة الإدارية على الخرسانات والتشطيبات، شاطر في الأوتوكاد وحصر الكميات."
    }
  ];

  // AI Generation across ALL sections
  const handleGenerate = (promptText = userPrompt, lang = cvLanguage) => {
    if (!promptText.trim()) return;

    setIsAiWriting(true);

    setTimeout(() => {
      // Synthesize entire CV including Experiences, Education, Skills, and Summary
      const completeCv = writeCustomCVFromPrompt(promptText, lang);
      setCvData(completeCv);
      setIsAiWriting(false);

      try {
        confetti({
          particleCount: 65,
          spread: 60,
          origin: { y: 0.5 }
        });
      } catch (e) {}
    }, 800);
  };

  const handleRefine = (e) => {
    e.preventDefault();
    if (!refinementPrompt.trim()) return;
    const combined = `${cvData.title} ${userPrompt}. تعديل مطلوب: ${refinementPrompt}`;
    handleGenerate(combined, cvLanguage);
    setRefinementPrompt("");
  };

  const handleSwitchLanguage = (newLang) => {
    setCvLanguage(newLang);
    handleGenerate(userPrompt, newLang);
  };

  // Add custom experience entry
  const handleAddExperience = () => {
    setCvData(prev => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          id: Date.now().toString(),
          title: "المسمى الوظيفي الجديد",
          company: "اسم الشركة أو المؤسسة",
          location: "القاهرة، مصر",
          startDate: "2023",
          endDate: "حتى الآن",
          bullets: ["إدارة وتنفيذ المهام التخصصية بكفاءة عالية."]
        }
      ]
    }));
  };

  const handleRemoveExperience = (id) => {
    setCvData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(e => e.id !== id)
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-1.5">
            <Wand2 className="w-3.5 h-3.5 text-blue-600" />
            <span>كاتب السيرة الذاتية التوليدي بالذكاء الاصطناعي الكامل</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            الذكاء الاصطناعي يكتب ويعدل كل أقسام سيرتك الذاتية
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            يقوم بتعديل وصياغة: النبذة المهنية، تفاصيل الخبرات والمهام، المؤهل الدراسي، والمهارات التخصصية بالكامل.
          </p>
        </div>

        <div className="flex items-center gap-2">
          
          {/* Language Switcher for the CV Document */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => handleSwitchLanguage("en")}
              className={`px-3 py-1.5 rounded-lg transition ${
                cvLanguage === "en" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"
              }`}
            >
              الإنجليزية (ATS هارفارد)
            </button>
            <button
              onClick={() => handleSwitchLanguage("ar")}
              className={`px-3 py-1.5 rounded-lg transition ${
                cvLanguage === "ar" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"
              }`}
            >
              العربية (للجهات المحلية)
            </button>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>حفظ / طباعة</span>
          </button>

          <button
            onClick={() => onSearchJobsWithProfile(cvData)}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition"
          >
            <Search className="w-3.5 h-3.5" />
            <span>بحث عن عمل متطابق</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Prompt Generator & Editor vs Real Document Paper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: AI Writing Studio & Full Details Editor */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Mode Tabs */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => setActiveTab("writer")}
              className={`py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
                activeTab === "writer" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"
              }`}
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>كتابة بالذكاء الاصطناعي</span>
            </button>

            <button
              onClick={() => setActiveTab("full-edit")}
              className={`py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
                activeTab === "full-edit" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>تعديل يدوي لكل قسم</span>
            </button>
          </div>

          {activeTab === "writer" ? (
            /* AI Prompt Box */
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              
              <div className="pb-3 border-b border-slate-100">
                <h3 className="text-sm font-black text-slate-900">صندوق كتابة السيرة الذاتية الذكي</h3>
                <span className="text-[11px] text-slate-400">احكي عن دراستك أو شغلك والذكاء الاصطناعي سيكتب كل الأقسام</span>
              </div>

              <textarea
                rows={5}
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="اكتب هنا من أنت؟ وماذا درست؟ وأين تدربت أو عملت؟ وسيقوم الذكاء الاصطناعي بصياغة النبذة والخبرات والمؤهل والمهارات بالكامل..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-['Cairo'] leading-relaxed transition"
              />

              {/* Suggestions */}
              <div>
                <span className="text-[11px] font-bold text-slate-500 block mb-1.5">
                  نماذج سريعة لتجربة الكتابة الفورية:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PROMPT_SUGGESTIONS.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setUserPrompt(item.text);
                        handleGenerate(item.text);
                      }}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg text-xs font-bold transition"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => handleGenerate(userPrompt)}
                disabled={isAiWriting || !userPrompt.trim()}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                {isAiWriting ? (
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>جاري كتابة وتحديث كل أقسام السيرة الذاتية...</span>
                  </span>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>اكتب وحَدّث السيرة الذاتية بالكامل الآن ✨</span>
                  </>
                )}
              </button>

              {/* Refinement Box */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-1.5">
                  طلب تعديل ذكي على السيرة الحالية:
                </span>
                <form onSubmit={handleRefine} className="flex gap-2">
                  <input
                    type="text"
                    value={refinementPrompt}
                    onChange={(e) => setRefinementPrompt(e.target.value)}
                    placeholder="مثال: ركز على مهارات الإكسيل، أو غير الجامعة لجامعة الإسكندرية..."
                    className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-['Cairo']"
                  />
                  <button
                    type="submit"
                    disabled={isAiWriting || !refinementPrompt.trim()}
                    className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shrink-0 disabled:opacity-50"
                  >
                    تعديل
                  </button>
                </form>
              </div>

            </div>
          ) : (
            /* Full Manual Editing for Every Section */
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-5 text-xs">
              
              {/* Personal Info */}
              <div className="space-y-3 pb-4 border-b border-slate-100">
                <h4 className="font-black text-slate-900 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>البيانات الأساسية</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={cvData.fullName}
                    onChange={(e) => setCvData({ ...cvData, fullName: e.target.value })}
                    placeholder="الاسم"
                    className="bg-slate-50 border border-slate-300 rounded-lg p-2"
                  />
                  <input
                    type="text"
                    value={cvData.title}
                    onChange={(e) => setCvData({ ...cvData, title: e.target.value })}
                    placeholder="المسمى الوظيفي"
                    className="bg-slate-50 border border-slate-300 rounded-lg p-2"
                  />
                  <input
                    type="text"
                    value={cvData.phone}
                    onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
                    placeholder="رقم الهاتف"
                    className="bg-slate-50 border border-slate-300 rounded-lg p-2 font-['Inter']"
                  />
                  <input
                    type="email"
                    value={cvData.email}
                    onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
                    placeholder="البريد الإلكتروني"
                    className="bg-slate-50 border border-slate-300 rounded-lg p-2 font-['Inter']"
                  />
                </div>
              </div>

              {/* Summary Edit */}
              <div className="space-y-2 pb-4 border-b border-slate-100">
                <h4 className="font-black text-slate-900">النبذة المهنية:</h4>
                <textarea
                  rows={3}
                  value={cvData.summary}
                  onChange={(e) => setCvData({ ...cvData, summary: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 leading-relaxed"
                />
              </div>

              {/* Experiences Edit */}
              <div className="space-y-3 pb-4 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-slate-900 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    <span>الخبرات والمهام ({cvData.experiences?.length || 0})</span>
                  </h4>
                  <button
                    onClick={handleAddExperience}
                    className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-0.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>إضافة خبرة</span>
                  </button>
                </div>

                {(cvData.experiences || []).map((exp, idx) => (
                  <div key={exp.id || idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-700">خبرة #{idx + 1}</span>
                      <button
                        onClick={() => handleRemoveExperience(exp.id)}
                        className="text-slate-400 hover:text-rose-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => {
                          const updated = [...cvData.experiences];
                          updated[idx].title = e.target.value;
                          setCvData({ ...cvData, experiences: updated });
                        }}
                        placeholder="المسمى الوظيفي"
                        className="bg-white border border-slate-300 rounded p-1.5"
                      />
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const updated = [...cvData.experiences];
                          updated[idx].company = e.target.value;
                          setCvData({ ...cvData, experiences: updated });
                        }}
                        placeholder="اسم الشركة"
                        className="bg-white border border-slate-300 rounded p-1.5"
                      />
                    </div>

                    <textarea
                      rows={2}
                      value={exp.bullets ? exp.bullets.join('\n') : ''}
                      onChange={(e) => {
                        const updated = [...cvData.experiences];
                        updated[idx].bullets = e.target.value.split('\n');
                        setCvData({ ...cvData, experiences: updated });
                      }}
                      placeholder="المهام والإنجازات (كل نقطة بسطر)"
                      className="w-full bg-white border border-slate-300 rounded p-2 text-[11px] leading-relaxed"
                    />
                  </div>
                ))}
              </div>

              {/* Education Edit */}
              <div className="space-y-2 pb-4 border-b border-slate-100">
                <h4 className="font-black text-slate-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>المؤهل والجامعة:</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={cvData.education?.degree || ''}
                    onChange={(e) => setCvData({
                      ...cvData,
                      education: { ...cvData.education, degree: e.target.value }
                    })}
                    placeholder="الدرجة والمؤهل"
                    className="bg-slate-50 border border-slate-300 rounded p-1.5"
                  />
                  <input
                    type="text"
                    value={cvData.education?.university || ''}
                    onChange={(e) => setCvData({
                      ...cvData,
                      education: { ...cvData.education, university: e.target.value }
                    })}
                    placeholder="الجامعة أو الكلية"
                    className="bg-slate-50 border border-slate-300 rounded p-1.5"
                  />
                </div>
              </div>

              {/* Skills Edit */}
              <div className="space-y-2">
                <h4 className="font-black text-slate-900 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>المهارات والكلمات المفتاحية:</span>
                </h4>
                <input
                  type="text"
                  value={cvData.skills || ''}
                  onChange={(e) => setCvData({ ...cvData, skills: e.target.value })}
                  placeholder="المهارات مفصولة بفواصل"
                  className="w-full bg-slate-50 border border-slate-300 rounded p-2"
                />
              </div>

            </div>
          )}

        </div>

        {/* Right Column: Physical Document Paper Preview */}
        <div className="lg:col-span-7">
          <div className="sticky top-20 space-y-3">
            
            <div className="flex items-center justify-between text-xs text-slate-600 px-1 font-bold">
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>المستند المولد بمعايير هارفارد (محدث بالكامل مع كل تعديل)</span>
              </span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-['Inter']">
                توافق 100% مع برامج الفرز الآلي
              </span>
            </div>

            {/* Document Paper */}
            <div 
              id="ats-resume-document"
              className={`ats-cv-paper bg-white text-slate-900 p-8 sm:p-10 rounded-2xl shadow-md border border-slate-200 leading-relaxed select-text ${
                cvLanguage === "ar" ? "text-right font-['Cairo'] text-xs sm:text-[13px]" : "text-left font-['Inter',serif] text-xs sm:text-[13px]"
              }`}
              dir={cvLanguage === "ar" ? "rtl" : "ltr"}
            >
              {/* Header */}
              <div className="text-center border-b border-slate-300 pb-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 uppercase font-serif">
                  {cvData.fullName || "YOUR FULL NAME"}
                </h2>
                <p className="text-xs font-semibold text-slate-700 mt-1">
                  {cvData.title || "Target Professional Title"}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-600 mt-1.5 font-sans">
                  {cvData.location && <span>{cvData.location}</span>}
                  {cvData.phone && <span>• {cvData.phone}</span>}
                  {cvData.email && <span>• {cvData.email}</span>}
                  {cvData.linkedin && <span>• {cvData.linkedin}</span>}
                </div>
              </div>

              {/* Summary */}
              {cvData.summary && (
                <div className="mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1 font-serif">
                    {cvLanguage === "ar" ? "النبذة المهنية" : "Professional Summary"}
                  </h3>
                  <p className="text-xs text-slate-800 text-justify leading-normal font-sans">
                    {cvData.summary}
                  </p>
                </div>
              )}

              {/* Experiences */}
              {cvData.experiences && cvData.experiences.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
                    {cvLanguage === "ar" ? "الخبرات العملية والمهام" : "Professional Experience"}
                  </h3>
                  <div className="space-y-3 font-sans">
                    {cvData.experiences.map((exp, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-baseline text-xs">
                          <span className="font-bold text-slate-950">{exp.title}</span>
                          <span className="text-[11px] text-slate-600 font-medium">
                            {exp.startDate} – {exp.endDate}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline text-[11px] text-slate-700 italic mb-1">
                          <span>{exp.company}</span>
                          <span>{exp.location}</span>
                        </div>
                        <ul className={`space-y-1 text-xs text-slate-800 ${cvLanguage === "ar" ? "list-disc pr-4" : "list-disc pl-4"}`}>
                          {exp.bullets && exp.bullets.map((b, bi) => b && (
                            <li key={bi} className="leading-snug">{b.replace(/^[•-]\s*/, '')}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {cvData.education && (
                <div className="mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-serif">
                    {cvLanguage === "ar" ? "المؤهل الدراسي والتعليم" : "Education"}
                  </h3>
                  <div className="font-sans text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-950">{cvData.education.university}</span>
                      <span className="text-[11px] text-slate-600">{cvData.education.gradYear}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-[11px] text-slate-700">
                      <span>{cvData.education.degree}</span>
                      {cvData.education.grade && <span className="italic">{cvData.education.grade}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* Skills */}
              {cvData.skills && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1 font-serif">
                    {cvLanguage === "ar" ? "المهارات والكلمات المفتاحية" : "Key Competencies & Technical Skills"}
                  </h3>
                  <p className="text-xs text-slate-800 font-sans leading-relaxed">
                    <strong className="text-slate-950">{cvLanguage === "ar" ? "المهارات:" : "Skills:"}</strong> {cvData.skills}
                  </p>
                  {cvData.languages && (
                    <p className="text-xs text-slate-800 font-sans mt-0.5">
                      <strong className="text-slate-950">{cvLanguage === "ar" ? "اللغات:" : "Languages:"}</strong> {cvData.languages}
                    </p>
                  )}
                  {cvData.certifications && (
                    <p className="text-xs text-slate-800 font-sans mt-0.5">
                      <strong className="text-slate-950">{cvLanguage === "ar" ? "الشهادات:" : "Certifications:"}</strong> {cvData.certifications}
                    </p>
                  )}
                </div>
              )}

            </div>

            {/* Bottom Actions */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-3 shadow-xs">
              <span className="text-xs text-slate-600 font-bold">
                السيرة جاهزة ومحدثة بالكامل. ابحث عن وظائف مطابقة لمجالك:
              </span>
              <button
                onClick={() => onSearchJobsWithProfile(cvData)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
              >
                بحث عن عمل متطابق
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
