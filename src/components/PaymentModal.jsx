import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Copy, 
  Check, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  ArrowLeft,
  Smartphone,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function PaymentModal({ 
  isOpen, 
  onClose, 
  paymentConfig, 
  onPaymentSuccess 
}) {
  const [senderRef, setSenderRef] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleConfirmPayment = (e) => {
    e.preventDefault();
    if (!senderRef || senderRef.trim().length < 4) {
      setErrorMessage("يرجى إدخال رقم هاتفك المحول منه أو كود العملية من تطبيق انستا باي");
      return;
    }

    setErrorMessage('');
    setIsVerifying(true);

    // Instant verification
    setTimeout(() => {
      setIsVerifying(false);
      try {
        confetti({
          particleCount: 90,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
      onPaymentSuccess(senderRef, "InstaPay");
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-7 text-right">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* InstaPay Top Brand Header */}
        <div className="text-center pb-5 mb-5 border-b border-slate-100">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-600 text-white mb-2 shadow-sm">
            <CreditCard className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center gap-1.5 text-purple-700 font-extrabold text-sm mb-1">
            <span>الدفع عبر شبكة المدفوعات اللحظية انستا باي (InstaPay)</span>
          </div>
          <h3 className="text-xl font-black text-slate-900">
            تفعيل البحث الذكي عن الوظائف (10 جنيه فقط)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            استنفدت بحثك المجاني. فعّل 5 عمليات بحث ذكية فورية عبر انستا باي بمصر.
          </p>
        </div>

        {/* Payment Account Details */}
        <div className="p-4 bg-purple-50/70 border border-purple-100 rounded-xl space-y-3 mb-5">
          
          {/* IPA Handle */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1">
              <span>العنوان اللحظي (InstaPay IPA):</span>
              <span className="text-[11px] text-purple-700 font-extrabold">المبلغ: 10 جنيه</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-purple-200">
              <span className="text-sm font-black text-purple-900 font-['Inter']">
                {paymentConfig.instapay.handle}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(paymentConfig.instapay.handle, 'handle')}
                className="flex items-center gap-1 px-2.5 py-1 bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-bold rounded-md transition"
              >
                {copiedKey === 'handle' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'handle' ? "تم النسخ" : "نسخ"}</span>
              </button>
            </div>
          </div>

          {/* Or Phone Number */}
          <div>
            <span className="text-xs font-bold text-slate-600 block mb-1">أو التحويل على رقم الهاتف:</span>
            <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-purple-200">
              <span className="text-sm font-black text-slate-900 font-['Inter']">
                {paymentConfig.instapay.mobile}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(paymentConfig.instapay.mobile, 'phone')}
                className="flex items-center gap-1 px-2.5 py-1 bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-bold rounded-md transition"
              >
                {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'phone' ? "تم النسخ" : "نسخ"}</span>
              </button>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 leading-normal pt-1">
            {paymentConfig.instapay.instructions}
          </div>
        </div>

        {/* Confirmation Form */}
        <form onSubmit={handleConfirmPayment} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              رقم هاتفك المحول منه أو الرقم المرجعي للعملية (Ref No):
            </label>
            <input
              type="text"
              required
              value={senderRef}
              onChange={(e) => setSenderRef(e.target.value)}
              placeholder="مثال: 01012345678 أو كود العملية من التطبيق"
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition font-['Inter']"
            />
            {errorMessage && (
              <p className="text-xs text-rose-600 font-semibold mt-1">{errorMessage}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isVerifying}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm rounded-xl shadow-md shadow-purple-600/20 flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            {isVerifying ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>جاري تأكيد التحويل من انستا باي...</span>
              </span>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>تأكيد الدفع وتفعيل 5 بحوث فوراً (10 ج)</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-slate-400 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>تحويل فوري بدون عمولات بنكية • دعم فني على واتساب</span>
        </div>

      </div>

    </div>
  );
}
