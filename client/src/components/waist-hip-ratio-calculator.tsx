import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Ruler, TrendingUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface WHRResult {
  ratio: number;
  riskLevel: string;
  riskClass: string;
  interpretation: string;
  recommendations: string[];
  healthRisks: string[];
  targetRatio: number;
  waistReduction?: number;
}

export default function WaistHipRatioCalculator() {
  const [waistCircumference, setWaistCircumference] = useState("");
  const [hipCircumference, setHipCircumference] = useState("");
  const [gender, setGender] = useState("");
  const [units, setUnits] = useState("cm");
  const [result, setResult] = useState<WHRResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateWHR = () => {
    let waist = parseFloat(waistCircumference);
    let hip = parseFloat(hipCircumference);

    if (isNaN(waist) || isNaN(hip) || hip === 0) {
      return;
    }

    // Convert to cm if needed
    if (units === "inches") {
      waist = waist * 2.54;
      hip = hip * 2.54;
    }

    const ratio = waist / hip;

    let riskLevel: string;
    let riskClass: string;
    let interpretation: string;
    let recommendations: string[];
    let healthRisks: string[];
    let targetRatio: number;
    let waistReduction: number | undefined;

    // Gender-specific risk thresholds
    const maleThresholds = { low: 0.90, moderate: 0.95, high: 1.0 };
    const femaleThresholds = { low: 0.80, moderate: 0.85, high: 0.90 };
    
    const thresholds = gender === "male" ? maleThresholds : femaleThresholds;
    targetRatio = gender === "male" ? 0.90 : 0.80;

    if (ratio <= thresholds.low) {
      riskLevel = "Low Risk";
      riskClass = "bg-green-100 text-green-800 border-green-200";
      interpretation = "Your waist-to-hip ratio indicates low cardiovascular and metabolic risk. Your body fat distribution pattern is associated with better health outcomes.";
      recommendations = [
        "Maintain current healthy lifestyle habits",
        "Continue regular physical activity",
        "Keep balanced nutrition",
        "Monitor for any changes over time"
      ];
      healthRisks = [
        "Minimal increased risk of cardiovascular disease",
        "Lower risk of type 2 diabetes",
        "Reduced risk of metabolic syndrome"
      ];
    } else if (ratio <= thresholds.moderate) {
      riskLevel = "Moderate Risk";
      riskClass = "bg-yellow-100 text-yellow-800 border-yellow-200";
      interpretation = "Your waist-to-hip ratio indicates moderate cardiovascular and metabolic risk. Some attention to lifestyle factors is recommended.";
      recommendations = [
        "Increase cardiovascular exercise",
        "Focus on core strengthening exercises",
        "Reduce refined carbohydrates and added sugars",
        "Monitor blood pressure and cholesterol",
        "Consider nutritionist consultation"
      ];
      healthRisks = [
        "Moderately increased cardiovascular risk",
        "Elevated risk of type 2 diabetes",
        "Increased risk of metabolic syndrome",
        "Higher risk of sleep apnea"
      ];
      
      // Calculate waist reduction needed
      const targetWaist = hip * targetRatio;
      waistReduction = Math.round((waist - targetWaist) * (units === "inches" ? 0.394 : 1) * 10) / 10;
    } else if (ratio <= thresholds.high) {
      riskLevel = "High Risk";
      riskClass = "bg-orange-100 text-orange-800 border-orange-200";
      interpretation = "Your waist-to-hip ratio indicates high cardiovascular and metabolic risk. Active lifestyle modifications and medical evaluation are recommended.";
      recommendations = [
        "Implement structured exercise program",
        "Dietary consultation for weight management",
        "Regular medical monitoring",
        "Consider metabolic screening tests",
        "Stress management techniques"
      ];
      healthRisks = [
        "Significantly increased cardiovascular disease risk",
        "High risk of type 2 diabetes",
        "Elevated risk of metabolic syndrome",
        "Increased risk of stroke",
        "Higher risk of certain cancers"
      ];
      
      const targetWaist = hip * targetRatio;
      waistReduction = Math.round((waist - targetWaist) * (units === "inches" ? 0.394 : 1) * 10) / 10;
    } else {
      riskLevel = "Very High Risk";
      riskClass = "bg-red-100 text-red-800 border-red-200";
      interpretation = "Your waist-to-hip ratio indicates very high cardiovascular and metabolic risk. Immediate lifestyle intervention and medical evaluation are strongly recommended.";
      recommendations = [
        "Immediate medical consultation",
        "Comprehensive metabolic evaluation",
        "Structured weight loss program",
        "Regular monitoring of cardiovascular risk factors",
        "Consider pharmaceutical interventions if appropriate"
      ];
      healthRisks = [
        "Very high cardiovascular disease risk",
        "Substantially increased diabetes risk",
        "High risk of metabolic syndrome",
        "Elevated stroke risk",
        "Increased risk of heart attack",
        "Higher cancer risk"
      ];
      
      const targetWaist = hip * targetRatio;
      waistReduction = Math.round((waist - targetWaist) * (units === "inches" ? 0.394 : 1) * 10) / 10;
    }

    const whrResult: WHRResult = {
      ratio: Math.round(ratio * 100) / 100,
      riskLevel,
      riskClass,
      interpretation,
      recommendations,
      healthRisks,
      targetRatio,
      waistReduction
    };

    setResult(whrResult);
    setShowResult(true);
  };

  const isComplete = waistCircumference && hipCircumference && gender;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Waist-to-Hip Ratio Calculator</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Assess cardiovascular and metabolic disease risk based on body fat distribution patterns
        </p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Waist-to-hip ratio is a better predictor of cardiovascular risk than BMI alone, as it specifically measures abdominal obesity patterns.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ruler className="h-5 w-5 text-blue-500" />
            Body Measurements
          </CardTitle>
          <CardDescription>
            Enter waist and hip circumference measurements for risk assessment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label className="text-base font-medium">Measurement Units</Label>
            <RadioGroup
              value={units}
              onValueChange={setUnits}
              className="flex flex-row space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cm" id="cm" />
                <Label htmlFor="cm" className="cursor-pointer">
                  Centimeters (cm)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="inches" id="inches" />
                <Label htmlFor="inches" className="cursor-pointer">
                  Inches (in)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="waistCircumference">
                Waist Circumference ({units})
              </Label>
              <Input
                id="waistCircumference"
                type="number"
                step="0.1"
                placeholder={units === "cm" ? "60-150" : "24-60"}
                value={waistCircumference}
                onChange={(e) => setWaistCircumference(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">
                Measure at narrowest point between ribs and hips
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hipCircumference">
                Hip Circumference ({units})
              </Label>
              <Input
                id="hipCircumference"
                type="number"
                step="0.1"
                placeholder={units === "cm" ? "80-180" : "32-72"}
                value={hipCircumference}
                onChange={(e) => setHipCircumference(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">
                Measure at widest part of hips and buttocks
              </p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label className="text-base font-medium">Gender</Label>
              <RadioGroup
                value={gender}
                onValueChange={setGender}
                className="flex flex-row space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="cursor-pointer">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="cursor-pointer">Female</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Button
            onClick={calculateWHR}
            disabled={!isComplete}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Calculate Waist-to-Hip Ratio
          </Button>
        </CardContent>
      </Card>

      {showResult && result && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              WHR Assessment Results
              <Badge className={result.riskClass}>
                {result.riskLevel}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Your WHR</h3>
                <p className="text-3xl font-bold text-blue-600">{result.ratio}</p>
                <p className="text-sm text-gray-600">Waist-to-hip ratio</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Target WHR</h3>
                <p className="text-3xl font-bold text-green-600">≤ {result.targetRatio}</p>
                <p className="text-sm text-gray-600">Optimal range</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Risk Level</h3>
                <Badge className={`${result.riskClass} text-sm py-1 px-3`}>
                  {result.riskLevel}
                </Badge>
              </div>
            </div>

            {result.waistReduction && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">Waist Reduction Target</h3>
                <p className="text-orange-800">
                  Consider reducing waist circumference by approximately{" "}
                  <strong>{result.waistReduction} {units}</strong> to reach optimal ratio
                </p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Health Risk Assessment</h3>
                <p className="text-gray-700">{result.interpretation}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Associated Health Risks</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {result.healthRisks.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Recommendations</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {result.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Clinical Note:</strong> WHR should be interpreted alongside other health indicators including BMI, blood pressure, and metabolic markers for comprehensive risk assessment.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>Understanding Waist-to-Hip Ratio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Risk Categories by Gender</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Men:</strong>
                  <ul className="text-gray-700 mt-1">
                    <li>• Low risk: ≤0.90</li>
                    <li>• Moderate risk: 0.91-0.95</li>
                    <li>• High risk: 0.96-1.0</li>
                    <li>• Very high risk: &gt;1.0</li>
                  </ul>
                </div>
                <div>
                  <strong>Women:</strong>
                  <ul className="text-gray-700 mt-1">
                    <li>• Low risk: ≤0.80</li>
                    <li>• Moderate risk: 0.81-0.85</li>
                    <li>• High risk: 0.86-0.90</li>
                    <li>• Very high risk: &gt;0.90</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Measurement Guidelines</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Measure waist at narrowest point</li>
                <li>• Measure hips at widest point</li>
                <li>• Stand upright, breathe normally</li>
                <li>• Use non-stretchable tape measure</li>
                <li>• Take measurements in underwear</li>
                <li>• Repeat measurements for accuracy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Clinical Significance</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Better cardiovascular predictor than BMI</li>
                <li>• Indicates abdominal obesity pattern</li>
                <li>• Correlates with visceral fat distribution</li>
                <li>• Independent risk factor for mortality</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Improvement Strategies</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Cardiovascular exercise (150+ min/week)</li>
                <li>• Strength training (2-3x per week)</li>
                <li>• Core strengthening exercises</li>
                <li>• Reduce refined carbohydrates</li>
                <li>• Increase fiber intake</li>
                <li>• Manage stress levels</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}