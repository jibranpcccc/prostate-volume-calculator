import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Droplets, TrendingUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BladderCapacityResult {
  estimatedCapacity: number;
  functionalCapacity: number;
  capacityCategory: string;
  categoryClass: string;
  interpretation: string;
  recommendations: string[];
  treatmentOptions: string[];
  followUpRecommendation: string;
  ageAdjustedNormal: { min: number; max: number };
}

export default function BladderCapacityCalculator() {
  const [maxVoidVolume, setMaxVoidVolume] = useState("");
  const [postVoidResidual, setPostVoidResidual] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [voidsPerDay, setVoidsPerDay] = useState("");
  const [fluidIntake, setFluidIntake] = useState("");
  const [result, setResult] = useState<BladderCapacityResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateBladderCapacity = () => {
    const maxVoid = parseFloat(maxVoidVolume);
    const pvr = parseFloat(postVoidResidual) || 0;
    const patientAge = parseFloat(age);
    const dailyVoids = parseFloat(voidsPerDay) || 8;
    const dailyFluid = parseFloat(fluidIntake) || 2000;

    if (isNaN(maxVoid) || isNaN(patientAge)) {
      return;
    }

    // Calculate estimated bladder capacity
    const estimatedCapacity = maxVoid + pvr;
    const functionalCapacity = maxVoid;

    // Age and gender-adjusted normal ranges
    let normalMin: number, normalMax: number;
    
    if (gender === "female") {
      if (patientAge < 65) {
        normalMin = 300;
        normalMax = 600;
      } else {
        normalMin = 250;
        normalMax = 550;
      }
    } else {
      if (patientAge < 65) {
        normalMin = 350;
        normalMax = 700;
      } else {
        normalMin = 300;
        normalMax = 650;
      }
    }

    let capacityCategory: string;
    let categoryClass: string;
    let interpretation: string;
    let recommendations: string[];
    let treatmentOptions: string[];
    let followUpRecommendation: string;

    if (functionalCapacity >= normalMin && functionalCapacity <= normalMax) {
      capacityCategory = "Normal Bladder Capacity";
      categoryClass = "bg-green-100 text-green-800 border-green-200";
      interpretation = "Functional bladder capacity is within normal limits for age and gender. This suggests normal bladder function and appropriate filling sensation.";
      recommendations = [
        "Maintain normal voiding habits",
        "Continue adequate fluid intake",
        "Regular pelvic floor exercises",
        "Monitor for any symptom changes"
      ];
      treatmentOptions = [
        "No treatment indicated",
        "Lifestyle maintenance",
        "Routine monitoring"
      ];
      followUpRecommendation = "Routine follow-up as clinically indicated";
    } else if (functionalCapacity < normalMin) {
      const reduction = ((normalMin - functionalCapacity) / normalMin) * 100;
      
      if (reduction < 25) {
        capacityCategory = "Mildly Reduced Capacity";
        categoryClass = "bg-yellow-100 text-yellow-800 border-yellow-200";
        interpretation = "Functional bladder capacity is mildly reduced. This may indicate early bladder dysfunction, overactive bladder, or bladder outlet obstruction.";
        recommendations = [
          "Bladder training exercises",
          "Timed voiding schedule",
          "Fluid management optimization",
          "Assess for irritative symptoms"
        ];
        treatmentOptions = [
          "Behavioral therapy",
          "Bladder training program",
          "Pelvic floor physiotherapy"
        ];
        followUpRecommendation = "Follow-up in 6-8 weeks to assess response";
      } else if (reduction < 50) {
        capacityCategory = "Moderately Reduced Capacity";
        categoryClass = "bg-orange-100 text-orange-800 border-orange-200";
        interpretation = "Functional bladder capacity is moderately reduced, indicating significant bladder dysfunction that requires evaluation and treatment.";
        recommendations = [
          "Comprehensive urological evaluation",
          "Urodynamic studies consideration",
          "Assess for overactive bladder",
          "Medication review for bladder effects"
        ];
        treatmentOptions = [
          "Anticholinergic medications",
          "Beta-3 agonists",
          "Bladder training",
          "Neuromodulation consideration"
        ];
        followUpRecommendation = "Urological consultation within 4-6 weeks";
      } else {
        capacityCategory = "Severely Reduced Capacity";
        categoryClass = "bg-red-100 text-red-800 border-red-200";
        interpretation = "Functional bladder capacity is severely reduced, indicating significant bladder pathology requiring urgent evaluation and intervention.";
        recommendations = [
          "Urgent urological referral",
          "Comprehensive urodynamic evaluation",
          "Assess for neurogenic bladder",
          "Rule out bladder pathology"
        ];
        treatmentOptions = [
          "Immediate medical management",
          "Advanced neuromodulation",
          "Intravesical therapy",
          "Surgical intervention consideration"
        ];
        followUpRecommendation = "Urgent urological evaluation within 1-2 weeks";
      }
    } else {
      capacityCategory = "Increased Bladder Capacity";
      categoryClass = "bg-blue-100 text-blue-800 border-blue-200";
      interpretation = "Functional bladder capacity is above normal range. This may indicate detrusor underactivity, neurogenic bladder, or compensatory changes.";
      recommendations = [
        "Evaluate for detrusor underactivity",
        "Assess for neurological causes",
        "Monitor post-void residual",
        "Timed voiding to prevent overdistension"
      ];
      treatmentOptions = [
        "Timed voiding schedule",
        "Clean intermittent catheterization if needed",
        "Cholinergic medications consideration",
        "Neurological evaluation"
      ];
      followUpRecommendation = "Urological evaluation within 2-4 weeks";
    }

    const bladderResult: BladderCapacityResult = {
      estimatedCapacity: Math.round(estimatedCapacity),
      functionalCapacity: Math.round(functionalCapacity),
      capacityCategory,
      categoryClass,
      interpretation,
      recommendations,
      treatmentOptions,
      followUpRecommendation,
      ageAdjustedNormal: { min: normalMin, max: normalMax }
    };

    setResult(bladderResult);
    setShowResult(true);
  };

  const isComplete = maxVoidVolume && age && gender;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Bladder Capacity Calculator</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Estimate functional bladder capacity and assess bladder function based on voiding patterns and measurements
        </p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Bladder capacity assessment should be based on multiple voiding measurements when possible. Consider urodynamic studies for comprehensive evaluation of complex cases.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            Bladder Function Assessment
          </CardTitle>
          <CardDescription>
            Enter voiding measurements and patient information for capacity estimation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="maxVoidVolume">Maximum Void Volume (mL)</Label>
              <Input
                id="maxVoidVolume"
                type="number"
                placeholder="200-800"
                value={maxVoidVolume}
                onChange={(e) => setMaxVoidVolume(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Largest single void volume recorded</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="postVoidResidual">Post-Void Residual (mL)</Label>
              <Input
                id="postVoidResidual"
                type="number"
                placeholder="0-100"
                value={postVoidResidual}
                onChange={(e) => setPostVoidResidual(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Optional: PVR measurement if available</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Patient Age (years)</Label>
              <Input
                id="age"
                type="number"
                placeholder="18-100"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Used for age-adjusted normal ranges</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="voidsPerDay">Voids Per Day</Label>
              <Input
                id="voidsPerDay"
                type="number"
                placeholder="4-12"
                value={voidsPerDay}
                onChange={(e) => setVoidsPerDay(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Optional: Daily voiding frequency</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fluidIntake">Daily Fluid Intake (mL)</Label>
              <Input
                id="fluidIntake"
                type="number"
                placeholder="1500-3000"
                value={fluidIntake}
                onChange={(e) => setFluidIntake(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Optional: Total daily fluid intake</p>
            </div>
          </div>

          <Button
            onClick={calculateBladderCapacity}
            disabled={!isComplete}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Calculate Bladder Capacity
          </Button>
        </CardContent>
      </Card>

      {showResult && result && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Bladder Capacity Assessment
              <Badge className={result.categoryClass}>
                {result.capacityCategory}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Functional Capacity</h3>
                <p className="text-3xl font-bold text-blue-600">{result.functionalCapacity} mL</p>
                <p className="text-sm text-gray-600">Maximum void volume</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Estimated Total Capacity</h3>
                <p className="text-3xl font-bold text-green-600">{result.estimatedCapacity} mL</p>
                <p className="text-sm text-gray-600">Including residual</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Normal Range</h3>
                <p className="text-lg font-medium text-gray-800">
                  {result.ageAdjustedNormal.min} - {result.ageAdjustedNormal.max} mL
                </p>
                <p className="text-sm text-gray-600">Age/gender adjusted</p>
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
                <strong>Clinical Note:</strong> Bladder capacity varies significantly with age, gender, and individual factors. Consider urodynamic studies for comprehensive assessment of bladder function.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>Clinical Guidelines for Bladder Capacity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Normal Ranges by Age/Gender</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Adult males (&lt;65): 350-700 mL</li>
                <li>• Adult females (&lt;65): 300-600 mL</li>
                <li>• Elderly males (≥65): 300-650 mL</li>
                <li>• Elderly females (≥65): 250-550 mL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Assessment Methods</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Voiding diary analysis</li>
                <li>• Maximum void measurement</li>
                <li>• Urodynamic studies (gold standard)</li>
                <li>• Ultrasound bladder scanning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Clinical Significance</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Reduced capacity: OAB, IC, radiation</li>
                <li>• Increased capacity: DU, neurogenic</li>
                <li>• Variable capacity: aging changes</li>
                <li>• Context-dependent interpretation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Treatment Considerations</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Capacity affects treatment choice</li>
                <li>• Behavioral therapy for reduced capacity</li>
                <li>• Timed voiding for increased capacity</li>
                <li>• Neuromodulation for refractory cases</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}