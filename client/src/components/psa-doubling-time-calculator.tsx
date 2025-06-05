import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Plus, Trash2, Calculator, Calendar } from "lucide-react";

interface PSAReading {
  id: number;
  date: string;
  value: number;
}

interface PSADTResult {
  doublingTime: number;
  doublingTimeMonths: number;
  riskLevel: string;
  interpretation: string;
  recommendation: string;
  riskClass: string;
  velocity: number;
  timeSpan: number;
}

export default function PSADoublingTimeCalculator() {
  const [readings, setReadings] = useState<PSAReading[]>([
    { id: 1, date: "", value: 0 },
    { id: 2, date: "", value: 0 }
  ]);
  const [result, setResult] = useState<PSADTResult | null>(null);

  const addReading = () => {
    const newId = Math.max(...readings.map(r => r.id)) + 1;
    setReadings([...readings, { id: newId, date: "", value: 0 }]);
  };

  const removeReading = (id: number) => {
    if (readings.length > 2) {
      setReadings(readings.filter(r => r.id !== id));
    }
  };

  const updateReading = (id: number, field: keyof PSAReading, value: string | number) => {
    setReadings(readings.map(r => 
      r.id === id ? { ...r, [field]: value } : r
    ));
  };

  const calculatePSADT = () => {
    const validReadings = readings.filter(r => r.date && r.value > 0)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    if (validReadings.length < 2) {
      alert("Please enter at least 2 valid PSA readings with dates.");
      return;
    }

    // Use linear regression approach for multiple points
    const n = validReadings.length;
    let sumT = 0, sumLogPSA = 0, sumTLogPSA = 0, sumT2 = 0;
    
    const baseDate = new Date(validReadings[0].date).getTime();
    
    for (let i = 0; i < n; i++) {
      const timeYears = (new Date(validReadings[i].date).getTime() - baseDate) / (1000 * 60 * 60 * 24 * 365.25);
      const logPSA = Math.log(validReadings[i].value);
      
      sumT += timeYears;
      sumLogPSA += logPSA;
      sumTLogPSA += timeYears * logPSA;
      sumT2 += timeYears * timeYears;
    }

    // Calculate slope (k) from linear regression of ln(PSA) vs time
    const slope = (n * sumTLogPSA - sumT * sumLogPSA) / (n * sumT2 - sumT * sumT);
    
    if (slope <= 0) {
      alert("PSA doubling time cannot be calculated - PSA is not increasing over time.");
      return;
    }

    // PSA doubling time = ln(2) / slope
    const doublingTimeYears = Math.log(2) / slope;
    const doublingTimeMonths = doublingTimeYears * 12;
    
    // Calculate PSA velocity for additional context
    const firstReading = validReadings[0];
    const lastReading = validReadings[validReadings.length - 1];
    const timeSpanYears = (new Date(lastReading.date).getTime() - new Date(firstReading.date).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    const velocity = (lastReading.value - firstReading.value) / timeSpanYears;

    // Determine risk level based on doubling time
    let riskLevel: string;
    let riskClass: string;
    let interpretation: string;
    let recommendation: string;

    if (doublingTimeMonths >= 24) {
      riskLevel = "Low Risk";
      riskClass = "low";
      interpretation = "PSA doubling time is slow (≥24 months), suggesting indolent disease progression or benign causes.";
      recommendation = "Continue routine monitoring. Consider active surveillance if appropriate for clinical context.";
    } else if (doublingTimeMonths >= 12) {
      riskLevel = "Intermediate Risk";
      riskClass = "intermediate";
      interpretation = "PSA doubling time is moderate (12-24 months), requiring closer monitoring and possible intervention.";
      recommendation = "More frequent monitoring recommended. Consider additional diagnostic studies or treatment escalation.";
    } else if (doublingTimeMonths >= 6) {
      riskLevel = "High Risk";
      riskClass = "high";
      interpretation = "PSA doubling time is rapid (6-12 months), suggesting aggressive disease or treatment failure.";
      recommendation = "Urgent evaluation recommended. Consider imaging, biopsy, or treatment modification.";
    } else {
      riskLevel = "Very High Risk";
      riskClass = "very-high";
      interpretation = "PSA doubling time is very rapid (<6 months), indicating highly aggressive disease or acute progression.";
      recommendation = "Immediate intervention required. Emergency urological consultation and comprehensive restaging.";
    }

    const psadtResult: PSADTResult = {
      doublingTime: doublingTimeYears,
      doublingTimeMonths,
      riskLevel,
      interpretation,
      recommendation,
      riskClass,
      velocity,
      timeSpan: timeSpanYears
    };

    setResult(psadtResult);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">PSA Doubling Time Calculator</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Calculate the time required for PSA to double. PSA doubling time &lt;12 months may indicate aggressive disease requiring urgent evaluation.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 w-5 h-5 text-blue-600" />
              PSA Measurements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Clinical Context</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Most useful in post-treatment monitoring</li>
                <li>• Requires rising PSA trend</li>
                <li>• Minimum 2 measurements needed</li>
                <li>• Consider biochemical recurrence definitions</li>
              </ul>
            </div>

            {readings.map((reading, index) => (
              <div key={reading.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Measurement {index + 1}</h4>
                  {readings.length > 2 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeReading(reading.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`date-${reading.id}`}>Date</Label>
                    <Input
                      id={`date-${reading.id}`}
                      type="date"
                      value={reading.date}
                      onChange={(e) => updateReading(reading.id, 'date', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`psa-${reading.id}`}>PSA Value (ng/mL)</Label>
                    <Input
                      id={`psa-${reading.id}`}
                      type="number"
                      step="0.01"
                      min="0"
                      value={reading.value || ""}
                      onChange={(e) => updateReading(reading.id, 'value', parseFloat(e.target.value) || 0)}
                      placeholder="e.g., 0.25"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={addReading}
                className="flex-1"
              >
                <Plus className="mr-2 w-4 h-4" />
                Add Measurement
              </Button>
              <Button
                onClick={calculatePSADT}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                <Calculator className="mr-2 w-4 h-4" />
                Calculate PSADT
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 w-5 h-5 text-orange-600" />
              Doubling Time Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                {/* Main Result */}
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {result.doublingTimeMonths.toFixed(1)} months
                  </div>
                  <div className="text-lg text-gray-600 mb-3">
                    ({result.doublingTime.toFixed(2)} years)
                  </div>
                  <Badge 
                    variant={result.riskClass === 'low' ? 'secondary' : 
                            result.riskClass === 'intermediate' ? 'default' : 
                            result.riskClass === 'high' ? 'destructive' : 'destructive'}
                    className="text-sm"
                  >
                    {result.riskLevel}
                  </Badge>
                </div>

                {/* Additional Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">
                      {result.velocity.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">PSA Velocity (ng/mL/yr)</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">
                      {result.timeSpan.toFixed(1)}
                    </div>
                    <div className="text-sm text-gray-600">Follow-up (years)</div>
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

                {/* Risk Stratification */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="text-sm font-medium text-yellow-800 mb-2">PSADT Risk Stratification</h4>
                  <div className="text-sm text-yellow-700 space-y-1">
                    <div>• ≥24 months: Low risk (indolent)</div>
                    <div>• 12-24 months: Intermediate risk</div>
                    <div>• 6-12 months: High risk (aggressive)</div>
                    <div>• &lt;6 months: Very high risk (urgent)</div>
                  </div>
                </div>

                {/* Medical Disclaimer */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-red-800 mb-1">Medical Disclaimer</h4>
                      <p className="text-sm text-red-700">
                        PSADT should be interpreted in clinical context. Factors like PSA assay variation, 
                        lab changes, and intercurrent illness can affect results. Consult oncology for treatment decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Results Yet</h3>
                <p className="text-gray-600">Enter PSA measurements to calculate doubling time</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Educational Content */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding PSA Doubling Time</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Clinical Applications</h4>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Post-prostatectomy biochemical recurrence</li>
                <li>• Post-radiation therapy monitoring</li>
                <li>• Active surveillance decision-making</li>
                <li>• Treatment response assessment</li>
                <li>• Prognosis estimation</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3">Prognostic Significance</h4>
              <p className="text-gray-700 text-sm">
                PSADT is a strong predictor of cancer-specific mortality. Shorter doubling times 
                (&lt;3 months) are associated with metastatic progression and poor survival, 
                while longer times (&gt;15 months) suggest indolent disease.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Important Considerations</h4>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Requires exponential PSA rise pattern</li>
                <li>• Most accurate with 3+ measurements</li>
                <li>• Consider PSA assay variability (±20%)</li>
                <li>• Account for intercurrent medical conditions</li>
                <li>• Use consistent laboratory when possible</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Treatment Implications</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• &lt;6 months: Consider immediate systemic therapy</li>
                <li>• 6-12 months: May benefit from early intervention</li>
                <li>• &gt;12 months: Observation may be appropriate</li>
                <li>• Consider patient age and comorbidities</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}