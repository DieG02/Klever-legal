import {
  CheckSquare,
  List,
  Mic,
  Shield,
  Users,
  Smartphone,
  FileText,
  Trash2,
  ExternalLink,
  Star,
  Download,
  Play,
} from "lucide-react";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import DeleteAccount from "./components/DeleteAccount";
import { useState } from "react";

type Route = 'home' | 'privacy' | 'terms' | 'delete';

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  const handleNavigate = (route: string) => {
    setCurrentRoute(route as Route);
  };

  if (currentRoute === 'privacy') {
    return <PrivacyPolicy onNavigate={handleNavigate} />;
  }

  if (currentRoute === 'terms') {
    return <TermsConditions onNavigate={handleNavigate} />;
  }

  if (currentRoute === 'delete') {
    return <DeleteAccount onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-klever-light to-white font-poppins">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/images/klever-logo.png"
                  alt="Klever Logo"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Klever</h1>
                <p className="text-sm text-gray-600">Smart Lists & Tasks</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => setCurrentRoute('delete')}
                className="text-gray-600 hover:text-klever-primary transition-colors"
              >
                Delete Account
              </button>
              <button
                onClick={() => setCurrentRoute('privacy')}
                className="text-gray-600 hover:text-klever-primary transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => setCurrentRoute('terms')}
                className="text-gray-600 hover:text-klever-primary transition-colors"
              >
                Terms
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-klever-primary to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Organize Your Life with
                <span className="block text-blue-200">Smart Lists</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Organize your tasks, shopping, or orders effortlessly. Check off items, create boards, and use voice input for faster management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-klever-primary px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Now</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-white/20 rounded-3xl mx-auto flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Key Features</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Klever makes organizing your daily life simple and fun! Whether it's shopping, tasks, or managing orders, Klever keeps you on track.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-klever-light/50 rounded-2xl p-8 border border-klever-light hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-klever-primary/10 rounded-full flex items-center justify-center mb-6">
                <List className="w-8 h-8 text-klever-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Create and Manage Lists</h4>
              <p className="text-gray-600 leading-relaxed">
                Perfect for tasks, shopping, or orders. Organize everything in easy-to-use lists.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-klever-light/50 rounded-2xl p-8 border border-klever-light hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-klever-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckSquare className="w-8 h-8 text-klever-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Boards for Checklists</h4>
              <p className="text-gray-600 leading-relaxed">
                Group items into boards for better organization and visual management.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-klever-light/50 rounded-2xl p-8 border border-klever-light hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-klever-primary/10 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-klever-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Mark Items Complete</h4>
              <p className="text-gray-600 leading-relaxed">
                Quickly check off completed items and track your progress effortlessly.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-klever-light/50 rounded-2xl p-8 border border-klever-light hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-klever-primary/10 rounded-full flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 text-klever-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Voice Input</h4>
              <p className="text-gray-600 leading-relaxed">
                Add items hands-free with dictation for faster and more convenient management.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-klever-light/50 rounded-2xl p-8 border border-klever-light hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-klever-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-klever-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Secure Login</h4>
              <p className="text-gray-600 leading-relaxed">
                Sign up or log in with Google or email/password for secure access to your data.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-klever-light/50 rounded-2xl p-8 border border-klever-light hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-klever-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-klever-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Delete & Edit Items</h4>
              <p className="text-gray-600 leading-relaxed">
                Keep your lists neat and updated by easily deleting or editing items and boards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Klever Section */}
      <div className="py-20 bg-gradient-to-br from-klever-light to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-8">Why Klever?</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Klever is designed to help you stay organized in a smart, efficient, and fun way. Whether you're managing groceries, work tasks, or personal projects, Klever adapts to your needs.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-klever-primary mb-2">Smart</div>
                <p className="text-gray-600">Intelligent organization that adapts to your workflow</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-klever-primary mb-2">Efficient</div>
                <p className="text-gray-600">Save time with voice input and quick actions</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-klever-primary mb-2">Fun</div>
                <p className="text-gray-600">Enjoyable interface that makes organizing a pleasure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-klever-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Get Organized?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their productivity with Klever. Download now and start organizing your life today!
          </p>
          <button className="bg-white text-klever-primary px-12 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-3 mx-auto">
            <Download className="w-6 h-6" />
            <span>Download Klever Now</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-klever-primary rounded-lg flex items-center justify-center">
                  <img
                    src="/images/klever-logo.png"
                    alt="Klever Logo"
                    className="rounded-lg"
                  />
                </div>
                <span className="text-2xl font-bold text-gray-800">Klever</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Smart Lists & Tasks - Organize your tasks, shopping, or orders effortlessly with intelligent features and intuitive design.
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Klever. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-klever-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-klever-primary transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-klever-primary transition-colors">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a 
                    href="mailto:akirateam.contact@gmail.com" 
                    className="hover:text-klever-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentRoute('delete')}
                    className="hover:text-klever-primary transition-colors text-left"
                  >
                    Delete Account
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentRoute('privacy')}
                    className="hover:text-klever-primary transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentRoute('terms')}
                    className="hover:text-klever-primary transition-colors text-left"
                  >
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;