import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Pill, 
  Scissors, 
  Activity, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Target,
  Users,
  Zap
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface TreatmentOption {
  name: string;
  type: 'medical' | 'surgical' | 'minimally_invasive';
  volumeRange: string;
  efficacy: number;
  riskLevel: 'low' | 'moderate' | 'high';
  recoveryTime: string;
  description: string;
  indications: string[];
  contraindications: string[];
  outcomes: {
    symptomImprovement: number;
    flowImprovement: number;
    durability: number;
  };
}

const treatmentOptions: TreatmentOption[] = [
  {
    name: "Alpha-Blockers (Tamsulosin, Alfuzosin)",
    type: "medical",
    volumeRange: "Any size",
    efficacy: 75,
    riskLevel: "low",
    recoveryTime: "Immediate",
    description: "First-line therapy for LUTS regardless of prostate size. Relaxes smooth muscle in prostate and bladder neck.",
    indications: ["Moderate to severe LUTS (IPSS ≥8)", "Any prostate volume", "Immediate symptom relief needed"],
    contraindications: ["Orthostatic hypotension", "Severe heart failure", "Cataract surgery planned"],
    outcomes: {
      symptomImprovement: 75,
      flowImprovement: 65,
      durability: 85
    }
  },
  {
    name: "5-Alpha Reductase Inhibitors (Finasteride, Dutasteride)",
    type: "medical",
    volumeRange: ">30 mL",
    efficacy: 80,
    riskLevel: "low",
    recoveryTime: "3-6 months for effect",
    description: "Shrinks prostate by 20-25% over 6-12 months. Most effective in larger prostates (>30 mL).",
    indications: ["Prostate volume >30 mL", "High risk of progression", "Combination therapy candidate"],
    contraindications: ["Desire for fertility", "Liver disease", "Women of childbearing age"],
    outcomes: {
      symptomImprovement: 80,
      flowImprovement: 70,
      durability: 90
    }
  },
  {
    name: "Combination Therapy (Alpha-blocker + 5-ARI)",
    type: "medical",
    volumeRange: ">40 mL",
    efficacy: 85,
    riskLevel: "low",
    recoveryTime: "Immediate + 3-6 months",
    description: "Optimal medical therapy for larger prostates. Provides immediate relief plus long-term volume reduction.",
    indications: ["Prostate volume >40 mL", "Moderate-severe LUTS", "High progression risk"],
    contraindications: ["Multiple medication intolerances", "Frequent dosing compliance issues"],
    outcomes: {
      symptomImprovement: 85,
      flowImprovement: 80,
      durability: 88
    }
  },
  {
    name: "TURP (Transurethral Resection of Prostate)",
    type: "surgical",
    volumeRange: "30-80 mL",
    efficacy: 95,
    riskLevel: "moderate",
    recoveryTime: "2-4 weeks",
    description: "Gold standard surgical treatment. Removes obstructing prostatic tissue through urethra.",
    indications: ["Failed medical therapy", "Recurrent retention", "Recurrent UTIs", "Bladder stones"],
    contraindications: ["Bleeding disorders", "Severe cardiac disease", "Very large prostate >100 mL"],
    outcomes: {
      symptomImprovement: 95,
      flowImprovement: 90,
      durability: 85
    }
  },
  {
    name: "HoLEP (Holmium Laser Enucleation)",
    type: "surgical",
    volumeRange: "50-150 mL",
    efficacy: 96,
    riskLevel: "moderate",
    recoveryTime: "1-3 weeks",
    description: "Size-independent laser procedure. Excellent for large prostates with minimal bleeding.",
    indications: ["Large prostate >80 mL", "Anticoagulation therapy", "Failed TURP", "Recurrent adenoma"],
    contraindications: ["Active UTI", "Bladder cancer", "Urethral stricture"],
    outcomes: {
      symptomImprovement: 96,
      flowImprovement: 95,
      durability: 92
    }
  },
  {
    name: "Simple Prostatectomy (Open/Robotic)",
    type: "surgical",
    volumeRange: ">100 mL",
    efficacy: 97,
    riskLevel: "high",
    recoveryTime: "4-8 weeks",
    description: "Complete adenoma removal for very large prostates. Can be performed open or robotically.",
    indications: ["Prostate volume >100 mL", "Concomitant bladder pathology", "Failed endoscopic surgery"],
    contraindications: ["High surgical risk", "Life expectancy <10 years", "Severe comorbidities"],
    outcomes: {
      symptomImprovement: 97,
      flowImprovement: 95,
      durability: 95
    }
  },
  {
    name: "UroLift (Prostatic Urethral Lift)",
    type: "minimally_invasive",
    volumeRange: "20-80 mL",
    efficacy: 70,
    riskLevel: "low",
    recoveryTime: "Few days",
    description: "Mechanical lifting of prostatic lobes. Preserves ejaculatory function. Office-based procedure.",
    indications: ["Sexually active men", "Moderate LUTS", "Contraindication to surgery", "Anticoagulation"],
    contraindications: ["Large median lobe", "Active UTI", "Severe symptoms", "Prostate volume >100 mL"],
    outcomes: {
      symptomImprovement: 70,
      flowImprovement: 60,
      durability: 75
    }
  },
  {
    name: "Rezum (Water Vapor Therapy)",
    type: "minimally_invasive",
    volumeRange: "30-80 mL",
    efficacy: 75,
    riskLevel: "low",
    recoveryTime: "2-4 weeks",
    description: "Steam injections create thermal ablation. Natural tissue sloughing over 3-6 months.",
    indications: ["Office-based treatment preferred", "Moderate prostate size", "Sexual function preservation"],
    contraindications: ["Active UTI", "Bleeding disorders", "Urethral stricture", "Large median lobe"],
    outcomes: {
      symptomImprovement: 75,
      flowImprovement: 70,
      durability: 80
    }
  }
];

interface TreatmentGuideProps {
  prostateVolume?: number;
  ipssScore?: number;
  age?: number;
}

export default function TreatmentGuide({ prostateVolume, ipssScore, age }: TreatmentGuideProps) {
  const [selectedTab, setSelectedTab] = useState("overview");

  const handleTreatmentClick = (treatment: string) => {
    trackEvent('treatment_option_viewed', 'education', treatment);
  };

  const getRecommendedTreatments = () => {
    if (!prostateVolume) return treatmentOptions;
    
    return treatmentOptions.filter(option => {
      const [min, max] = option.volumeRange.includes('>') 
        ? [parseInt(option.volumeRange.replace('>', '').replace(' mL', '')), Infinity]
        : option.volumeRange.includes('<') 
        ? [0, parseInt(option.volumeRange.replace('<', '').replace(' mL', ''))]
        : option.volumeRange === "Any size" 
        ? [0, Infinity]
        : option.volumeRange.split('-').map(v => parseInt(v.replace(' mL', '')));
      
      return prostateVolume >= min && prostateVolume <= max;
    }).sort((a, b) => b.efficacy - a.efficacy);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'medical': return <Pill className="w-5 h-5" />;
      case 'surgical': return <Scissors className="w-5 h-5" />;
      case 'minimally_invasive': return <Zap className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const recommendedTreatments = getRecommendedTreatments();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">BPH Treatment Decision Guide</h2>
        <p className="text-gray-600">Evidence-based treatment recommendations based on prostate volume and clinical factors</p>
      </div>

      {prostateVolume && (
        <Alert className="border-blue-200 bg-blue-50">
          <Target className="w-4 h-4" />
          <AlertDescription className="text-blue-800">
            Based on prostate volume of {prostateVolume.toFixed(1)} mL, showing {recommendedTreatments.length} recommended treatment options.
          </AlertDescription>
        </Alert>
      )}

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="medical">Medical</TabsTrigger>
          <TabsTrigger value="surgical">Surgical</TabsTrigger>
          <TabsTrigger value="comparison">Compare</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4">
            {recommendedTreatments.slice(0, 3).map((treatment, index) => (
              <Card key={treatment.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {getTypeIcon(treatment.type)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{treatment.name}</h3>
                        <p className="text-sm text-gray-600">Volume Range: {treatment.volumeRange}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={getRiskColor(treatment.riskLevel)}>
                        {treatment.riskLevel} risk
                      </Badge>
                      <Badge variant="outline">
                        {treatment.efficacy}% effective
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Symptom Relief</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={treatment.outcomes.symptomImprovement} className="flex-1" />
                        <span className="text-sm font-medium">{treatment.outcomes.symptomImprovement}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Flow Improvement</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={treatment.outcomes.flowImprovement} className="flex-1" />
                        <span className="text-sm font-medium">{treatment.outcomes.flowImprovement}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Durability</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={treatment.outcomes.durability} className="flex-1" />
                        <span className="text-sm font-medium">{treatment.outcomes.durability}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Recovery: {treatment.recoveryTime}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleTreatmentClick(treatment.name)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="medical" className="space-y-4">
          <div className="grid gap-4">
            {recommendedTreatments.filter(t => t.type === 'medical').map((treatment) => (
              <Card key={treatment.name}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Pill className="w-5 h-5 text-blue-600" />
                    <span>{treatment.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{treatment.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Indications
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {treatment.indications.map((indication, index) => (
                          <li key={index}>• {indication}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        Contraindications
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {treatment.contraindications.map((contraindication, index) => (
                          <li key={index}>• {contraindication}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="surgical" className="space-y-4">
          <div className="grid gap-4">
            {recommendedTreatments.filter(t => t.type === 'surgical' || t.type === 'minimally_invasive').map((treatment) => (
              <Card key={treatment.name}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {getTypeIcon(treatment.type)}
                    <span>{treatment.name}</span>
                    <Badge className={getRiskColor(treatment.riskLevel)}>
                      {treatment.riskLevel} risk
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{treatment.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm font-medium">Efficacy</p>
                      <p className="text-lg font-bold text-blue-600">{treatment.efficacy}%</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <Clock className="w-6 h-6 text-green-600 mx-auto mb-1" />
                      <p className="text-sm font-medium">Recovery</p>
                      <p className="text-sm font-semibold text-green-600">{treatment.recoveryTime}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                      <p className="text-sm font-medium">Volume Range</p>
                      <p className="text-sm font-semibold text-purple-600">{treatment.volumeRange}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Best For:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {treatment.indications.map((indication, index) => (
                          <li key={index}>• {indication}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Not Suitable For:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {treatment.contraindications.map((contraindication, index) => (
                          <li key={index}>• {contraindication}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Treatment Comparison Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Treatment</th>
                      <th className="text-left p-2">Type</th>
                      <th className="text-left p-2">Volume Range</th>
                      <th className="text-left p-2">Efficacy</th>
                      <th className="text-left p-2">Risk</th>
                      <th className="text-left p-2">Recovery</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recommendedTreatments.map((treatment, index) => (
                      <tr key={treatment.name} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="p-2 font-medium">{treatment.name}</td>
                        <td className="p-2">
                          <Badge variant="outline">
                            {treatment.type.replace('_', ' ')}
                          </Badge>
                        </td>
                        <td className="p-2">{treatment.volumeRange}</td>
                        <td className="p-2">
                          <div className="flex items-center space-x-2">
                            <Progress value={treatment.efficacy} className="w-16" />
                            <span>{treatment.efficacy}%</span>
                          </div>
                        </td>
                        <td className="p-2">
                          <Badge className={getRiskColor(treatment.riskLevel)}>
                            {treatment.riskLevel}
                          </Badge>
                        </td>
                        <td className="p-2">{treatment.recoveryTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}