import React from 'react';
import { 
  FileText, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowLeft, 
  Briefcase, 
  Smartphone,
  Star,
  Zap,
  Target
} from 'lucide-react';

export function Hero({ onStartBuilder, onStartJobSearch, onExplorePackages }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-850">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>الخدمة الأسرع دوراناً في مصر 🇪🇬 للخريجين والباحثين عن عمل</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-[1.2]">
            سيرة ذاتية متوافقة <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-200">100% مع الـ ATS</span>
            <br />
            وبروفايل LinkedIn يجذب مسؤولي التوظيف
          </h1>
          
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            تخطَّ الفلترة الآلية للشركات التي ترفض 75% من المتقدمين! بنقدملك صياغة إنجليزية احترافية لمعايير هارفارد، مع <strong className="text-emerald-400">محرك AI ذكي</strong> يرشحلك أحدث الوظائف فوراً في مصر والخليج والعمل عن بُعد.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>نظام هارفارد المعتمد للـ ATS</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>خطاب تقديم Cover Letter مخصص</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>نصوص جاهزة للينكد إن (SEO)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <Smartphone className="w-4 h-4 text-teal-400" />
            <span>دفع فودافون كاش & انستا باي</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartBuilder}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-base rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <FileText className="w-5 h-5" />
            <span>جهّز سيرتك الذاتية وافحصها فوراً</span>
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onStartJobSearch}
            className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-white font-bold text-base rounded-2xl flex items-center justify-center gap-2 transition-all"
          >
            <Search className="w-5 h-5 text-teal-400" />
            <span>ابحث عن وظيفة بالـ AI (أول مرة مجاناً)</span>
            <span className="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-300 rounded-full font-extrabold">Free</span>
          </button>

          <button
            onClick={onExplorePackages}
            className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white font-semibold text-base rounded-2xl flex items-center justify-center gap-2 transition-all"
          >
            <span>باقات الخدمة (200 - 400 ج)</span>
          </button>
        </div>

        {/* Trust Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 max-w-5xl mx-auto">
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-black text-white font-['Inter']">100%</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">متوافق مع برامج فحص الـ ATS</div>
          </div>

          <div className="text-center p-3 border-r border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-['Inter']">24 ساعة</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">أسرع تسليم احترافي بمصر</div>
          </div>

          <div className="text-center p-3 border-r border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-['Inter']">+15,000</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">وظيفة متاحة في محرك الـ AI</div>
          </div>

          <div className="text-center p-3 border-r border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-sky-400 font-['Inter']">3.8x</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">مضاعفة استجابة المقابلات</div>
          </div>
        </div>

      </div>
    </section>
  );
}
