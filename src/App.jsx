import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CVBuilder } from './components/CVBuilder';
import { AIJobSearch } from './components/AIJobSearch';
import { InterviewStudio } from './components/InterviewStudio';
import { PricingPackages } from './components/PricingPackages';
import { PaymentModal } from './components/PaymentModal';
import { Footer } from './components/Footer';
import { PAYMENT_CONFIG as DEFAULT_PAYMENT_CONFIG } from './data/packages';
import { writeCustomCVFromPrompt } from './data/aiWriterEngine';

const INITIAL_CV = writeCustomCVFromPrompt("محاسب مالي خريج تجارة إنجليزي جامعة القاهرة 2024", "en");

export default function App() {
  const [activeTab, setActiveTab] = useState('job-search'); // 'job-search' | 'builder' | 'interview' | 'packages'
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedJobForInterview, setSelectedJobForInterview] = useState(null);

  // Search credits: 1 free initial search
  const [freeSearchesRemaining, setFreeSearchesRemaining] = useState(() => {
    const saved = localStorage.getItem('seeraty_free_searches');
    return saved !== null ? Number(saved) : 1;
  });

  const [paidSearchesCount, setPaidSearchesCount] = useState(() => {
    const saved = localStorage.getItem('seeraty_paid_searches');
    return saved !== null ? Number(saved) : 0;
  });

  // User CV Data
  const [cvData, setCvData] = useState(() => {
    const saved = localStorage.getItem('seeraty_cv_data');
    return saved ? JSON.parse(saved) : INITIAL_CV;
  });

  // Payment configuration (InstaPay)
  const [paymentConfig] = useState(DEFAULT_PAYMENT_CONFIG);

  // Toast notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // State persistence
  useEffect(() => {
    localStorage.setItem('seeraty_free_searches', freeSearchesRemaining.toString());
  }, [freeSearchesRemaining]);

  useEffect(() => {
    localStorage.setItem('seeraty_paid_searches', paidSearchesCount.toString());
  }, [paidSearchesCount]);

  useEffect(() => {
    localStorage.setItem('seeraty_cv_data', JSON.stringify(cvData));
  }, [cvData]);

  // Use a search credit
  const handleUseSearch = () => {
    if (freeSearchesRemaining > 0) {
      setFreeSearchesRemaining(prev => prev - 1);
      showToast("تم استخدام بحثك المجاني بنجاح! للبحث التالي: 10 جنيه عبر انستا باي.");
    } else if (paidSearchesCount > 0) {
      setPaidSearchesCount(prev => prev - 1);
      showToast("تم استخدام عملية بحث من رصيدك المدفوع.");
    }
  };

  // InstaPay Payment success handler
  const handlePaymentSuccess = (reference) => {
    // Unlock 5 searches for 10 EGP
    setPaidSearchesCount(prev => prev + 5);
    showToast("🎉 تم تأكيد الدفع عبر انستا باي! تم إضافة 5 عمليات بحث ذكية لرصيدك.");
    setActiveTab('job-search');
  };

  const handleSearchJobsWithProfile = (profileData) => {
    if (profileData) setCvData(profileData);
    setActiveTab('job-search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInterviewForJob = (job) => {
    setSelectedJobForInterview(job);
    setActiveTab('interview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackage = () => {
    setActiveTab('packages');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-['Cairo'] antialiased">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navbar (Clean Arabic without Business Dashboard) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        freeSearchesRemaining={freeSearchesRemaining}
        paidSearchesCount={paidSearchesCount}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1">
        {activeTab === 'job-search' && (
          <AIJobSearch
            cvData={cvData}
            freeSearchesRemaining={freeSearchesRemaining}
            paidSearchesCount={paidSearchesCount}
            onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
            onUseSearch={handleUseSearch}
            onGenerateCoverLetterForJob={handleOpenInterviewForJob}
          />
        )}

        {activeTab === 'builder' && (
          <CVBuilder
            cvData={cvData}
            setCvData={setCvData}
            onSearchJobsWithProfile={handleSearchJobsWithProfile}
            onSelectPackage={handleSelectPackage}
          />
        )}

        {activeTab === 'interview' && (
          <InterviewStudio
            cvData={cvData}
            selectedJob={selectedJobForInterview}
            onSelectPackage={handleSelectPackage}
          />
        )}

        {activeTab === 'packages' && (
          <PricingPackages
            cvData={cvData}
            onSelectPackage={handleSelectPackage}
          />
        )}
      </main>

      {/* 10 EGP InstaPay Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        paymentConfig={paymentConfig}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
