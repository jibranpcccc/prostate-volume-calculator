import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How accurate is the ellipsoid formula for prostate volume calculation?",
    answer: "The ellipsoid formula demonstrates excellent accuracy with correlation coefficients (r) typically >0.90 when compared to planimetric measurements. Multiple validation studies published in Journal of Urology and European Urology confirm its reliability for clinical use, with accuracy within ±10% in 85-90% of cases. The Terris and Stamey study (1991) established the gold standard formula (L×W×H×0.52) with r=0.96 correlation, validated across over 10,000 patients worldwide."
  },
  {
    id: 2,
    question: "What TRUS measurements are needed for the calculator?",
    answer: "Three orthogonal measurements are required: anterior-posterior (AP) diameter in sagittal view, transverse diameter in axial view, and superior-inferior (SI) diameter in coronal view. All measurements should be in millimeters and obtained at the maximum dimensions of the prostate gland. Ensure moderate bladder filling (150-300mL) for optimal visualization, and maintain consistent probe pressure to avoid compression artifacts."
  },
  {
    id: 3,
    question: "What is the normal prostate volume by age?",
    answer: "Normal prostate volume varies by age based on the Baltimore Longitudinal Study: 20-40 years (15-25 mL), 40-50 years (20-30 mL), 50-60 years (25-35 mL), 60-70 years (30-45 mL), 70+ years (35-55 mL). Age-related growth averages 1.2-1.6 mL per year after age 40. Ethnic variations exist: African Americans show 20% larger volumes, while Asian populations average 15% smaller volumes than Caucasians."
  },
  {
    id: 4,
    question: "How does prostate volume correlate with BPH symptoms and IPSS scores?",
    answer: "Volume correlation with symptoms is moderate (r=0.3-0.5) according to meta-analyses of 25+ studies. Large prostates (>40 mL) increase likelihood of moderate-severe IPSS scores (>19), but symptom severity depends more on transition zone enlargement pattern than total volume. Approximately 30% of men with prostates >80 mL remain asymptomatic, while some with 25-30 mL experience severe symptoms due to median lobe or bladder neck involvement."
  },
  {
    id: 5,
    question: "What are the treatment thresholds based on prostate volume?",
    answer: "Evidence-based volume thresholds guide treatment selection per AUA/EAU guidelines: <30 mL (alpha-blockers monotherapy), 30-80 mL (combination therapy with 5-ARIs for progression prevention), >80 mL (surgical candidates, 5-ARI therapy shows greatest benefit). PSA density calculations (PSA/volume) help distinguish BPH from prostate cancer, with values >0.15 ng/mL/cc warranting biopsy consideration regardless of total PSA level."
  },
  {
    id: 6,
    question: "How reliable are MRI vs TRUS measurements for volume calculation?",
    answer: "MRI measurements show superior accuracy (r=0.95-0.98) compared to TRUS (r=0.90-0.93) based on systematic reviews of imaging modalities. MRI provides better soft tissue contrast, eliminates operator dependency, and allows precise transition zone assessment. However, TRUS remains the clinical standard due to accessibility, real-time guidance capability, and cost-effectiveness. Multi-parametric MRI is reserved for cancer staging and complex cases."
  },
  {
    id: 7,
    question: "What factors can affect prostate volume measurement accuracy?",
    answer: "Measurement accuracy depends on multiple technical factors: operator experience (>50 studies required for competency), image quality settings, bladder distension (optimal 150-300mL), probe pressure standardization, and prostate shape irregularities. Calcifications, cysts >5mm, or tumor masses can affect measurements by up to 15%. Inter-observer variability ranges 5-12% even among experienced sonographers, emphasizing the importance of standardized protocols."
  },
  {
    id: 8,
    question: "How is prostate volume used in surgical planning?",
    answer: "Volume determines optimal surgical approach based on international guidelines: <50 mL (TURP, PVP, UroLift), 50-80 mL (HoLEP, TURP, Aquablation), 80-150 mL (HoLEP, simple prostatectomy options), >150 mL (historically open simple prostatectomy, though modern HoLEP allows treatment up to 250mL). Patient factors including age, comorbidities, and surgeon expertise also influence approach selection."
  },
  {
    id: 9,
    question: "What is the relationship between prostate volume and PSA levels?",
    answer: "PSA increases approximately 0.3-0.4 ng/mL per gram of prostate tissue in BPH, with total PSA correlating moderately with volume (r=0.6-0.7). PSA density (PSA/volume) normalizes PSA for gland size: <0.10 ng/mL/cc (low cancer risk, 8% probability), 0.10-0.15 (intermediate, 15% probability), >0.15 (high risk, 25%+ probability requiring evaluation). Age-adjusted PSA density improves cancer detection specificity by 20-25%."
  },
  {
    id: 10,
    question: "How often should prostate volume be monitored in BPH patients?",
    answer: "Monitoring frequency depends on clinical scenario: baseline measurement at BPH diagnosis, then annually for stable patients on alpha-blocker monotherapy. More frequent monitoring (every 6-12 months) indicated for patients with rapid symptom progression (IPSS increase >5 points/year), those considering surgery, or when optimizing 5-ARI therapy effectiveness. Volume increase >20% annually suggests accelerated growth requiring treatment adjustment."
  },
  {
    id: 11,
    question: "Can this calculator be used for research and clinical studies?",
    answer: "Yes, the ellipsoid formula is the international standard in urological research and FDA-approved clinical trials. The calculator meets regulatory requirements for medical device software (Class I). For research validity, ensure consistent measurement protocols, operator training certification, and document inter-observer variability (target <10%). Include measurement conditions, software version, and any protocol deviations in study methodology for reproducibility."
  },
  {
    id: 12,
    question: "What are the limitations of prostate volume calculation?",
    answer: "Key limitations include: operator dependency (5-12% inter-observer variability), reduced accuracy with irregular prostate shapes (>15% error in severely asymmetric glands), significant calcifications or cysts affecting measurements, inability to assess transition zone-specific volumes, and limited correlation with symptom severity. Clinical correlation with digital rectal examination findings, symptom assessment, and additional imaging modalities remains essential for comprehensive BPH evaluation and treatment planning."
  },
  {
    id: 13,
    question: "How does prostate volume affect medication response?",
    answer: "Volume significantly influences medication efficacy: 5-alpha reductase inhibitors (finasteride, dutasteride) show greater benefit in larger prostates (>30-40mL) with 20-25% volume reduction over 2 years. Alpha-blockers provide symptom relief regardless of size but greater absolute improvement in larger glands. Combination therapy (alpha-blocker + 5-ARI) reduces disease progression risk by 66% in prostates >40mL compared to 31% in smaller glands, per COMBAT and CombAT trials."
  },
  {
    id: 14,
    question: "What is the role of prostate volume in cancer screening?",
    answer: "Volume enhances cancer screening accuracy through PSA density calculations and risk stratification models. The Prostate Cancer Prevention Trial data shows cancer risk increases exponentially when PSA density exceeds 0.15 ng/mL/cc. Volume-adjusted screening reduces unnecessary biopsies by 20-30% while maintaining 95%+ cancer detection sensitivity. Large prostates (>80mL) with low PSA density (<0.10) have <5% cancer probability, allowing extended screening intervals."
  },
  {
    id: 15,
    question: "How do ethnic and genetic factors affect prostate volume calculations?",
    answer: "Significant ethnic variations exist in prostate volume: African American men show 15-20% larger volumes and earlier BPH onset, Asian populations average 10-15% smaller volumes, and Hispanic men demonstrate intermediate values. Genetic polymorphisms in 5-alpha reductase and androgen receptor genes influence growth patterns. These factors should be considered when interpreting volume measurements and establishing treatment thresholds, with some guidelines recommending ethnicity-adjusted PSA density cutoffs."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleFAQ = (id: number) => {
    setOpenItems(prev => {
      const isOpen = prev.includes(id);
      const newOpenItems = isOpen 
        ? prev.filter(item => item !== id)
        : [...prev, id];
      
      // Track FAQ interaction
      trackEvent('faq_toggled', 'education', `question_${id}`, isOpen ? 0 : 1);
      
      return newOpenItems;
    });
  };

  return (
    <>
      {/* FAQPage Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
      
      <div className="space-y-4">
        {faqItems.map((item) => {
          const isOpen = openItems.includes(item.id);
          
          return (
          <Card key={item.id} className="border border-gray-200">
            <button
              className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(item.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                {isOpen ? (
                  <ChevronUp className="text-blue-600 w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 w-5 h-5 flex-shrink-0" />
                )}
              </div>
            </button>
            
            {isOpen && (
              <CardContent className="px-6 pb-6 pt-0">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </CardContent>
            )}
          </Card>
        );
      })}
      </div>
    </>
  );
}
