import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  Sparkles, 
  Printer, 
  ExternalLink 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';

export function LinkedInCoverLetter({ cvData, selectedJobForLetter, onSelectPackage }) {
  const [activeTab, setActiveTab] = useState('linkedin'); // 'linkedin' | 'coverletter'
  const [copiedKey, setCopiedKey] = useState(null);

  const [coverTargetCompany, setCoverTargetCompany] = useState(selectedJobForLetter ? selectedJobForLetter.company : "Hiring Team");
  const [coverTargetRole, setCoverTargetRole] = useState(selectedJobForLetter ? selectedJobForLetter.title : cvData.title || "Target Professional Role");

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Generated LinkedIn Content
  const linkedinHeadline = `${cvData.title || "Junior Professional"} | ${cvData.skills ? cvData.skills.split(',').slice(0, 4).join(' • ') : "Problem Solver • Growth Mindset"} | Open to Opportunities 🚀`;
  
  const linkedinAbout = `Hello! I'm ${cvData.fullName || "a passionate professional"}, a dedicated ${cvData.title || "specialist"} based in ${cvData.location || "Egypt"}.

${cvData.summary || "I specialize in delivering clean, impactful solutions and continuously elevating standards through modern methodologies and continuous learning."}

💼 Key Areas of Expertise:
${cvData.skills ? cvData.skills.split(',').map(s => `• ${s.trim()}`).slice(0, 8).join('\n') : "• Core Technical Skills\n• Communication & Teamwork\n• Problem Solving"}

🎓 Education:
• ${cvData.education.degree || "Bachelor's Degree"} - ${cvData.education.university || "University"} (${cvData.education.gradYear || "Graduate"})

📫 Let's Connect:
I am actively exploring exciting opportunities where I can contribute to innovative teams and solve challenging problems.
• Email: ${cvData.email || "email@example.com"}
• Location: ${cvData.location || "Cairo, Egypt"}`;

  // Generated Cover Letter
  const coverLetterText = `Dear Hiring Team at ${coverTargetCompany},

I am writing to express my strong interest in the ${coverTargetRole} position currently open at ${coverTargetCompany}. With a solid background in ${cvData.title || "my field"} and a proven track record of delivering measurable outcomes, I am excited about the opportunity to bring my skills to your esteemed team.

During my experience as ${cvData.experiences?.[0]?.title || "a specialist"} at ${cvData.experiences?.[0]?.company || "my previous organization"}, I ${cvData.experiences?.[0]?.bullets?.[0] || "spearheaded key initiatives that improved workflow efficiency and enhanced outcomes"}. This background has equipped me with strong expertise in ${cvData.skills ? cvData.skills.split(',').slice(0, 3).join(', ') : "core technical tools"}, along with the agility to adapt rapidly in fast-paced environments.

What excites me most about ${coverTargetCompany} is your commitment to quality, innovation, and impact. I am confident that my work ethic, dedication to continuous improvement, and customer-first mindset align seamlessly with your culture and future objectives.

Thank you very much for considering my application. I welcome the opportunity to discuss how my background and enthusiasm can contribute to the ongoing success of ${coverTargetCompany}.

Sincerely,
${cvData.fullName || "Applicant Name"}
${cvData.phone || "+20 101 234 5678"}
${cvData.email || "email@example.com"}
${cvData.linkedin || "linkedin.com/in/profile"}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold mb-2">
          <LinkedinIcon className="w-3.5 h-3.5" />
          <span>تطوير حساب LinkedIn وخطابات التقديم المخصصة</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          نصوص جاهزة للنسخ في بروفايلك وخطاب تقديم فوري
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          انسخ العنوان والنبذة لزيادة ظهورك في نتائج بحث مسؤولي التوظيف على لينكد إن.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl w-full max-w-sm">
          <button
            onClick={() => setActiveTab('linkedin')}
            className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition ${
              activeTab === 'linkedin' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
            }`}
          >
            نصوص LinkedIn
          </button>
          <button
            onClick={() => setActiveTab('coverletter')}
            className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition ${
              activeTab === 'coverletter' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
            }`}
          >
            خطاب التقديم (Cover Letter)
          </button>
        </div>
      </div>

      {activeTab === 'linkedin' ? (
        <div className="space-y-6">
          
          {/* Headline */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-blue-700 block">العنوان الرئيسي (Headline)</span>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5">يظهر مباشرة أسفل اسمك في نتائج البحث</h3>
              </div>
              <button
                onClick={() => copyToClipboard(linkedinHeadline, 'headline')}
                className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition"
              >
                {copiedKey === 'headline' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'headline' ? "تم النسخ!" : "نسخ العنوان"}</span>
              </button>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-900 font-['Inter'] text-xs sm:text-sm" dir="ltr">
              {linkedinHeadline}
            </div>
          </div>

          {/* About */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-blue-700 block">النبذة التعريفية (About Section)</span>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5">صياغة تسرد مهاراتك وقصتك المهنية بوضوح</h3>
              </div>
              <button
                onClick={() => copyToClipboard(linkedinAbout, 'about')}
                className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition"
              >
                {copiedKey === 'about' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'about' ? "تم النسخ!" : "نسخ النبذة"}</span>
              </button>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 font-['Inter'] text-xs sm:text-sm whitespace-pre-line leading-relaxed" dir="ltr">
              {linkedinAbout}
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between gap-4">
            <span className="text-xs text-blue-900 font-bold">
              جاهز لتحديث بروفايلك الآن على منصة لينكد إن؟
            </span>
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 whitespace-nowrap shadow-xs"
            >
              <span>فتح حساب LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      ) : (
        <div className="space-y-5">
          
          {/* Target controls */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs shadow-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">اسم الشركة المستهدفة:</label>
              <input
                type="text"
                value={coverTargetCompany}
                onChange={(e) => setCoverTargetCompany(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 font-['Inter']"
                placeholder="e.g. Vodafone Egypt, Raya..."
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">المسمى الوظيفي المطلوب:</label>
              <input
                type="text"
                value={coverTargetRole}
                onChange={(e) => setCoverTargetRole(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 font-['Inter']"
                placeholder="e.g. Accountant, Customer Service..."
              />
            </div>
          </div>

          {/* Letter Body */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-700">معاينة الخطاب الرسمي</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg flex items-center gap-1 transition"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>طباعة</span>
                </button>
                <button
                  onClick={() => copyToClipboard(coverLetterText, 'cover')}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg flex items-center gap-1 transition shadow-xs"
                >
                  {copiedKey === 'cover' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'cover' ? "تم النسخ!" : "نسخ الخطاب"}</span>
                </button>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-['Inter',serif] text-xs sm:text-sm leading-relaxed whitespace-pre-line" dir="ltr">
              {coverLetterText}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
