import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Plus, Trash2, Calculator, Calendar } from "lucide-react";

interface PSAReading {
  id: number;
  date: string;
  value: number;
}

interface PSAVelocityResult {
  velocity: number;
  annualizedVelocity: number;
  riskLevel: string;
  interpretation: string;
  recommendation: string;
  riskClass: string;
  timeSpan: number;
}

export default function PSAVelocityCalculator() {
  const [readings, setReadings] = useState<PSAReading[]>([
    { id: 1, date: "", value: 0 },
    { id: 2, date: "", value: 0 },
    { id: 3, date: "", value: 0 }
  ]);
  const [result, setResult] = useState<PSAVelocityResult | null>(null);

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

  const calculatePSAVelocity = () => {
    const validReadings = readings.filter(r => r.date && r.value > 0)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    if (validReadings.length < 2) {
      alert("Please enter at least 2 valid PSA readings with dates.");
      return;
    }

    // Calculate velocity using linear regression for multiple points
    let totalVelocity = 0;
    let validIntervals = 0;

    for (let i = 1; i < validReadings.length; i++) {
      const date1 = new Date(validReadings[i-1].date);
      const date2 = new Date(validReadings[i].date);
      const timeDiff = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24 * 365.25); // Years

      if (timeDiff > 0) {
        const psaDiff = validReadings[i].value - validReadings[i-1].value;
        const velocity = psaDiff / timeDiff;
        totalVelocity += velocity;
        validIntervals++;
      }
    }

    if (validIntervals === 0) {
      alert("Invalid date sequence. Please ensure dates are in chronological order.");
      return;
    }

    const avgVelocity = totalVelocity / validIntervals;
    
    // Calculate overall time span
    const firstDate = new Date(validReadings[0].date);
    const lastDate = new Date(validReadings[validReadings.length - 1].date);
    const totalTimeSpan = (lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    // Determine risk level and interpretation
    let riskLevel: string;
    let riskClass: string;
    let interpretation: string;
    let recommendation: string;

    if (avgVelocity <= 0.35) {
      riskLevel = "Low Risk";
      riskClass = "low";
      interpretation = "PSA velocity is within normal range. Low probability of clinically significant prostate cancer.";
      recommendation = "Continue routine screening according to guidelines. Consider annual PSA monitoring.";
    } else if (avgVelocity <= 0.75) {
      riskLevel = "Intermediate Risk";
      riskClass = "intermediate";
      interpretation = "PSA velocity is elevated but below high-risk threshold. Warrants closer monitoring.";
      recommendation = "Consider more frequent PSA monitoring (every 6 months) and discuss with urologist about further evaluation.";
    } else {
      riskLevel = "High Risk";
      riskClass = "high";
      interpretation = "PSA velocity exceeds 0.75 ng/mL/year threshold, suggesting possible prostate cancer. Urgent evaluation recommended.";
      recommendation = "Immediate urological consultation recommended. Consider prostate biopsy and advanced imaging (MRI).";
    }

    const psaVelocityResult: PSAVelocityResult = {
      velocity: avgVelocity,
      annualizedVelocity: avgVelocity,
      riskLevel,
      interpretation,
      recommendation,
      riskClass,
      timeSpan: totalTimeSpan
    };

    setResult(psaVelocityResult);
  };

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter PSA Readings</h3>
            <p className="text-sm text-gray-600">Add at least 2 PSA readings with dates to calculate velocity.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Clinical Guidelines</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Minimum 2 readings required (3+ recommended)</li>
                <li>• Readings should be 6-12 months apart</li>
                <li>• Use same laboratory when possible</li>
                <li>• Avoid PSA testing during acute illness</li>
              </ul>
            </div>

            {readings.map((reading, index) => (
              <div key={reading.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Reading {index + 1}</h4>
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
                      step="0.1"
                      min="0"
                      value={reading.value || ""}
                      onChange={(e) => updateReading(reading.id, 'value', parseFloat(e.target.value) || 0)}
                      placeholder="e.g., 2.5"
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
                onClick={calculatePSAVelocity}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                <Calculator className="mr-2 w-4 h-4" />
                Calculate Velocity
              </Button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PSA Velocity Results</h3>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {result ? (
              <div className="space-y-6">
                {/* Main Result */}
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {result.velocity.toFixed(2)} ng/mL/year
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
                      {result.timeSpan.toFixed(1)} years
                    </div>
                    <div className="text-sm text-gray-600">Time Span</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">
                      {readings.filter(r => r.date && r.value > 0).length}
                    </div>
                    <div className="text-sm text-gray-600">PSA Readings</div>
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
                  <h4 className="text-sm font-medium text-yellow-800 mb-2">PSA Velocity Thresholds</h4>
                  <div className="text-sm text-yellow-700 space-y-1">
                    <div>• &lt;0.35 ng/mL/year: Low risk</div>
                    <div>• 0.35-0.75 ng/mL/year: Intermediate risk</div>
                    <div>• &gt;0.75 ng/mL/year: High risk (consider biopsy)</div>
                  </div>
                </div>

                {/* Medical Disclaimer */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-red-800 mb-1">Medical Disclaimer</h4>
                      <p className="text-sm text-red-700">
                        This calculator is for educational purposes only. PSA velocity should be interpreted alongside other clinical factors. 
                        Always consult with a qualified healthcare provider for medical advice and treatment decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Results Yet</h3>
                <p className="text-gray-600">Enter your PSA readings and dates to calculate velocity</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}