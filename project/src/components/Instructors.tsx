import React, { useState } from 'react';
import { Star, Users, BookOpen, Award, ExternalLink, Linkedin, Twitter, Github, Globe } from 'lucide-react';
import { instructors } from '../data/learningPaths';

const Instructors: React.FC = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(null);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'website':
        return <Globe className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            World-Class Educators
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expert Instructors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Learn from industry leaders, researchers, and practitioners who bring real-world experience 
            and cutting-edge knowledge to every lesson.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              {/* Instructor Avatar */}
              <div className="relative p-8 pb-4">
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-full h-full rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{instructor.title}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold text-gray-900">{instructor.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">Rating</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-blue-500 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="font-bold text-gray-900">{(instructor.studentsCount / 1000).toFixed(1)}K</span>
                      </div>
                      <span className="text-xs text-gray-500">Students</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-purple-500 mb-1">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-bold text-gray-900">{instructor.coursesCount}</span>
                      </div>
                      <span className="text-xs text-gray-500">Courses</span>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {instructor.expertise.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs rounded-full border border-blue-200 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {instructor.expertise.length > 3 && (
                        <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 font-medium">
                          +{instructor.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <button
                    onClick={() => setSelectedInstructor(selectedInstructor === instructor.id ? null : instructor.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    {selectedInstructor === instructor.id ? 'Hide Profile' : 'View Full Profile'}
                  </button>
                </div>
              </div>

              {/* Expanded Profile */}
              {selectedInstructor === instructor.id && (
                <div className="px-8 pb-8">
                  <div className="border-t border-gray-200 pt-6 space-y-6">
                    {/* Bio */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">About</h4>
                      <p className="text-gray-600 leading-relaxed">{instructor.bio}</p>
                    </div>

                    {/* Experience */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Experience</h4>
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700 font-semibold">{instructor.experience}</span>
                      </div>
                    </div>

                    {/* All Expertise */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {instructor.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full border border-blue-200 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Achievements</h4>
                      <ul className="space-y-2">
                        {instructor.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Connect</h4>
                      <div className="flex space-x-3">
                        {Object.entries(instructor.socialLinks).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:scale-110"
                          >
                            {getSocialIcon(platform)}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Learn from Our Instructors */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Learn from Our Instructors?</h2>
            <p className="text-gray-600 text-lg">Industry expertise meets educational excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Industry Leaders</h3>
              <p className="text-gray-600">Learn from professionals who've shaped the tech industry</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proven Educators</h3>
              <p className="text-gray-600">Experienced teachers who know how to make complex topics simple</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Student Success</h3>
              <p className="text-gray-600">Track record of helping thousands achieve their career goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Highly Rated</h3>
              <p className="text-gray-600">Consistently top-rated by students for teaching quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;