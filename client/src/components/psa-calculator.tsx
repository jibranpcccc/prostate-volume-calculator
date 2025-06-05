import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator as CalculatorIcon, TrendingUp, AlertTriangle, Info } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

interface PSAResult {
  psaDensity: number;
  riskLevel: string;
  interpretation: string;
  recommendation: string;
  riskClass: string;
}

export default function PSACalculator() {
  const [psa, setPsa] = useState<string>("");
  const [volume, setVolume] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [result, setResult] = useState<PSAResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const { toast } = useToast();

  const validateInputs = (): boolean => {
    const newErrors: string[] = [];
    
    if (!psa || parseFloat(psa) < 0) {
      newErrors.push("PSA must be a positive number");
    } else if (parseFloat(psa) > 100) {
      newErrors.push("PSA value seems unusually high - please verify");
    }
    
    if (!volume || parseFloat(volume) <= 0) {
      newErrors.push("Prostate volume must be greater than 0");
    } else if (parseFloat(volume) < 10 || parseFloat(volume) > 300) {
      newErrors.push("Volume should be between 10-300mL for typical measurements");
    }
    
    if (!age || parseInt(age) < 18 || parseInt(age) > 120) {
      newErrors.push("Age must be between 18-120 years");
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const calculatePSADensity = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateInputs()) {
      return;
    }

    const psaValue = parseFloat(psa);
    const volumeValue = parseFloat(volume);
    const ageValue = parseInt(age);

    const psaDensity = psaValue / volumeValue;

    let riskLevel: string;
    let interpretation: string;
    let recommendation: string;
    let riskClass: string;

    // Age-adjusted PSA density thresholds
    let lowThreshold = 0.10;
    let highThreshold = 0.15;

    if (ageValue >= 70) {
      lowThreshold = 0.12;
      highThreshold = 0.20;
    } else if (ageValue < 50) {
      lowThreshold = 0.08;
      highThreshold = 0.12;
    }

    if (psaDensity < lowThreshold) {
      riskLevel = "Low Cancer Risk";
      interpretation = `PSA density of ${psaDensity.toFixed(3)} ng/mL/cc suggests low probability of clinically significant prostate cancer. The elevated PSA is likely due to benign prostatic hyperplasia given the prostate volume.`;
      recommendation = "Continue routine screening. Consider annual PSA monitoring. Focus on BPH symptom management if present.";
      riskClass = "text-green-600";
    } else if (psaDensity <= highThreshold) {
      riskLevel = "Intermediate Cancer Risk";
      interpretation = `PSA density of ${psaDensity.toFixed(3)} ng/mL/cc indicates intermediate risk for prostate cancer. Additional risk stratification may be beneficial.`;
      recommendation = "Consider advanced imaging (mpMRI) or biomarker testing (4Kscore, PHI, PCA3). Discuss biopsy with patient based on overall risk profile.";
      riskClass = "text-yellow-600";
    } else {
      riskLevel = "High Cancer Risk";
      interpretation = `PSA density of ${psaDensity.toFixed(3)} ng/mL/cc suggests high probability of clinically significant prostate cancer requiring evaluation.`;
      recommendation = "Prostate biopsy strongly recommended. Consider systematic + targeted biopsy if mpMRI available. Discuss with urology specialist.";
      riskClass = "text-red-600";
    }

    const psaResult: PSAResult = {
      psaDensity,
      riskLevel,
      interpretation,
      recommendation,
      riskClass
    };

    setResult(psaResult);
    
    trackEvent('psa_density_calculated', 'calculator', 'psa_calculation_completed', Math.round(psaDensity * 1000));

    toast({
      title: "PSA Density Calculated",
      description: `PSA Density: ${psaDensity.toFixed(3)} ng/mL/cc`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-600 mb-2 flex items-center justify-center">
          <TrendingUp className="mr-3 w-6 h-6" />
          PSA Density Calculator
        </h2>
        <p className="text-gray-600 text-sm">Calculate PSA density for enhanced prostate cancer risk assessment</p>
      </div>

      <form onSubmit={calculatePSADensity} className="space-y-6">
        {/* Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="psa" className="block text-sm font-medium text-gray-700 mb-2">
              PSA Level (ng/mL) <span className="text-red-500">*</span>
              <Info className="inline w-4 h-4 ml-1 text-gray-400" />
            </Label>
            <Input
              id="psa"
              type="number"
              step="0.01"
              min="0"
              max="100"
              value={psa}
              onChange={(e) => setPsa(e.target.value)}
              placeholder="4.5"
              className="font-mono"
              required
            />
            <span className="text-xs text-gray-500 mt-1 block">Total PSA value</span>
          </div>

          <div>
            <Label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-2">
              Prostate Volume (mL) <span className="text-red-500">*</span>
              <Info className="inline w-4 h-4 ml-1 text-gray-400" />
            </Label>
            <Input
              id="volume"
              type="number"
              step="0.1"
              min="0"
              max="300"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="45.0"
              className="font-mono"
              required
            />
            <span className="text-xs text-gray-500 mt-1 block">From ellipsoid calculation</span>
          </div>

          <div>
            <Label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
              Patient Age (years) <span className="text-red-500">*</span>
              <Info className="inline w-4 h-4 ml-1 text-gray-400" />
            </Label>
            <Input
              id="age"
              type="number"
              min="18"
              max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="65"
              className="font-mono"
              required
            />
            <span className="text-xs text-gray-500 mt-1 block">For age-adjusted thresholds</span>
          </div>
        </div>

        {/* Error Display */}
        {errors.length > 0 && (
          <Alert className="border-red-200 bg-red-50">
            <AlertDescription className="text-red-700">
              <ul className="list-disc list-inside space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}

        {/* Formula Information */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">PSA Density Calculation:</h3>
          <div className="bg-white rounded p-3 border">
            <p className="text-center text-lg font-mono font-bold text-purple-600 mb-2">
              PSA Density = PSA (ng/mL) ÷ Prostate Volume (mL)
            </p>
            <p className="text-xs text-center text-gray-600">
              Normalizes PSA for prostate size to improve cancer detection specificity
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs mt-3">
            <div className="bg-white rounded p-2">
              <p className="font-medium text-gray-900">Low Risk:</p>
              <p className="text-gray-600">&lt;0.10 ng/mL/cc</p>
            </div>
            <div className="bg-white rounded p-2">
              <p className="font-medium text-gray-900">Intermediate:</p>
              <p className="text-gray-600">0.10-0.15 ng/mL/cc</p>
            </div>
            <div className="bg-white rounded p-2">
              <p className="font-medium text-gray-900">High Risk:</p>
              <p className="text-gray-600">&gt;0.15 ng/mL/cc</p>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <CalculatorIcon className="mr-2 w-5 h-5" />
          Calculate PSA Density
        </Button>
      </form>

      {/* Results Display */}
      {result && (
        <Card className="mt-6 border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-600">PSA Density Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-700 text-sm">PSA Density:</span>
                <div className="font-bold font-mono text-lg">{result.psaDensity.toFixed(3)} ng/mL/cc</div>
              </div>
              <div>
                <span className="text-gray-700 text-sm">Cancer Risk:</span>
                <div className={`font-semibold ${result.riskClass}`}>{result.riskLevel}</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <div className="bg-white rounded border p-3">
                <h4 className="font-semibold text-gray-900 mb-2">Clinical Interpretation:</h4>
                <p className="text-sm text-gray-600">{result.interpretation}</p>
              </div>
              
              <div className="bg-white rounded border p-3">
                <h4 className="font-semibold text-gray-900 mb-2">Recommended Action:</h4>
                <p className="text-sm text-gray-600">{result.recommendation}</p>
              </div>
            </div>
            
            {/* Age-Adjusted Reference */}
            <div className="bg-white rounded border p-4">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Age-Adjusted PSA Density Thresholds:</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>&lt;50 years: &lt;0.08 ng/mL/cc (Low)</span>
                  </div>
                  <span className="text-gray-500">Young adults</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span>50-69 years: &lt;0.10 ng/mL/cc (Low)</span>
                  </div>
                  <span className="text-gray-500">Standard threshold</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span>≥70 years: &lt;0.12 ng/mL/cc (Low)</span>
                  </div>
                  <span className="text-gray-500">Elderly patients</span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  <strong>Note:</strong> Thresholds adjusted for age-related prostate growth. 
                  Consider family history, race, and additional biomarkers for comprehensive assessment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}