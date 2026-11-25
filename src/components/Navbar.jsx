import React from 'react';
import { 
  Briefcase, 
  Sparkles, 
  Search, 
  HelpCircle, 
  DollarSign, 
  MessageSquare,
  CreditCard
} from 'lucide-react';

export function Navbar({ 
  activeTab, 
  setActiveTab, 
  freeSearchesRemaining, 
  paidSearchesCount,
  onOpenPaymentModal 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Brand in Clean Pure Arabic */}
          <div 
            onClick={() => setActiveTab('job-search')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight font-['Cairo']">
                  سيرتي <span className="text-blue-600">&</span> وظيفتي
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200 rounded">
                  مصر 🇪🇬
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links (Pure Arabic) */}
          <nav className="hidden md:flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('job-search')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                activeTab === 'job-search'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Search className="w-4 h-4 text-blue-600" />
              <span>محرك الوظائف الذكي</span>
            </button>

            <button
              onClick={() => setActiveTab('builder')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                activeTab === 'builder'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>كاتب السيرة الذاتية الذكي</span>
            </button>

            <button
              onClick={() => setActiveTab('interview')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                activeTab === 'interview'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              <span>تحضير المقابلات والخطاب</span>
            </button>

            <button
              onClick={() => setActiveTab('packages')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                activeTab === 'packages'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>باقات الخدمة والأسعار</span>
            </button>
          </nav>

          {/* Right Action: InstaPay Quota & WhatsApp Order */}
          <div className="flex items-center gap-2">
            
            {/* InstaPay Badge */}
            <div 
              onClick={() => {
                if (freeSearchesRemaining === 0 && paidSearchesCount === 0) {
                  onOpenPaymentModal();
                } else {
                  setActiveTab('job-search');
                }
              }}
              className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition"
              title="رصيد البحث عبر انستا باي"
            >
              <CreditCard className="w-3.5 h-3.5 text-purple-700" />
              <span className="text-xs font-bold text-purple-900">
                {freeSearchesRemaining > 0 ? (
                  <>البحث: <strong className="text-purple-700">1 مجاني 🎁</strong></>
                ) : paidSearchesCount > 0 ? (
                  <>رصيدك: <strong className="text-purple-700">{paidSearchesCount} بحوث ⚡</strong></>
                ) : (
                  <>انستا باي: <strong className="text-purple-700">10 جنيه</strong></>
                )}
              </span>
            </div>

            {/* Direct WhatsApp Order CTA */}
            <a
              href="https://wa.me/201024896731?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B3%D9%8A%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9%20%D8%A8%D8%A7%D9%84%D8%AF%D9%81%D8%B9%20%D8%B9%D8%A8%D8%B1%20%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%20%D8%A8%D8%A7%D9%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>اطلب باقتك</span>
            </a>

          </div>

        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-100 text-xs font-bold">
          <button
            onClick={() => setActiveTab('job-search')}
            className={`py-1 px-2 rounded-lg ${activeTab === 'job-search' ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}
          >
            الوظائف
          </button>
          <button
            onClick={() => setActiveTab('builder')}
            className={`py-1 px-2 rounded-lg ${activeTab === 'builder' ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}
          >
            كاتب الـ CV
          </button>
          <button
            onClick={() => setActiveTab('interview')}
            className={`py-1 px-2 rounded-lg ${activeTab === 'interview' ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}
          >
            المقابلات
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`py-1 px-2 rounded-lg ${activeTab === 'packages' ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}
          >
            الباقات
          </button>
        </div>

      </div>
    </header>
  );
}
