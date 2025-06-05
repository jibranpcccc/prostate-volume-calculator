import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Heart, TrendingUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface EDQuestion {
  id: number;
  question: string;
  description: string;
}

interface EDResult {
  totalScore: number;
  severity: string;
  interpretation: string;
  recommendations: string[];
  treatmentOptions: string[];
  severityClass: string;
  followUpRecommendation: string;
}

const edQuestions: EDQuestion[] = [
  {
    id: 1,
    question: "How do you rate your confidence that you could get and keep an erection?",
    description: "Consider your overall confidence level"
  },
  {
    id: 2,
    question: "When you had erections with sexual stimulation, how often were your erections hard enough for penetration?",
    description: "Rate the firmness of your erections"
  },
  {
    id: 3,
    question: "During sexual intercourse, how often were you able to maintain your erection after you had penetrated your partner?",
    description: "Consider your ability to maintain erection during intercourse"
  },
  {
    id: 4,
    question: "During sexual intercourse, how difficult was it to maintain your erection to completion of intercourse?",
    description: "Rate the difficulty in maintaining erection until completion"
  },
  {
    id: 5,
    question: "When you attempted sexual intercourse, how often was it satisfactory for you?",
    description: "Consider your overall satisfaction with sexual intercourse"
  }
];

const scoreOptions = [
  { value: 5, label: "Very High/Almost Always/Very Easy/Almost Always Satisfactory" },
  { value: 4, label: "High/Most Times/Slightly Difficult/Usually Satisfactory" },
  { value: 3, label: "Moderate/Sometimes/Moderately Difficult/Sometimes Satisfactory" },
  { value: 2, label: "Low/A Few Times/Very Difficult/Rarely Satisfactory" },
  { value: 1, label: "Very Low/Almost Never/Extremely Difficult/Almost Never Satisfactory" },
  { value: 0, label: "No Sexual Activity/Did Not Attempt" }
];

export default function ErectileDysfunctionCalculator() {
  const [responses, setResponses] = useState<Record<number, number>>({});
  const [result, setResult] = useState<EDResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleResponseChange = (questionId: number, score: number) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: score
    }));
  };

  const calculateEDScore = () => {
    const totalScore = Object.values(responses).reduce((sum, score) => sum + score, 0);
    
    let severity: string;
    let severityClass: string;
    let interpretation: string;
    let recommendations: string[];
    let treatmentOptions: string[];
    let followUpRecommendation: string;

    if (totalScore >= 22) {
      severity = "No Erectile Dysfunction";
      severityClass = "bg-green-100 text-green-800 border-green-200";
      interpretation = "Your responses indicate normal erectile function. You have minimal or no erectile dysfunction symptoms.";
      recommendations = [
        "Maintain healthy lifestyle habits",
        "Regular exercise and balanced diet",
        "Avoid smoking and excessive alcohol",
        "Manage stress effectively"
      ];
      treatmentOptions = [
        "No treatment needed",
        "Continue preventive health measures",
        "Regular health check-ups"
      ];
      followUpRecommendation = "Annual health assessment";
    } else if (totalScore >= 17) {
      severity = "Mild Erectile Dysfunction";
      severityClass = "bg-yellow-100 text-yellow-800 border-yellow-200";
      interpretation = "Your responses suggest mild erectile dysfunction. This may be occasional and related to stress, fatigue, or other temporary factors.";
      recommendations = [
        "Lifestyle modifications (exercise, diet, sleep)",
        "Stress reduction techniques",
        "Communication with partner",
        "Monitor symptoms over time"
      ];
      treatmentOptions = [
        "Lifestyle interventions",
        "Counseling if stress-related",
        "Consider medical evaluation if persistent"
      ];
      followUpRecommendation = "Monitor for 3-6 months, seek evaluation if worsening";
    } else if (totalScore >= 12) {
      severity = "Mild to Moderate Erectile Dysfunction";
      severityClass = "bg-orange-100 text-orange-800 border-orange-200";
      interpretation = "Your responses indicate mild to moderate erectile dysfunction that may benefit from medical evaluation and treatment.";
      recommendations = [
        "Consult with healthcare provider",
        "Comprehensive medical history review",
        "Laboratory testing (testosterone, glucose)",
        "Cardiovascular risk assessment"
      ];
      treatmentOptions = [
        "Oral medications (PDE5 inhibitors)",
        "Lifestyle modifications",
        "Psychological counseling",
        "Hormone evaluation"
      ];
      followUpRecommendation = "Medical evaluation recommended within 1-2 months";
    } else if (totalScore >= 8) {
      severity = "Moderate Erectile Dysfunction";
      severityClass = "bg-red-100 text-red-800 border-red-200";
      interpretation = "Your responses suggest moderate erectile dysfunction that would benefit from medical treatment and comprehensive evaluation.";
      recommendations = [
        "Prompt medical evaluation",
        "Cardiovascular assessment",
        "Diabetes screening",
        "Medication review for contributing factors"
      ];
      treatmentOptions = [
        "Oral medications as first-line therapy",
        "Vacuum erection devices",
        "Intracavernosal injections",
        "Psychological support"
      ];
      followUpRecommendation = "Medical evaluation recommended within 2-4 weeks";
    } else {
      severity = "Severe Erectile Dysfunction";
      severityClass = "bg-red-100 text-red-800 border-red-200";
      interpretation = "Your responses indicate severe erectile dysfunction that requires comprehensive medical evaluation and treatment.";
      recommendations = [
        "Immediate medical consultation",
        "Comprehensive cardiovascular evaluation",
        "Endocrine assessment",
        "Psychological evaluation",
        "Partner counseling consideration"
      ];
      treatmentOptions = [
        "Oral medications with dose optimization",
        "Intracavernosal injection therapy",
        "Vacuum erection devices",
        "Penile prosthesis consideration",
        "Specialized urology referral"
      ];
      followUpRecommendation = "Urgent medical evaluation recommended within 1-2 weeks";
    }

    const edResult: EDResult = {
      totalScore,
      severity,
      interpretation,
      recommendations,
      treatmentOptions,
      severityClass,
      followUpRecommendation
    };

    setResult(edResult);
    setShowResult(true);
  };

  const isComplete = Object.keys(responses).length === edQuestions.length;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Erectile Dysfunction Assessment</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          International Index of Erectile Function (IIEF-5) Questionnaire for assessing erectile dysfunction severity
        </p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          This assessment is based on the validated IIEF-5 questionnaire. Results should be discussed with a healthcare provider for proper diagnosis and treatment planning.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            IIEF-5 Assessment Questions
          </CardTitle>
          <CardDescription>
            Please answer all questions based on your sexual experiences over the past 6 months
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {edQuestions.map((question) => (
            <div key={question.id} className="space-y-4">
              <div>
                <Label className="text-base font-medium text-gray-900">
                  {question.id}. {question.question}
                </Label>
                <p className="text-sm text-gray-600 mt-1">{question.description}</p>
              </div>
              
              <RadioGroup
                value={responses[question.id]?.toString() || ""}
                onValueChange={(value) => handleResponseChange(question.id, parseInt(value))}
                className="space-y-2"
              >
                {scoreOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value.toString()} id={`q${question.id}-${option.value}`} />
                    <Label 
                      htmlFor={`q${question.id}-${option.value}`}
                      className="text-sm cursor-pointer flex-1"
                    >
                      <span className="font-medium">{option.value}</span> - {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}

          <Button
            onClick={calculateEDScore}
            disabled={!isComplete}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Calculate ED Assessment Score
          </Button>
        </CardContent>
      </Card>

      {showResult && result && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Assessment Results
              <Badge className={result.severityClass}>
                {result.severity}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">IIEF-5 Score</h3>
                <p className="text-3xl font-bold text-blue-600">{result.totalScore}/25</p>
                <p className="text-sm text-gray-600">Total assessment score</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Severity Level</h3>
                <Badge className={`${result.severityClass} text-sm py-1 px-3`}>
                  {result.severity}
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

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Treatment Options</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {result.treatmentOptions.map((treatment, index) => (
                    <li key={index}>{treatment}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Follow-up Recommendation</h3>
                <p className="text-blue-800">{result.followUpRecommendation}</p>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Medical Disclaimer:</strong> This assessment tool is for educational purposes only and should not replace professional medical consultation. Erectile dysfunction can be a sign of underlying health conditions that require medical evaluation.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>About the IIEF-5 Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Clinical Validity</h3>
              <p className="text-sm text-gray-700">
                The IIEF-5 is a validated, abbreviated version of the International Index of Erectile Function, 
                widely used in clinical practice for screening and monitoring erectile dysfunction.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Scoring Interpretation</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 22-25: No ED</li>
                <li>• 17-21: Mild ED</li>
                <li>• 12-16: Mild to Moderate ED</li>
                <li>• 8-11: Moderate ED</li>
                <li>• 5-7: Severe ED</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}