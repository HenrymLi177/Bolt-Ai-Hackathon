import React, { useState, useMemo } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FilterBar from './components/FilterBar';
import CourseGrid from './components/CourseGrid';
import LearningPaths from './components/LearningPaths';
import Instructors from './components/Instructors';
import Community from './components/Community';
import SuccessPage from './components/SuccessPage';
import CancelPage from './components/CancelPage';
import { courses, categories } from './data/courses';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    if (path === '/success') return 'success';
    if (path === '/cancel') return 'cancel';
    return 'courses';
  });
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = !selectedCategory || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
      const matchesSearch = !searchTerm || 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, searchTerm]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage('courses');
    // Scroll to courses section
    setTimeout(() => {
      const coursesSection = document.getElementById('courses-section');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'success':
        return <SuccessPage />;
      case 'cancel':
        return <CancelPage />;
      case 'learning-paths':
        return <LearningPaths />;
      case 'instructors':
        return <Instructors />;
      case 'community':
        return <Community />;
      case 'courses':
      default:
        return (
          <>
            <Hero />
            <CategorySection 
              categories={categories} 
              onCategoryClick={handleCategoryClick}
            />
            
            <div id="courses-section">
              <FilterBar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedLevel={selectedLevel}
                onLevelChange={setSelectedLevel}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
              
              <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedCategory 
                          ? `${categories.find(c => c.id === selectedCategory)?.name} Courses`
                          : 'All Courses'
                        }
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available
                      </p>
                    </div>
                    
                    {(selectedCategory || selectedLevel !== 'All Levels' || searchTerm) && (
                      <button
                        onClick={() => {
                          setSelectedCategory('');
                          setSelectedLevel('All Levels');
                          setSearchTerm('');
                        }}
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Clear Filters
                      </button>
                    )}
                  </div>
                  
                  <CourseGrid courses={filteredCourses} />
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        {currentPage !== 'success' && currentPage !== 'cancel' && (
          <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        )}
        {renderCurrentPage()}
      </div>
    </AuthProvider>
  );
}

export default App;