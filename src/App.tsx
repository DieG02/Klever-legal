import React from 'react';
import { Smartphone, Settings, Trash2, Shield, AlertTriangle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-klever-light to-white font-poppins">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-klever-primary rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Klever</h1>
              <p className="text-sm text-gray-600">Account Management</p>
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
              <Trash2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Delete Your Account</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Need to delete your Klever account? Follow the simple steps below to permanently remove your account and all associated data.
            </p>
          </div>

          {/* Steps Section */}
          <div className="px-8 py-12">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                How to Delete Your Account
              </h3>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start space-x-6 p-6 bg-klever-light/50 rounded-xl border border-klever-light">
                  <div className="w-12 h-12 bg-klever-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Smartphone className="w-5 h-5 text-klever-primary" />
                      <h4 className="text-xl font-semibold text-gray-900">Open the Klever App</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Launch the Klever application on your mobile device to begin the account deletion process.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-6 p-6 bg-klever-light/50 rounded-xl border border-klever-light">
                  <div className="w-12 h-12 bg-klever-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Settings className="w-5 h-5 text-klever-primary" />
                      <h4 className="text-xl font-semibold text-gray-900">Navigate to Settings</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Find and tap on the Settings section within the app to access your account management options.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-6 p-6 bg-klever-light/50 rounded-xl border border-klever-light">
                  <div className="w-12 h-12 bg-klever-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Trash2 className="w-5 h-5 text-klever-primary" />
                      <h4 className="text-xl font-semibold text-gray-900">Select "Eliminar cuenta"</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Look for the "Eliminar cuenta" (Delete Account) option in your settings and tap on it to proceed.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-6 p-6 bg-klever-light/50 rounded-xl border border-klever-light">
                  <div className="w-12 h-12 bg-klever-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Shield className="w-5 h-5 text-klever-primary" />
                      <h4 className="text-xl font-semibold text-gray-900">Confirm Your Identity</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Verify your identity by confirming your password or Google account credentials to ensure account security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-red-900 mb-2">Important Notice</h4>
                  <p className="text-red-700 leading-relaxed">
                    Once you complete the deletion process, your account and all associated data will be 
                    <strong> permanently deleted instantly</strong>. This action cannot be undone, and you will lose access to all your information, settings, and content within the Klever app.
                  </p>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="text-center bg-gray-50 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h4>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                If you're experiencing any issues with deleting your account or have questions about the process, 
                please don't hesitate to reach out through the app's support feature or contact our customer service team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-100 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-klever-primary rounded-lg flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">Klever</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 Klever. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;