import React, { useState, useEffect } from 'react';
import { Search, User, Menu, BookOpen, Bell, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useSubscription } from '../hooks/useSubscription';
import AuthModal from './AuthModal';
import UserProfile from './UserProfile';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'courses', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user, profile, loading } = useAuth();
  const { getSubscriptionPlan, isActive } = useSubscription();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const subscriptionPlan = getSubscriptionPlan();

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigation('courses')}>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  TechEdu
                </span>
                <div className="text-xs text-gray-500 font-medium">Future Ready</div>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { name: 'Courses', key: 'courses', active: currentPage === 'courses' },
                { name: 'Learning Paths', key: 'learning-paths', active: currentPage === 'learning-paths' },
                { name: 'Instructors', key: 'instructors', active: currentPage === 'instructors' },
                { name: 'Community', key: 'community', active: currentPage === 'community' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key)}
                  className={`relative font-semibold transition-all duration-300 ${
                    item.active
                      ? 'text-blue-600'
                      : isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.active && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Enhanced Action Items */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              {user && (
                <button className={`relative p-3 rounded-2xl transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}>
                  <Bell className="w-6 h-6" />
                  <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></div>
                </button>
              )}

              {/* Subscription Status */}
              {user && subscriptionPlan && isActive() && (
                <div className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-2xl transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20'
                }`}>
                  <Award className={`w-5 h-5 ${isScrolled ? 'text-green-600' : 'text-white'}`} />
                  <span className={`text-sm font-semibold ${isScrolled ? 'text-green-800' : 'text-white'}`}>
                    {subscriptionPlan}
                  </span>
                </div>
              )}

              {/* Progress Indicator */}
              {user && profile && !subscriptionPlan && (
                <div className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-2xl transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20'
                }`}>
                  <Award className={`w-5 h-5 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
                  <span className={`text-sm font-semibold ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
                    {profile.learning_level}
                  </span>
                </div>
              )}

              {/* Profile/Auth Button */}
              {loading ? (
                <div className="w-12 h-12 rounded-2xl bg-gray-200 animate-pulse"></div>
              ) : user ? (
                <button
                  onClick={() => setShowProfile(true)}
                  className={`relative p-3 rounded-2xl transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <User className="w-6 h-6" />
                </button>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Sign In
                </button>
              )}

              {/* Mobile Menu */}
              <button className={`md:hidden p-3 rounded-2xl transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
      
      <UserProfile
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </>
  );
};

export default Header;