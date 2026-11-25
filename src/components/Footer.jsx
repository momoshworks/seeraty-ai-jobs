import React from 'react';
import { 
  FileText, 
  HelpCircle, 
  MessageSquare, 
  CreditCard 
} from 'lucide-react';
import { PAYMENT_CONFIG } from '../data/packages';

export function Footer({ setActiveTab }) {
  const faqs = [
    {
      q: "ما هو نظام الـ ATS ولماذا يتم استبعاد السير الذاتية بسببه في مصر؟",
      a: "نظام الـ ATS هو برنامج فحص آلي تستخدمه كبرى الشركات لفلترة السير الذاتية قبل وصولها لمسؤول التوظيف. إذا كان الـ CV يحتوي على تصميمات معقدة أو جداول لا يقرؤها النظام، يتم استبعاده. نحن نضمن لك سيرة ذاتية بنظام هارفارد القياسي المعتمد بنسبة 100%."
    },
    {
      q: "كيف يعمل محرك البحث عن الوظائف بالذكاء الاصطناعي؟",
      a: "يبحث المحرك في آلاف الوظائف النشطة بمصر والعمل عن بُعد ويطابق مهاراتك مع متطلبات الوظيفة ويحسب نسبة التوافق بدقة. أول عملية بحث مجانية بالكامل، والبحوث التالية برسم رمزي قدره 10 جنيه فقط عبر انستا باي (InstaPay)."
    },
    {
      q: "كيف أستلم خدمتي بعد الدفع عبر انستا باي؟",
      a: "بعد تحويل قيمة الباقة (200 إلى 400 ج)، تتواصل معنا عبر واتساب وترسل بياناتك. نقوم بصياغة الـ CV بالإنجليزية وكتابة الخطاب وتجهيز نصوص لينكد إن وتسليمها لك خلال 24 ساعة بصيغتي PDF وWord."
    }
  ];

  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 mt-12 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQs */}
        <div className="mb-12">
          <h3 className="text-lg font-black text-slate-900 mb-6 text-center">
            الأسئلة الشائعة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-blue-700 mb-1.5 flex items-start gap-1.5">
                  <HelpCircle className="w-4 h-4 shrink-0 text-blue-600 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pr-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Links row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">سيرتي & وظيفتي مصر 🇪🇬</span>
            <span>—</span>
            <span>الدفع المعتمد عبر شبكة انستا باي (InstaPay)</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('job-search')} className="hover:text-blue-600 font-bold">
              محرك الوظائف
            </button>
            <button onClick={() => setActiveTab('builder')} className="hover:text-blue-600 font-bold">
              كاتب السيرة الذاتية
            </button>
            <button onClick={() => setActiveTab('interview')} className="hover:text-blue-600 font-bold">
              تحضير المقابلات
            </button>
            <button onClick={() => setActiveTab('packages')} className="hover:text-blue-600 font-bold">
              باقات الخدمة
            </button>
          </div>
        </div>

        <div className="text-center text-[11px] text-slate-400 pt-4 border-t border-slate-100">
          جميع الحقوق محفوظة © {new Date().getFullYear()} — سيرتي & وظيفتي بالذكاء الاصطناعي
        </div>

      </div>
    </footer>
  );
}
