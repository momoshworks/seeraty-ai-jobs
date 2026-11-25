import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Building2, 
  DollarSign, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  RefreshCw, 
  Clock, 
  Sparkles, 
  HelpCircle,
  Globe,
  CreditCard,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { fetchLiveJobsMultiSource } from '../data/liveJobScraper';

export function AIJobSearch({ 
  cvData, 
  freeSearchesRemaining, 
  paidSearchesCount,
  onOpenPaymentModal, 
  onUseSearch,
  onGenerateCoverLetterForJob
}) {
  const [searchQuery, setSearchQuery] = useState(cvData.title || "محاسب مالي");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [isSearching, setIsSearching] = useState(false);
  const [jobsList, setJobsList] = useState([]);
  const [portalChannels, setPortalChannels] = useState({});

  // Initial load
  useEffect(() => {
    executeSearch(searchQuery, false);
  }, []);

  const executeSearch = async (queryText = searchQuery, countAsDeduction = true) => {
    // Check quota
    if (countAsDeduction && freeSearchesRemaining <= 0 && paidSearchesCount <= 0) {
      onOpenPaymentModal();
      return;
    }

    setIsSearching(true);

    try {
      const results = await fetchLiveJobsMultiSource(queryText, selectedLocation);
      setJobsList(results.jobs);
      setPortalChannels(results.portalLinks);

      if (countAsDeduction) {
        onUseSearch();
        try {
          confetti({
            particleCount: 50,
            spread: 50,
            origin: { y: 0.4 }
          });
        } catch (e) {}
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeSearch(searchQuery, true);
  };

  // Calculate ATS match percentage between user's active CV and each job
  const calculateMatch = (job) => {
    const userText = `${cvData.title || ''} ${cvData.skills || ''} ${cvData.summary || ''}`.toLowerCase();
    const jobSkills = job.skills || [];
    
    const matched = [];
    const missing = [];

    jobSkills.forEach(s => {
      if (userText.includes(s.toLowerCase())) {
        matched.push(s);
      } else {
        missing.push(s);
      }
    });

    // Score calculation
    const matchRatio = matched.length / (jobSkills.length || 1);
    const score = Math.min(Math.max(Math.round(matchRatio * 35 + 65), 70), 98);

    return { score, matched, missing };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Search Radar Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 mb-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
              <Globe className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>رادار البحث الحي في كل المواقع (وظف • بيت.كوم • لينكد إن • تنقيب • فرصنا • ريموتلي)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              محرك البحث الذكي عن الوظائف ومطابقة السيرة الذاتية
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              يبحث محركنا تلقائياً في أكبر مواقع التوظيف بمصر ويحسب نسبة توافق سيرتك الذاتية مع كل فرصة.
            </p>
          </div>

          {/* Quota Badge */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center shrink-0">
            <span className="text-[11px] font-bold text-slate-500 block">رصيد البحث المتبقي:</span>
            {freeSearchesRemaining > 0 ? (
              <span className="text-xs font-black text-blue-700 block mt-0.5">1 بحث مجاني متبقي 🎁</span>
            ) : paidSearchesCount > 0 ? (
              <span className="text-xs font-black text-emerald-700 block mt-0.5">{paidSearchesCount} عمليات بحث ⚡</span>
            ) : (
              <button
                onClick={onOpenPaymentModal}
                className="text-xs font-black text-purple-700 hover:underline block mt-0.5"
              >
                تفعيل عبر انستا باي (10 جنيه)
              </button>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          
          <div className="sm:col-span-7 relative">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="اكتب التخصص أو الوظيفة (مثال: محاسب، كول سنتر، مبيعات، تسويق، برمجة، مهندس...)"
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pr-10 pl-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-['Cairo'] transition"
            />
          </div>

          <div className="sm:col-span-3">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white cursor-pointer font-['Cairo']"
            >
              <option value="all">كل المحافظات (مصر)</option>
              <option value="cairo">القاهرة والجيزة</option>
              <option value="alex">الإسكندرية</option>
              <option value="remote">عمل عن بُعد من المنزل</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSearching}
              className={`w-full py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm ${
                freeSearchesRemaining > 0 || paidSearchesCount > 0
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                  : 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20'
              }`}
            >
              {isSearching ? (
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>جاري البحث...</span>
                </span>
              ) : freeSearchesRemaining > 0 ? (
                <>
                  <Search className="w-4 h-4" />
                  <span>بحث (مجاني 🎁)</span>
                </>
              ) : paidSearchesCount > 0 ? (
                <>
                  <Zap className="w-4 h-4" />
                  <span>بحث بالرصيد</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  <span>فتح البحث (10 ج)</span>
                </>
              )}
            </button>
          </div>

        </form>

        {/* Multi-Portal Direct Access Channels Bar */}
        {portalChannels.wuzzuf && (
          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-bold text-slate-500 block">
              رادار نتائج التوظيف الحية لوظيفة "<strong>{searchQuery || "المطلوبة"}</strong>":
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
              
              <a
                href={portalChannels.wuzzuf}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-50/60 hover:bg-blue-100/70 border border-blue-200 text-blue-900 flex items-center justify-between font-bold transition"
              >
                <span>موقع وظف (Wuzzuf)</span>
                <ArrowUpRight className="w-3 h-3 text-blue-600" />
              </a>

              <a
                href={portalChannels.bayt}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-between font-bold transition"
              >
                <span>موقع بيت.كوم (Bayt)</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={portalChannels.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-sky-50/60 hover:bg-sky-100/70 border border-sky-200 text-sky-900 flex items-center justify-between font-bold transition"
              >
                <span>لينكد إن وظائف مصر</span>
                <ArrowUpRight className="w-3 h-3 text-sky-600" />
              </a>

              <a
                href={portalChannels.tanqeeb}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-50/60 hover:bg-emerald-100/70 border border-emerald-200 text-emerald-900 flex items-center justify-between font-bold transition"
              >
                <span>موقع تنقيب مصر</span>
                <ArrowUpRight className="w-3 h-3 text-emerald-600" />
              </a>

              <a
                href={portalChannels.forasna}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-amber-50/60 hover:bg-amber-100/70 border border-amber-200 text-amber-900 flex items-center justify-between font-bold transition"
              >
                <span>موقع فرصنا</span>
                <ArrowUpRight className="w-3 h-3 text-amber-600" />
              </a>

              <a
                href={portalChannels.indeed}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-indigo-50/60 hover:bg-indigo-100/70 border border-indigo-200 text-indigo-900 flex items-center justify-between font-bold transition"
              >
                <span>موقع إنديد مصر</span>
                <ArrowUpRight className="w-3 h-3 text-indigo-600" />
              </a>

            </div>
          </div>
        )}

      </div>

      {/* Paywall Banner if Quota finished */}
      {freeSearchesRemaining === 0 && paidSearchesCount === 0 && (
        <div className="mb-6 p-4 rounded-xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-purple-900 font-bold">
            <CreditCard className="w-5 h-5 text-purple-700 shrink-0" />
            <span>
              استنفدت بحثك المجاني! يمكنك تفعيل 5 عمليات بحث ذكية فورية بـ <strong>10 جنيه فقط</strong> عبر انستا باي (InstaPay).
            </span>
          </div>
          <button
            onClick={onOpenPaymentModal}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-lg transition shadow-xs whitespace-nowrap"
          >
            تفعيل عبر انستا باي (10 جنيه)
          </button>
        </div>
      )}

      {/* Results Header with Count */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900">
            الوظائف المطابقة مع حساب نسبة التوافق ({jobsList.length} وظيفة متوفرة)
          </h2>
          <p className="text-xs text-slate-500">
            يتم فحص مطابقة كل وظيفة مع سيرتك الذاتية الحالية لاحتساب نسبة القبول
          </p>
        </div>
      </div>

      {/* Jobs Feed List with Match Score */}
      <div className="space-y-4">
        {jobsList.map((job) => {
          const match = calculateMatch(job);

          return (
            <div
              key={job.id}
              className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-5 sm:p-6 transition shadow-xs hover:shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group"
            >
              
              <div className="flex-1 space-y-2.5">
                
                {/* Header row: Title + Match Percentage Badge */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-base sm:text-lg font-black text-blue-700 group-hover:text-blue-800 transition font-['Cairo']">
                    {job.titleAr || job.title}
                  </h3>

                  {/* Explicit Match Percentage Badge */}
                  <div className={`px-2.5 py-0.5 rounded-full text-xs font-black flex items-center gap-1 border ${
                    match.score >= 85 
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                      : match.score >= 75
                      ? 'bg-blue-50 text-blue-800 border-blue-300'
                      : 'bg-amber-50 text-amber-800 border-amber-300'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>نسبة التوافق مع سيرتك: {match.score}%</span>
                  </div>

                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {job.type}
                  </span>
                  
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {job.sourceBadge || job.source}
                  </span>
                </div>

                {/* Company and Location Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1 text-slate-900 font-bold">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.company}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </span>

                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{job.salary}</span>
                  </span>

                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{job.postedDate}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                  {job.description}
                </p>

                {/* Skills tags & matching indication */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-500 ml-1">المهارات المطلوبة:</span>
                  {(job.skills || []).map((skill, idx) => {
                    const isMatched = match.matched.includes(skill);
                    return (
                      <span
                        key={idx}
                        className={`text-[11px] px-2 py-0.5 rounded-md font-bold ${
                          isMatched 
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {skill} {isMatched && "✓"}
                      </span>
                    );
                  })}
                </div>

                {/* Missing keyword tip */}
                {match.missing.length > 0 && (
                  <div className="text-[11px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md inline-flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                    <span>
                      نصيحة لرفع نسبة القبول إلى 100%: أضف مهارة <strong>{match.missing[0]}</strong> إلى سيرتك الذاتية قبل التقديم.
                    </span>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="flex flex-row md:flex-col items-center gap-2 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition"
                >
                  <span>تقديم مباشر</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onGenerateCoverLetterForJob(job)}
                  className="flex-1 md:flex-initial w-full px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1"
                  title="تحضير أسئلة المقابلة الشخصية لهذه الوظيفة"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>تحضير المقابلة</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
