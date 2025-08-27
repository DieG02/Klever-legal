import { ArrowLeft, Shield, Eye, Database, Users, Lock, Mail } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
              <p className="text-sm text-gray-600">Privacy Policy</p>
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-klever-light/50 rounded-xl p-6 border border-klever-light">
                <p className="text-gray-700 leading-relaxed mb-0">
                  This privacy policy applies to the <strong>Klever – Smart Lists & Tasks</strong> app (hereby referred to as "Application") for mobile devices that was created by <strong>Akira Team</strong> (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".
                </p>
              </div>

              {/* Information Collection */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Database className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Information Collection and Use</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    The Application collects information when you download and use it. This information may include information such as:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your device's Internet Protocol address (e.g. IP address)</li>
                    <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                    <li>The time spent on the Application</li>
                    <li>The operating system you use on your mobile device</li>
                  </ul>

                  <p className="leading-relaxed">
                    The Application does not gather precise information about the location of your mobile device.
                  </p>

                  <p className="leading-relaxed">
                    The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Geolocation Services:</strong> The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
                    <li><strong>Analytics and Improvements:</strong> Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
                    <li><strong>Third-Party Services:</strong> Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
                  </ul>

                  <p className="leading-relaxed">
                    The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
                  </p>

                  <p className="leading-relaxed">
                    For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to name, surname, email, userId, photo, audio. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
                  </p>
                </div>
              </div>

              {/* Third Party Access */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Third Party Access</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
                  </p>

                  <p className="leading-relaxed">
                    Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><a href="https://www.google.com/policies/privacy/" className="text-klever-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
                    <li><a href="https://firebase.google.com/support/privacy/" className="text-klever-primary hover:underline" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
                  </ul>

                  <p className="leading-relaxed">
                    The Service Provider may disclose User Provided and Automatically Collected Information:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                    <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                    <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                  </ul>
                </div>
              </div>

              {/* Opt-Out Rights */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Opt-Out Rights</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Database className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Data Retention Policy</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:akirateam.contact@gmail.com" className="text-klever-primary hover:underline">akirateam.contact@gmail.com</a> and they will respond in a reasonable time.
                </p>
              </div>

              {/* Children */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Children</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
                  </p>
                  
                  <p className="leading-relaxed">
                    The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (<a href="mailto:akirateam.contact@gmail.com" className="text-klever-primary hover:underline">akirateam.contact@gmail.com</a>) so that they will be able to take the necessary actions.
                  </p>
                </div>
              </div>

              {/* Security */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Security</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
                </p>
              </div>

              {/* Changes */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Changes</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
                  </p>
                  
                  <p className="leading-relaxed font-semibold">
                    This privacy policy is effective as of 2025-08-26
                  </p>
                </div>
              </div>

              {/* Consent */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Your Consent</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
                </p>
              </div>

              {/* Contact */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-klever-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-klever-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-0">Contact Us</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:akirateam.contact@gmail.com" className="text-klever-primary hover:underline">akirateam.contact@gmail.com</a>.
                </p>
              </div>

              {/* Footer Note */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 text-center">
                  This privacy policy page was generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" className="text-klever-primary hover:underline" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a>
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

export default PrivacyPolicy;