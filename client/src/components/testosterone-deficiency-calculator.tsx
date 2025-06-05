import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Activity, TrendingUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ADAMQuestion {
  id: number;
  question: string;
  description: string;
}

interface TestosteroneResult {
  positiveSymptoms: number;
  totalQuestions: number;
  riskLevel: string;
  interpretation: string;
  recommendations: string[];
  testingRecommendation: string;
  riskClass: string;
  nextSteps: string[];
}

const adamQuestions: ADAMQuestion[] = [
  {
    id: 1,
    question: "Do you have a decrease in libido (sex drive)?",
    description: "Reduced interest in sexual activity"
  },
  {
    id: 2,
    question: "Do you have a lack of energy?",
    description: "Feeling tired or lacking vitality throughout the day"
  },
  {
    id: 3,
    question: "Do you have a decrease in strength and/or endurance?",
    description: "Reduced physical strength or stamina"
  },
  {
    id: 4,
    question: "Have you lost height?",
    description: "Noticeable decrease in your height"
  },
  {
    id: 5,
    question: "Have you noticed a decreased enjoyment of life?",
    description: "Less pleasure or satisfaction in daily activities"
  },
  {
    id: 6,
    question: "Are you sad and/or grumpy?",
    description: "Increased irritability or depressive feelings"
  },
  {
    id: 7,
    question: "Are your erections less strong?",
    description: "Decreased firmness or quality of erections"
  },
  {
    id: 8,
    question: "Have you noticed a recent deterioration in your ability to play sports?",
    description: "Decline in athletic performance or physical activities"
  },
  {
    id: 9,
    question: "Are you falling asleep after dinner?",
    description: "Unusual fatigue or sleepiness in the evening"
  },
  {
    id: 10,
    question: "Has there been a recent deterioration in your work performance?",
    description: "Decline in job performance or concentration"
  }
];

export default function TestosteroneDeficiencyCalculator() {
  const [responses, setResponses] = useState<Record<number, boolean>>({});
  const [result, setResult] = useState<TestosteroneResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleResponseChange = (questionId: number, value: string) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value === "yes"
    }));
  };

  const calculateADAMScore = () => {
    const positiveSymptoms = Object.values(responses).filter(Boolean).length;
    const totalQuestions = adamQuestions.length;
    
    // ADAM screening criteria: Questions 1 or 7 (libido/erections) OR any 3+ other symptoms
    const hasLibidoIssues = responses[1] === true;
    const hasErectionIssues = responses[7] === true;
    const otherSymptoms = Object.entries(responses)
      .filter(([questionId, answer]) => answer && questionId !== "1" && questionId !== "7")
      .length;

    let riskLevel: string;
    let riskClass: string;
    let interpretation: string;
    let recommendations: string[];
    let testingRecommendation: string;
    let nextSteps: string[];

    const isADAMPositive = hasLibidoIssues || hasErectionIssues || otherSymptoms >= 3;

    if (!isADAMPositive && positiveSymptoms <= 1) {
      riskLevel = "Low Risk for Testosterone Deficiency";
      riskClass = "bg-green-100 text-green-800 border-green-200";
      interpretation = "Your responses suggest a low likelihood of testosterone deficiency. Few symptoms are present that would typically indicate low testosterone levels.";
      recommendations = [
        "Maintain healthy lifestyle habits",
        "Regular exercise and strength training",
        "Adequate sleep (7-9 hours nightly)",
        "Balanced diet with adequate protein",
        "Stress management techniques"
      ];
      testingRecommendation = "Routine testosterone testing not immediately indicated based on symptoms";
      nextSteps = [
        "Continue healthy lifestyle practices",
        "Monitor for symptom changes",
        "Annual health checkups"
      ];
    } else if (positiveSymptoms <= 3 && !isADAMPositive) {
      riskLevel = "Possible Testosterone Deficiency";
      riskClass = "bg-yellow-100 text-yellow-800 border-yellow-200";
      interpretation = "Your responses suggest some symptoms that could be related to testosterone deficiency, but may also have other causes such as stress, sleep deprivation, or other medical conditions.";
      recommendations = [
        "Lifestyle optimization first",
        "Improve sleep quality and duration",
        "Regular exercise program",
        "Stress reduction strategies",
        "Monitor symptoms over 1-2 months"
      ];
      testingRecommendation = "Consider testosterone testing if symptoms persist after lifestyle modifications";
      nextSteps = [
        "Implement lifestyle changes",
        "Track symptom progression",
        "Consider medical evaluation if no improvement"
      ];
    } else {
      riskLevel = "High Risk for Testosterone Deficiency";
      riskClass = "bg-red-100 text-red-800 border-red-200";
      interpretation = "Your responses indicate multiple symptoms consistent with testosterone deficiency (hypogonadism). The ADAM questionnaire is positive, suggesting clinical evaluation and laboratory testing are warranted.";
      recommendations = [
        "Medical evaluation with healthcare provider",
        "Morning testosterone level testing (8-10 AM)",
        "Comprehensive hormone panel",
        "Assessment for underlying causes",
        "Review of medications that may affect testosterone"
      ];
      testingRecommendation = "Laboratory testing strongly recommended - morning total testosterone, free testosterone, LH, FSH";
      nextSteps = [
        "Schedule medical appointment within 2-4 weeks",
        "Prepare list of all symptoms and medications",
        "Consider specialist referral (endocrinology/urology)"
      ];
    }

    const testosteroneResult: TestosteroneResult = {
      positiveSymptoms,
      totalQuestions,
      riskLevel,
      interpretation,
      recommendations,
      testingRecommendation,
      riskClass,
      nextSteps
    };

    setResult(testosteroneResult);
    setShowResult(true);
  };

  const isComplete = Object.keys(responses).length === adamQuestions.length;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Testosterone Deficiency Screening</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ADAM (Androgen Deficiency in Aging Males) Questionnaire for screening testosterone deficiency symptoms
        </p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          This screening tool is based on the validated ADAM questionnaire. Results should be discussed with a healthcare provider for proper evaluation and testosterone testing if indicated.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-500" />
            ADAM Screening Questions
          </CardTitle>
          <CardDescription>
            Please answer "Yes" or "No" to each question based on your recent experiences (past 6 months)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {adamQuestions.map((question) => (
            <div key={question.id} className="space-y-3">
              <div>
                <Label className="text-base font-medium text-gray-900">
                  {question.id}. {question.question}
                </Label>
                <p className="text-sm text-gray-600 mt-1">{question.description}</p>
              </div>
              
              <RadioGroup
                value={responses[question.id] !== undefined ? (responses[question.id] ? "yes" : "no") : ""}
                onValueChange={(value) => handleResponseChange(question.id, value)}
                className="flex flex-row space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id={`q${question.id}-yes`} />
                  <Label htmlFor={`q${question.id}-yes`} className="cursor-pointer font-medium text-red-600">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id={`q${question.id}-no`} />
                  <Label htmlFor={`q${question.id}-no`} className="cursor-pointer font-medium text-green-600">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
          ))}

          <Button
            onClick={calculateADAMScore}
            disabled={!isComplete}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Calculate Testosterone Deficiency Risk
          </Button>
        </CardContent>
      </Card>

      {showResult && result && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Screening Results
              <Badge className={result.riskClass}>
                {result.riskLevel}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Positive Symptoms</h3>
                <p className="text-3xl font-bold text-blue-600">{result.positiveSymptoms}/{result.totalQuestions}</p>
                <p className="text-sm text-gray-600">Symptoms present</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Risk Assessment</h3>
                <Badge className={`${result.riskClass} text-sm py-1 px-3`}>
                  {result.riskLevel}
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Clinical Interpretation</h3>
                <p className="text-gray-700">{result.interpretation}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Recommendations</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {result.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Testing Recommendation</h3>
                <p className="text-blue-800">{result.testingRecommendation}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {result.nextSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Medical Disclaimer:</strong> This screening tool is for educational purposes only. Testosterone deficiency diagnosis requires laboratory testing and medical evaluation. Many symptoms can have multiple causes.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>About Testosterone Deficiency</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">ADAM Questionnaire</h3>
              <p className="text-sm text-gray-700">
                The ADAM questionnaire is a validated screening tool for androgen deficiency in aging males. 
                It's designed to identify men who may benefit from testosterone testing and evaluation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">When to Test</h3>
              <p className="text-sm text-gray-700">
                Testosterone testing is recommended for men with symptoms suggestive of hypogonadism. 
                Morning (8-10 AM) total testosterone levels should be measured on at least two separate occasions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Normal Testosterone Ranges</h3>
              <p className="text-sm text-gray-700">
                Normal total testosterone: 300-1000 ng/dL (10.4-34.7 nmol/L). 
                However, symptoms and individual variation are important considerations beyond just laboratory values.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Treatment Considerations</h3>
              <p className="text-sm text-gray-700">
                Testosterone replacement therapy may be appropriate for men with confirmed hypogonadism and symptoms. 
                Benefits and risks should be carefully evaluated with a healthcare provider.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}