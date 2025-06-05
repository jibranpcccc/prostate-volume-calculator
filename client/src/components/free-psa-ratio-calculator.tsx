import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Target, Calculator, Info } from "lucide-react";

interface FreePSAResult {
  ratio: number;
  riskLevel: string;
  interpretation: string;
  recommendation: string;
  riskClass: string;
  cancerProbability: number;
}

export default function FreePSARatioCalculator() {
  const [totalPSA, setTotalPSA] = useState<number>(0);
  const [freePSA, setFreePSA] = useState<number>(0);
  const [result, setResult] = useState<FreePSAResult | null>(null);

  const calculateFreePSARatio = () => {
    if (!totalPSA || !freePSA) {
      alert("Please enter both Total PSA and Free PSA values.");
      return;
    }

    if (freePSA > totalPSA) {
      alert("Free PSA cannot be greater than Total PSA. Please check your values.");
      return;
    }

    if (totalPSA < 0 || freePSA < 0) {
      alert("PSA values cannot be negative. Please enter valid values.");
      return;
    }

    const ratio = (freePSA / totalPSA) * 100;

    // Determine risk level and cancer probability based on established cutoffs
    let riskLevel: string;
    let riskClass: string;
    let interpretation: string;
    let recommendation: string;
    let cancerProbability: number;

    if (ratio >= 25) {
      riskLevel = "Low Risk";
      riskClass = "low";
      cancerProbability = 8;
      interpretation = "High free PSA ratio suggests benign prostatic hyperplasia (BPH) rather than prostate cancer. The probability of cancer is relatively low.";
      recommendation = "Continue routine screening. Consider repeating PSA in 1 year unless clinically indicated sooner. Monitor for symptom changes.";
    } else if (ratio >= 20) {
      riskLevel = "Low-Intermediate Risk";
      riskClass = "low-intermediate";
      cancerProbability = 16;
      interpretation = "Moderately elevated free PSA ratio. While cancer risk is still relatively low, continued monitoring is appropriate.";
      recommendation = "Consider repeating PSA in 6-12 months. Discuss individual risk factors with healthcare provider.";
    } else if (ratio >= 15) {
      riskLevel = "Intermediate Risk";
      riskClass = "intermediate";
      cancerProbability = 20;
      interpretation = "Borderline free PSA ratio. This is the commonly used threshold for biopsy consideration, especially in men with PSA 4-10 ng/mL.";
      recommendation = "Consider urological consultation. May warrant prostate biopsy depending on other risk factors (age, family history, DRE findings).";
    } else if (ratio >= 10) {
      riskLevel = "High Risk";
      riskClass = "high";
      cancerProbability = 25;
      interpretation = "Low free PSA ratio indicates higher probability of prostate cancer. The lower the ratio, the higher the cancer risk.";
      recommendation = "Urological consultation recommended. Strong consideration for prostate biopsy and possible multiparametric MRI.";
    } else {
      riskLevel = "Very High Risk";
      riskClass = "very-high";
      cancerProbability = 35;
      interpretation = "Very low free PSA ratio strongly suggests prostate cancer. Immediate evaluation is warranted.";
      recommendation = "Urgent urological referral recommended. Prostate biopsy and staging workup should be considered promptly.";
    }

    const freePSAResult: FreePSAResult = {
      ratio,
      riskLevel,
      interpretation,
      recommendation,
      riskClass,
      cancerProbability
    };

    setResult(freePSAResult);
  };

  const clearResults = () => {
    setTotalPSA(0);
    setFreePSA(0);
    setResult(null);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Free PSA Ratio Calculator</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Calculate the percentage of free PSA to help differentiate between benign prostatic hyperplasia (BPH) and prostate cancer. 
          Ratios &lt;15% may indicate higher cancer risk.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 w-5 h-5 text-blue-600" />
              PSA Measurements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Sample Requirements</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Same blood draw for both measurements</li>
                <li>• Avoid ejaculation 48 hours before test</li>
                <li>• No prostate manipulation before sampling</li>
                <li>• Most useful when total PSA is 4-10 ng/mL</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="total-psa">Total PSA (ng/mL)</Label>
                <Input
                  id="total-psa"
                  type="number"
                  step="0.1"
                  min="0"
                  value={totalPSA || ""}
                  onChange={(e) => setTotalPSA(parseFloat(e.target.value) || 0)}
                  placeholder="e.g., 6.5"
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Normal range varies by age; typically &lt;4 ng/mL
                </p>
              </div>

              <div>
                <Label htmlFor="free-psa">Free PSA (ng/mL)</Label>
                <Input
                  id="free-psa"
                  type="number"
                  step="0.01"
                  min="0"
                  value={freePSA || ""}
                  onChange={(e) => setFreePSA(parseFloat(e.target.value) || 0)}
                  placeholder="e.g., 1.3"
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be less than or equal to total PSA
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={calculateFreePSARatio}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                disabled={!totalPSA || !freePSA}
              >
                <Calculator className="mr-2 w-4 h-4" />
                Calculate Ratio
              </Button>
              <Button
                variant="outline"
                onClick={clearResults}
                className="flex-1"
              >
                Clear
              </Button>
            </div>

            {/* Formula Display */}
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Calculation Formula</h4>
                <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                  Free PSA Ratio = (Free PSA ÷ Total PSA) × 100
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Result expressed as percentage
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 w-5 h-5 text-green-600" />
              Ratio Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                {/* Main Result */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {result.ratio.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600 mb-3">Free PSA Ratio</div>
                  <Badge 
                    variant={result.riskClass === 'low' ? 'secondary' : 
                            result.riskClass === 'low-intermediate' ? 'default' :
                            result.riskClass === 'intermediate' ? 'default' : 
                            result.riskClass === 'high' ? 'destructive' : 'destructive'}
                    className="text-sm"
                  >
                    {result.riskLevel}
                  </Badge>
                </div>

                {/* Risk Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {result.cancerProbability}%
                    </div>
                    <div className="text-sm text-gray-600">Estimated Cancer Risk</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {((totalPSA - freePSA) / totalPSA * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600">Complexed PSA</div>
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

                {/* Risk Thresholds */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="text-sm font-medium text-yellow-800 mb-2">Free PSA Ratio Thresholds</h4>
                  <div className="text-sm text-yellow-700 space-y-1">
                    <div>• ≥25%: Low cancer risk (~8%)</div>
                    <div>• 20-24%: Low-intermediate risk (~16%)</div>
                    <div>• 15-19%: Intermediate risk (~20%)</div>
                    <div>• 10-14%: High risk (~25%)</div>
                    <div>• &lt;10%: Very high risk (~35%)</div>
                  </div>
                </div>

                {/* Medical Disclaimer */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-red-800 mb-1">Medical Disclaimer</h4>
                      <p className="text-sm text-red-700">
                        Free PSA ratio should be interpreted alongside other clinical factors including DRE findings, 
                        family history, and patient age. Not recommended as standalone screening tool.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Results Yet</h3>
                <p className="text-gray-600">Enter PSA values to calculate the free PSA ratio</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Educational Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Info className="mr-2 w-5 h-5 text-blue-600" />
            Understanding Free PSA Ratio
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Clinical Background</h4>
              <p className="text-gray-700 text-sm mb-4">
                PSA exists in blood in both free and protein-bound forms. In prostate cancer, 
                more PSA becomes bound to proteins, reducing the free PSA percentage. This ratio 
                helps distinguish between BPH and cancer, especially when total PSA is 4-10 ng/mL.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Clinical Utility</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Improves specificity of PSA testing</li>
                <li>• Reduces unnecessary biopsies</li>
                <li>• Most useful in "gray zone" PSA (4-10 ng/mL)</li>
                <li>• Helps guide biopsy decisions</li>
                <li>• Cost-effective screening enhancement</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Important Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Less reliable with very high or low total PSA</li>
                <li>• Age-related variations exist</li>
                <li>• Affected by recent prostate manipulation</li>
                <li>• Laboratory assay differences</li>
                <li>• Sample stability requirements</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Guidelines for Use</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Most valuable when total PSA 4-10 ng/mL</li>
                <li>• Use 15% cutoff for biopsy decisions</li>
                <li>• Consider age-specific adjustments</li>
                <li>• Integrate with other risk factors</li>
                <li>• May be less useful in African American men</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}