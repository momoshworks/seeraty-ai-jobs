import React, { useState } from 'react';
import { 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Copy, 
  Check, 
  Printer, 
  MessageSquare,
  Briefcase,
  AlertCircle,
  FileText,
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import { INITIAL_JOBS } from '../data/mockJobs';
import { evaluateJobFit, generateInterviewPrep } from '../data/jobAgentTools';

export function InterviewStudio({ cvData, selectedJob, onSelectPackage }) {
  const [activeJobId, setActiveJobId] = useState(selectedJob ? selectedJob.id : INITIAL_JOBS[0].id);
  const [copiedKey, setCopiedKey] = useState(null);

  const currentJob = INITIAL_JOBS.find(j => j.id === activeJobId) || INITIAL_JOBS[0];
  const fitAnalysis = evaluateJobFit(cvData, currentJob);
  const interviewData = generateInterviewPrep(currentJob, cvData);

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>نظام التحضير الذكي للمقابلات الشخصية (مستوحى من ai-job-search)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">
            تحضير أسئلة وإجابات الإنترفيو المخصصة لشركتك المستهدفة
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            يقوم وكيل الذكاء الاصطناعي بتحليل متطلبات الوظيفة وتجهيز أهم الأسئلة التقنية والسلوكية (طريقة STAR) وإجابات نموذجية.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition shadow-xs"
        >
          <Printer className="w-3.5 h-3.5 text-slate-300" />
          <span>طباعة ملخص التحضير</span>
        </button>
      </div>

      {/* Target Job Selector Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-slate-700">اختر الوظيفة التي تريد التحضير لمقابلتها:</span>
          <span className="text-xs text-blue-700 font-bold">الشركة: {currentJob.company}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {INITIAL_JOBS.slice(0, 6).map(job => (
            <button
              key={job.id}
              onClick={() => setActiveJobId(job.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                activeJobId === job.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {job.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Fit Score vs Interview Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Job Fit Evaluation (/rank Agent) */}
        <div className="lg:col-span-4 space-y-5">
          
          {/* Fit Gauge */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <span className="text-xs font-extrabold text-blue-700 block uppercase">
              تقييم التوافق ومراجعة الـ ATS (/rank)
            </span>

            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{currentJob.title}</h3>
                <span className="text-xs text-slate-500">{currentJob.company}</span>
              </div>
              <div className="text-center bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200">
                <span className="text-[10px] text-blue-700 font-bold block">التوافق</span>
                <span className="text-lg font-black text-blue-700 font-['Inter']">
                  {fitAnalysis.fitScore}%
                </span>
              </div>
            </div>

            {/* Matched vs Missing */}
            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-700 block">المهارات المطابقة:</span>
              <div className="flex flex-wrap gap-1">
                {fitAnalysis.matchedKeywords.map((k, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-medium border border-emerald-200">
                    {k}
                  </span>
                ))}
              </div>

              {fitAnalysis.missingKeywords.length > 0 && (
                <div className="pt-2">
                  <span className="font-bold text-slate-700 block mb-1">كلمات ينصح بإضافتها قبل المقابلة:</span>
                  <div className="flex flex-wrap gap-1">
                    {fitAnalysis.missingKeywords.map((k, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-[11px] font-medium border border-amber-200">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Reviewer agent tips */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <span className="font-bold text-slate-900 flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>نصائح وكيل المقابلات (Reviewer Agent):</span>
              </span>
              <ul className="list-disc pr-4 space-y-1 text-[11px] text-slate-600">
                {fitAnalysis.reviewNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Right Column: Interview Questions & STAR Answers (/interview) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Section 1: Technical Questions */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="text-base font-black text-slate-900">الأسئلة التخصصية المتوقعة (Technical Interview)</h3>
                <p className="text-xs text-slate-500">أهم ما سيسألك عنه المدير الفني لوظيفة {interviewData.roleName}</p>
              </div>
            </div>

            <div className="space-y-4">
              {interviewData.technicalQuestions.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-blue-700 block mb-0.5">سؤال #{idx + 1}:</span>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900">{item.qAr}</h4>
                      <p className="text-xs text-slate-600 font-['Inter'] mt-0.5 italic">{item.q}</p>
                    </div>
                    <button
                      onClick={() => copyText(item.idealAnswer, `tech-${idx}`)}
                      className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold rounded-lg transition shrink-0 flex items-center gap-1"
                    >
                      {copiedKey === `tech-${idx}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === `tech-${idx}` ? "تم النسخ" : "نسخ الإجابة"}</span>
                    </button>
                  </div>

                  {/* Ideal English Answer */}
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 font-['Inter'] leading-relaxed" dir="ltr">
                    <strong className="text-slate-950 font-sans">Ideal Answer: </strong>
                    {item.idealAnswer}
                  </div>

                  <div className="text-[11px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md font-medium">
                    💡 <strong>نصيحة للإجابة:</strong> {item.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Behavioral Questions (STAR Method) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <div>
                <h3 className="text-base font-black text-slate-900">الأسئلة السلوكية ونظام STAR للـ HR</h3>
                <p className="text-xs text-slate-500">طريقة الإجابة المعتمدة دولياً: الموقف • المهمة • التصرف • النتيجة</p>
              </div>
            </div>

            <div className="space-y-4">
              {interviewData.behavioralQuestions.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-indigo-700 block mb-0.5">سؤال سلوكي #{idx + 1}:</span>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900">{item.qAr}</h4>
                      <p className="text-xs text-slate-600 font-['Inter'] mt-0.5 italic">{item.q}</p>
                    </div>
                    <button
                      onClick={() => copyText(item.idealAnswer, `beh-${idx}`)}
                      className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold rounded-lg transition shrink-0 flex items-center gap-1"
                    >
                      {copiedKey === `beh-${idx}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === `beh-${idx}` ? "تم النسخ" : "نسخ الإجابة"}</span>
                    </button>
                  </div>

                  {/* Ideal English Answer */}
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 font-['Inter'] leading-relaxed" dir="ltr">
                    <strong className="text-slate-950 font-sans">STAR Response: </strong>
                    {item.idealAnswer}
                  </div>

                  <div className="text-[11px] text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-md font-medium">
                    🎯 <strong>التكتيك الموصى به:</strong> {item.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Smart Questions to ask the Interviewer */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-black text-slate-900 pb-2 border-b border-slate-100">
              أسئلة ذكية تسألها أنت للـ HR في نهاية المقابلة لترك انطباع مبهر
            </h3>
            <div className="space-y-2 text-xs">
              {interviewData.smartQuestionsToAsk.map((sq, i) => (
                <div key={i} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-900 font-['Inter'] flex items-center justify-between" dir="ltr">
                  <span>• "{sq}"</span>
                  <button
                    onClick={() => copyText(sq, `sq-${i}`)}
                    className="text-xs text-blue-600 hover:underline font-sans font-bold ml-2"
                  >
                    {copiedKey === `sq-${i}` ? "Copied" : "Copy"}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
