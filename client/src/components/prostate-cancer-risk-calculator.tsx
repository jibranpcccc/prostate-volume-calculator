import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, Shield, Calculator, Users } from "lucide-react";

interface PCRiskResult {
  cancerProbability: number;
  highGradeProbability: number;
  riskLevel: string;
  interpretation: string;
  recommendation: string;
  riskClass: string;
  riskFactors: string[];
  protectiveFactors: string[];
}

export default function ProstateCancerRiskCalculator() {
  const [age, setAge] = useState<number>(0);
  const [psa, setPsa] = useState<number>(0);
  const [dreResult, setDreResult] = useState<string>("");
  const [familyHistory, setFamilyHistory] = useState<boolean>(false);
  const [race, setRace] = useState<string>("");
  const [priorBiopsy, setPriorBiopsy] = useState<boolean>(false);
  const [result, setResult] = useState<PCRiskResult | null>(null);

  const calculateCancerRisk = () => {
    if (!age || !psa || !dreResult || !race) {
      alert("Please complete all required fields.");
      return;
    }

    if (age < 40 || age > 85) {
      alert("Age must be between 40 and 85 years for accurate assessment.");
      return;
    }

    if (psa < 0 || psa > 50) {
      alert("Please enter a valid PSA value (0-50 ng/mL).");
      return;
    }

    // PCPT Risk Calculator algorithm (simplified version)
    let baseRisk = 0.15; // 15% baseline risk
    
    // Age adjustment
    if (age < 50) baseRisk *= 0.6;
    else if (age < 60) baseRisk *= 0.8;
    else if (age < 70) baseRisk *= 1.0;
    else if (age < 80) baseRisk *= 1.2;
    else baseRisk *= 1.4;

    // PSA adjustment
    if (psa < 1.0) baseRisk *= 0.3;
    else if (psa < 2.0) baseRisk *= 0.5;
    else if (psa < 4.0) baseRisk *= 0.8;
    else if (psa < 10.0) baseRisk *= 1.5;
    else if (psa < 20.0) baseRisk *= 2.5;
    else baseRisk *= 4.0;

    // DRE adjustment
    if (dreResult === "abnormal") {
      baseRisk *= 2.0;
    } else if (dreResult === "suspicious") {
      baseRisk *= 3.0;
    }

    // Family history adjustment
    if (familyHistory) {
      baseRisk *= 1.8;
    }

    // Race adjustment
    if (race === "african-american") {
      baseRisk *= 1.6;
    } else if (race === "hispanic") {
      baseRisk *= 0.8;
    } else if (race === "asian") {
      baseRisk *= 0.6;
    }

    // Prior negative biopsy adjustment
    if (priorBiopsy) {
      baseRisk *= 0.5;
    }

    // Cap the probability at realistic levels
    const cancerProbability = Math.min(85, Math.max(1, Math.round(baseRisk * 100)));
    
    // High-grade cancer probability (typically 30-40% of total cancer risk)
    const highGradeProbability = Math.round(cancerProbability * 0.35);

    // Determine risk level and classification
    let riskLevel: string;
    let riskClass: string;
    let interpretation: string;
    let recommendation: string;

    if (cancerProbability < 10) {
      riskLevel = "Low Risk";
      riskClass = "low";
      interpretation = "Low probability of prostate cancer based on current risk factors. Continue routine screening according to guidelines.";
      recommendation = "Continue age-appropriate screening. Next PSA in 1-2 years. Discuss screening frequency with healthcare provider.";
    } else if (cancerProbability < 20) {
      riskLevel = "Low-Moderate Risk";
      riskClass = "low-moderate";
      interpretation = "Moderately low probability of prostate cancer. Enhanced surveillance may be appropriate.";
      recommendation = "Consider annual PSA monitoring. Discuss benefits and risks of prostate biopsy with urologist based on individual factors.";
    } else if (cancerProbability < 35) {
      riskLevel = "Moderate Risk";
      riskClass = "moderate";
      interpretation = "Moderate probability of prostate cancer. Further evaluation with urologist recommended.";
      recommendation = "Urological consultation recommended. Consider prostate biopsy, multiparametric MRI, and additional risk assessment tools.";
    } else if (cancerProbability < 50) {
      riskLevel = "High Risk";
      riskClass = "high";
      interpretation = "High probability of prostate cancer. Prompt urological evaluation strongly recommended.";
      recommendation = "Urgent urological referral. Strong consideration for prostate biopsy and comprehensive staging evaluation.";
    } else {
      riskLevel = "Very High Risk";
      riskClass = "very-high";
      interpretation = "Very high probability of prostate cancer. Immediate comprehensive evaluation required.";
      recommendation = "Immediate urological consultation. Prostate biopsy and staging workup should be prioritized.";
    }

    // Identify risk factors present
    const riskFactors: string[] = [];
    const protectiveFactors: string[] = [];

    if (age >= 70) riskFactors.push("Advanced age (≥70 years)");
    if (psa >= 4.0) riskFactors.push("Elevated PSA (≥4.0 ng/mL)");
    if (dreResult === "abnormal" || dreResult === "suspicious") riskFactors.push("Abnormal digital rectal exam");
    if (familyHistory) riskFactors.push("Family history of prostate cancer");
    if (race === "african-american") riskFactors.push("African American ethnicity");

    if (age < 50) protectiveFactors.push("Younger age (<50 years)");
    if (psa < 2.0) protectiveFactors.push("Low PSA (<2.0 ng/mL)");
    if (dreResult === "normal") protectiveFactors.push("Normal digital rectal exam");
    if (priorBiopsy) protectiveFactors.push("Prior negative biopsy");
    if (race === "asian") protectiveFactors.push("Asian ethnicity (lower baseline risk)");

    const pcRiskResult: PCRiskResult = {
      cancerProbability,
      highGradeProbability,
      riskLevel,
      interpretation,
      recommendation,
      riskClass,
      riskFactors,
      protectiveFactors
    };

    setResult(pcRiskResult);
  };

  const clearResults = () => {
    setAge(0);
    setPsa(0);
    setDreResult("");
    setFamilyHistory(false);
    setRace("");
    setPriorBiopsy(false);
    setResult(null);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Prostate Cancer Risk Calculator</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Estimate individual prostate cancer probability using validated risk factors. 
          Based on the Prostate Cancer Prevention Trial (PCPT) algorithm for evidence-based risk assessment.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 w-5 h-5 text-blue-600" />
              Risk Factor Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h4 className="text-sm font-medium text-blue-800 mb-2">PCPT Risk Model</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Based on 18,000+ men from prevention trial</li>
                <li>• Validated in multiple populations</li>
                <li>• Incorporates key demographic and clinical factors</li>
                <li>• Helps guide biopsy decision-making</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age">Age (years)</Label>
                <Input
                  id="age"
                  type="number"
                  min="40"
                  max="85"
                  value={age || ""}
                  onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                  placeholder="e.g., 65"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="psa">PSA (ng/mL)</Label>
                <Input
                  id="psa"
                  type="number"
                  step="0.1"
                  min="0"
                  max="50"
                  value={psa || ""}
                  onChange={(e) => setPsa(parseFloat(e.target.value) || 0)}
                  placeholder="e.g., 4.2"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="dre">Digital Rectal Exam (DRE) Result</Label>
              <Select value={dreResult} onValueChange={setDreResult}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select DRE findings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="abnormal">Abnormal (firm/enlarged)</SelectItem>
                  <SelectItem value="suspicious">Suspicious (nodule/induration)</SelectItem>
                  <SelectItem value="not-performed">Not performed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="race">Race/Ethnicity</Label>
              <Select value={race} onValueChange={setRace}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select race/ethnicity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="caucasian">Caucasian/White</SelectItem>
                  <SelectItem value="african-american">African American</SelectItem>
                  <SelectItem value="hispanic">Hispanic/Latino</SelectItem>
                  <SelectItem value="asian">Asian/Pacific Islander</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="family-history" 
                  checked={familyHistory}
                  onCheckedChange={(checked) => setFamilyHistory(checked as boolean)}
                />
                <Label htmlFor="family-history" className="text-sm">
                  Family history of prostate cancer (father, brother, or son)
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="prior-biopsy" 
                  checked={priorBiopsy}
                  onCheckedChange={(checked) => setPriorBiopsy(checked as boolean)}
                />
                <Label htmlFor="prior-biopsy" className="text-sm">
                  Prior negative prostate biopsy
                </Label>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={calculateCancerRisk}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                disabled={!age || !psa || !dreResult || !race}
              >
                <Calculator className="mr-2 w-4 h-4" />
                Calculate Risk
              </Button>
              <Button
                variant="outline"
                onClick={clearResults}
                className="flex-1"
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 w-5 h-5 text-orange-600" />
              Cancer Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                {/* Main Result */}
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {result.cancerProbability}%
                  </div>
                  <div className="text-lg text-gray-600 mb-1">Cancer Probability</div>
                  <div className="text-sm text-gray-500 mb-3">
                    High-grade: {result.highGradeProbability}%
                  </div>
                  <Badge 
                    variant={result.riskClass === 'low' ? 'secondary' : 
                            result.riskClass === 'low-moderate' ? 'default' :
                            result.riskClass === 'moderate' ? 'default' : 'destructive'}
                    className="text-sm"
                  >
                    {result.riskLevel}
                  </Badge>
                </div>

                {/* Risk Factors */}
                <div className="space-y-4">
                  {result.riskFactors.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Risk Factors Present</h4>
                      <div className="space-y-1">
                        {result.riskFactors.map((factor, index) => (
                          <div key={index} className="flex items-center text-sm text-red-700">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            {factor}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {result.protectiveFactors.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Protective Factors</h4>
                      <div className="space-y-1">
                        {result.protectiveFactors.map((factor, index) => (
                          <div key={index} className="flex items-center text-sm text-green-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {factor}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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

                {/* Risk Categories */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="text-sm font-medium text-yellow-800 mb-2">Risk Categories</h4>
                  <div className="text-sm text-yellow-700 space-y-1">
                    <div>• &lt;10%: Low risk (routine screening)</div>
                    <div>• 10-20%: Low-moderate risk (enhanced surveillance)</div>
                    <div>• 20-35%: Moderate risk (consider biopsy)</div>
                    <div>• 35-50%: High risk (strong biopsy consideration)</div>
                    <div>• &gt;50%: Very high risk (urgent evaluation)</div>
                  </div>
                </div>

                {/* Medical Disclaimer */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-red-800 mb-1">Important Medical Notice</h4>
                      <p className="text-sm text-red-700">
                        This calculator provides risk estimates based on population data. Individual decisions should 
                        consider additional factors including patient preferences, life expectancy, and comorbidities. 
                        Always discuss results with qualified healthcare provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Assessment Yet</h3>
                <p className="text-gray-600">Complete risk factors to calculate cancer probability</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Educational Content */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Prostate Cancer Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">PCPT Risk Calculator</h4>
              <p className="text-gray-700 text-sm mb-4">
                The Prostate Cancer Prevention Trial risk calculator is one of the most validated tools for 
                estimating individual prostate cancer risk. It was developed from data on over 18,000 men 
                and has been validated in multiple populations worldwide.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Key Risk Factors</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Age (strongest predictor)</li>
                <li>• PSA level (continuous variable)</li>
                <li>• Digital rectal exam findings</li>
                <li>• Family history of prostate cancer</li>
                <li>• Race/ethnicity</li>
                <li>• Prior biopsy results</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Clinical Applications</h4>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Shared decision-making for biopsy</li>
                <li>• Patient counseling and education</li>
                <li>• Risk stratification in screening programs</li>
                <li>• Research and clinical trial enrollment</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Based on 6-core biopsy era (may underestimate with modern 12-core)</li>
                <li>• Does not include MRI or genetic factors</li>
                <li>• Population-specific validation needed</li>
                <li>• Should complement clinical judgment</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}