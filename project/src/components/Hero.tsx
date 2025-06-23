import React from 'react';
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import FloatingElements from './FloatingElements';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Tech Elements */}
      <FloatingElements />

      {/* Gradient Orbs */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-600/30 to-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 3 }}>
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
            Trusted by 50,000+ Students Worldwide
          </div>

          {/* Main Heading with Gradient Text Animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up animation-delay-200">
            <span className="text-white">Master the</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Future of Technology
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Unlock unlimited potential with our cutting-edge ICT & Computer Science courses. 
            From AI and machine learning to cybersecurity and cloud computing, embark on a journey 
            that transforms you into a tech innovator.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg flex items-center space-x-3 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Begin Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-semibold text-lg flex items-center space-x-3 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Enhanced Stats with Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up animation-delay-800">
            {[
              { number: '200+', label: 'Expert-Led Courses', icon: '🎓' },
              { number: '75K+', label: 'Active Students', icon: '👥' },
              { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Showcase */}
          <div className="mt-16 animate-fade-in-up animation-delay-1000">
            <p className="text-blue-200 mb-6 font-medium">Learn industry-leading technologies</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Python', 'AI/ML', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow', 'PostgreSQL'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;