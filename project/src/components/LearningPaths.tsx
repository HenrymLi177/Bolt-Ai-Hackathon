import React, { useState } from 'react';
import { ArrowRight, Clock, Users, Star, Award, CheckCircle, BookOpen, Target } from 'lucide-react';
import { learningPaths } from '../data/learningPaths';
import { courses } from '../data/courses';
import { useAuth } from '../contexts/AuthContext';
import PaymentModal from './PaymentModal';
import AuthModal from './AuthModal';

const LearningPaths: React.FC = () => {
  const { user } = useAuth();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedPathForPayment, setSelectedPathForPayment] = useState<any>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'Intermediate':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Advanced':
        return 'bg-gradient-to-r from-red-500 to-pink-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const getPathCourses = (courseIds: string[]) => {
    return courseIds.map(id => courses.find(course => course.id === id)).filter(Boolean);
  };

  const handleEnrollClick = (path: any) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    
    setSelectedPathForPayment(path);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setSelectedPathForPayment(null);
    // You could add enrollment logic here
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4 mr-2" />
              Structured Learning Journeys
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Learning
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Paths</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Follow our expertly designed learning paths to master complete skill sets. 
              Each path combines multiple courses in a logical sequence to take you from beginner to expert.
            </p>
          </div>

          {/* Learning Paths Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              >
                {/* Path Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg ${getDifficultyColor(path.difficulty)}`}>
                      {path.difficulty}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ${path.price}
                      </span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{path.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Path Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {path.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold text-gray-900">{path.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">Rating</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-blue-500 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="font-bold text-gray-900">{(path.studentsEnrolled / 1000).toFixed(1)}K</span>
                      </div>
                      <span className="text-xs text-gray-500">Students</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-purple-500 mb-1">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-bold text-gray-900">{path.courses.length}</span>
                      </div>
                      <span className="text-xs text-gray-500">Courses</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Skills You'll Master:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs rounded-full border border-blue-200 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {path.skills.length > 4 && (
                        <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 font-medium">
                          +{path.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl group/btn mb-4"
                  >
                    <span>View Learning Path</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>

                  {/* Expanded Details */}
                  {selectedPath === path.id && (
                    <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                      <div className="space-y-6">
                        {/* Prerequisites */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            Prerequisites
                          </h4>
                          <ul className="space-y-2">
                            {path.prerequisites.map((prereq, index) => (
                              <li key={index} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                {prereq}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Learning Outcomes */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <Award className="w-5 h-5 text-purple-500 mr-2" />
                            What You'll Achieve
                          </h4>
                          <ul className="space-y-2">
                            {path.outcomes.map((outcome, index) => (
                              <li key={index} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Included Courses */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                            Included Courses
                          </h4>
                          <div className="space-y-3">
                            {getPathCourses(path.courses).map((course, index) => (
                              <div key={course!.id} className="flex items-center space-x-4 p-3 bg-white rounded-xl border border-gray-200">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-semibold text-gray-900">{course!.title}</h5>
                                  <p className="text-sm text-gray-600">{course!.duration} • {course!.level}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-blue-600">${course!.price}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Enroll Button */}
                        <button 
                          onClick={() => handleEnrollClick(path)}
                          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg"
                        >
                          <Award className="w-5 h-5" />
                          <span>Enroll in Complete Path - ${path.price}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Learning Paths?</h2>
              <p className="text-gray-600 text-lg">Structured learning designed for maximum impact</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Progression</h3>
                <p className="text-gray-600">Follow a carefully designed sequence that builds knowledge systematically</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career-Ready Skills</h3>
                <p className="text-gray-600">Master complete skill sets that employers are actively seeking</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Progress</h3>
                <p className="text-gray-600">Track your advancement with clear milestones and achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        item={selectedPathForPayment}
        type="path"
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode="signin"
      />
    </>
  );
};

export default LearningPaths;