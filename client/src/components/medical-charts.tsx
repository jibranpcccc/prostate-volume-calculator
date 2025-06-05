import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Area, AreaChart } from "recharts";
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Activity } from "lucide-react";

interface MedicalChartsProps {
  prostateVolume?: number;
  psaDensity?: number;
  ipssScore?: number;
  age?: number;
}

const ageVolumeData = [
  { age: 20, normalMin: 15, normalMax: 20, averageVolume: 17.5 },
  { age: 30, normalMin: 18, normalMax: 25, averageVolume: 21.5 },
  { age: 40, normalMin: 20, normalMax: 30, averageVolume: 25 },
  { age: 50, normalMin: 25, normalMax: 35, averageVolume: 30 },
  { age: 60, normalMin: 30, normalMax: 45, averageVolume: 37.5 },
  { age: 70, normalMin: 35, normalMax: 55, averageVolume: 45 },
  { age: 80, normalMin: 40, normalMax: 65, averageVolume: 52.5 }
];

const treatmentOutcomes = [
  { treatment: "Alpha-blockers", symptomRelief: 75, flowImprovement: 65, satisfaction: 80 },
  { treatment: "5-ARI", symptomRelief: 70, flowImprovement: 60, satisfaction: 75 },
  { treatment: "Combination", symptomRelief: 85, flowImprovement: 80, satisfaction: 88 },
  { treatment: "TURP", symptomRelief: 95, flowImprovement: 90, satisfaction: 92 },
  { treatment: "HoLEP", symptomRelief: 96, flowImprovement: 95, satisfaction: 94 },
  { treatment: "UroLift", symptomRelief: 70, flowImprovement: 60, satisfaction: 85 }
];

const volumeDistribution = [
  { range: "<30 mL", percentage: 35, color: "#10B981" },
  { range: "30-50 mL", percentage: 40, color: "#3B82F6" },
  { range: "50-80 mL", percentage: 20, color: "#F59E0B" },
  { range: ">80 mL", percentage: 5, color: "#EF4444" }
];

const psaDensityRisk = [
  { density: 0.05, cancerRisk: 5, bphRisk: 95 },
  { density: 0.10, cancerRisk: 15, bphRisk: 85 },
  { density: 0.15, cancerRisk: 35, bphRisk: 65 },
  { density: 0.20, cancerRisk: 55, bphRisk: 45 },
  { density: 0.25, cancerRisk: 70, bphRisk: 30 },
  { density: 0.30, cancerRisk: 80, bphRisk: 20 }
];

export default function MedicalCharts({ prostateVolume, psaDensity, ipssScore, age }: MedicalChartsProps) {
  const getRiskLevel = (volume?: number) => {
    if (!volume) return "unknown";
    if (volume < 30) return "low";
    if (volume < 50) return "moderate";
    if (volume < 80) return "high";
    return "very-high";
  };

  const riskLevel = getRiskLevel(prostateVolume);
  const riskColors = {
    low: "#10B981",
    moderate: "#3B82F6", 
    high: "#F59E0B",
    "very-high": "#EF4444",
    unknown: "#6B7280"
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Clinical Data Visualization</h2>
        <p className="text-gray-600">Interactive charts and medical data analysis for enhanced clinical understanding</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Age vs Volume Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Age-Related Prostate Volume Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={ageVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis label={{ value: 'Volume (mL)', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value} mL`,
                    name === 'normalMax' ? 'Upper Normal' : 
                    name === 'normalMin' ? 'Lower Normal' : 'Average'
                  ]}
                />
                <Area type="monotone" dataKey="normalMax" stackId="1" stroke="#3B82F6" fill="#93C5FD" fillOpacity={0.3} />
                <Area type="monotone" dataKey="normalMin" stackId="1" stroke="#3B82F6" fill="#DBEAFE" fillOpacity={0.5} />
                <Line type="monotone" dataKey="averageVolume" stroke="#1D4ED8" strokeWidth={3} dot={{ fill: '#1D4ED8', r: 4 }} />
                {prostateVolume && age && (
                  <Line 
                    type="monotone" 
                    data={[{ age, volume: prostateVolume }]} 
                    dataKey="volume" 
                    stroke={riskColors[riskLevel]} 
                    strokeWidth={4} 
                    dot={{ fill: riskColors[riskLevel], r: 6 }} 
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
            {prostateVolume && age && (
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-sm text-gray-600">
                  Your prostate volume: <strong style={{ color: riskColors[riskLevel] }}>{prostateVolume.toFixed(1)} mL</strong> at age {age}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Treatment Outcomes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-600" />
              Treatment Effectiveness Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={treatmentOutcomes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="treatment" angle={-45} textAnchor="end" height={80} />
                <YAxis label={{ value: 'Effectiveness (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value}%`, '']} />
                <Bar dataKey="symptomRelief" fill="#10B981" name="Symptom Relief" />
                <Bar dataKey="flowImprovement" fill="#3B82F6" name="Flow Improvement" />
                <Bar dataKey="satisfaction" fill="#8B5CF6" name="Patient Satisfaction" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Volume Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-purple-600" />
              Prostate Volume Distribution by Age Group
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={volumeDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="percentage"
                  label={({ range, percentage }) => `${range}: ${percentage}%`}
                >
                  {volumeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Population']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {volumeDistribution.map((item, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span>{item.range}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* PSA Density Risk */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-600" />
              PSA Density vs Cancer Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={psaDensityRisk}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="density" 
                  label={{ value: 'PSA Density (ng/mL/cc)', position: 'insideBottom', offset: -10 }}
                  tickFormatter={(value) => value.toFixed(2)}
                />
                <YAxis label={{ value: 'Risk (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value}%`, 
                    name === 'cancerRisk' ? 'Cancer Risk' : 'BPH Risk'
                  ]}
                  labelFormatter={(value) => `PSA Density: ${value}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="cancerRisk" 
                  stroke="#EF4444" 
                  strokeWidth={3}
                  dot={{ fill: '#EF4444', r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="bphRisk" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', r: 4 }}
                />
                {psaDensity && (
                  <Line 
                    type="monotone" 
                    data={[{ density: psaDensity, risk: 50 }]} 
                    dataKey="risk" 
                    stroke="#8B5CF6" 
                    strokeWidth={4} 
                    dot={{ fill: '#8B5CF6', r: 6 }} 
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
            {psaDensity && (
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-sm text-gray-600">
                  Your PSA density: <strong className="text-purple-600">{psaDensity.toFixed(3)} ng/mL/cc</strong>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Summary Statistics */}
      {(prostateVolume || psaDensity || ipssScore) && (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Your Clinical Profile Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {prostateVolume && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{prostateVolume.toFixed(1)} mL</div>
                  <p className="text-sm text-gray-600 mb-3">Prostate Volume</p>
                  <Badge 
                    className={`${
                      riskLevel === 'low' ? 'bg-green-100 text-green-800' :
                      riskLevel === 'moderate' ? 'bg-blue-100 text-blue-800' :
                      riskLevel === 'high' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {riskLevel.replace('-', ' ')} risk
                  </Badge>
                  <Progress 
                    value={Math.min((prostateVolume / 100) * 100, 100)} 
                    className="mt-2"
                  />
                </div>
              )}

              {psaDensity && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{psaDensity.toFixed(3)}</div>
                  <p className="text-sm text-gray-600 mb-3">PSA Density (ng/mL/cc)</p>
                  <Badge 
                    className={`${
                      psaDensity < 0.10 ? 'bg-green-100 text-green-800' :
                      psaDensity < 0.15 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {psaDensity < 0.10 ? 'Low' : psaDensity < 0.15 ? 'Intermediate' : 'High'} cancer risk
                  </Badge>
                  <Progress 
                    value={Math.min((psaDensity / 0.30) * 100, 100)} 
                    className="mt-2"
                  />
                </div>
              )}

              {ipssScore && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{ipssScore}/35</div>
                  <p className="text-sm text-gray-600 mb-3">IPSS Score</p>
                  <Badge 
                    className={`${
                      ipssScore <= 7 ? 'bg-green-100 text-green-800' :
                      ipssScore <= 19 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {ipssScore <= 7 ? 'Mild' : ipssScore <= 19 ? 'Moderate' : 'Severe'} symptoms
                  </Badge>
                  <Progress 
                    value={(ipssScore / 35) * 100} 
                    className="mt-2"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}