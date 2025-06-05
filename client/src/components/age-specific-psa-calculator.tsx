import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Calendar, Calculator, Info } from "lucide-react";

interface AgeSpecificPSAResult {
  ageGroup: string;
  normalRange: string;
  patientPSA: number;
  percentile: number;
  interpretation: string;
  riskLevel: string;
  recommendation: string;
  riskClass: string;
}

export default function AgeSpecificPSACalculator() {
  const [age, setAge] = useState<number>(0);
  const [psaValue, setPsaValue] = useState<number>(0);
  const [result, setResult] = useState<AgeSpecificPSAResult | null>(null);

  const calculateAgeSpecificPSA = () => {
    if (!age || !psaValue) {
      alert("Please enter both age and PSA value.");
      return;
    }

    if (age < 40 || age > 90) {
      alert("Age must be between 40 and 90 years for accurate assessment.");
      return;
    }

    if (psaValue < 0 || psaValue > 100) {
      alert("Please enter a valid PSA value (0-100 ng/mL).");
      return;
    }

    // Age-specific PSA reference ranges (ng/mL)
    let ageGroup: string;
    let normalRange: string;
    let upperLimit: number;
    let medianValue: number;

    if (age >= 40 && age <= 49) {
      ageGroup = "40-49 years";
      normalRange = "0-2.5";
      upperLimit = 2.5;
      medianValue = 0.7;
    } else if (age >= 50 && age <= 59) {
      ageGroup = "50-59 years";
      normalRange = "0-3.5";
      upperLimit = 3.5;
      medianValue = 1.0;
    } else if (age >= 60 && age <= 69) {
      ageGroup = "60-69 years";
      normalRange = "0-4.5";
      upperLimit = 4.5;
      medianValue = 1.4;
    } else if (age >= 70 && age <= 79) {
      ageGroup = "70-79 years";
      normalRange = "0-6.5";
      upperLimit = 6.5;
      medianValue = 2.0;
    } else {
      ageGroup = "80+ years";
      normalRange = "0-7.2";
      upperLimit = 7.2;
      medianValue = 2.5;
    }

    // Calculate percentile position
    const percentile = Math.min(100, (psaValue / upperLimit) * 100);

    // Determine risk level and interpretation
    let riskLevel: string;
    let riskClass: string;
    let interpretation: string;
    let recommendation: string;

    if (psaValue <= upperLimit * 0.25) {
      riskLevel = "Very Low Risk";
      riskClass = "very-low";
      interpretation = `PSA is well below age-specific median (${medianValue} ng/mL). Very low probability of clinically significant prostate cancer.`;
      recommendation = "Continue routine age-appropriate screening. Next PSA in 2-4 years depending on individual risk factors.";
    } else if (psaValue <= upperLimit * 0.5) {
      riskLevel = "Low Risk";
      riskClass = "low";
      interpretation = `PSA is below age-specific median but within normal range. Low probability of prostate cancer.`;
      recommendation = "Continue routine screening. Consider annual PSA monitoring. Discuss family history and other risk factors.";
    } else if (psaValue <= upperLimit) {
      riskLevel = "Normal-High";
      riskClass = "normal-high";
      interpretation = `PSA is in upper normal range for age group. While technically normal, closer monitoring may be appropriate.`;
      recommendation = "Consider more frequent PSA monitoring (6-12 months). Discuss with urologist about baseline digital rectal exam.";
    } else if (psaValue <= upperLimit * 1.5) {
      riskLevel = "Mildly Elevated";
      riskClass = "elevated";
      interpretation = `PSA is mildly elevated above age-specific normal range. Further evaluation recommended.`;
      recommendation = "Urological consultation recommended. Consider repeat PSA, free PSA ratio, and digital rectal examination.";
    } else if (psaValue <= upperLimit * 2.5) {
      riskLevel = "Moderately Elevated";
      riskClass = "high";
      interpretation = `PSA is moderately elevated above age-specific range. Significant concern for prostate pathology.`;
      recommendation = "Urgent urological referral. Consider prostate biopsy and multiparametric MRI evaluation.";
    } else {
      riskLevel = "Markedly Elevated";
      riskClass = "very-high";
      interpretation = `PSA is markedly elevated above age-specific range. High suspicion for prostate cancer.`;
      recommendation = "Immediate urological consultation. Comprehensive evaluation including imaging and biopsy consideration.";
    }

    const ageSpecificResult: AgeSpecificPSAResult = {
      ageGroup,
      normalRange,
      patientPSA: psaValue,
      percentile,
      interpretation,
      riskLevel,
      recommendation,
      riskClass
    };

    setResult(ageSpecificResult);
  };

  const clearResults = () => {
    setAge(0);
    setPsaValue(0);
    setResult(null);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Age-Specific PSA Calculator</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Compare PSA values to age-adjusted normal ranges for improved screening accuracy. 
          Age-specific thresholds help reduce false positives in older men and improve cancer detection in younger men.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 w-5 h-5 text-blue-600" />
              Patient Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Clinical Guidelines</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Age-specific ranges improve PSA accuracy</li>
                <li>• Based on large population studies</li>
                <li>• Consider ethnicity and family history</li>
                <li>• Use in conjunction with DRE findings</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="age">Patient Age (years)</Label>
                <Input
                  id="age"
                  type="number"
                  min="40"
                  max="90"
                  value={age || ""}
                  onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                  placeholder="e.g., 65"
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Age must be between 40-90 years
                </p>
              </div>

              <div>
                <Label htmlFor="psa-value">PSA Value (ng/mL)</Label>
                <Input
                  id="psa-value"
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={psaValue || ""}
                  onChange={(e) => setPsaValue(parseFloat(e.target.value) || 0)}
                  placeholder="e.g., 4.2"
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Total PSA from recent blood test
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={calculateAgeSpecificPSA}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                disabled={!age || !psaValue}
              >
                <Calculator className="mr-2 w-4 h-4" />
                Analyze PSA
              </Button>
              <Button
                variant="outline"
                onClick={clearResults}
                className="flex-1"
              >
                Clear
              </Button>
            </div>

            {/* Age-Specific Ranges Reference */}
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Age-Specific PSA Ranges</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">40-49 years:</span>
                    <span className="font-medium">0-2.5 ng/mL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">50-59 years:</span>
                    <span className="font-medium">0-3.5 ng/mL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">60-69 years:</span>
                    <span className="font-medium">0-4.5 ng/mL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">70-79 years:</span>
                    <span className="font-medium">0-6.5 ng/mL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">80+ years:</span>
                    <span className="font-medium">0-7.2 ng/mL</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2 w-5 h-5 text-green-600" />
              Age-Adjusted Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                {/* Main Result */}
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {result.patientPSA.toFixed(1)} ng/mL
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    Age Group: {result.ageGroup}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    Normal Range: {result.normalRange} ng/mL
                  </div>
                  <Badge 
                    variant={result.riskClass === 'very-low' || result.riskClass === 'low' ? 'secondary' : 
                            result.riskClass === 'normal-high' ? 'default' :
                            result.riskClass === 'elevated' ? 'default' : 'destructive'}
                    className="text-sm"
                  >
                    {result.riskLevel}
                  </Badge>
                </div>

                {/* Percentile Analysis */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {result.percentile.toFixed(0)}%
                    </div>
                    <div className="text-sm text-gray-600">Percentile for Age</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {age}
                    </div>
                    <div className="text-sm text-gray-600">Patient Age</div>
                  </div>
                </div>

                {/* Clinical Interpretation */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Clinical Interpretation</h4>
                    <p className="text-gray-700 text-sm">{result.interpretation}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recommended Action</h4>
                    <p className="text-gray-700 text-sm">{result.recommendation}</p>
                  </div>
                </div>

                {/* Age-Specific Benefits */}
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h4 className="text-sm font-medium text-green-800 mb-2">Age-Specific PSA Benefits</h4>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>• Reduces false positives in older men</div>
                    <div>• Improves cancer detection in younger men</div>
                    <div>• Accounts for age-related prostate growth</div>
                    <div>• Enhances screening specificity</div>
                  </div>
                </div>

                {/* Medical Disclaimer */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-red-800 mb-1">Important Medical Notice</h4>
                      <p className="text-sm text-red-700">
                        Age-specific ranges are population-based guidelines. Individual risk assessment must consider 
                        family history, ethnicity, previous biopsies, and clinical findings. Always consult with healthcare provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Analysis Yet</h3>
                <p className="text-gray-600">Enter patient age and PSA value for age-adjusted analysis</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Educational Content */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Age-Specific PSA Ranges</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Clinical Rationale</h4>
              <p className="text-gray-700 text-sm mb-4">
                Age-specific PSA ranges account for the natural increase in PSA that occurs with aging due to 
                benign prostatic hyperplasia. Using age-adjusted thresholds improves screening accuracy by 
                reducing false positives in older men while maintaining sensitivity for cancer detection.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Evidence Base</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Based on population studies of 60,000+ men</li>
                <li>• Endorsed by major urological organizations</li>
                <li>• Improves positive predictive value by 10-20%</li>
                <li>• Reduces unnecessary biopsies in elderly men</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Clinical Applications</h4>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Initial prostate cancer screening</li>
                <li>• Surveillance in men with elevated PSA</li>
                <li>• Risk stratification for biopsy decisions</li>
                <li>• Population-based screening programs</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• May vary by ethnicity and geography</li>
                <li>• Not validated in all populations</li>
                <li>• Should complement, not replace, clinical judgment</li>
                <li>• Consider individual risk factors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}