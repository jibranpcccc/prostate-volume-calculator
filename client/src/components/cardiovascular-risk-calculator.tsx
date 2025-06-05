import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Heart, TrendingUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CVRiskResult {
  tenYearRisk: number;
  riskCategory: string;
  categoryClass: string;
  interpretation: string;
  recommendations: string[];
  treatmentTargets: string[];
  lifestyleModifications: string[];
  followUpRecommendation: string;
  riskFactors: string[];
  protectiveFactors: string[];
}

export default function CardiovascularRiskCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [totalCholesterol, setTotalCholesterol] = useState("");
  const [hdlCholesterol, setHdlCholesterol] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [diastolicBP, setDiastolicBP] = useState("");
  const [smokingStatus, setSmokingStatus] = useState("");
  const [diabetesStatus, setDiabetesStatus] = useState("");
  const [hypertensionTreatment, setHypertensionTreatment] = useState(false);
  const [familyHistory, setFamilyHistory] = useState(false);
  const [result, setResult] = useState<CVRiskResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateCVRisk = () => {
    const patientAge = parseFloat(age);
    const totalChol = parseFloat(totalCholesterol);
    const hdlChol = parseFloat(hdlCholesterol);
    const sysBP = parseFloat(systolicBP);
    const diasBP = parseFloat(diastolicBP);

    if (isNaN(patientAge) || isNaN(totalChol) || isNaN(hdlChol) || isNaN(sysBP)) {
      return;
    }

    // Simplified Framingham Risk Score calculation
    let riskScore = 0;
    let riskFactors: string[] = [];
    let protectiveFactors: string[] = [];

    // Age points
    if (gender === "male") {
      if (patientAge >= 30 && patientAge <= 34) riskScore += -9;
      else if (patientAge >= 35 && patientAge <= 39) riskScore += -4;
      else if (patientAge >= 40 && patientAge <= 44) riskScore += 0;
      else if (patientAge >= 45 && patientAge <= 49) riskScore += 3;
      else if (patientAge >= 50 && patientAge <= 54) riskScore += 6;
      else if (patientAge >= 55 && patientAge <= 59) riskScore += 8;
      else if (patientAge >= 60 && patientAge <= 64) riskScore += 10;
      else if (patientAge >= 65 && patientAge <= 69) riskScore += 11;
      else if (patientAge >= 70 && patientAge <= 74) riskScore += 12;
      else if (patientAge >= 75) riskScore += 13;
    } else {
      if (patientAge >= 30 && patientAge <= 34) riskScore += -7;
      else if (patientAge >= 35 && patientAge <= 39) riskScore += -3;
      else if (patientAge >= 40 && patientAge <= 44) riskScore += 0;
      else if (patientAge >= 45 && patientAge <= 49) riskScore += 3;
      else if (patientAge >= 50 && patientAge <= 54) riskScore += 6;
      else if (patientAge >= 55 && patientAge <= 59) riskScore += 8;
      else if (patientAge >= 60 && patientAge <= 64) riskScore += 10;
      else if (patientAge >= 65 && patientAge <= 69) riskScore += 12;
      else if (patientAge >= 70 && patientAge <= 74) riskScore += 14;
      else if (patientAge >= 75) riskScore += 16;
    }

    if (patientAge >= 65) {
      riskFactors.push("Advanced age (≥65 years)");
    }

    // Total cholesterol points
    if (totalChol < 160) riskScore += 0;
    else if (totalChol >= 160 && totalChol <= 199) riskScore += 4;
    else if (totalChol >= 200 && totalChol <= 239) riskScore += 7;
    else if (totalChol >= 240 && totalChol <= 279) riskScore += 9;
    else if (totalChol >= 280) riskScore += 11;

    if (totalChol >= 240) {
      riskFactors.push("High total cholesterol (≥240 mg/dL)");
    } else if (totalChol < 200) {
      protectiveFactors.push("Optimal total cholesterol (<200 mg/dL)");
    }

    // HDL cholesterol points
    if (hdlChol >= 60) {
      riskScore -= 1;
      protectiveFactors.push("High HDL cholesterol (≥60 mg/dL)");
    } else if (hdlChol >= 50 && hdlChol <= 59) {
      riskScore += 0;
    } else if (hdlChol >= 40 && hdlChol <= 49) {
      riskScore += 1;
    } else if (hdlChol < 40) {
      riskScore += 2;
      riskFactors.push("Low HDL cholesterol (<40 mg/dL)");
    }

    // Blood pressure points
    if (sysBP < 120) {
      riskScore += 0;
      protectiveFactors.push("Optimal blood pressure (<120/80 mmHg)");
    } else if (sysBP >= 120 && sysBP <= 129) {
      riskScore += 0;
    } else if (sysBP >= 130 && sysBP <= 139) {
      riskScore += 1;
    } else if (sysBP >= 140 && sysBP <= 159) {
      riskScore += 1;
      riskFactors.push("Stage 1 hypertension");
    } else if (sysBP >= 160) {
      riskScore += 2;
      riskFactors.push("Stage 2 hypertension");
    }

    if (hypertensionTreatment) {
      riskScore += 1;
      riskFactors.push("Treated hypertension");
    }

    // Smoking
    if (smokingStatus === "current") {
      riskScore += 8;
      riskFactors.push("Current smoking");
    } else if (smokingStatus === "former") {
      riskScore += 2;
      riskFactors.push("Former smoking");
    } else {
      protectiveFactors.push("Non-smoker");
    }

    // Diabetes
    if (diabetesStatus === "yes") {
      riskScore += 6;
      riskFactors.push("Diabetes mellitus");
    }

    // Family history
    if (familyHistory) {
      riskScore += 2;
      riskFactors.push("Family history of premature CAD");
    }

    // Convert score to 10-year risk percentage
    let tenYearRisk: number;
    if (gender === "male") {
      if (riskScore <= 0) tenYearRisk = 1;
      else if (riskScore <= 4) tenYearRisk = 1;
      else if (riskScore <= 6) tenYearRisk = 2;
      else if (riskScore <= 7) tenYearRisk = 3;
      else if (riskScore <= 9) tenYearRisk = 4;
      else if (riskScore <= 10) tenYearRisk = 5;
      else if (riskScore <= 11) tenYearRisk = 6;
      else if (riskScore <= 12) tenYearRisk = 8;
      else if (riskScore <= 13) tenYearRisk = 10;
      else if (riskScore <= 14) tenYearRisk = 12;
      else if (riskScore <= 15) tenYearRisk = 16;
      else if (riskScore <= 16) tenYearRisk = 20;
      else if (riskScore <= 17) tenYearRisk = 25;
      else tenYearRisk = 30;
    } else {
      if (riskScore <= 9) tenYearRisk = 1;
      else if (riskScore <= 12) tenYearRisk = 1;
      else if (riskScore <= 14) tenYearRisk = 2;
      else if (riskScore <= 16) tenYearRisk = 3;
      else if (riskScore <= 17) tenYearRisk = 4;
      else if (riskScore <= 18) tenYearRisk = 5;
      else if (riskScore <= 19) tenYearRisk = 6;
      else if (riskScore <= 20) tenYearRisk = 8;
      else if (riskScore <= 21) tenYearRisk = 11;
      else if (riskScore <= 22) tenYearRisk = 14;
      else if (riskScore <= 23) tenYearRisk = 17;
      else if (riskScore <= 24) tenYearRisk = 22;
      else if (riskScore <= 25) tenYearRisk = 27;
      else tenYearRisk = 30;
    }

    let riskCategory: string;
    let categoryClass: string;
    let interpretation: string;
    let recommendations: string[];
    let treatmentTargets: string[];
    let lifestyleModifications: string[];
    let followUpRecommendation: string;

    if (tenYearRisk < 5) {
      riskCategory = "Low Risk";
      categoryClass = "bg-green-100 text-green-800 border-green-200";
      interpretation = "Low 10-year cardiovascular disease risk. Continue healthy lifestyle habits to maintain low risk.";
      recommendations = [
        "Continue current healthy lifestyle",
        "Regular physical activity (150+ minutes/week)",
        "Heart-healthy diet (Mediterranean or DASH)",
        "Maintain healthy weight",
        "Annual health screenings"
      ];
      treatmentTargets = [
        "LDL cholesterol: <100 mg/dL",
        "Blood pressure: <130/80 mmHg",
        "BMI: 18.5-24.9 kg/m²",
        "HbA1c: <5.7% (if applicable)"
      ];
      followUpRecommendation = "Annual cardiovascular risk assessment";
    } else if (tenYearRisk < 7.5) {
      riskCategory = "Borderline Risk";
      categoryClass = "bg-yellow-100 text-yellow-800 border-yellow-200";
      interpretation = "Borderline 10-year cardiovascular disease risk. Enhanced lifestyle modifications recommended with consideration of additional risk factors.";
      recommendations = [
        "Intensive lifestyle modifications",
        "Consider coronary artery calcium (CAC) scoring",
        "Enhanced dietary counseling",
        "Structured exercise program",
        "Risk factor optimization"
      ];
      treatmentTargets = [
        "LDL cholesterol: <100 mg/dL",
        "Blood pressure: <130/80 mmHg",
        "Consider statin if additional risk factors",
        "Weight reduction if overweight"
      ];
      followUpRecommendation = "Re-assess in 6 months, consider CAC scoring";
    } else if (tenYearRisk < 20) {
      riskCategory = "Intermediate Risk";
      categoryClass = "bg-orange-100 text-orange-800 border-orange-200";
      interpretation = "Intermediate 10-year cardiovascular disease risk. Aggressive lifestyle modifications and consideration of medical therapy recommended.";
      recommendations = [
        "Initiate statin therapy consideration",
        "Aggressive lifestyle intervention",
        "Consider low-dose aspirin (if bleeding risk low)",
        "Enhanced monitoring of risk factors",
        "Cardiology consultation consideration"
      ];
      treatmentTargets = [
        "LDL cholesterol: <70 mg/dL",
        "Blood pressure: <130/80 mmHg",
        "Statin therapy recommended",
        "Aspirin 81mg daily (if appropriate)"
      ];
      followUpRecommendation = "Follow-up in 3-6 months for risk factor optimization";
    } else {
      riskCategory = "High Risk";
      categoryClass = "bg-red-100 text-red-800 border-red-200";
      interpretation = "High 10-year cardiovascular disease risk. Immediate medical intervention with aggressive risk factor modification required.";
      recommendations = [
        "Immediate medical evaluation",
        "High-intensity statin therapy",
        "Low-dose aspirin (unless contraindicated)",
        "Aggressive blood pressure control",
        "Comprehensive lifestyle intervention",
        "Cardiology referral"
      ];
      treatmentTargets = [
        "LDL cholesterol: <70 mg/dL (consider <55)",
        "Blood pressure: <130/80 mmHg",
        "High-intensity statin therapy",
        "Dual antiplatelet therapy consideration"
      ];
      followUpRecommendation = "Immediate medical consultation, follow-up every 3 months";
    }

    lifestyleModifications = [
      "Mediterranean or DASH diet",
      "Regular aerobic exercise (150+ min/week)",
      "Weight management (BMI 18.5-24.9)",
      "Smoking cessation (if applicable)",
      "Limit alcohol consumption",
      "Stress management techniques",
      "Adequate sleep (7-9 hours nightly)"
    ];

    const cvRiskResult: CVRiskResult = {
      tenYearRisk,
      riskCategory,
      categoryClass,
      interpretation,
      recommendations,
      treatmentTargets,
      lifestyleModifications,
      followUpRecommendation,
      riskFactors,
      protectiveFactors
    };

    setResult(cvRiskResult);
    setShowResult(true);
  };

  const isComplete = age && gender && totalCholesterol && hdlCholesterol && systolicBP && smokingStatus && diabetesStatus;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Cardiovascular Risk Calculator</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Assess 10-year cardiovascular disease risk using the Framingham Risk Score algorithm
        </p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          This calculator estimates cardiovascular disease risk for adults aged 30-79 without known coronary artery disease. Results should guide discussion with healthcare providers about prevention strategies.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Cardiovascular Risk Assessment
          </CardTitle>
          <CardDescription>
            Enter patient demographics and risk factors for 10-year CVD risk calculation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age (years)</Label>
              <Input
                id="age"
                type="number"
                placeholder="30-79"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Age range: 30-79 years</p>
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
              <Label htmlFor="totalCholesterol">Total Cholesterol (mg/dL)</Label>
              <Input
                id="totalCholesterol"
                type="number"
                placeholder="100-400"
                value={totalCholesterol}
                onChange={(e) => setTotalCholesterol(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Normal: &lt;200 mg/dL</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hdlCholesterol">HDL Cholesterol (mg/dL)</Label>
              <Input
                id="hdlCholesterol"
                type="number"
                placeholder="20-100"
                value={hdlCholesterol}
                onChange={(e) => setHdlCholesterol(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Optimal: ≥60 mg/dL</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="systolicBP">Systolic Blood Pressure (mmHg)</Label>
              <Input
                id="systolicBP"
                type="number"
                placeholder="90-200"
                value={systolicBP}
                onChange={(e) => setSystolicBP(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Normal: &lt;120 mmHg</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="diastolicBP">Diastolic Blood Pressure (mmHg)</Label>
              <Input
                id="diastolicBP"
                type="number"
                placeholder="60-120"
                value={diastolicBP}
                onChange={(e) => setDiastolicBP(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Normal: &lt;80 mmHg</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="smokingStatus">Smoking Status</Label>
              <Select onValueChange={setSmokingStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select smoking status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="never">Never smoked</SelectItem>
                  <SelectItem value="former">Former smoker</SelectItem>
                  <SelectItem value="current">Current smoker</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="diabetesStatus">Diabetes Status</Label>
              <Select onValueChange={setDiabetesStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select diabetes status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No diabetes</SelectItem>
                  <SelectItem value="yes">Diabetes present</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 md:col-span-2">
              <Label className="text-base font-medium">Additional Risk Factors</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hypertensionTreatment"
                    checked={hypertensionTreatment}
                    onCheckedChange={setHypertensionTreatment}
                  />
                  <Label htmlFor="hypertensionTreatment" className="text-sm cursor-pointer">
                    Currently on hypertension treatment
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="familyHistory"
                    checked={familyHistory}
                    onCheckedChange={setFamilyHistory}
                  />
                  <Label htmlFor="familyHistory" className="text-sm cursor-pointer">
                    Family history of premature coronary artery disease
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={calculateCVRisk}
            disabled={!isComplete}
            className="w-full bg-red-600 hover:bg-red-700"
            size="lg"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Calculate Cardiovascular Risk
          </Button>
        </CardContent>
      </Card>

      {showResult && result && (
        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              10-Year Cardiovascular Risk Assessment
              <Badge className={result.categoryClass}>
                {result.riskCategory}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">10-Year CVD Risk</h3>
                <p className="text-4xl font-bold text-red-600">{result.tenYearRisk}%</p>
                <p className="text-sm text-gray-600">Estimated risk of cardiovascular event</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Risk Category</h3>
                <Badge className={`${result.categoryClass} text-lg py-2 px-4`}>
                  {result.riskCategory}
                </Badge>
              </div>
            </div>

            {result.riskFactors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">Present Risk Factors</h3>
                <ul className="list-disc list-inside space-y-1 text-red-800">
                  {result.riskFactors.map((factor, index) => (
                    <li key={index}>{factor}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.protectiveFactors.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">Protective Factors</h3>
                <ul className="list-disc list-inside space-y-1 text-green-800">
                  {result.protectiveFactors.map((factor, index) => (
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
                <h3 className="font-semibold text-gray-900 mb-2">Treatment Targets</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {result.treatmentTargets.map((target, index) => (
                    <li key={index}>{target}</li>
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

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Lifestyle Modifications</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {result.lifestyleModifications.map((mod, index) => (
                    <li key={index}>{mod}</li>
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
                <strong>Important:</strong> This calculator provides risk estimates for primary prevention. Individuals with known cardiovascular disease require different risk assessment and management strategies.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>About Cardiovascular Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Risk Categories</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Low risk: &lt;5% 10-year risk</li>
                <li>• Borderline: 5% to &lt;7.5% 10-year risk</li>
                <li>• Intermediate: 7.5% to &lt;20% 10-year risk</li>
                <li>• High risk: ≥20% 10-year risk</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Clinical Applications</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Statin therapy decision-making</li>
                <li>• Aspirin therapy consideration</li>
                <li>• Blood pressure treatment goals</li>
                <li>• Lifestyle counseling intensity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Limitations</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Based on Framingham population</li>
                <li>• May overestimate risk in some populations</li>
                <li>• Does not include all risk factors</li>
                <li>• Requires clinical judgment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Enhanced Assessment</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Consider CAC scoring for borderline risk</li>
                <li>• Ankle-brachial index assessment</li>
                <li>• hs-CRP measurement</li>
                <li>• Family history details</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}