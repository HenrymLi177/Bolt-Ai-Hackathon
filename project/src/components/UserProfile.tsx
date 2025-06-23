import React, { useState } from 'react';
import { User, Settings, BookOpen, Award, TrendingUp, Calendar, Edit2, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCourseEnrollment } from '../hooks/useCourseEnrollment';
import { courses } from '../data/courses';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const { user, profile, updateProfile, signOut } = useAuth();
  const { enrollments } = useCourseEnrollment();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    full_name: profile?.full_name || '',
    learning_level: profile?.learning_level || 'Beginner',
  });

  const handleSave = async () => {
    const { error } = await updateProfile(editForm);
    if (!error) {
      setIsEditing(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    onClose();
  };

  const enrolledCourses = enrollments.map(enrollment => {
    const course = courses.find(c => c.id === enrollment.course_id);
    return course ? { ...course, enrollment } : null;
  }).filter(Boolean);

  const completedCourses = enrolledCourses.filter(course => course?.enrollment.progress === 100);
  const averageProgress = enrollments.length > 0 
    ? Math.round(enrollments.reduce((sum, e) => sum + e.progress, 0) / enrollments.length)
    : 0;

  if (!isOpen || !user || !profile) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
              <User className="w-12 h-12" />
            </div>
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={editForm.full_name}
                    onChange={(e) => setEditForm(prev => ({ ...prev, full_name: e.target.value }))}
                    className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white placeholder-white/70 text-xl font-bold"
                    placeholder="Full Name"
                  />
                  <select
                    value={editForm.learning_level}
                    onChange={(e) => setEditForm(prev => ({ ...prev, learning_level: e.target.value as any }))}
                    className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-3xl font-bold">{profile.full_name || 'Student'}</h2>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-white/80 text-lg">{profile.email}</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {profile.learning_level} Level
                    </span>
                    <span className="text-white/80 text-sm">
                      Member since {new Date(profile.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[60vh]">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-blue-900">{enrollments.length}</p>
                  <p className="text-blue-600 text-sm">Enrolled Courses</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-green-900">{completedCourses.length}</p>
                  <p className="text-green-600 text-sm">Completed</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-purple-900">{averageProgress}%</p>
                  <p className="text-purple-600 text-sm">Avg Progress</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-orange-900">
                    {Math.floor((Date.now() - new Date(profile.created_at).getTime()) / (1000 * 60 * 60 * 24))}
                  </p>
                  <p className="text-orange-600 text-sm">Days Active</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enrolled Courses */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h3>
            {enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <div key={course!.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <img
                        src={course!.image}
                        alt={course!.title}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">{course!.title}</h4>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-semibold text-blue-600">
                            {course!.enrollment.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course!.enrollment.progress}%` }}
                          ></div>
                        </div>
                        {course!.enrollment.progress === 100 && (
                          <div className="mt-2 flex items-center space-x-1 text-green-600">
                            <Award className="w-4 h-4" />
                            <span className="text-sm font-medium">Completed!</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No courses enrolled yet</p>
                <p className="text-gray-400">Start learning by enrolling in a course!</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleSignOut}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;