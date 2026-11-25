import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Copy, 
  Check, 
  Settings, 
  CreditCard,
  Megaphone
} from 'lucide-react';
import { AD_CAMPAIGNS, CAMPAIGN_BUDGET_GUIDE } from '../data/adCopies';

export function BusinessDashboard({ 
  paymentConfig, 
  setPaymentConfig, 
  transactionsList = [] 
}) {
  const [adSpend, setAdSpend] = useState(500);
  const [expectedClients, setExpectedClients] = useState(10);
  const [avgPrice, setAvgPrice] = useState(250);
  const [expectedSearchesPay, setExpectedSearchesPay] = useState(30); // 30 searches x 10 EGP
  const [copiedAdId, setCopiedAdId] = useState(null);

  // Settings
  const [instaHandle, setInstaHandle] = useState(paymentConfig.instapay.handle);
  const [instaMobile, setInstaMobile] = useState(paymentConfig.instapay.mobile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Math
  const packageRevenue = expectedClients * avgPrice;
  const searchRevenue = expectedSearchesPay * 10;
  const totalRevenue = packageRevenue + searchRevenue;
  const netProfit = totalRevenue - adSpend;
  const roi = Math.round((netProfit / (adSpend || 1)) * 100);

  const handleCopyAd = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedAdId(id);
    setTimeout(() => setCopiedAdId(null), 2000);
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setPaymentConfig(prev => ({
      ...prev,
      instapay: {
        ...prev.instapay,
        handle: instaHandle,
        mobile: instaMobile
      }
    }));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-50 text-amber-800 text-xs font-bold mb-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
              <span>لوحة إدارة الأرباح والتسويق (خاصة بصاحب المشروع)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              خطة استثمار الـ 1000 جنيه ومتابعة أرباح انستا باي 📈
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              حاسبة أرباح تفاعلية، إعلانات ممولة جاهزة للنسخ لفيسبوك وإنستجرام، وتخصيص حساب انستا باي.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs space-y-1">
            <div className="text-slate-500">رأس المال: <strong className="text-slate-900 font-['Inter']">1,000 ج.م</strong></div>
            <div className="text-slate-500">إعلان ممول: <strong className="text-blue-700 font-['Inter']">500 ج.م</strong></div>
            <div className="text-slate-500">احتياطي: <strong className="text-slate-700 font-['Inter']">500 ج.م</strong></div>
          </div>
        </div>
      </div>

      {/* Simulator Section */}
      <div className="mb-10">
        <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-emerald-600" />
          <span>حاسبة الأرباح التفاعلية</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Sliders */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 space-y-5 shadow-xs">
            
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                <span className="text-slate-700">ميزانية الإعلانات الممولة:</span>
                <span className="text-blue-700 font-black font-['Inter']">{adSpend} ج.م</span>
              </div>
              <input
                type="range"
                min="200"
                max="1500"
                step="50"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                <span className="text-slate-700">عدد العملاء المتوقعين:</span>
                <span className="text-amber-700 font-black font-['Inter']">{expectedClients} عملاء</span>
              </div>
              <input
                type="range"
                min="2"
                max="40"
                step="1"
                value={expectedClients}
                onChange={(e) => setExpectedClients(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                <span className="text-slate-700">متوسط سعر الباقة:</span>
                <span className="text-slate-900 font-black font-['Inter']">{avgPrice} ج.م</span>
              </div>
              <input
                type="range"
                min="199"
                max="400"
                step="10"
                value={avgPrice}
                onChange={(e) => setAvgPrice(Number(e.target.value))}
                className="w-full accent-slate-800 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                <span className="text-slate-700">عمليات بحث الوظائف بالـ AI (10 ج):</span>
                <span className="text-purple-700 font-black font-['Inter']">{expectedSearchesPay} عمليات ({expectedSearchesPay * 10} ج)</span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                step="5"
                value={expectedSearchesPay}
                onChange={(e) => setExpectedSearchesPay(Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
            </div>

          </div>

          {/* Results Summary */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <span className="text-xs font-bold text-slate-500 block">إجمالي الإيرادات</span>
              <div className="text-2xl font-black text-slate-900 font-['Inter'] mt-1">
                {totalRevenue.toLocaleString()} <span className="text-xs font-normal">ج.م</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {expectedClients} عملاء + أرباح أداة البحث
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <span className="text-xs font-bold text-slate-500 block">المصروفات</span>
              <div className="text-2xl font-black text-rose-600 font-['Inter'] mt-1">
                {adSpend.toLocaleString()} <span className="text-xs font-normal">ج.م</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                تكلفة الإعلانات الممولة
              </p>
            </div>

            <div className="sm:col-span-2 bg-emerald-50 border border-emerald-200 rounded-xl p-5 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-800 block">صافي الربح الأسبوعي المتوقع</span>
                  <div className="text-3xl font-black text-emerald-700 font-['Inter'] mt-0.5">
                    +{netProfit.toLocaleString()} <span className="text-sm font-bold font-['Cairo']">جنيه صافي</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-500 block">نسبة العائد</span>
                  <span className="text-xl font-black text-emerald-700 font-['Inter']">
                    +{roi}%
                  </span>
                </div>
              </div>
              <div className="mt-3 text-xs text-emerald-900 font-medium">
                🎯 رجعت الـ 1000 جنيه كاملة ومعاك 1500+ جنيه ربح صافي يمكنك إعادة استثماره لمضاعفة عملائك!
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Ready-made Ad Copies */}
      <div className="mb-10">
        <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
          <Megaphone className="w-4 h-4 text-blue-600" />
          <span>إعلانات ممولة جاهزة للنسخ (Facebook / Instagram)</span>
        </h3>

        <div className="space-y-4">
          {AD_CAMPAIGNS.map(ad => (
            <div key={ad.id} className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-blue-700 block">{ad.targetObjective}</span>
                  <h4 className="text-sm font-black text-slate-900">{ad.title}</h4>
                </div>
                <button
                  onClick={() => handleCopyAd(ad.body, ad.id)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition"
                >
                  {copiedAdId === ad.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAdId === ad.id ? "تم النسخ!" : "نسخ نص الإعلان"}</span>
                </button>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-800 whitespace-pre-line leading-relaxed font-['Cairo']">
                {ad.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* InstaPay Settings */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <h3 className="text-sm font-black text-slate-900 flex items-center gap-2 mb-2">
          <Settings className="w-4 h-4 text-purple-700" />
          <span>تخصيص حساب انستا باي (InstaPay)</span>
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          عدل بيانات انستا باي الخاصة بك هنا لتظهر تلقائياً لعملائك عند الدفع في الموقع.
        </p>

        <form onSubmit={handleSaveSettings} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">العنوان اللحظي (IPA):</label>
            <input
              type="text"
              value={instaHandle}
              onChange={(e) => setInstaHandle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 font-['Inter']"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">رقم هاتف انستا باي:</label>
            <input
              type="text"
              value={instaMobile}
              onChange={(e) => setInstaMobile(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 font-['Inter']"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-lg transition"
            >
              {savedSuccess ? "تم حفظ بيانات انستا باي بنجاح! ✓" : "حفظ بيانات انستا باي"}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
