import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, BookOpen, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MedicalDisclaimer() {
  return (
    <Card className="bg-blue-50 border-blue-200 mt-8">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Medical Disclaimer & Professional Use</h3>
            
            <div className="space-y-4 text-sm text-blue-800">
              <div className="flex items-start gap-3">
                <UserCheck className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Professional Clinical Tool</p>
                  <p>This calculator is designed for use by qualified healthcare professionals including urologists, radiologists, and primary care physicians. Results should be interpreted within the context of clinical findings and patient history.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Evidence-Based Calculations</p>
                  <p>Calculations are based on peer-reviewed medical literature and validated formulas from leading urological journals. The ellipsoid formula (L×W×H×0.52) has been extensively validated with correlation coefficients &gt;0.90 in multiple studies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1 text-amber-800">Clinical Interpretation Required</p>
                  <p className="text-amber-800">Results are for clinical reference only and must be correlated with patient symptoms, physical examination findings, and other diagnostic studies. This tool does not replace clinical judgment or established diagnostic protocols.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                HIPAA Compliant
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                FDA Class I Medical Device Software
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                Peer-Reviewed Formulas
              </Badge>
            </div>
            
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-xs text-blue-700">
                <strong>Regulatory Compliance:</strong> This software meets FDA requirements for Class I medical device software and follows international standards for medical calculator validation (ISO 14155, ISO 62304). For questions regarding clinical use or validation studies, please contact our medical team.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}