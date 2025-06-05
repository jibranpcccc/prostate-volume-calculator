import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calculator as CalculatorIcon, 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Brain,
  Activity,
  FileText
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

interface ComprehensiveResult {
  prostateVolume: number;
  psaDensity: number;
  cancerRisk: string;
  bphProgression: string;
  treatmentRecommendation: string;
  surgicalRisk: string;
  riskScore: number;
  interpretation: string;
  nextSteps: string[];
}

export default function ComprehensiveCalculator() {
  const [formData, setFormData] = useState({
    // Basic measurements
    length: "",
    width: "",
    height: "",
    psa: "",
    age: "",
    
    // Patient factors
    familyHistory: false,
    previousBiopsy: false,
    biopsyResult: "",
    currentMedications: [] as string[],
    comorbidities: [] as string[],
    
    // Symptoms
    ipssScore: "",
    qualityOfLife: "",
    retentionHistory: false,
    utiHistory: false,
    
    // Physical exam
    dreFindings: "",
    prostateConsistency: "",
    
    // Imaging
    mriPerformed: false,
    mriPiRads: "",
    
    // Lab values
    creatinine: "",
    hemoglobin: ""
  });

  const [result, setResult] = useState<ComprehensiveResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [currentTab, setCurrentTab] = useState("basic");
  const { toast } = useToast();

  const validateBasicInputs = (): boolean => {
    const newErrors: string[] = [];
    
    if (!formData.length || parseFloat(formData.length) <= 0) {
      newErrors.push("Length is required");
    }
    if (!formData.width || parseFloat(formData.width) <= 0) {
      newErrors.push("Width is required");
    }
    if (!formData.height || parseFloat(formData.height) <= 0) {
      newErrors.push("Height is required");
    }
    if (!formData.psa || parseFloat(formData.psa) < 0) {
      newErrors.push("PSA value is required");
    }
    if (!formData.age || parseInt(formData.age) < 18) {
      newErrors.push("Valid age is required");
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const calculateComprehensiveRisk = () => {
    if (!validateBasicInputs()) {
      return;
    }

    const length = parseFloat(formData.length);
    const width = parseFloat(formData.width);
    const height = parseFloat(formData.height);
    const psa = parseFloat(formData.psa);
    const age = parseInt(formData.age);

    // Calculate prostate volume
    const prostateVolume = (Math.PI / 6) * length * width * height;
    const psaDensity = psa / prostateVolume;

    // Risk scoring algorithm
    let riskScore = 0;

    // PSA density risk
    if (psaDensity > 0.15) riskScore += 3;
    else if (psaDensity > 0.10) riskScore += 2;
    else if (psaDensity > 0.05) riskScore += 1;

    // Age risk
    if (age > 70) riskScore += 2;
    else if (age > 60) riskScore += 1;

    // Family history
    if (formData.familyHistory) riskScore += 2;

    // Previous biopsy
    if (formData.previousBiopsy && formData.biopsyResult === "high-grade-pin") {
      riskScore += 2;
    } else if (formData.previousBiopsy && formData.biopsyResult === "atypia") {
      riskScore += 1;
    }

    // DRE findings
    if (formData.dreFindings === "suspicious") riskScore += 3;
    else if (formData.dreFindings === "enlarged") riskScore += 1;

    // MRI findings
    if (formData.mriPerformed && formData.mriPiRads) {
      const piRads = parseInt(formData.mriPiRads);
      if (piRads >= 4) riskScore += 4;
      else if (piRads === 3) riskScore += 2;
    }

    // IPSS Score
    const ipss = parseInt(formData.ipssScore || "0");
    if (ipss > 19) riskScore += 2;
    else if (ipss > 7) riskScore += 1;

    // Volume-based BPH progression risk
    let bphProgression: string;
    if (prostateVolume > 80) {
      bphProgression = "High risk of progression - surgical intervention likely needed";
    } else if (prostateVolume > 40) {
      bphProgression = "Moderate risk - medical therapy with monitoring recommended";
    } else {
      bphProgression = "Low risk - symptoms may be manageable with conservative treatment";
    }

    // Cancer risk assessment
    let cancerRisk: string;
    if (riskScore >= 8) {
      cancerRisk = "High cancer risk - urgent urological evaluation recommended";
    } else if (riskScore >= 5) {
      cancerRisk = "Intermediate cancer risk - consider advanced imaging and specialist consultation";
    } else if (riskScore >= 2) {
      cancerRisk = "Low-intermediate cancer risk - active surveillance with regular monitoring";
    } else {
      cancerRisk = "Low cancer risk - routine screening appropriate";
    }

    // Treatment recommendations
    let treatmentRecommendation: string;
    if (prostateVolume > 80 && ipss > 19) {
      treatmentRecommendation = "Surgical intervention recommended (TURP, HoLEP, or simple prostatectomy)";
    } else if (prostateVolume > 40 && ipss > 7) {
      treatmentRecommendation = "Combination medical therapy (alpha-blocker + 5-ARI) recommended";
    } else if (ipss > 7) {
      treatmentRecommendation = "Alpha-blocker therapy as first-line treatment";
    } else {
      treatmentRecommendation = "Watchful waiting with lifestyle modifications";
    }

    // Surgical risk assessment
    let surgicalRisk: string;
    const hasComorbidities = formData.comorbidities.length > 0;
    const creat = parseFloat(formData.creatinine || "1.0");
    const hgb = parseFloat(formData.hemoglobin || "14.0");

    if (age > 80 || hasComorbidities || creat > 2.0 || hgb < 10) {
      surgicalRisk = "High surgical risk - consider minimally invasive options";
    } else if (age > 70 || creat > 1.5 || hgb < 12) {
      surgicalRisk = "Moderate surgical risk - standard procedures appropriate with precautions";
    } else {
      surgicalRisk = "Low surgical risk - all treatment options available";
    }

    const interpretation = `
      Based on comprehensive assessment: prostate volume ${prostateVolume.toFixed(1)} mL, 
      PSA density ${psaDensity.toFixed(3)} ng/mL/cc, and clinical factors suggest ${cancerRisk.toLowerCase()} 
      and ${bphProgression.toLowerCase()}. Risk score: ${riskScore}/15.
    `;

    const nextSteps = [
      riskScore >= 5 ? "Urological consultation within 2-4 weeks" : "Routine follow-up in 6-12 months",
      psaDensity > 0.15 ? "Consider prostate biopsy or advanced imaging" : "Continue PSA monitoring",
      ipss > 7 ? "Initiate or optimize medical therapy" : "Lifestyle counseling",
      prostateVolume > 80 ? "Discuss surgical options" : "Monitor with medical therapy"
    ];

    const comprehensiveResult: ComprehensiveResult = {
      prostateVolume,
      psaDensity,
      cancerRisk,
      bphProgression,
      treatmentRecommendation,
      surgicalRisk,
      riskScore,
      interpretation,
      nextSteps
    };

    setResult(comprehensiveResult);
    
    trackEvent('comprehensive_assessment_completed', 'medical_assessment', 'full_calculation', riskScore);

    toast({
      title: "Comprehensive Assessment Complete",
      description: `Risk Score: ${riskScore}/15 - ${cancerRisk}`,
    });
  };

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progress = currentTab === "basic" ? 25 : 
                   currentTab === "clinical" ? 50 : 
                   currentTab === "symptoms" ? 75 : 100;

  if (result) {
    return (
      <div className="space-y-6">
        <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center">
              <Brain className="mr-3 w-6 h-6" />
              Comprehensive Clinical Assessment Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded border">
                <div className="text-2xl font-bold text-blue-600">{result.prostateVolume.toFixed(1)} mL</div>
                <p className="text-sm text-gray-600">Prostate Volume</p>
              </div>
              <div className="text-center p-4 bg-white rounded border">
                <div className="text-2xl font-bold text-purple-600">{result.psaDensity.toFixed(3)}</div>
                <p className="text-sm text-gray-600">PSA Density</p>
              </div>
              <div className="text-center p-4 bg-white rounded border">
                <div className="text-2xl font-bold text-orange-600">{result.riskScore}/15</div>
                <p className="text-sm text-gray-600">Risk Score</p>
              </div>
              <div className="text-center p-4 bg-white rounded border">
                <Progress value={(result.riskScore / 15) * 100} className="w-full mb-2" />
                <p className="text-sm text-gray-600">Overall Risk</p>
              </div>
            </div>

            <Separator />

            {/* Risk Assessments */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center text-lg">
                    <Target className="mr-2 w-5 h-5" />
                    Cancer Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className={`mb-3 ${
                    result.cancerRisk.includes('High') ? 'bg-red-100 text-red-800' :
                    result.cancerRisk.includes('Intermediate') ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {result.cancerRisk.split(' - ')[0]}
                  </Badge>
                  <p className="text-sm text-gray-600">{result.cancerRisk}</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700 flex items-center text-lg">
                    <TrendingUp className="mr-2 w-5 h-5" />
                    BPH Progression Risk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className={`mb-3 ${
                    result.bphProgression.includes('High') ? 'bg-red-100 text-red-800' :
                    result.bphProgression.includes('Moderate') ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {result.bphProgression.split(' risk')[0]} Risk
                  </Badge>
                  <p className="text-sm text-gray-600">{result.bphProgression}</p>
                </CardContent>
              </Card>
            </div>

            {/* Treatment Recommendations */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <FileText className="mr-2 w-5 h-5" />
                  Treatment Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Primary Treatment:</h4>
                  <p className="text-sm text-gray-600">{result.treatmentRecommendation}</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Surgical Risk Assessment:</h4>
                  <p className="text-sm text-gray-600">{result.surgicalRisk}</p>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <CheckCircle className="mr-2 w-5 h-5" />
                  Recommended Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {result.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Button 
              onClick={() => setResult(null)}
              variant="outline" 
              className="w-full"
            >
              Perform New Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-2 flex items-center justify-center">
          <Brain className="mr-3 w-6 h-6" />
          Comprehensive Risk Assessment
        </h2>
        <p className="text-gray-600 text-sm">Complete clinical evaluation combining multiple risk factors</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Assessment Progress</span>
          <span className="text-sm text-gray-600">{progress}%</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Data</TabsTrigger>
          <TabsTrigger value="clinical">Clinical Factors</TabsTrigger>
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="labs">Labs & Imaging</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Measurements & Demographics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="length">Length (mm) *</Label>
                  <Input
                    id="length"
                    type="number"
                    step="0.1"
                    value={formData.length}
                    onChange={(e) => handleInputChange('length', e.target.value)}
                    placeholder="45.0"
                  />
                </div>
                <div>
                  <Label htmlFor="width">Width (mm) *</Label>
                  <Input
                    id="width"
                    type="number"
                    step="0.1"
                    value={formData.width}
                    onChange={(e) => handleInputChange('width', e.target.value)}
                    placeholder="35.0"
                  />
                </div>
                <div>
                  <Label htmlFor="height">Height (mm) *</Label>
                  <Input
                    id="height"
                    type="number"
                    step="0.1"
                    value={formData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                    placeholder="30.0"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="psa">PSA (ng/mL) *</Label>
                  <Input
                    id="psa"
                    type="number"
                    step="0.01"
                    value={formData.psa}
                    onChange={(e) => handleInputChange('psa', e.target.value)}
                    placeholder="4.5"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age (years) *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder="65"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clinical" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Clinical History & Risk Factors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="familyHistory"
                    checked={formData.familyHistory}
                    onCheckedChange={(checked) => handleInputChange('familyHistory', checked as boolean)}
                  />
                  <Label htmlFor="familyHistory">Family history of prostate cancer</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="previousBiopsy"
                    checked={formData.previousBiopsy}
                    onCheckedChange={(checked) => handleInputChange('previousBiopsy', checked as boolean)}
                  />
                  <Label htmlFor="previousBiopsy">Previous prostate biopsy</Label>
                </div>

                {formData.previousBiopsy && (
                  <div>
                    <Label>Previous biopsy result</Label>
                    <Select value={formData.biopsyResult} onValueChange={(value) => handleInputChange('biopsyResult', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select result" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="benign">Benign</SelectItem>
                        <SelectItem value="high-grade-pin">High-grade PIN</SelectItem>
                        <SelectItem value="atypia">Atypical cells</SelectItem>
                        <SelectItem value="cancer">Cancer detected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <Label>Digital rectal exam findings</Label>
                  <Select value={formData.dreFindings} onValueChange={(value) => handleInputChange('dreFindings', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select findings" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="enlarged">Enlarged but smooth</SelectItem>
                      <SelectItem value="suspicious">Suspicious nodule/induration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Symptom Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ipssScore">IPSS Score (0-35)</Label>
                  <Input
                    id="ipssScore"
                    type="number"
                    min="0"
                    max="35"
                    value={formData.ipssScore}
                    onChange={(e) => handleInputChange('ipssScore', e.target.value)}
                    placeholder="12"
                  />
                </div>
                <div>
                  <Label htmlFor="qualityOfLife">Quality of Life Score (0-6)</Label>
                  <Input
                    id="qualityOfLife"
                    type="number"
                    min="0"
                    max="6"
                    value={formData.qualityOfLife}
                    onChange={(e) => handleInputChange('qualityOfLife', e.target.value)}
                    placeholder="3"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="retentionHistory"
                    checked={formData.retentionHistory}
                    onCheckedChange={(checked) => handleInputChange('retentionHistory', checked as boolean)}
                  />
                  <Label htmlFor="retentionHistory">History of urinary retention</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="utiHistory"
                    checked={formData.utiHistory}
                    onCheckedChange={(checked) => handleInputChange('utiHistory', checked as boolean)}
                  />
                  <Label htmlFor="utiHistory">Recurrent urinary tract infections</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="labs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Laboratory & Imaging Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox
                  id="mriPerformed"
                  checked={formData.mriPerformed}
                  onCheckedChange={(checked) => handleInputChange('mriPerformed', checked as boolean)}
                />
                <Label htmlFor="mriPerformed">MRI performed</Label>
              </div>

              {formData.mriPerformed && (
                <div>
                  <Label>PI-RADS Score (1-5)</Label>
                  <Select value={formData.mriPiRads} onValueChange={(value) => handleInputChange('mriPiRads', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select PI-RADS score" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 - Very low</SelectItem>
                      <SelectItem value="2">2 - Low</SelectItem>
                      <SelectItem value="3">3 - Intermediate</SelectItem>
                      <SelectItem value="4">4 - High</SelectItem>
                      <SelectItem value="5">5 - Very high</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="creatinine">Creatinine (mg/dL)</Label>
                  <Input
                    id="creatinine"
                    type="number"
                    step="0.1"
                    value={formData.creatinine}
                    onChange={(e) => handleInputChange('creatinine', e.target.value)}
                    placeholder="1.0"
                  />
                </div>
                <div>
                  <Label htmlFor="hemoglobin">Hemoglobin (g/dL)</Label>
                  <Input
                    id="hemoglobin"
                    type="number"
                    step="0.1"
                    value={formData.hemoglobin}
                    onChange={(e) => handleInputChange('hemoglobin', e.target.value)}
                    placeholder="14.0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {errors.length > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="w-4 h-4" />
          <AlertDescription className="text-red-700">
            <ul className="list-disc list-inside space-y-1">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      <div className="flex gap-4">
        {currentTab !== "basic" && (
          <Button 
            variant="outline" 
            onClick={() => {
              const tabs = ["basic", "clinical", "symptoms", "labs"];
              const currentIndex = tabs.indexOf(currentTab);
              setCurrentTab(tabs[currentIndex - 1]);
            }}
            className="flex-1"
          >
            Previous
          </Button>
        )}
        
        {currentTab !== "labs" ? (
          <Button 
            onClick={() => {
              const tabs = ["basic", "clinical", "symptoms", "labs"];
              const currentIndex = tabs.indexOf(currentTab);
              setCurrentTab(tabs[currentIndex + 1]);
            }}
            className="flex-1"
          >
            Next
          </Button>
        ) : (
          <Button 
            onClick={calculateComprehensiveRisk}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <Brain className="mr-2 w-5 h-5" />
            Calculate Comprehensive Assessment
          </Button>
        )}
      </div>
    </div>
  );
}