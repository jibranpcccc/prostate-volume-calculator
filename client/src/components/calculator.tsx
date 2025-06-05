import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator as CalculatorIcon, Info, PrinterIcon, Download } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

interface CalculationResult {
  volume: number;
  assessment: string;
  interpretation: string;
  assessmentClass: string;
}

export default function Calculator() {
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [method, setMethod] = useState<string>("ellipsoid");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const { toast } = useToast();

  const validateInputs = (): boolean => {
    const newErrors: string[] = [];
    
    if (!length || parseFloat(length) <= 0) {
      newErrors.push("Length must be a positive number");
    } else if (parseFloat(length) < 10 || parseFloat(length) > 100) {
      newErrors.push("Length should be between 10-100mm for typical measurements");
    }
    
    if (!width || parseFloat(width) <= 0) {
      newErrors.push("Width must be a positive number");
    } else if (parseFloat(width) < 10 || parseFloat(width) > 100) {
      newErrors.push("Width should be between 10-100mm for typical measurements");
    }
    
    if (!height || parseFloat(height) <= 0) {
      newErrors.push("Height must be a positive number");
    } else if (parseFloat(height) < 10 || parseFloat(height) > 100) {
      newErrors.push("Height should be between 10-100mm for typical measurements");
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const calculateVolume = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateInputs()) {
      return;
    }

    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);

    // Calculate volume using ellipsoid formula
    const volume = (Math.PI / 6) * l * w * h;

    // Determine assessment and interpretation
    let assessment: string;
    let interpretation: string;
    let assessmentClass: string;

    if (volume < 15) {
      assessment = "Below Normal Range";
      interpretation = "Volume below typical range. May be normal for younger adults (<30 years) or indicate measurement error. Clinical correlation with age and symptoms recommended.";
      assessmentClass = "text-blue-600";
    } else if (volume <= 25) {
      assessment = "Normal Range (Young Adult)";
      interpretation = "Normal prostate volume for men under 40 years. No intervention typically required unless symptomatic. Annual monitoring after age 50 recommended.";
      assessmentClass = "text-green-600";
    } else if (volume <= 40) {
      assessment = "Normal to Mildly Enlarged";
      interpretation = "Age-appropriate volume for men 40-60 years. Monitor symptoms with IPSS questionnaire. Consider alpha-blocker therapy if symptomatic (IPSS >7).";
      assessmentClass = "text-green-600";
    } else if (volume <= 60) {
      assessment = "Moderate Enlargement (BPH)";
      interpretation = "Moderate BPH. Combination therapy (alpha-blocker + 5-ARI) recommended if symptomatic. PSA density calculation advised to exclude malignancy.";
      assessmentClass = "text-yellow-600";
    } else if (volume <= 80) {
      assessment = "Significant Enlargement (BPH)";
      interpretation = "Significant BPH with high likelihood of progression. Medical therapy optimization indicated. Consider minimally invasive procedures if medication fails.";
      assessmentClass = "text-orange-600";
    } else if (volume <= 100) {
      assessment = "Large Prostate (Surgical Candidate)";
      interpretation = "Large prostate suitable for surgical intervention. TURP, HoLEP, or other procedures indicated based on symptoms and patient factors.";
      assessmentClass = "text-red-600";
    } else {
      assessment = "Very Large Prostate";
      interpretation = "Very large prostate (>100 mL). Simple prostatectomy or advanced endoscopic techniques indicated. Multidisciplinary evaluation recommended.";
      assessmentClass = "text-red-600";
    }

    const calculationResult: CalculationResult = {
      volume,
      assessment,
      interpretation,
      assessmentClass
    };

    setResult(calculationResult);
    
    // Track calculation event
    trackEvent('prostate_volume_calculated', 'calculator', 'calculation_completed', Math.round(volume));

    toast({
      title: "Calculation Complete",
      description: `Prostate volume: ${volume.toFixed(1)} mL`,
    });
  };

  const printResults = () => {
    if (!result) return;
    
    const printContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h1 style="color: #1565C0; margin-bottom: 20px;">Prostate Volume Calculation Results</h1>
        <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin-top: 0;">Measurements</h2>
          <p><strong>Length:</strong> ${length} mm</p>
          <p><strong>Width:</strong> ${width} mm</p>
          <p><strong>Height:</strong> ${height} mm</p>
          <p><strong>Method:</strong> ${method === 'ellipsoid' ? 'Ellipsoid Formula' : 'TRUS Guided'}</p>
        </div>
        <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin-top: 0;">Results</h2>
          <p><strong>Prostate Volume:</strong> ${result.volume.toFixed(1)} mL</p>
          <p><strong>Assessment:</strong> ${result.assessment}</p>
          <p><strong>Interpretation:</strong> ${result.interpretation}</p>
        </div>
        <div style="border-top: 1px solid #ddd; padding-top: 20px; font-size: 12px; color: #666;">
          <p><em>Date: ${new Date().toLocaleDateString()}</em></p>
          <p><strong>Medical Disclaimer:</strong> This calculation is for educational purposes only. Consult with a healthcare provider for medical advice.</p>
          <p>Generated by ProstateVolumeCalc.com</p>
        </div>
      </div>
    `;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Prostate Volume Calculation Results</title>
            <style>
              body { margin: 0; padding: 20px; }
              @media print { body { margin: 0; } }
            </style>
          </head>
          <body>
            ${printContent}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
    
    trackEvent('results_printed', 'calculator', 'print_action');
  };

  const saveResults = () => {
    if (!result) return;
    
    // In a real application, this would generate and download a PDF
    toast({
      title: "Save Feature",
      description: "PDF generation would be implemented with a PDF library in production.",
    });
    
    trackEvent('results_save_attempted', 'calculator', 'save_action');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-2 flex items-center justify-center">
          <CalculatorIcon className="mr-3 w-6 h-6" />
          Prostate Volume Calculator
        </h2>
        <p className="text-gray-600 text-sm">Enter TRUS measurements to calculate prostate volume</p>
      </div>

      <form onSubmit={calculateVolume} className="space-y-6">
        {/* Measurement Method Selection */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">Measurement Method</Label>
          <RadioGroup value={method} onValueChange={setMethod} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50">
              <RadioGroupItem value="ellipsoid" id="ellipsoid" />
              <Label htmlFor="ellipsoid" className="text-sm font-medium cursor-pointer">Ellipsoid Formula</Label>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50">
              <RadioGroupItem value="trus" id="trus" />
              <Label htmlFor="trus" className="text-sm font-medium cursor-pointer">TRUS Guided</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Measurement Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-2">
              Length (mm) <span className="text-red-500">*</span>
              <Info className="inline w-4 h-4 ml-1 text-gray-400" />
            </Label>
            <Input
              id="length"
              type="number"
              step="0.1"
              min="0"
              max="200"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="45.0"
              className="font-mono"
              required
            />
            <span className="text-xs text-gray-500 mt-1 block">Normal: 30-45mm</span>
          </div>

          <div>
            <Label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-2">
              Width (mm) <span className="text-red-500">*</span>
              <Info className="inline w-4 h-4 ml-1 text-gray-400" />
            </Label>
            <Input
              id="width"
              type="number"
              step="0.1"
              min="0"
              max="200"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="35.0"
              className="font-mono"
              required
            />
            <span className="text-xs text-gray-500 mt-1 block">Normal: 25-35mm</span>
          </div>

          <div>
            <Label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
              Height (mm) <span className="text-red-500">*</span>
              <Info className="inline w-4 h-4 ml-1 text-gray-400" />
            </Label>
            <Input
              id="height"
              type="number"
              step="0.1"
              min="0"
              max="200"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="30.0"
              className="font-mono"
              required
            />
            <span className="text-xs text-gray-500 mt-1 block">Normal: 20-30mm</span>
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
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Clinical Calculation Method:</h3>
          <div className="space-y-3">
            <div className="bg-white rounded p-3 border">
              <p className="text-center text-lg font-mono font-bold text-blue-600 mb-2">
                Volume = π/6 × L × W × H
              </p>
              <p className="text-xs text-center text-gray-600">
                Ellipsoid Formula (Gold Standard for TRUS)
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white rounded p-2">
                <p className="font-medium text-gray-900">Validation:</p>
                <p className="text-gray-600">r = 0.90-0.96 vs planimetry</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="font-medium text-gray-900">Accuracy:</p>
                <p className="text-gray-600">±10% in 85-90% of cases</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 text-center">
              <strong>Clinical Note:</strong> π/6 ≈ 0.524 (ellipsoid constant for prolate spheroid approximation)
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <CalculatorIcon className="mr-2 w-5 h-5" />
          Calculate Prostate Volume
        </Button>
      </form>

      {/* Results Display */}
      {result && (
        <Card className="mt-6 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-600">Calculation Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-700 text-sm">Prostate Volume:</span>
                <div className="font-bold font-mono text-lg">{result.volume.toFixed(1)} mL</div>
              </div>
              <div>
                <span className="text-gray-700 text-sm">Assessment:</span>
                <div className={`font-semibold ${result.assessmentClass}`}>{result.assessment}</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="bg-white rounded border p-3">
              <p className="text-sm text-gray-600">{result.interpretation}</p>
            </div>
            
            {/* Volume Range Reference */}
            <div className="bg-white rounded border p-4">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Clinical Reference Ranges:</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span>Below Normal: &lt;15 mL</span>
                  </div>
                  <span className="text-gray-500">Young adults</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Normal: 15-40 mL</span>
                  </div>
                  <span className="text-gray-500">Age-appropriate</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Moderate BPH: 40-80 mL</span>
                  </div>
                  <span className="text-gray-500">Medical therapy</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span>Large: 80-100 mL</span>
                  </div>
                  <span className="text-gray-500">Surgical candidate</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span>Very Large: &gt;100 mL</span>
                  </div>
                  <span className="text-gray-500">Complex surgery</span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  <strong>Clinical Note:</strong> Treatment decisions should consider symptoms (IPSS), 
                  PSA levels, patient age, and comorbidities in addition to volume measurements.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-4">
              <Button
                onClick={printResults}
                variant="outline"
                className="flex-1"
                size="sm"
              >
                <PrinterIcon className="mr-2 w-4 h-4" />
                Print Results
              </Button>
              <Button
                onClick={saveResults}
                variant="outline"
                className="flex-1"
                size="sm"
              >
                <Download className="mr-2 w-4 h-4" />
                Save PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
