import React, { useState } from 'react';
import { Search, Download, TikTok, Instagram, ArrowRight, Users, Clock, Zap } from 'lucide-react';

const ageGroups = [
  { id: 6, label: '6-9' },
  { id: 10, label: '10-12' },
  { id: 12, label: '12-14' },
  { id: 14, label: '14+' }
];

const trendData = {
  6: [
    {
      name: "Stanley Cup Craze",
      insight: "It's a viral social status symbol, not just a water bottle.",
      hype: 95,
      platforms: ['TikTok', 'Instagram'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/8B00FF/FFFFFF?text=Stanley+Cup"
    },
    {
      name: "Puffy Tech Aesthetics",
      insight: "Chunky, plush phone cases that feel like hugging your device.",
      hype: 82,
      platforms: ['TikTok', 'Instagram'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/00FFFF/000000?text=Puffy+Tech"
    },
    {
      name: "Coquette Core",
      insight: "Girly bows and lace revival for a soft, feminine vibe.",
      hype: 88,
      platforms: ['TikTok'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/FF1493/FFFFFF?text=Coquette"
    }
  ],
  10: [
    {
      name: "Skibidi Toilet Meme",
      insight: "Absurd viral dance challenge from YouTube shorts.",
      hype: 90,
      platforms: ['TikTok', 'Instagram'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/32CD32/FFFFFF?text=Skibidi"
    },
    {
      name: "Aura Points Farming",
      insight: "Game-like system scoring 'coolness' through quirky behaviors.",
      hype: 92,
      platforms: ['TikTok'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/FFD700/000000?text=Aura+Points"
    },
    {
      name: "Chrome Hearts Dupes",
      insight: "Affordable luxury jewelry knockoffs for streetwear flex.",
      hype: 85,
      platforms: ['Instagram'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/C0C0C0/000000?text=Chrome+Hearts"
    }
  ],
  12: [
    {
      name: "Puffy Tech Aesthetics",
      insight: "Chunky, plush phone cases that feel like hugging your device.",
      hype: 82,
      platforms: ['TikTok', 'Instagram'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/00FFFF/000000?text=Puffy+Tech"
    },
    {
      name: "Aura Points Farming",
      insight: "Game-like system scoring 'coolness' through quirky behaviors.",
      hype: 92,
      platforms: ['TikTok'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/FFD700/000000?text=Aura+Points"
    },
    {
      name: "Laced-Up Crochet",
      insight: "DIY sneakers and bags with boho-luxe threading trends.",
      hype: 78,
      platforms: ['Instagram'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/9370DB/FFFFFF?text=Crochet"
    }
  ],
  14: [
    {
      name: "Glamoratti Maximalism",
      insight: "Over-the-top personal style as bold self-expression.",
      hype: 96,
      platforms: ['TikTok', 'Instagram'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/FF69B4/000000?text=Glamoratti"
    },
    {
      name: "Silent Basketball",
      insight: "Foam hoops for late-night indoor slam dunks without noise.",
      hype: 89,
      platforms: ['TikTok'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/FF4500/FFFFFF?text=Silent+BBall"
    },
    {
      name: "Intentional Analog",
      insight: "Handwritten notes and film cameras for digital detox vibes.",
      hype: 84,
      platforms: ['Instagram'],
      buyLink: "#",
      image: "https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Analog"
    }
  ]
};

const LandingPage = () => {
  const [selectedAge, setSelectedAge] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
  const trends = trendData[selectedAge] || [];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 z-50 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            TrendyKid
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 px-6 py-2 rounded-full font-medium flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Download size={20} />
            Download App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            Stop Guessing. Start Gifting.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
            The ultimate translator from teen trends to parental peace of mind. Updated every 48 hours.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="What is my kid talking about? (e.g., Skibidi, Coquette, Aura points)"
              className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Age Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {ageGroups.map((age) => (
            <button
              key={age.id}
              onClick={() => setSelectedAge(age.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                selectedAge === age.id
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 border-transparent shadow-xl hover:shadow-2xl'
                  : 'bg-white/10 border-white/30 hover:bg-white/20'
              }`}
            >
              {age.label}
            </button>
          ))}
        </div>
      </section>

      {/* Trend Cards Grid */}
      <section className="px-6 md:px-12 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Visual */}
              <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/30 to-cyan-500/30 aspect-video group-hover:scale-105 transition-transform duration-500">
                <img
                  src={trend.image}
                  alt={trend.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Trend Name */}
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {trend.name}
              </h3>

              {/* Parental Insight */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                "{trend.insight}"
              </p>

              {/* Hype Meter */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Hype Meter</span>
                  <span>{trend.hype}%</span>
                </div>
                <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${trend.hype}%` }}
                  />
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex gap-2 mb-6">
                {trend.platforms.includes('TikTok') && (
                  <div className="p-2 bg-black/50 rounded-xl">
                    <TikTok size={20} className="text-red-400" />
                  </div>
                )}
                {trend.platforms.includes('Instagram') && (
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <Instagram size={20} className="text-white drop-shadow-lg" />
                  </div>
                )}
              </div>

              {/* Buy Link */}
              <a
                href={trend.buyLink}
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-medium py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:translate-x-2"
              >
                Find it now <ArrowRight size={20} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Use Us */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/80 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
            Why Parents Love Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <Users className="w-12 h-12 text-purple-400" />
              <h3 className="text-xl font-bold">No more cringey gifts</h3>
            </div>
            <div className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <Zap className="w-12 h-12 text-cyan-400" />
              <h3 className="text-xl font-bold">100% trend accuracy</h3>
            </div>
            <div className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <Clock className="w-12 h-12 text-purple-400" />
              <h3 className="text-xl font-bold">Save hours of research</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-white/10 bg-gray-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            TrendyKid Navigator
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-48 h-14 bg-black/50 hover:bg-black/70 rounded-2xl flex items-center justify-center transition-all">
              <span>App Store</span>
            </a>
            <a href="#" className="w-52 h-14 bg-black/50 hover:bg-black/70 rounded-2xl flex items-center justify-center transition-all">
              <span>Google Play</span>
            </a>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">TikTok</a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm pt-8 border-t border-white/10">
          © 2026 TrendyKid. All trends reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
