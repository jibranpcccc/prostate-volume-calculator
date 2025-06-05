import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Droplets, TrendingUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PVRResult {
  pvrVolume: number;
  severity: string;
  severityClass: string;
  interpretation: string;
  recommendations: string[];
  treatmentOptions: string[];
  followUpRecommendation: string;
  significanceLevel: string;
  riskFactors: string[];
}

export default function PostVoidResidualCalculator() {
  const [pvrVolume, setPVRVolume] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [comorbidities, setComorbidities] = useState("");
  const [result, setResult] = useState<PVRResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculatePVRSignificance = () => {
    const pvr = parseFloat(pvrVolume);
    const patientAge = parseFloat(age);

    if (isNaN(pvr) || isNaN(patientAge)) {
      return;
    }

    let severity: string;
    let severityClass: string;
    let interpretation: string;
    let recommendations: string[];
    let treatmentOptions: string[];
    let followUpRecommendation: string;
    let significanceLevel: string;
    let riskFactors: string[] = [];

    // Age-adjusted interpretation
    const ageAdjustedThreshold = patientAge > 65 ? 150 : 100;

    // Risk factors assessment
    if (symptoms === "severe") {
      riskFactors.push("Severe LUTS symptoms");
    }
    if (comorbidities === "diabetes") {
      riskFactors.push("Diabetes mellitus");
    }
    if (comorbidities === "neurologic") {
      riskFactors.push("Neurologic conditions");
    }
    if (patientAge > 70) {
      riskFactors.push("Advanced age");
    }

    if (pvr < 50) {
      severity = "Normal";
      severityClass = "bg-green-100 text-green-800 border-green-200";
      significanceLevel = "Not clinically significant";
      interpretation = "Post-void residual volume is within normal limits. This suggests efficient bladder emptying and normal detrusor function.";
      recommendations = [
        "Continue normal bladder habits",
        "Regular follow-up as clinically indicated",
        "Monitor for symptom changes",
        "Maintain adequate hydration"
      ];
      treatmentOptions = [
        "No treatment indicated",
        "Continue current management if any",
        "Routine monitoring"
      ];
      followUpRecommendation = "Routine follow-up based on underlying conditions";
    } else if (pvr >= 50 && pvr < ageAdjustedThreshold) {
      severity = "Mildly Elevated";
      severityClass = "bg-yellow-100 text-yellow-800 border-yellow-200";
      significanceLevel = "Possibly significant";
      interpretation = `Post-void residual is mildly elevated but below the age-adjusted threshold of ${ageAdjustedThreshold}mL. This may indicate early bladder dysfunction or require repeat measurement.`;
      recommendations = [
        "Repeat PVR measurement for confirmation",
        "Evaluate for underlying causes",
        "Assess voiding symptoms and patterns",
        "Consider uroflowmetry if symptomatic"
      ];
      treatmentOptions = [
        "Observation with monitoring",
        "Bladder training techniques",
        "Timed voiding schedule",
        "Address modifiable risk factors"
      ];
      followUpRecommendation = "Repeat PVR in 3-6 months or if symptoms worsen";
    } else if (pvr >= ageAdjustedThreshold && pvr < 200) {
      severity = "Moderately Elevated";
      severityClass = "bg-orange-100 text-orange-800 border-orange-200";
      significanceLevel = "Clinically significant";
      interpretation = "Post-void residual volume is moderately elevated and clinically significant. This indicates incomplete bladder emptying that requires evaluation and management.";
      recommendations = [
        "Comprehensive urological evaluation",
        "Assess for bladder outlet obstruction",
        "Evaluate detrusor contractility",
        "Review medications affecting bladder function",
        "Consider imaging studies if indicated"
      ];
      treatmentOptions = [
        "Medical management for underlying causes",
        "Alpha-blockers if BPH suspected",
        "Intermittent catheterization if needed",
        "Bladder training and pelvic floor therapy"
      ];
      followUpRecommendation = "Urological consultation within 4-6 weeks";
    } else if (pvr >= 200 && pvr < 300) {
      severity = "Significantly Elevated";
      severityClass = "bg-red-100 text-red-800 border-red-200";
      significanceLevel = "Highly significant";
      interpretation = "Post-void residual volume is significantly elevated, indicating substantial bladder dysfunction. This level requires prompt evaluation and intervention.";
      recommendations = [
        "Urgent urological referral",
        "Evaluate for acute or chronic retention",
        "Assess renal function",
        "Review for neurologic causes",
        "Consider immediate catheterization if symptomatic"
      ];
      treatmentOptions = [
        "Immediate bladder decompression if needed",
        "Clean intermittent catheterization",
        "Medical therapy optimization",
        "Surgical intervention consideration"
      ];
      followUpRecommendation = "Urgent urological evaluation within 1-2 weeks";
    } else {
      severity = "Severely Elevated (Retention)";
      severityClass = "bg-red-100 text-red-800 border-red-200";
      significanceLevel = "Critical";
      interpretation = "Post-void residual volume indicates urinary retention. This requires immediate medical attention to prevent complications including renal dysfunction and recurrent infections.";
      recommendations = [
        "Immediate medical evaluation",
        "Assess for acute retention complications",
        "Monitor renal function closely",
        "Evaluate for upper tract involvement",
        "Consider hospitalization if unstable"
      ];
      treatmentOptions = [
        "Immediate catheter drainage",
        "Continuous bladder drainage",
        "Emergency urological consultation",
        "Address underlying obstruction urgently"
      ];
      followUpRecommendation = "Immediate emergency department evaluation";
    }

    const pvrResult: PVRResult = {
      pvrVolume: pvr,
      severity,
      severityClass,
      interpretation,
      recommendations,
      treatmentOptions,
      followUpRecommendation,
      significanceLevel,
      riskFactors
    };

    setResult(pvrResult);
    setShowResult(true);
  };

  const isComplete = pvrVolume && age && gender;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Post-Void Residual Calculator</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Assess the clinical significance of post-void residual urine volume and guide management decisions
        </p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Post-void residual measurement should be obtained within 10-15 minutes of voiding using ultrasound or catheterization. Clinical correlation is essential for interpretation.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            PVR Assessment Input
          </CardTitle>
          <CardDescription>
            Enter patient information and measured post-void residual volume
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="pvrVolume">Post-Void Residual Volume (mL)</Label>
              <Input
                id="pvrVolume"
                type="number"
                placeholder="0-500"
                value={pvrVolume}
                onChange={(e) => setPVRVolume(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Volume measured by ultrasound or catheter</p>
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
              <p className="text-xs text-gray-500">Used for age-adjusted interpretation</p>
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
              <Label htmlFor="symptoms">LUTS Symptom Severity</Label>
              <Select onValueChange={setSymptoms}>
                <SelectTrigger>
                  <SelectValue placeholder="Select symptom severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No symptoms</SelectItem>
                  <SelectItem value="mild">Mild symptoms</SelectItem>
                  <SelectItem value="moderate">Moderate symptoms</SelectItem>
                  <SelectItem value="severe">Severe symptoms</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="comorbidities">Relevant Comorbidities</Label>
              <Select onValueChange={setComorbidities}>
                <SelectTrigger>
                  <SelectValue placeholder="Select relevant conditions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="diabetes">Diabetes mellitus</SelectItem>
                  <SelectItem value="neurologic">Neurologic conditions</SelectItem>
                  <SelectItem value="medications">Medications affecting bladder</SelectItem>
                  <SelectItem value="previous-surgery">Previous pelvic surgery</SelectItem>
                  <SelectItem value="multiple">Multiple comorbidities</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={calculatePVRSignificance}
            disabled={!isComplete}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Assess PVR Significance
          </Button>
        </CardContent>
      </Card>

      {showResult && result && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              PVR Assessment Results
              <Badge className={result.severityClass}>
                {result.severity}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">PVR Volume</h3>
                <p className="text-3xl font-bold text-blue-600">{result.pvrVolume} mL</p>
                <p className="text-sm text-gray-600">Measured volume</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Significance</h3>
                <p className="text-lg font-medium text-gray-800">{result.significanceLevel}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Severity Level</h3>
                <Badge className={`${result.severityClass} text-sm py-1 px-3`}>
                  {result.severity}
                </Badge>
              </div>
            </div>

            {result.riskFactors.length > 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">Contributing Risk Factors</h3>
                <ul className="list-disc list-inside space-y-1 text-orange-800">
                  {result.riskFactors.map((factor, index) => (
                    <li key={index}>{factor}</li>
                  ))}
                </ul>
              </div>
            )}

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
                <strong>Clinical Note:</strong> PVR interpretation should consider patient symptoms, voiding patterns, and overall clinical context. Repeat measurements may be necessary for accurate assessment.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>Clinical Guidelines for PVR Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Normal Values</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Healthy adults: &lt;50 mL</li>
                <li>• Elderly (&gt;65 years): &lt;100-150 mL</li>
                <li>• Varies with age and bladder capacity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Measurement Timing</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Within 10-15 minutes of voiding</li>
                <li>• Patient should void naturally</li>
                <li>• Repeat if initial volume elevated</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Clinical Significance</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• &gt;200 mL: Definite abnormal retention</li>
                <li>• 100-200 mL: Borderline, repeat needed</li>
                <li>• &gt;300 mL: High risk for complications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Causes of Elevated PVR</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Bladder outlet obstruction (BPH)</li>
                <li>• Detrusor underactivity</li>
                <li>• Neurogenic bladder dysfunction</li>
                <li>• Medications (anticholinergics)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}