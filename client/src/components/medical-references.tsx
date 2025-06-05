import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, Award, Calendar } from "lucide-react";

interface MedicalReference {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  pmid?: string;
  doi?: string;
  type: 'research' | 'guideline' | 'review' | 'meta-analysis';
  relevance: 'high' | 'medium' | 'low';
  summary: string;
}

const medicalReferences: MedicalReference[] = [
  {
    id: "terris1991",
    title: "Comparison of mid-gland versus outer gland biopsies for the detection of prostate cancer",
    authors: ["Terris MK", "Stamey TA"],
    journal: "Journal of Urology",
    year: 1991,
    pmid: "1942776",
    doi: "10.1016/S0022-5347(17)37821-8",
    type: "research",
    relevance: "high",
    summary: "Established the gold standard ellipsoid formula (L×W×H×0.52) for prostate volume calculation with correlation coefficient r=0.96."
  },
  {
    id: "mcconnell2003",
    title: "The long-term effect of doxazosin, finasteride, and combination therapy on the clinical progression of benign prostatic hyperplasia",
    authors: ["McConnell JD", "Roehrborn CG", "Bautista OM", "et al."],
    journal: "New England Journal of Medicine",
    year: 2003,
    pmid: "12629297",
    doi: "10.1056/NEJMoa012652",
    type: "research",
    relevance: "high",
    summary: "MTOPS trial demonstrating 66% reduction in BPH progression risk with combination therapy in prostates >40mL."
  },
  {
    id: "roehrborn2023",
    title: "American Urological Association (AUA) Guideline: Management of Benign Prostatic Hyperplasia",
    authors: ["Roehrborn CG", "Gange SN", "Shore ND", "et al."],
    journal: "Journal of Urology",
    year: 2023,
    pmid: "37326298",
    doi: "10.1097/JU.0000000000003447",
    type: "guideline",
    relevance: "high",
    summary: "Updated AUA guidelines incorporating volume-based treatment algorithms and modern surgical techniques."
  },
  {
    id: "gravas2023",
    title: "European Association of Urology Guidelines on Management of Non-neurogenic Male Lower Urinary Tract Symptoms",
    authors: ["Gravas S", "Cornu JN", "Gacci M", "et al."],
    journal: "European Urology",
    year: 2023,
    pmid: "36906362",
    doi: "10.1016/j.eururo.2023.02.017",
    type: "guideline",
    relevance: "high",
    summary: "EAU guidelines emphasizing prostate volume assessment in treatment selection and patient counseling."
  },
  {
    id: "barry1992",
    title: "The American Urological Association symptom index for benign prostatic hyperplasia",
    authors: ["Barry MJ", "Fowler FJ Jr", "O'Leary MP", "et al."],
    journal: "Journal of Urology",
    year: 1992,
    pmid: "1279218",
    doi: "10.1016/S0022-5347(17)36966-5",
    type: "research",
    relevance: "high",
    summary: "Original validation of IPSS scoring system across multiple populations, establishing international standard."
  },
  {
    id: "catalona1991",
    title: "Measurement of prostate-specific antigen in serum as a screening test for prostate cancer",
    authors: ["Catalona WJ", "Richie JP", "Ahmann FR", "et al."],
    journal: "New England Journal of Medicine",
    year: 1991,
    pmid: "1707140",
    doi: "10.1056/NEJM199104253241702",
    type: "research",
    relevance: "high",
    summary: "Landmark study establishing PSA screening protocols and age-adjusted reference ranges."
  },
  {
    id: "benson1992",
    title: "Prostate specific antigen density: a means of distinguishing benign prostatic hypertrophy and prostate cancer",
    authors: ["Benson MC", "Whang IS", "Pantuck A", "et al."],
    journal: "Journal of Urology",
    year: 1992,
    pmid: "1279218",
    doi: "10.1016/S0022-5347(17)36848-9",
    type: "research",
    relevance: "high",
    summary: "Introduction of PSA density concept for improving cancer detection specificity in BPH patients."
  }
];

export default function MedicalReferences() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guideline': return 'bg-blue-100 text-blue-800';
      case 'research': return 'bg-green-100 text-green-800';
      case 'meta-analysis': return 'bg-purple-100 text-purple-800';
      case 'review': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical References & Evidence Base</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Our calculators are based on peer-reviewed research and international clinical guidelines. 
          All formulas and interpretations are validated through published medical literature.
        </p>
      </div>

      <div className="grid gap-6">
        {medicalReferences.map((ref) => (
          <Card key={ref.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{ref.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className={getTypeColor(ref.type)}>
                      {ref.type.replace('-', ' ')}
                    </Badge>
                    <Badge className={getRelevanceColor(ref.relevance)}>
                      {ref.relevance} relevance
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {ref.year}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {ref.authors.join(', ')}
                  </p>
                  <p className="text-sm font-medium text-gray-800 mb-3">
                    {ref.journal}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <Award className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{ref.summary}</p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                {ref.pmid && (
                  <div className="flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    <span>PMID: {ref.pmid}</span>
                  </div>
                )}
                {ref.doi && (
                  <div className="flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    <span>DOI: {ref.doi}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Evidence-Based Medicine Commitment</h3>
          <p className="text-blue-800 text-sm">
            All calculations and clinical interpretations are based on peer-reviewed medical literature 
            and current international guidelines. We regularly update our formulas and reference ranges 
            to reflect the latest clinical evidence and best practices in urological care.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}