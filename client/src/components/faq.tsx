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
    question: "How accurate is the ellipsoid formula?",
    answer: "The ellipsoid formula has been validated in numerous studies and shows excellent correlation with actual prostate volume (r > 0.9). It's considered the gold standard for transrectal ultrasound measurements and is widely accepted in urological practice."
  },
  {
    id: 2,
    question: "What measurements do I need?",
    answer: "You need three measurements in millimeters: anterior-posterior (length), transverse (width), and superior-inferior (height). These are typically obtained via transrectal ultrasound (TRUS) or MRI by trained healthcare professionals."
  },
  {
    id: 3,
    question: "Is this tool for medical professionals only?",
    answer: "While designed for healthcare professionals, patients can use this tool for educational purposes. However, results should always be interpreted by a qualified medical professional in the context of clinical symptoms and examination findings."
  },
  {
    id: 4,
    question: "How does prostate volume relate to BPH symptoms?",
    answer: "While there's a general correlation between prostate volume and BPH symptoms, it's not absolute. Some men with large prostates have minimal symptoms, while others with smaller prostates may have significant symptoms due to the location of enlargement or other factors."
  },
  {
    id: 5,
    question: "What is considered a normal prostate size?",
    answer: "A normal adult prostate typically measures 15-30 mL in volume. However, prostate size naturally increases with age. By age 60, volumes of 30-40 mL are common, and larger volumes may be normal for older men without causing symptoms."
  },
  {
    id: 6,
    question: "When should I be concerned about prostate size?",
    answer: "Consult a healthcare provider if experiencing urinary symptoms such as difficulty starting urination, weak stream, frequent urination, or incomplete bladder emptying. These symptoms, combined with enlarged prostate volume (>50 mL), may indicate BPH requiring treatment."
  },
  {
    id: 7,
    question: "How often should prostate volume be measured?",
    answer: "For routine monitoring, annual measurements during regular check-ups are sufficient for men over 50. More frequent monitoring may be needed for those with diagnosed BPH, those on treatment, or those with rapidly changing symptoms."
  },
  {
    id: 8,
    question: "Can this calculator replace professional medical assessment?",
    answer: "No, this calculator is an educational tool that complements but cannot replace professional medical evaluation. Clinical context, symptoms, physical examination, and additional tests are essential for proper diagnosis and treatment planning."
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
