import React from 'react';
import { Filter, Search, Sparkles, SlidersHorizontal } from 'lucide-react';
import { CourseCategory } from '../types/Course';

interface FilterBarProps {
  categories: CourseCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
  searchTerm,
  onSearchChange,
}) => {
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 py-8 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Enhanced Search */}
          <div className="relative flex-1 max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search courses, skills, instructors..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl text-lg placeholder-gray-400"
              />
              {searchTerm && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-2xl border border-blue-200">
              <SlidersHorizontal className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">Smart Filters</span>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="appearance-none bg-white/90 backdrop-blur-sm px-6 py-3 pr-10 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-gray-700 cursor-pointer"
              >
                <option value="">🎯 All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
            </div>

            {/* Level Filter */}
            <div className="relative">
              <select
                value={selectedLevel}
                onChange={(e) => onLevelChange(e.target.value)}
                className="appearance-none bg-white/90 backdrop-blur-sm px-6 py-3 pr-10 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-gray-700 cursor-pointer"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level === 'All Levels' ? '📊 All Levels' : `${level === 'Beginner' ? '🌱' : level === 'Intermediate' ? '🚀' : '⚡'} ${level}`}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Indicator */}
        {(selectedCategory || selectedLevel !== 'All Levels' || searchTerm) && (
          <div className="mt-4 flex items-center space-x-3">
            <span className="text-sm text-gray-600 font-medium">Active filters:</span>
            <div className="flex space-x-2">
              {selectedCategory && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
              {selectedLevel !== 'All Levels' && (
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {selectedLevel}
                </span>
              )}
              {searchTerm && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  "{searchTerm}"
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;