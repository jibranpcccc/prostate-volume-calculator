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
    answer: "The ellipsoid formula demonstrates excellent accuracy with correlation coefficients (r) typically >0.90 when compared to planimetric measurements. Multiple validation studies published in Journal of Urology and European Urology confirm its reliability for clinical use, with accuracy within ±10% in 85-90% of cases."
  },
  {
    id: 2,
    question: "What TRUS measurements are needed for the calculator?",
    answer: "Three orthogonal measurements are required: anterior-posterior (AP) diameter in sagittal view, transverse diameter in axial view, and superior-inferior (SI) diameter in coronal view. All measurements should be in millimeters and obtained at the maximum dimensions of the prostate gland."
  },
  {
    id: 3,
    question: "What is the normal prostate volume by age?",
    answer: "Normal prostate volume varies by age: 20-40 years (15-25 mL), 40-60 years (20-30 mL), 60+ years (25-40 mL). Age-related growth averages 1.2-1.6 mL per year after age 40. Volumes >40 mL in younger men or >50 mL in older men may warrant evaluation."
  },
  {
    id: 4,
    question: "How does prostate volume correlate with BPH symptoms and IPSS scores?",
    answer: "Volume correlation with symptoms is moderate (r=0.3-0.5). Large prostates (>40 mL) increase likelihood of moderate-severe IPSS scores, but symptom severity depends more on transition zone enlargement pattern than total volume. Some men with 80+ mL prostates remain asymptomatic."
  },
  {
    id: 5,
    question: "What are the treatment thresholds based on prostate volume?",
    answer: "Volume guides treatment selection: <30 mL (alpha-blockers), 30-80 mL (combination therapy with 5-ARIs), >80 mL (surgical candidates). PSA density calculations (PSA/volume) help distinguish BPH from prostate cancer, with values >0.15 ng/mL/cc warranting biopsy consideration."
  },
  {
    id: 6,
    question: "How reliable are MRI vs TRUS measurements for volume calculation?",
    answer: "MRI measurements show slightly higher accuracy (r=0.95) compared to TRUS (r=0.90) but both are clinically acceptable. MRI provides better soft tissue contrast and is less operator-dependent, while TRUS remains the standard due to accessibility and cost-effectiveness in routine practice."
  },
  {
    id: 7,
    question: "What factors can affect prostate volume measurement accuracy?",
    answer: "Measurement accuracy depends on operator experience, image quality, bladder distension (should be moderately full), probe pressure, and prostate shape irregularities. Calcifications, cysts, or tumor masses can affect measurements and should be noted in reports."
  },
  {
    id: 8,
    question: "How is prostate volume used in surgical planning?",
    answer: "Volume determines surgical approach: <80 mL (TURP, laser enucleation), 80-150 mL (HoLEP, simple prostatectomy options), >150 mL (open simple prostatectomy traditional indication). Modern techniques allow minimally invasive approaches for larger glands than historically possible."
  },
  {
    id: 9,
    question: "What is the relationship between prostate volume and PSA levels?",
    answer: "PSA increases approximately 0.3-0.4 ng/mL per gram of prostate tissue. PSA density (PSA/volume) normalizes PSA for gland size: <0.10 (low cancer risk), 0.10-0.15 (intermediate), >0.15 (high risk requiring evaluation). This helps distinguish BPH from cancer."
  },
  {
    id: 10,
    question: "How often should prostate volume be monitored in BPH patients?",
    answer: "Baseline measurement at diagnosis, then annually for stable patients on medical therapy. More frequent monitoring (6-12 months) for patients with rapid symptom progression, those considering surgery, or when optimizing 5-ARI therapy effectiveness."
  },
  {
    id: 11,
    question: "Can this calculator be used for research and clinical studies?",
    answer: "Yes, the ellipsoid formula is standard in urological research and clinical trials. However, ensure consistent measurement protocols, operator training, and consider inter-observer variability. Document measurement conditions and any protocol deviations for research validity."
  },
  {
    id: 12,
    question: "What are the limitations of prostate volume calculation?",
    answer: "Limitations include operator dependency, irregular prostate shapes (accuracy decreases), significant calcifications or cysts, and inability to assess transition zone specific volumes. Clinical correlation with symptoms, DRE findings, and additional imaging remains essential for comprehensive evaluation."
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
  );
}
