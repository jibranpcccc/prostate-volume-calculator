import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Calculator, TrendingUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FreeTestosteroneResult {
  freeTestosterone: number;
  bioavailableTestosterone: number;
  freePercentage: number;
  bioavailablePercentage: number;
  interpretation: string;
  normalRange: string;
  riskLevel: string;
  riskClass: string;
  recommendations: string[];
  clinicalSignificance: string;
}

export default function FreeTestosteroneCalculator() {
  const [totalTestosterone, setTotalTestosterone] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [shbg, setSHBG] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState<FreeTestosteroneResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateFreeTestosterone = () => {
    const totalT = parseFloat(totalTestosterone);
    const albuminLevel = parseFloat(albumin);
    const shbgLevel = parseFloat(shbg);
    const patientAge = parseFloat(age);

    if (isNaN(totalT) || isNaN(albuminLevel) || isNaN(shbgLevel) || isNaN(patientAge)) {
      return;
    }

    // Convert units if needed (assuming ng/dL input, convert to nmol/L for calculation)
    const totalTNmol = totalT * 0.0347; // ng/dL to nmol/L
    const albuminGmol = albuminLevel * 144.9; // g/dL to μmol/L
    const shbgNmol = shbgLevel; // Already in nmol/L

    // Vermeulen calculation for free testosterone
    // Constants for testosterone binding
    const Ka_shbg = 1.0e9; // Association constant for SHBG
    const Ka_albumin = 4.06e4; // Association constant for albumin

    // Calculate free testosterone using quadratic equation solution
    const a = Ka_shbg * shbgNmol + Ka_albumin * albuminGmol + 1;
    const b = Ka_shbg * shbgNmol + Ka_albumin * albuminGmol - totalTNmol;
    const c = -totalTNmol;

    const discriminant = b * b - 4 * a * c;
    const freeTestosteroneNmol = (-b + Math.sqrt(discriminant)) / (2 * a);
    
    // Convert back to pg/mL (more common clinical unit)
    const freeTestosteronePg = freeTestosteroneNmol * 28.84; // nmol/L to pg/mL

    // Calculate bioavailable testosterone (free + albumin-bound)
    const albuminBoundT = Ka_albumin * albuminGmol * freeTestosteroneNmol;
    const bioavailableTestosteroneNmol = freeTestosteroneNmol + albuminBoundT;
    const bioavailableTestosteronePg = bioavailableTestosteroneNmol * 28.84;

    // Calculate percentages
    const freePercentage = (freeTestosteronePg / (totalT * 10)) * 100; // Convert ng/dL to pg/mL
    const bioavailablePercentage = (bioavailableTestosteronePg / (totalT * 10)) * 100;

    // Age-adjusted normal ranges for free testosterone (pg/mL)
    let normalRangeLow: number;
    let normalRangeHigh: number;

    if (patientAge < 30) {
      normalRangeLow = 8.7;
      normalRangeHigh = 25.1;
    } else if (patientAge < 40) {
      normalRangeLow = 8.3;
      normalRangeHigh = 24.0;
    } else if (patientAge < 50) {
      normalRangeLow = 7.8;
      normalRangeHigh = 22.8;
    } else if (patientAge < 60) {
      normalRangeLow = 7.2;
      normalRangeHigh = 21.3;
    } else if (patientAge < 70) {
      normalRangeLow = 6.6;
      normalRangeHigh = 19.8;
    } else {
      normalRangeLow = 6.0;
      normalRangeHigh = 18.1;
    }

    let riskLevel: string;
    let riskClass: string;
    let interpretation: string;
    let recommendations: string[];
    let clinicalSignificance: string;

    if (freeTestosteronePg >= normalRangeLow) {
      riskLevel = "Normal";
      riskClass = "bg-green-100 text-green-800 border-green-200";
      interpretation = "Free testosterone levels are within the normal range for your age group.";
      recommendations = [
        "Maintain healthy lifestyle habits",
        "Regular exercise and strength training",
        "Adequate sleep (7-9 hours)",
        "Balanced nutrition with adequate protein"
      ];
      clinicalSignificance = "Normal free testosterone levels suggest adequate bioactive hormone availability.";
    } else if (freeTestosteronePg >= normalRangeLow * 0.8) {
      riskLevel = "Borderline Low";
      riskClass = "bg-yellow-100 text-yellow-800 border-yellow-200";
      interpretation = "Free testosterone is in the borderline low range, which may contribute to symptoms of hypogonadism.";
      recommendations = [
        "Consider lifestyle optimization",
        "Evaluate for underlying causes",
        "Monitor symptoms and repeat testing",
        "Consider specialist consultation"
      ];
      clinicalSignificance = "Borderline levels may be associated with subtle symptoms and warrant clinical correlation.";
    } else {
      riskLevel = "Low";
      riskClass = "bg-red-100 text-red-800 border-red-200";
      interpretation = "Free testosterone levels are below the normal range, indicating potential testosterone deficiency.";
      recommendations = [
        "Medical evaluation recommended",
        "Assess for underlying causes",
        "Consider testosterone replacement therapy",
        "Endocrinology or urology consultation"
      ];
      clinicalSignificance = "Low free testosterone levels support a diagnosis of hypogonadism and may explain symptoms.";
    }

    const freeTestosteroneResult: FreeTestosteroneResult = {
      freeTestosterone: Math.round(freeTestosteronePg * 10) / 10,
      bioavailableTestosterone: Math.round(bioavailableTestosteronePg * 10) / 10,
      freePercentage: Math.round(freePercentage * 100) / 100,
      bioavailablePercentage: Math.round(bioavailablePercentage * 100) / 100,
      interpretation,
      normalRange: `${normalRangeLow} - ${normalRangeHigh} pg/mL`,
      riskLevel,
      riskClass,
      recommendations,
      clinicalSignificance
    };

    setResult(freeTestosteroneResult);
    setShowResult(true);
  };

  const isComplete = totalTestosterone && albumin && shbg && age;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Free Testosterone Calculator</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Calculate free and bioavailable testosterone using the Vermeulen equation with total testosterone, SHBG, and albumin levels
        </p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          This calculator uses the validated Vermeulen equation to estimate free testosterone. Results should be interpreted by a healthcare provider in the context of clinical symptoms and other laboratory findings.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Laboratory Values Input
          </CardTitle>
          <CardDescription>
            Enter your laboratory results and demographic information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="totalTestosterone">Total Testosterone (ng/dL)</Label>
              <Input
                id="totalTestosterone"
                type="number"
                placeholder="300-1000"
                value={totalTestosterone}
                onChange={(e) => setTotalTestosterone(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Normal range: 300-1000 ng/dL</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="shbg">SHBG (nmol/L)</Label>
              <Input
                id="shbg"
                type="number"
                placeholder="10-80"
                value={shbg}
                onChange={(e) => setSHBG(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Normal range: 10-80 nmol/L</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="albumin">Albumin (g/dL)</Label>
              <Input
                id="albumin"
                type="number"
                step="0.1"
                placeholder="3.5-5.0"
                value={albumin}
                onChange={(e) => setAlbumin(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Normal range: 3.5-5.0 g/dL</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age (years)</Label>
              <Input
                id="age"
                type="number"
                placeholder="18-100"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-gray-500">Used for age-adjusted reference ranges</p>
            </div>
          </div>

          <Button
            onClick={calculateFreeTestosterone}
            disabled={!isComplete}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Calculate Free Testosterone
          </Button>
        </CardContent>
      </Card>

      {showResult && result && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Calculation Results
              <Badge className={result.riskClass}>
                {result.riskLevel}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Free Testosterone</h3>
                <p className="text-3xl font-bold text-blue-600">{result.freeTestosterone} pg/mL</p>
                <p className="text-sm text-gray-600">{result.freePercentage}% of total</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Bioavailable Testosterone</h3>
                <p className="text-3xl font-bold text-green-600">{result.bioavailableTestosterone} pg/mL</p>
                <p className="text-sm text-gray-600">{result.bioavailablePercentage}% of total</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Age-Adjusted Normal Range</h3>
              <p className="text-gray-700">{result.normalRange}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Clinical Interpretation</h3>
                <p className="text-gray-700">{result.interpretation}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Clinical Significance</h3>
                <p className="text-gray-700">{result.clinicalSignificance}</p>
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
                <strong>Clinical Note:</strong> Free testosterone is the biologically active fraction. This calculation provides an estimate based on binding protein levels and should be correlated with clinical symptoms.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>About Free Testosterone Calculation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vermeulen Equation</h3>
              <p className="text-sm text-gray-700">
                This calculator uses the Vermeulen equation, which is considered the gold standard for calculating 
                free testosterone from total testosterone, SHBG, and albumin measurements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Clinical Significance</h3>
              <p className="text-sm text-gray-700">
                Free testosterone represents the unbound, biologically active hormone. It's often more clinically 
                relevant than total testosterone, especially when SHBG levels are abnormal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Bioavailable Testosterone</h3>
              <p className="text-sm text-gray-700">
                Includes both free testosterone and loosely albumin-bound testosterone, representing the 
                potentially bioactive hormone fraction.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Age Considerations</h3>
              <p className="text-sm text-gray-700">
                Normal ranges are age-adjusted as testosterone naturally declines with aging. 
                SHBG typically increases with age, affecting the free testosterone percentage.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}