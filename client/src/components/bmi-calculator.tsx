import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Scale, TrendingUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BMIResult {
  bmi: number;
  category: string;
  categoryClass: string;
  healthRisk: string;
  interpretation: string;
  recommendations: string[];
  idealWeightRange: { min: number; max: number };
  weightLossNeeded?: number;
  weightGainNeeded?: number;
}

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [units, setUnits] = useState("metric");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = () => {
    let heightM: number;
    let weightKg: number;

    if (units === "metric") {
      heightM = parseFloat(height) / 100; // cm to meters
      weightKg = parseFloat(weight);
    } else {
      // Imperial units
      const feet = Math.floor(parseFloat(height) / 12);
      const inches = parseFloat(height) % 12;
      heightM = (feet * 12 + inches) * 0.0254; // inches to meters
      weightKg = parseFloat(weight) * 0.453592; // pounds to kg
    }

    if (isNaN(heightM) || isNaN(weightKg) || heightM <= 0 || weightKg <= 0) {
      return;
    }

    const bmi = weightKg / (heightM * heightM);

    let category: string;
    let categoryClass: string;
    let healthRisk: string;
    let interpretation: string;
    let recommendations: string[];

    if (bmi < 18.5) {
      category = "Underweight";
      categoryClass = "bg-blue-100 text-blue-800 border-blue-200";
      healthRisk = "Increased risk of nutritional deficiencies";
      interpretation = "Your BMI indicates you are underweight. This may be associated with increased risk of nutritional deficiencies, weakened immune system, and osteoporosis.";
      recommendations = [
        "Consult with healthcare provider for underlying causes",
        "Consider nutritionist consultation for healthy weight gain",
        "Increase caloric intake with nutrient-dense foods",
        "Strength training to build muscle mass",
        "Monitor for eating disorders if applicable"
      ];
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal Weight";
      categoryClass = "bg-green-100 text-green-800 border-green-200";
      healthRisk = "Lowest health risk";
      interpretation = "Your BMI is within the normal range. This is associated with the lowest risk of weight-related health problems.";
      recommendations = [
        "Maintain current weight through balanced diet",
        "Regular physical activity (150+ minutes/week)",
        "Focus on muscle maintenance and cardiovascular health",
        "Annual health screenings",
        "Continue healthy lifestyle habits"
      ];
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      categoryClass = "bg-yellow-100 text-yellow-800 border-yellow-200";
      healthRisk = "Increased risk of cardiovascular disease";
      interpretation = "Your BMI indicates you are overweight. This is associated with increased risk of cardiovascular disease, type 2 diabetes, and other health conditions.";
      recommendations = [
        "Aim for gradual weight loss (1-2 pounds per week)",
        "Increase physical activity and exercise",
        "Adopt portion control and balanced nutrition",
        "Consider professional guidance (dietitian, trainer)",
        "Monitor blood pressure and cholesterol levels"
      ];
    } else if (bmi >= 30 && bmi < 35) {
      category = "Obesity Class I";
      categoryClass = "bg-orange-100 text-orange-800 border-orange-200";
      healthRisk = "High risk of health complications";
      interpretation = "Your BMI indicates Class I obesity. This significantly increases the risk of cardiovascular disease, diabetes, sleep apnea, and other serious health conditions.";
      recommendations = [
        "Medical evaluation for weight management program",
        "Structured diet and exercise plan",
        "Consider behavioral therapy or counseling",
        "Regular monitoring of blood pressure, glucose, lipids",
        "Evaluate for sleep apnea and other complications"
      ];
    } else if (bmi >= 35 && bmi < 40) {
      category = "Obesity Class II";
      categoryClass = "bg-red-100 text-red-800 border-red-200";
      healthRisk = "Very high risk of health complications";
      interpretation = "Your BMI indicates Class II obesity. This carries very high risk for serious health complications including cardiovascular disease, diabetes, and reduced life expectancy.";
      recommendations = [
        "Immediate medical evaluation and intervention",
        "Comprehensive weight management program",
        "Consider pharmacological interventions",
        "Evaluate for bariatric surgery candidacy",
        "Intensive monitoring and management of comorbidities"
      ];
    } else {
      category = "Obesity Class III (Severe)";
      categoryClass = "bg-red-100 text-red-800 border-red-200";
      healthRisk = "Extremely high risk of health complications";
      interpretation = "Your BMI indicates Class III (severe) obesity. This carries extremely high risk for life-threatening health complications and requires immediate medical intervention.";
      recommendations = [
        "Urgent medical evaluation and treatment",
        "Multidisciplinary weight management team",
        "Strong consideration for bariatric surgery",
        "Aggressive management of associated conditions",
        "Regular monitoring by healthcare specialists"
      ];
    }

    // Calculate ideal weight range (BMI 18.5-24.9)
    const idealWeightMin = 18.5 * (heightM * heightM);
    const idealWeightMax = 24.9 * (heightM * heightM);

    let idealWeightRange: { min: number; max: number };
    let weightLossNeeded: number | undefined;
    let weightGainNeeded: number | undefined;

    if (units === "metric") {
      idealWeightRange = {
        min: Math.round(idealWeightMin * 10) / 10,
        max: Math.round(idealWeightMax * 10) / 10
      };
      if (weightKg > idealWeightMax) {
        weightLossNeeded = Math.round((weightKg - idealWeightMax) * 10) / 10;
      } else if (weightKg < idealWeightMin) {
        weightGainNeeded = Math.round((idealWeightMin - weightKg) * 10) / 10;
      }
    } else {
      idealWeightRange = {
        min: Math.round(idealWeightMin * 2.20462 * 10) / 10,
        max: Math.round(idealWeightMax * 2.20462 * 10) / 10
      };
      const currentWeightLbs = weightKg * 2.20462;
      if (currentWeightLbs > idealWeightRange.max) {
        weightLossNeeded = Math.round((currentWeightLbs - idealWeightRange.max) * 10) / 10;
      } else if (currentWeightLbs < idealWeightRange.min) {
        weightGainNeeded = Math.round((idealWeightRange.min - currentWeightLbs) * 10) / 10;
      }
    }

    const bmiResult: BMIResult = {
      bmi: Math.round(bmi * 10) / 10,
      category,
      categoryClass,
      healthRisk,
      interpretation,
      recommendations,
      idealWeightRange,
      weightLossNeeded,
      weightGainNeeded
    };

    setResult(bmiResult);
    setShowResult(true);
  };

  const isComplete = height && weight;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">BMI Calculator</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Calculate your Body Mass Index (BMI) and assess your weight category and associated health risks
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-blue-500" />
            BMI Calculation
          </CardTitle>
          <CardDescription>
            Enter your height and weight to calculate your BMI
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
                <RadioGroupItem value="metric" id="metric" />
                <Label htmlFor="metric" className="cursor-pointer">
                  Metric (cm, kg)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="imperial" id="imperial" />
                <Label htmlFor="imperial" className="cursor-pointer">
                  Imperial (inches, lbs)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="height">
                Height {units === "metric" ? "(cm)" : "(inches)"}
              </Label>
              <Input
                id="height"
                type="number"
                placeholder={units === "metric" ? "170" : "68"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">
                {units === "metric" ? "Example: 170 cm" : "Example: 68 inches (5'8\")"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">
                Weight {units === "metric" ? "(kg)" : "(lbs)"}
              </Label>
              <Input
                id="weight"
                type="number"
                placeholder={units === "metric" ? "70" : "154"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">
                {units === "metric" ? "Example: 70 kg" : "Example: 154 lbs"}
              </p>
            </div>
          </div>

          <Button
            onClick={calculateBMI}
            disabled={!isComplete}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Calculate BMI
          </Button>
        </CardContent>
      </Card>

      {showResult && result && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              BMI Results
              <Badge className={result.categoryClass}>
                {result.category}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Your BMI</h3>
                <p className="text-3xl font-bold text-blue-600">{result.bmi}</p>
                <p className="text-sm text-gray-600">kg/m²</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Weight Category</h3>
                <Badge className={`${result.categoryClass} text-sm py-1 px-3`}>
                  {result.category}
                </Badge>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Health Risk</h3>
                <p className="text-sm text-gray-700">{result.healthRisk}</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Ideal Weight Range</h3>
              <p className="text-gray-700">
                {result.idealWeightRange.min} - {result.idealWeightRange.max} {units === "metric" ? "kg" : "lbs"}
              </p>
              {result.weightLossNeeded && (
                <p className="text-red-600 mt-1">
                  Consider losing {result.weightLossNeeded} {units === "metric" ? "kg" : "lbs"} to reach ideal range
                </p>
              )}
              {result.weightGainNeeded && (
                <p className="text-blue-600 mt-1">
                  Consider gaining {result.weightGainNeeded} {units === "metric" ? "kg" : "lbs"} to reach ideal range
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Interpretation</h3>
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
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important Note:</strong> BMI is a screening tool and may not reflect body composition in athletes or individuals with high muscle mass. Consult healthcare providers for comprehensive health assessment.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>BMI Categories & Health Implications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">BMI Classification</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Underweight: Below 18.5</li>
                <li>• Normal weight: 18.5-24.9</li>
                <li>• Overweight: 25.0-29.9</li>
                <li>• Obesity Class I: 30.0-34.9</li>
                <li>• Obesity Class II: 35.0-39.9</li>
                <li>• Obesity Class III: 40.0 and above</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Limitations</h3>
              <p className="text-sm text-gray-700">
                BMI doesn't distinguish between muscle and fat mass. Athletes and individuals with high muscle mass may have elevated BMI despite healthy body composition. Additional assessments like waist circumference and body fat percentage provide more complete health evaluation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}