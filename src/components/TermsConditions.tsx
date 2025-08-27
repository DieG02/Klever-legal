import { ArrowLeft, FileText, Scale, AlertCircle, Shield, Users, Mail } from "lucide-react";

interface TermsConditionsProps {
  onBack: () => void;
}

function TermsConditions({ onBack }: TermsConditionsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-klever-light to-white font-poppins">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/images/klever-logo.png"
                alt="Klever Logo"
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Klever</h1>
              <p className="text-sm text-gray-600">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-klever-primary to-blue-600 px-8 py-12 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Terms & Conditions</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using the Klever application.
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-klever-light/50 rounded-xl p-6 border border-klever-light">
                <p className="text-gray-700 leading-relaxed mb-4">
                  These terms and conditions apply to the <strong>Klever – Smart Lists & Tasks</strong> app (hereby referred to as "Application") for mobile devices that was created by <strong>Akira Team</strong> (hereby referred to as "Service Provider") as an Ad Supported service.
                </p>
                <p className="text-gray-700 leading-relaxed mb-0">
                  By downloading or using the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Scale className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Acceptance of Terms</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using this Application, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              {/* Use License */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Use License</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Permission is granted to temporarily download one copy of Klever per device for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained in the Application</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>

                  <p className="leading-relaxed">
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by Akira Team at any time.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">User Responsibilities</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    You are responsible for:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintaining the confidentiality of your account information</li>
                    <li>All activities that occur under your account</li>
                    <li>Ensuring that your use of the Application complies with applicable laws</li>
                    <li>Not using the Application for any unlawful or prohibited activities</li>
                    <li>Not interfering with or disrupting the Application or servers</li>
                  </ul>
                </div>
              </div>

              {/* Prohibited Uses */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Prohibited Uses</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    You may not use the Application:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Disclaimer</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    The information on this Application is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>excludes all representations and warranties relating to this Application and its contents</li>
                    <li>excludes all liability for damages arising out of or in connection with your use of this Application</li>
                  </ul>
                </div>
              </div>

              {/* Limitations */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Scale className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Limitations</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Akira Team or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Application, even if Akira Team or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              {/* Accuracy of Materials */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Accuracy of Materials</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  The materials appearing in the Application could include technical, typographical, or photographic errors. Akira Team does not warrant that any of the materials on its Application are accurate, complete, or current. Akira Team may make changes to the materials contained in its Application at any time without notice.
                </p>
              </div>

              {/* Modifications */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Modifications</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Akira Team may revise these terms of service for its Application at any time without notice. By using this Application, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Scale className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Governing Law</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Akira Team operates and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Contact Information</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:akirateam.contact@gmail.com" className="text-klever-primary hover:underline">akirateam.contact@gmail.com</a>.
                </p>
              </div>

              {/* Effective Date */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 text-center font-semibold">
                  These terms and conditions are effective as of January 1, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-100 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-klever-primary rounded-lg flex items-center justify-center">
              <img
                src="/images/klever-logo.png"
                alt="Klever Logo"
                className="rounded-lg"
              />
            </div>
            <span className="text-lg font-semibold text-gray-800">Klever</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 Klever. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;