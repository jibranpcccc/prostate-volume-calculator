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

    // Calculate using exponential growth model
    const firstReading = validReadings[0];
    const lastReading = validReadings[validReadings.length - 1];
    
    const firstDate = new Date(firstReading.date);
    const lastDate = new Date(lastReading.date);
    const timeSpanYears = (lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    if (timeSpanYears <= 0) {
      alert("Invalid date sequence. Please ensure dates are in chronological order.");
      return;
    }

    if (lastReading.value <= firstReading.value) {
      alert("PSA doubling time requires rising PSA values over time.");
      return;
    }

    // Calculate velocity and doubling time
    const velocity = (lastReading.value - firstReading.value) / timeSpanYears;
    const growthRate = Math.log(lastReading.value / firstReading.value) / timeSpanYears;
    const doublingTimeYears = Math.log(2) / growthRate;
    const doublingTimeMonths = doublingTimeYears * 12;

    // Determine risk level and interpretation
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
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter PSA Measurements</h3>
            <p className="text-sm text-gray-600">Add at least 2 PSA readings to calculate doubling time.</p>
          </div>
          <div className="space-y-4">
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
                Add Reading
              </Button>
              <Button
                onClick={calculatePSADT}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                <Calculator className="mr-2 w-4 h-4" />
                Calculate Doubling Time
              </Button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PSA Doubling Time Results</h3>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {result ? (
              <div className="space-y-6">
                {/* Main Result */}
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {result.doublingTimeMonths.toFixed(1)} months
                  </div>
                  <div className="text-lg text-gray-700 mb-2">
                    ({result.doublingTime.toFixed(1)} years)
                  </div>
                  <Badge 
                    variant={result.riskClass === 'low' ? 'secondary' : result.riskClass === 'intermediate' ? 'default' : 'destructive'}
                    className="text-sm"
                  >
                    {result.riskLevel}
                  </Badge>
                </div>

                {/* Detailed Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">
                      {result.velocity.toFixed(2)} ng/mL/yr
                    </div>
                    <div className="text-sm text-gray-600">PSA Velocity</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">
                      {result.timeSpan.toFixed(1)} years
                    </div>
                    <div className="text-sm text-gray-600">Time Span</div>
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
                  <h4 className="text-sm font-medium text-yellow-800 mb-2">PSA Doubling Time Thresholds</h4>
                  <div className="text-sm text-yellow-700 space-y-1">
                    <div>• &gt;24 months: Low risk (indolent)</div>
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
                        This calculator is for educational purposes only. PSA doubling time should be interpreted in clinical context. 
                        Always consult with a qualified healthcare provider for medical advice and treatment decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Results Yet</h3>
                <p className="text-gray-600">Enter your PSA measurements and dates to calculate doubling time</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}