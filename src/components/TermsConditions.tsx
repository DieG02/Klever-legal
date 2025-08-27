import { ArrowLeft, FileText, Scale, AlertCircle, Shield, Users, Mail, Wifi, Smartphone } from "lucide-react";

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
                  Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Intellectual Property</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.
                </p>
              </div>

              {/* Service Modifications */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Scale className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Service Modifications</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Data Security & Device Safety</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.
                </p>
              </div>

              {/* Third Party Services */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Third Party Services</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><a href="https://policies.google.com/terms" className="text-klever-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
                    <li><a href="https://firebase.google.com/terms/crashlytics" className="text-klever-primary hover:underline" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
                  </ul>
                </div>
              </div>

              {/* Internet Connection & Data Usage */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Internet Connection & Data Usage</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.
                  </p>
                  
                  <p className="leading-relaxed">
                    If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.
                  </p>
                </div>
              </div>

              {/* Service Responsibility */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Service Responsibility</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.
                  </p>
                  
                  <p className="leading-relaxed">
                    In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.
                  </p>
                </div>
              </div>

              {/* Updates & Termination */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Updates & Termination</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Changes to These Terms and Conditions</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.
                  </p>
                  
                  <p className="leading-relaxed font-semibold">
                    These terms and conditions are effective as of 2025-08-26
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Contact Us</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at <a href="mailto:akirateam.contact@gmail.com" className="text-klever-primary hover:underline">akirateam.contact@gmail.com</a>.
                </p>
              </div>

              {/* Footer Note */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 text-center">
                  This Terms and Conditions page was generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" className="text-klever-primary hover:underline" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a>
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