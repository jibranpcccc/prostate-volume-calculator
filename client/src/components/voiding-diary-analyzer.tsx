import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Clock, Plus, Trash2, Calculator, BarChart3 } from "lucide-react";

interface VoidingEntry {
  id: number;
  time: string;
  volume: number;
  urgency: number; // 1-5 scale
  leak: boolean;
}

interface FluidEntry {
  id: number;
  time: string;
  volume: number;
  type: string;
}

interface VoidingDiaryResult {
  totalDailyVolume: number;
  averageVoidVolume: number;
  dayTimeFrequency: number;
  nightTimeFrequency: number;
  functionalCapacity: number;
  bladderEfficiency: number;
  urgencyIndex: number;
  fluidIntake: number;
  interpretation: string;
  recommendations: string[];
  severity: string;
  severityClass: string;
}

export default function VoidingDiaryAnalyzer() {
  const [voidingEntries, setVoidingEntries] = useState<VoidingEntry[]>([
    { id: 1, time: "", volume: 0, urgency: 1, leak: false }
  ]);
  const [fluidEntries, setFluidEntries] = useState<FluidEntry[]>([
    { id: 1, time: "", volume: 0, type: "water" }
  ]);
  const [result, setResult] = useState<VoidingDiaryResult | null>(null);

  const addVoidingEntry = () => {
    const newId = Math.max(...voidingEntries.map(e => e.id)) + 1;
    setVoidingEntries([...voidingEntries, { id: newId, time: "", volume: 0, urgency: 1, leak: false }]);
  };

  const removeVoidingEntry = (id: number) => {
    if (voidingEntries.length > 1) {
      setVoidingEntries(voidingEntries.filter(e => e.id !== id));
    }
  };

  const updateVoidingEntry = (id: number, field: keyof VoidingEntry, value: any) => {
    setVoidingEntries(voidingEntries.map(e => 
      e.id === id ? { ...e, [field]: value } : e
    ));
  };

  const addFluidEntry = () => {
    const newId = Math.max(...fluidEntries.map(e => e.id)) + 1;
    setFluidEntries([...fluidEntries, { id: newId, time: "", volume: 0, type: "water" }]);
  };

  const removeFluidEntry = (id: number) => {
    if (fluidEntries.length > 1) {
      setFluidEntries(fluidEntries.filter(e => e.id !== id));
    }
  };

  const updateFluidEntry = (id: number, field: keyof FluidEntry, value: any) => {
    setFluidEntries(fluidEntries.map(e => 
      e.id === id ? { ...e, [field]: value } : e
    ));
  };

  const analyzeVoidingDiary = () => {
    const validVoidings = voidingEntries.filter(e => e.time && e.volume > 0);
    const validFluids = fluidEntries.filter(e => e.time && e.volume > 0);

    if (validVoidings.length < 3) {
      alert("Please enter at least 3 voiding episodes for meaningful analysis.");
      return;
    }

    // Calculate total daily voided volume
    const totalDailyVolume = validVoidings.reduce((sum, entry) => sum + entry.volume, 0);
    
    // Calculate average void volume
    const averageVoidVolume = totalDailyVolume / validVoidings.length;
    
    // Calculate functional capacity (largest single void)
    const functionalCapacity = Math.max(...validVoidings.map(e => e.volume));
    
    // Calculate day vs night frequency
    let dayTimeFrequency = 0;
    let nightTimeFrequency = 0;
    
    validVoidings.forEach(entry => {
      const hour = parseInt(entry.time.split(':')[0]);
      if (hour >= 22 || hour < 6) {
        nightTimeFrequency++;
      } else {
        dayTimeFrequency++;
      }
    });

    // Calculate bladder efficiency (voided volume / functional capacity)
    const bladderEfficiency = (averageVoidVolume / functionalCapacity) * 100;
    
    // Calculate urgency index
    const urgencyIndex = validVoidings.reduce((sum, entry) => sum + entry.urgency, 0) / validVoidings.length;
    
    // Calculate total fluid intake
    const fluidIntake = validFluids.reduce((sum, entry) => sum + entry.volume, 0);

    // Determine severity and provide interpretation
    let severity: string;
    let severityClass: string;
    let interpretation: string;
    let recommendations: string[] = [];

    // Normal ranges:
    // Frequency: 4-8 times/day, 0-2 times/night
    // Volume: 150-500 mL per void
    // Total volume: 1200-2500 mL/day

    const totalFrequency = dayTimeFrequency + nightTimeFrequency;
    const hasFrequencyIssues = dayTimeFrequency > 8 || nightTimeFrequency > 2;
    const hasVolumeIssues = averageVoidVolume < 150 || totalDailyVolume > 2500;
    const hasUrgencyIssues = urgencyIndex > 3;

    if (!hasFrequencyIssues && !hasVolumeIssues && !hasUrgencyIssues) {
      severity = "Normal";
      severityClass = "normal";
      interpretation = "Voiding pattern appears normal. Frequency, volumes, and urgency are within typical ranges.";
      recommendations.push("Continue current habits");
      recommendations.push("Maintain adequate hydration");
    } else if ((hasFrequencyIssues && totalFrequency <= 12) || (hasVolumeIssues && averageVoidVolume >= 100)) {
      severity = "Mild LUTS";
      severityClass = "mild";
      interpretation = "Mild lower urinary tract symptoms detected. Some deviation from normal patterns observed.";
      recommendations.push("Monitor symptoms over time");
      recommendations.push("Consider pelvic floor exercises");
      recommendations.push("Review fluid intake timing");
    } else if ((hasFrequencyIssues && totalFrequency <= 16) || (hasVolumeIssues && averageVoidVolume >= 75)) {
      severity = "Moderate LUTS";
      severityClass = "moderate";
      interpretation = "Moderate lower urinary tract symptoms present. Pattern suggests possible bladder dysfunction.";
      recommendations.push("Medical evaluation recommended");
      recommendations.push("Consider bladder training program");
      recommendations.push("Discuss symptoms with healthcare provider");
    } else {
      severity = "Severe LUTS";
      severityClass = "severe";
      interpretation = "Severe lower urinary tract symptoms indicated. Significant deviation from normal voiding patterns.";
      recommendations.push("Urgent medical evaluation recommended");
      recommendations.push("Consider specialist referral (urology)");
      recommendations.push("Evaluate for underlying conditions");
    }

    // Additional specific recommendations
    if (nightTimeFrequency > 2) {
      recommendations.push("Limit fluid intake 2-3 hours before bedtime");
      recommendations.push("Elevate legs during day to reduce fluid accumulation");
    }
    
    if (averageVoidVolume < 150) {
      recommendations.push("Consider delayed voiding/bladder training");
      recommendations.push("Practice relaxation techniques during urination");
    }
    
    if (urgencyIndex > 3) {
      recommendations.push("Practice urgency suppression techniques");
      recommendations.push("Consider anticholinergic medication evaluation");
    }

    if (fluidIntake > 3000) {
      recommendations.push("Consider reducing total fluid intake to 1.5-2.5L daily");
    } else if (fluidIntake < 1000) {
      recommendations.push("Increase fluid intake to prevent concentrated urine");
    }

    const voidingResult: VoidingDiaryResult = {
      totalDailyVolume,
      averageVoidVolume,
      dayTimeFrequency,
      nightTimeFrequency,
      functionalCapacity,
      bladderEfficiency,
      urgencyIndex,
      fluidIntake,
      interpretation,
      recommendations,
      severity,
      severityClass
    };

    setResult(voidingResult);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Voiding Diary Analyzer</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive analysis of bladder function patterns. Track voiding frequency, volumes, and urgency 
          to identify lower urinary tract symptoms and guide treatment decisions.
        </p>
      </div>

      <Tabs defaultValue="voiding" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="voiding">Voiding Episodes</TabsTrigger>
          <TabsTrigger value="fluids">Fluid Intake</TabsTrigger>
        </TabsList>

        <TabsContent value="voiding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 w-5 h-5 text-blue-600" />
                Voiding Episodes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h4 className="text-sm font-medium text-blue-800 mb-2">Recording Instructions</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Record every urination for 24-48 hours</li>
                  <li>• Measure volume using measuring cup when possible</li>
                  <li>• Rate urgency: 1=none, 2=mild, 3=moderate, 4=severe, 5=urgent</li>
                  <li>• Note any leakage episodes</li>
                </ul>
              </div>

              {voidingEntries.map((entry, index) => (
                <div key={entry.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">Episode {index + 1}</h4>
                    {voidingEntries.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeVoidingEntry(entry.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor={`time-${entry.id}`}>Time</Label>
                      <Input
                        id={`time-${entry.id}`}
                        type="time"
                        value={entry.time}
                        onChange={(e) => updateVoidingEntry(entry.id, 'time', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`volume-${entry.id}`}>Volume (mL)</Label>
                      <Input
                        id={`volume-${entry.id}`}
                        type="number"
                        min="0"
                        value={entry.volume || ""}
                        onChange={(e) => updateVoidingEntry(entry.id, 'volume', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 250"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`urgency-${entry.id}`}>Urgency (1-5)</Label>
                      <Input
                        id={`urgency-${entry.id}`}
                        type="number"
                        min="1"
                        max="5"
                        value={entry.urgency}
                        onChange={(e) => updateVoidingEntry(entry.id, 'urgency', parseInt(e.target.value) || 1)}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <input
                        type="checkbox"
                        id={`leak-${entry.id}`}
                        checked={entry.leak}
                        onChange={(e) => updateVoidingEntry(entry.id, 'leak', e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor={`leak-${entry.id}`} className="text-sm">Leakage</Label>
                    </div>
                  </div>
                </div>
              ))}

              <Button
                variant="outline"
                onClick={addVoidingEntry}
                className="w-full"
              >
                <Plus className="mr-2 w-4 h-4" />
                Add Voiding Episode
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fluids" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 w-5 h-5 text-green-600" />
                Fluid Intake
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <h4 className="text-sm font-medium text-green-800 mb-2">Fluid Recording Tips</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Record all beverages including water, coffee, tea, alcohol</li>
                  <li>• Estimate volumes: cup ~240mL, glass ~200mL, bottle ~500mL</li>
                  <li>• Note caffeinated/alcoholic drinks (can increase urgency)</li>
                  <li>• Track timing relative to voiding episodes</li>
                </ul>
              </div>

              {fluidEntries.map((entry, index) => (
                <div key={entry.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">Intake {index + 1}</h4>
                    {fluidEntries.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFluidEntry(entry.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor={`fluid-time-${entry.id}`}>Time</Label>
                      <Input
                        id={`fluid-time-${entry.id}`}
                        type="time"
                        value={entry.time}
                        onChange={(e) => updateFluidEntry(entry.id, 'time', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`fluid-volume-${entry.id}`}>Volume (mL)</Label>
                      <Input
                        id={`fluid-volume-${entry.id}`}
                        type="number"
                        min="0"
                        value={entry.volume || ""}
                        onChange={(e) => updateFluidEntry(entry.id, 'volume', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 240"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`fluid-type-${entry.id}`}>Type</Label>
                      <select
                        id={`fluid-type-${entry.id}`}
                        value={entry.type}
                        onChange={(e) => updateFluidEntry(entry.id, 'type', e.target.value)}
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      >
                        <option value="water">Water</option>
                        <option value="coffee">Coffee</option>
                        <option value="tea">Tea</option>
                        <option value="alcohol">Alcohol</option>
                        <option value="soda">Soda</option>
                        <option value="juice">Juice</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}

              <Button
                variant="outline"
                onClick={addFluidEntry}
                className="w-full"
              >
                <Plus className="mr-2 w-4 h-4" />
                Add Fluid Intake
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Analysis Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="mr-2 w-5 h-5 text-purple-600" />
            Diary Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <Button
              onClick={analyzeVoidingDiary}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Analyze Voiding Pattern
            </Button>
          </div>

          {result && (
            <div className="space-y-6">
              {/* Summary Results */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{result.totalDailyVolume}</div>
                  <div className="text-sm text-gray-600">Total Volume (mL)</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{result.averageVoidVolume.toFixed(0)}</div>
                  <div className="text-sm text-gray-600">Average Volume (mL)</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{result.dayTimeFrequency}</div>
                  <div className="text-sm text-gray-600">Daytime Frequency</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{result.nightTimeFrequency}</div>
                  <div className="text-sm text-gray-600">Nighttime Frequency</div>
                </div>
              </div>

              {/* Severity Assessment */}
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">{result.severity}</div>
                <Badge 
                  variant={result.severityClass === 'normal' ? 'secondary' : 
                          result.severityClass === 'mild' ? 'default' :
                          result.severityClass === 'moderate' ? 'default' : 'destructive'}
                  className="text-sm"
                >
                  Assessment Result
                </Badge>
              </div>

              {/* Detailed Metrics */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900">{result.functionalCapacity}</div>
                  <div className="text-sm text-gray-600">Functional Capacity (mL)</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900">{result.bladderEfficiency.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Bladder Efficiency</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900">{result.urgencyIndex.toFixed(1)}</div>
                  <div className="text-sm text-gray-600">Urgency Index (1-5)</div>
                </div>
              </div>

              {/* Clinical Interpretation */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Clinical Interpretation</h4>
                  <p className="text-gray-700 text-sm">{result.interpretation}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Recommendations</h4>
                  <ul className="space-y-1">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></div>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Normal Ranges Reference */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h4 className="text-sm font-medium text-yellow-800 mb-2">Normal Ranges</h4>
                <div className="text-sm text-yellow-700 space-y-1">
                  <div>• Daytime frequency: 4-8 times</div>
                  <div>• Nighttime frequency: 0-2 times</div>
                  <div>• Average void volume: 150-500 mL</div>
                  <div>• Total daily volume: 1200-2500 mL</div>
                  <div>• Urgency score: 1-2 (mild-moderate)</div>
                </div>
              </div>

              {/* Medical Disclaimer */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-red-800 mb-1">Medical Disclaimer</h4>
                    <p className="text-sm text-red-700">
                      Voiding diary analysis provides general assessment patterns. Individual symptoms may require 
                      comprehensive medical evaluation including physical examination and additional testing. 
                      Always consult healthcare provider for persistent symptoms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}