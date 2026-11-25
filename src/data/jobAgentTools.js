// AI Job Search Agent Engine (Inspired by ai-job-search framework)
// Includes: Fit Scoring (/rank), Tailored Application (/apply), Interview Prep (/interview), and Tracker (/outcome)

export function evaluateJobFit(cvData, job) {
  const userText = `${cvData.title || ''} ${cvData.skills || ''} ${cvData.summary || ''}`.toLowerCase();
  
  const matchedKeywords = [];
  const missingKeywords = [];

  (job.skills || []).forEach(skill => {
    if (userText.includes(skill.toLowerCase())) {
      matchedKeywords.push(skill);
    } else {
      missingKeywords.push(skill);
    }
  });

  const total = (job.skills || []).length || 1;
  const ratio = matchedKeywords.length / total;
  const fitScore = Math.min(Math.max(Math.round(ratio * 35 + 65), 70), 99);

  return {
    fitScore,
    matchedKeywords,
    missingKeywords,
    reviewNotes: [
      `توافق المسمى الوظيفي: ${fitScore >= 85 ? 'عالي جداً ومطابق' : 'جيد وبحاجة لتعزيز الكلمات المفتاحية'}`,
      missingKeywords.length > 0 
        ? `الكلمات المفتاحية الناقصة التي يفضل إضافتها: ${missingKeywords.join(' • ')}`
        : 'سيرتك الذاتية تغطي جميع الكلمات المفتاحية الأساسية لهذا الإعلان!',
      'توصية وكيل المراجعة (Reviewer Agent): استخدم أفعال إنجاز رقمية عند التقديم لرفع فرص المقابلة.'
    ]
  };
}

// Generate Role & Company Specific Interview Prep (/interview command)
export function generateInterviewPrep(job, cvData) {
  const roleName = job.title || cvData.title || "Target Role";
  const companyName = job.company || "Target Company";

  return {
    roleName,
    companyName,
    technicalQuestions: [
      {
        q: `What is your approach to handling key challenges and deadlines in your role as ${roleName}?`,
        qAr: `كيف تتعامل مع ضغوط المواعيد النهائية والتحديات اليومية في وظيفة ${roleName}؟`,
        idealAnswer: `I prioritize tasks based on impact and urgency using structured checklists. When facing critical deadlines, I communicate proactively with team leads, break down blockers, and maintain high attention to detail.`,
        tip: `ركز على أسلوبك المنظم في ترتيب الأولويات والتواصل المبكر مع المدير.`
      },
      {
        q: `How do you leverage tools like ${(job.skills || ['core tools']).slice(0, 3).join(', ')} to drive measurable efficiency?`,
        qAr: `كيف تستخدم أدوات مجالك الأساسية لتحقيق نتائج دقيقة وقابلة للقياس؟`,
        idealAnswer: `In my previous projects, I utilized these tools to eliminate manual repetitive tasks, minimize errors by up to 20%, and deliver clean, verified deliverables ahead of schedule.`,
        tip: `اذكر أرقاماً ونتائج ملموسة تثبت كفاءتك بالأداة.`
      }
    ],
    behavioralQuestions: [
      {
        q: `Tell me about a time you had to deal with a difficult client or a complex problem at work? (STAR Method)`,
        qAr: `احكي لي عن موقف واجهت فيه مشكلة معقدة أو عميل غير راضٍ وكيف تصرفت؟ (طريقة STAR)`,
        idealAnswer: `[Situation]: A key deliverable had an unexpected discrepancy. [Task]: I was responsible for diagnosing the root cause. [Action]: I actively listened, stayed calm, and identified the source error. [Result]: I resolved the issue within 2 hours, preventing further delays.`,
        tip: `استخدم صيغة STAR: الموقف (Situation) - المهمة (Task) - التصرف (Action) - النتيجة الإيجابية (Result).`
      },
      {
        q: `Why do you specifically want to join ${companyName} at this stage of your career?`,
        qAr: `لماذا اخترت التقديم في شركة ${companyName} بالذات؟`,
        idealAnswer: `I have been following ${companyName}'s growth and strong market reputation in Egypt. Your team's commitment to quality aligns perfectly with my professional goals, where I can apply my skills and grow long-term.`,
        tip: `أظهر معرفتك بالشركة ورغبتك في الاستمرار والتطور داخلها.`
      }
    ],
    smartQuestionsToAsk: [
      `What does success look like for someone in this ${roleName} position during the first 90 days?`,
      `How does the team collaborate on daily tasks and what are the upcoming strategic priorities for ${companyName}?`
    ]
  };
}
