import React, { useState } from 'react';
import { Star, Clock, Users, Award, ArrowRight, BookOpen, TrendingUp, CheckCircle } from 'lucide-react';
import { Course } from '../types/Course';
import { useAuth } from '../contexts/AuthContext';
import { useCourseEnrollment } from '../hooks/useCourseEnrollment';
import PaymentModal from './PaymentModal';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { user } = useAuth();
  const { enrollInCourse, isEnrolled, getEnrollment } = useCourseEnrollment();
  const [enrolling, setEnrolling] = useState(false);

  const enrollment = getEnrollment(course.id);
  const userIsEnrolled = isEnrolled(course.id);

  const handleEnrollClick = () => {
    if (!user) {
      // Could trigger auth modal here
      return;
    }

    if (userIsEnrolled) {
      // Navigate to course content
      return;
    }

    // Show payment modal for enrollment
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = async () => {
    setEnrolling(true);
    try {
      await enrollInCourse(course.id);
    } catch (error) {
      console.error('Error enrolling:', error);
    } finally {
      setEnrolling(false);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'Intermediate':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'Advanced':
        return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white';
    }
  };

  return (
    <>
      <div 
        className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
          <div className="w-full h-full bg-white rounded-3xl"></div>
        </div>

        {/* Course Image */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Level Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${getLevelColor(course.level)}`}>
              {course.level}
            </span>
          </div>

          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${course.price}
              </span>
            </div>
          </div>

          {/* Enrollment Status */}
          {userIsEnrolled && (
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Enrolled</span>
              </div>
            </div>
          )}

          {/* Trending Badge */}
          {!userIsEnrolled && (
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>Popular</span>
              </div>
            </div>
          )}
        </div>

        {/* Course Content */}
        <div className="relative z-10 p-8">
          {/* Title and Description */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {course.title}
          </h3>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
            {course.description}
          </p>

          {/* Instructor */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="ml-3">
              <p className="text-gray-900 font-semibold">{course.instructor}</p>
              <p className="text-gray-500 text-sm">Expert Instructor</p>
            </div>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-gray-900">{course.rating}</span>
              </div>
              <span className="text-xs text-gray-500">Rating</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-blue-500 mb-1">
                <Users className="w-4 h-4" />
                <span className="font-bold text-gray-900">{(course.studentsEnrolled / 1000).toFixed(1)}K</span>
              </div>
              <span className="text-xs text-gray-500">Students</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-purple-500 mb-1">
                <Clock className="w-4 h-4" />
                <span className="font-bold text-gray-900">{course.duration}</span>
              </div>
              <span className="text-xs text-gray-500">Duration</span>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {course.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs rounded-full border border-blue-200 font-medium"
                >
                  {skill}
                </span>
              ))}
              {course.skills.length > 3 && (
                <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 font-medium">
                  +{course.skills.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Progress Bar for Enrolled Users */}
          {userIsEnrolled && enrollment && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-bold text-blue-600">{enrollment.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${enrollment.progress}%` }}
                ></div>
              </div>
              {enrollment.progress === 100 && (
                <div className="mt-2 flex items-center space-x-1 text-green-600">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Completed!</span>
                </div>
              )}
            </div>
          )}

          {/* Enhanced CTA Button */}
          <button
            onClick={handleEnrollClick}
            disabled={enrolling}
            className={`relative w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-500 shadow-lg hover:shadow-2xl group/btn overflow-hidden ${
              userIsEnrolled
                ? 'bg-green-500 text-white cursor-default'
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 text-white hover:bg-pos-100 hover:shadow-blue-500/25'
            }`}
          >
            {/* Shimmer Effect */}
            {!userIsEnrolled && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            )}
            
            {userIsEnrolled ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span className="relative z-10">Continue Learning</span>
              </>
            ) : (
              <>
                <BookOpen className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">{enrolling ? 'Enrolling...' : 'Enroll Now'}</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </>
            )}
          </button>

          {/* Progress Indicator */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Course Progress Tracking</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-200 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        {isHovered && (
          <div className="absolute top-8 right-8 pointer-events-none">
            <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        item={course}
        type="course"
        onPaymentSuccess={handlePaymentSuccess}
      />
    </>
  );
};

export default CourseCard;