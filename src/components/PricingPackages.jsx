import React from 'react';
import { 
  Check, 
  Sparkles, 
  MessageSquare, 
  CreditCard, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { SERVICE_PACKAGES, PAYMENT_CONFIG } from '../data/packages';

export function PricingPackages({ cvData, onSelectPackage }) {
  const getWhatsAppLink = (pkg) => {
    const text = encodeURIComponent(
      `${pkg.whatsappMessage}\n\n` +
      `📌 الاسم: ${cvData.fullName || 'غير محدد'}\n` +
      `📌 المسمى المستهدف: ${cvData.title || 'غير محدد'}\n` +
      `📌 الباقة: ${pkg.title} (${pkg.price} جنيه عبر انستا باي)`
    );
    return `https://wa.me/${PAYMENT_CONFIG.whatsappSupport}?text=${text}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>باقات إعداد السير الذاتية ولينكد إن (سوق مصر)</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          باقات احترافية بأسعار تناسب الخريجين والباحثين عن عمل
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          الدفع متاح لحظياً عبر تطبيق انستا باي (InstaPay) مع تسليم خلال 24 ساعة وتعديلات مجانية.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {SERVICE_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition shadow-xs hover:shadow-md ${
              pkg.popular 
                ? 'border-2 border-blue-600 relative' 
                : 'border-slate-200'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 right-1/2 transform translate-x-1/2 px-3 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-xs">
                {pkg.badge}
              </div>
            )}

            <div>
              {/* Title & Delivery */}
              <div className="mb-4">
                <h3 className="text-lg font-black text-slate-900">{pkg.title}</h3>
                <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{pkg.deliveryTime}</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-5 pb-5 border-b border-slate-100">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 font-['Inter']">
                  {pkg.price}
                </span>
                <span className="text-xs font-bold text-slate-600">جنيه مصري</span>
                <span className="text-xs text-slate-400 line-through mr-2 font-['Inter']">
                  {pkg.originalPrice} ج
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
                {pkg.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={getWhatsAppLink(pkg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition ${
                  pkg.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{pkg.ctaText}</span>
              </a>

              <div className="mt-2 text-center text-[11px] text-purple-700 font-bold flex items-center justify-center gap-1">
                <CreditCard className="w-3 h-3" />
                <span>الدفع عبر انستا باي (InstaPay)</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* InstaPay Info Box */}
      <div className="mt-10 p-5 bg-purple-50 border border-purple-200 rounded-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-purple-800 font-extrabold text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>الدفع المعتمد في مصر عبر شبكة المدفوعات اللحظية انستا باي (InstaPay)</span>
          </div>
          <p className="text-xs text-slate-600">
            العنوان اللحظي: <strong>{PAYMENT_CONFIG.instapay.handle}</strong> | رقم الهاتف: <strong>{PAYMENT_CONFIG.instapay.mobile}</strong>
          </p>
        </div>

        <a
          href={`https://wa.me/${PAYMENT_CONFIG.whatsappSupport}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن باقات إعداد الـ CV والدفع عبر انستا باي")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-lg transition whitespace-nowrap"
        >
          تواصل مع الدعم الفني
        </a>
      </div>

    </div>
  );
}
