import React, { useState } from 'react';
import { MessageCircle, Heart, Reply, Search, Filter, Plus, TrendingUp, Users, Award, Sparkles } from 'lucide-react';
import { communityPosts } from '../data/learningPaths';
import { useAuth } from '../contexts/AuthContext';

const Community: React.FC = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const categories = ['All', 'Discussion', 'Help', 'Showcase', 'News'];

  const filteredPosts = communityPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Discussion':
        return 'bg-blue-100 text-blue-800';
      case 'Help':
        return 'bg-orange-100 text-orange-800';
      case 'Showcase':
        return 'bg-green-100 text-green-800';
      case 'News':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Discussion':
        return <MessageCircle className="w-4 h-4" />;
      case 'Help':
        return <Users className="w-4 h-4" />;
      case 'Showcase':
        return <Award className="w-4 h-4" />;
      case 'News':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <MessageCircle className="w-4 h-4" />;
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4 mr-2" />
            Connect & Learn Together
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Tech
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join thousands of learners, share your projects, get help, and celebrate achievements together. 
            Our community is where learning comes alive through collaboration and support.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">50K+</p>
                <p className="text-gray-600 text-sm">Active Members</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">125K+</p>
                <p className="text-gray-600 text-sm">Discussions</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8K+</p>
                <p className="text-gray-600 text-sm">Projects Shared</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">95%</p>
                <p className="text-gray-600 text-sm">Help Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
              {/* New Post Button */}
              {user && (
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mb-6">
                  <Plus className="w-5 h-5" />
                  <span>New Post</span>
                </button>
              )}

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {getCategoryIcon(category)}
                      <span className="font-medium">{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Community Guidelines */}
              <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Community Guidelines
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Be respectful and helpful</li>
                  <li>• Share knowledge freely</li>
                  <li>• Use clear, descriptive titles</li>
                  <li>• Tag posts appropriately</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
                >
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{post.author.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">{post.author.level}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{formatTimeAgo(post.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getCategoryColor(post.category)}`}>
                      {getCategoryIcon(post.category)}
                      <span>{post.category}</span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-2 transition-all duration-300 ${
                          likedPosts.has(post.id) || post.isLiked
                            ? 'text-red-500'
                            : 'text-gray-600 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedPosts.has(post.id) || post.isLiked ? 'fill-current' : ''}`} />
                        <span className="font-medium">
                          {post.likes + (likedPosts.has(post.id) ? (post.isLiked ? 0 : 1) : (post.isLiked ? -1 : 0))}
                        </span>
                      </button>

                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                        <Reply className="w-5 h-5" />
                        <span className="font-medium">{post.replies}</span>
                      </button>
                    </div>

                    <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      View Discussion
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;