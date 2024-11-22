import React from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { 
  Twitter, 
  ArrowRight, 
  Github, 
  ExternalLink,
  Lock,
  Wallet,
  Users,
  Shield
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0B0E] to-[#0F1014]">
      {/* Season Banner */}
      <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 text-center py-2">
        <div className="flex items-center justify-center gap-2">
          <span role="img" aria-label="trophy">🏆</span>
          <span className="text-purple-300">
            Social Bridge Beta is <span className="text-green-400">live</span>
          </span>
        </div>
        <div className="text-gray-400 text-sm">
          Early adopters get 2x points on all transfers
        </div>
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-800/50">
        <div className="flex items-center space-x-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            <span className="text-xl font-medium text-white">socialbridge</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white">Developers</a>
            <a href="#" className="text-gray-300 hover:text-white">Documentation</a>
            <a href="#" className="text-gray-300 hover:text-white">Explorer</a>
            <a href="#" className="text-gray-300 hover:text-white">Analytics</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" className="text-gray-400 hover:text-white">
            <Github size={20} />
          </a>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6">
            Launch App
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* Hero Content */}
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-normal mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
              Send crypto to anyone,<br />
              using just their social.
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl">
            The easiest way to send cryptocurrency to anyone on social media. No wallet needed - just paste their social profile.
          </p>
        </div>

        {/* Main CTA */}
        <div className="max-w-xl space-y-4 mb-16">
          <div className="relative">
            <Twitter className="absolute left-3 top-3 text-gray-400" size={20} />
            <Input 
              type="text"
              placeholder="Paste any Twitter, Instagram, or social URL"
              className="pl-12 h-12 bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
            />
          </div>
          <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white h-12 rounded-full">
            Create Wallet
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 py-16">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Lock className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-medium text-white">Secure by Default</h3>
            <p className="text-gray-400">
              Recipients verify ownership of their social profile to claim funds. No private keys to manage.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Wallet className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-medium text-white">Instant Wallets</h3>
            <p className="text-gray-400">
              Create wallets instantly for any social profile. Recipients claim when they're ready.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Users className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-medium text-white">Social First</h3>
            <p className="text-gray-400">
              Send crypto as easily as tagging someone. No technical knowledge required.
            </p>
          </div>
        </div>

        {/* Integration Section */}
        <div className="py-16 border-t border-gray-800/50">
          <p className="text-sm text-gray-500 mb-8">INTEGRATED WITH</p>
          <div className="flex flex-wrap gap-8 items-center opacity-50">
            <div className="h-8 w-24 bg-gray-800 rounded flex items-center justify-center text-gray-500">Twitter</div>
            <div className="h-8 w-24 bg-gray-800 rounded flex items-center justify-center text-gray-500">Instagram</div>
            <div className="h-8 w-24 bg-gray-800 rounded flex items-center justify-center text-gray-500">TikTok</div>
            <div className="h-8 w-24 bg-gray-800 rounded flex items-center justify-center text-gray-500">Lens</div>
            <div className="h-8 w-24 bg-gray-800 rounded flex items-center justify-center text-gray-500">Farcaster</div>
          </div>
        </div>

        {/* Security Section */}
        <div className="py-16 border-t border-gray-800/50">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-purple-400" size={24} />
                <h2 className="text-2xl font-medium text-white">Security First</h2>
              </div>
              <p className="text-gray-400 mb-8">
                Built with security as the top priority. Social verification ensures only legitimate profile owners can claim funds.
              </p>
              <Button variant="outline" className="border-gray-800 text-gray-300 hover:text-white">
                Learn about our security
                <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
            <div className="flex-1 bg-gray-900/30 rounded-lg p-6 border border-gray-800/50">
              <pre className="text-sm text-gray-400">
                <code>{`{
  "social": "twitter.com/user",
  "verified": true,
  "claimable": "0.5 ETH",
  "status": "pending"
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;