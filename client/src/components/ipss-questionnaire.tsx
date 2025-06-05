import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ClipboardList, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

interface IPSSQuestion {
  id: number;
  question: string;
  description: string;
}

interface IPSSResult {
  totalScore: number;
  severity: string;
  interpretation: string;
  recommendations: string[];
  qualityOfLife: number;
  severityClass: string;
}

const ipssQuestions: IPSSQuestion[] = [
  {
    id: 1,
    question: "Incomplete Emptying",
    description: "Over the past month, how often have you had a sensation of not emptying your bladder completely after you finished urinating?"
  },
  {
    id: 2,
    question: "Frequency",
    description: "Over the past month, how often have you had to urinate again less than two hours after you finished urinating?"
  },
  {
    id: 3,
    question: "Intermittency",
    description: "Over the past month, how often have you found you stopped and started again several times when you urinated?"
  },
  {
    id: 4,
    question: "Urgency",
    description: "Over the past month, how often have you found it difficult to postpone urination?"
  },
  {
    id: 5,
    question: "Weak Stream",
    description: "Over the past month, how often have you had a weak urinary stream?"
  },
  {
    id: 6,
    question: "Straining",
    description: "Over the past month, how often have you had to push or strain to begin urination?"
  },
  {
    id: 7,
    question: "Nocturia",
    description: "Over the past month, many times did you most typically get up to urinate from the time you went to bed until the time you got up in the morning?"
  }
];

const responseOptions = [
  { value: "0", label: "Not at all", nocturiaLabel: "None" },
  { value: "1", label: "Less than 1 time in 5", nocturiaLabel: "1 time" },
  { value: "2", label: "Less than half the time", nocturiaLabel: "2 times" },
  { value: "3", label: "About half the time", nocturiaLabel: "3 times" },
  { value: "4", label: "More than half the time", nocturiaLabel: "4 times" },
  { value: "5", label: "Almost always", nocturiaLabel: "5 or more times" }
];

const qualityOfLifeOptions = [
  { value: "0", label: "Delighted" },
  { value: "1", label: "Pleased" },
  { value: "2", label: "Mostly satisfied" },
  { value: "3", label: "Mixed" },
  { value: "4", label: "Mostly dissatisfied" },
  { value: "5", label: "Unhappy" },
  { value: "6", label: "Terrible" }
];

export default function IPSSQuestionnaire() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [qualityOfLife, setQualityOfLife] = useState<string>("");
  const [result, setResult] = useState<IPSSResult | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const { toast } = useToast();

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateIPSS = () => {
    const allQuestionsAnswered = ipssQuestions.every(q => answers[q.id] !== undefined);
    
    if (!allQuestionsAnswered || !qualityOfLife) {
      toast({
        title: "Incomplete Assessment",
        description: "Please answer all questions to calculate your IPSS score.",
        variant: "destructive"
      });
      return;
    }

    const totalScore = ipssQuestions.reduce((sum, question) => {
      return sum + parseInt(answers[question.id] || "0");
    }, 0);

    const qolScore = parseInt(qualityOfLife);

    let severity: string;
    let interpretation: string;
    let recommendations: string[];
    let severityClass: string;

    if (totalScore <= 7) {
      severity = "Mild Symptoms";
      interpretation = "Your symptoms are mild and may not require immediate treatment. Lifestyle modifications and watchful waiting are appropriate initial approaches.";
      recommendations = [
        "Annual monitoring with repeat IPSS assessment",
        "Lifestyle modifications (fluid timing, caffeine reduction)",
        "Bladder training and pelvic floor exercises",
        "Consider alpha-blocker if symptoms bothersome"
      ];
      severityClass = "text-green-600";
    } else if (totalScore <= 19) {
      severity = "Moderate Symptoms";
      interpretation = "Your symptoms are moderate and may benefit from medical treatment. Combination therapy might be appropriate depending on prostate size.";
      recommendations = [
        "Medical therapy with alpha-blockers (tamsulosin, alfuzosin)",
        "Consider 5-ARI if prostate volume >30 mL",
        "Combination therapy for optimal symptom control",
        "Re-assess in 3-6 months after treatment initiation"
      ];
      severityClass = "text-yellow-600";
    } else {
      severity = "Severe Symptoms";
      interpretation = "Your symptoms are severe and significantly impact quality of life. Medical or surgical intervention is recommended.";
      recommendations = [
        "Immediate medical therapy optimization",
        "Consider surgical evaluation (TURP, HoLEP, etc.)",
        "Evaluate for complications (retention, stones, UTI)",
        "Urodynamic studies if surgical planning needed"
      ];
      severityClass = "text-red-600";
    }

    const ipssResult: IPSSResult = {
      totalScore,
      severity,
      interpretation,
      recommendations,
      qualityOfLife: qolScore,
      severityClass
    };

    setResult(ipssResult);
    
    trackEvent('ipss_assessment_completed', 'medical_assessment', 'ipss_calculation', totalScore);

    toast({
      title: "IPSS Assessment Complete",
      description: `Total Score: ${totalScore}/35 - ${severity}`,
    });
  };

  const resetQuestionnaire = () => {
    setAnswers({});
    setQualityOfLife("");
    setResult(null);
    setCurrentQuestion(1);
  };

  const progress = (Object.keys(answers).length / ipssQuestions.length) * 100;

  if (result) {
    return (
      <div className="space-y-6">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-600 flex items-center">
              <ClipboardList className="mr-3 w-6 h-6" />
              IPSS Assessment Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded border">
                <p className="text-sm text-gray-600">Total IPSS Score</p>
                <p className="text-3xl font-bold text-blue-600">{result.totalScore}</p>
                <p className="text-sm text-gray-500">out of 35</p>
              </div>
              <div className="text-center p-4 bg-white rounded border">
                <p className="text-sm text-gray-600">Symptom Severity</p>
                <p className={`text-lg font-semibold ${result.severityClass}`}>{result.severity}</p>
              </div>
              <div className="text-center p-4 bg-white rounded border">
                <p className="text-sm text-gray-600">Quality of Life Impact</p>
                <p className="text-lg font-semibold text-purple-600">{result.qualityOfLife}/6</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="bg-white rounded border p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Clinical Interpretation:</h4>
              <p className="text-gray-600 text-sm">{result.interpretation}</p>
            </div>
            
            <div className="bg-white rounded border p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Recommended Actions:</h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded border p-4">
              <h4 className="font-semibold text-gray-900 mb-3">IPSS Score Interpretation:</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Mild Symptoms: 0-7 points</span>
                  </div>
                  <span className="text-gray-500">Watchful waiting</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Moderate Symptoms: 8-19 points</span>
                  </div>
                  <span className="text-gray-500">Medical therapy</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span>Severe Symptoms: 20-35 points</span>
                  </div>
                  <span className="text-gray-500">Surgery consideration</span>
                </div>
              </div>
            </div>
            
            <Button onClick={resetQuestionnaire} variant="outline" className="w-full">
              Take Assessment Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-2 flex items-center justify-center">
          <ClipboardList className="mr-3 w-6 h-6" />
          International Prostate Symptom Score (IPSS)
        </h2>
        <p className="text-gray-600 text-sm">Validated questionnaire for assessing lower urinary tract symptoms</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm text-gray-600">{Object.keys(answers).length}/{ipssQuestions.length + 1}</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      <div className="space-y-6">
        {ipssQuestions.map((question) => (
          <Card key={question.id} className="border-gray-200">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {question.id}. {question.question}
                </h3>
                <p className="text-gray-600 text-sm">{question.description}</p>
              </div>
              
              <RadioGroup
                value={answers[question.id] || ""}
                onValueChange={(value) => handleAnswerChange(question.id, value)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {responseOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                      <RadioGroupItem value={option.value} id={`q${question.id}-${option.value}`} />
                      <Label 
                        htmlFor={`q${question.id}-${option.value}`} 
                        className="text-sm cursor-pointer flex-1"
                      >
                        <div className="font-medium">{option.value}</div>
                        <div className="text-gray-600">
                          {question.id === 7 ? option.nocturiaLabel : option.label}
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        ))}

        {/* Quality of Life Question */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <TrendingUp className="mr-2 w-5 h-5 text-purple-600" />
                Quality of Life Assessment
              </h3>
              <p className="text-gray-600 text-sm">
                If you were to spend the rest of your life with your urinary condition the way it is now, how would you feel about that?
              </p>
            </div>
            
            <RadioGroup
              value={qualityOfLife}
              onValueChange={setQualityOfLife}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {qualityOfLifeOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-purple-50">
                    <RadioGroupItem value={option.value} id={`qol-${option.value}`} />
                    <Label 
                      htmlFor={`qol-${option.value}`} 
                      className="text-sm cursor-pointer flex-1"
                    >
                      <div className="font-medium">{option.value}</div>
                      <div className="text-gray-600">{option.label}</div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
          <AlertCircle className="mr-2 w-4 h-4" />
          About the IPSS Assessment
        </h4>
        <div className="text-sm text-blue-800 space-y-2">
          <p>
            The International Prostate Symptom Score (IPSS) is the gold standard questionnaire for evaluating 
            lower urinary tract symptoms in men. It was developed by the American Urological Association and 
            is used worldwide for clinical assessment and research.
          </p>
          <p>
            This assessment helps healthcare providers determine symptom severity and guide treatment decisions. 
            The results should always be interpreted by a qualified healthcare professional.
          </p>
        </div>
      </div>

      <Button 
        onClick={calculateIPSS}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        disabled={Object.keys(answers).length < ipssQuestions.length || !qualityOfLife}
      >
        <ClipboardList className="mr-2 w-5 h-5" />
        Calculate IPSS Score
      </Button>
    </div>
  );
}