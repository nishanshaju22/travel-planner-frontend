'use client';
import { useAuth } from '../../src/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [notifications] = useState(3);
  const [messages] = useState(5);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const destinations = [
    {
      id: 1,
      category: 'Beaches',
      title: "Cox's Bazar Beach, Sundarban",
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      price: '$15'
    },
    {
      id: 2,
      category: 'Islands',
      title: 'Amazon Rainforest Resort',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      price: '$50'
    },
    {
      id: 3,
      category: 'Mountains',
      title: 'Surf Parks',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      price: '$25'
    },
  ];

  const categories = [
    { name: 'Beaches', count: 15, icon: '🏖️' },
    { name: 'Islands', count: 8, icon: '🏝️' },
    { name: 'Mountains', count: 12, icon: '⛰️' },
  ];

  const suggestedPlaces = [
    {
      id: 1,
      name: 'Santorini, Greece',
      description: 'White-washed buildings with stunning sunset views',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
      rating: 4.9,
      reviews: 2834,
      price: '$1,250',
      duration: '7 days',
      tag: 'Trending'
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      description: 'Tropical paradise with ancient temples and rice terraces',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      rating: 4.8,
      reviews: 3421,
      price: '$890',
      duration: '5 days',
      tag: 'Popular'
    },
    {
      id: 3,
      name: 'Maldives',
      description: 'Crystal-clear waters and luxury overwater bungalows',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
      rating: 5.0,
      reviews: 1876,
      price: '$2,100',
      duration: '6 days',
      tag: 'Luxury'
    },
    {
      id: 4,
      name: 'Swiss Alps',
      description: 'Majestic mountain peaks and charming alpine villages',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
      rating: 4.9,
      reviews: 2145,
      price: '$1,680',
      duration: '8 days',
      tag: 'Adventure'
    },
    {
      id: 5,
      name: 'Tokyo, Japan',
      description: 'Blend of ancient traditions and futuristic technology',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      rating: 4.7,
      reviews: 4231,
      price: '$1,450',
      duration: '6 days',
      tag: 'Culture'
    },
    {
      id: 6,
      name: 'Iceland',
      description: 'Northern lights, glaciers, and geothermal springs',
      image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800',
      rating: 4.9,
      reviews: 1654,
      price: '$1,920',
      duration: '7 days',
      tag: 'Unique'
    },
  ];

  const recentChats = [
    { id: 1, name: 'Sarah', message: 'Ready for Bali?', time: '2m', avatar: '👩' },
    { id: 2, name: 'Mike', message: 'Check out this hotel!', time: '15m', avatar: '👨' },
    { id: 3, name: 'Emma', message: 'Flight confirmed ✈️', time: '1h', avatar: '👧' },
  ];

  const getTagColor = (tag) => {
    const colors = {
      'Trending': 'bg-red-500',
      'Popular': 'bg-yellow-500',
      'Luxury': 'bg-purple-500',
      'Adventure': 'bg-green-500',
      'Culture': 'bg-blue-500',
      'Unique': 'bg-pink-500',
    };
    return colors[tag] || 'bg-primary';
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')`
        }}
      >
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-50">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✈️</span>
            </div>
            <span className="text-white font-bold text-xl">TravelCo</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {notifications}
                </span>
              )}
            </button>

            {/* Logout */}
            <button 
              onClick={handleLogout}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text and Search */}
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Get ready for your<br />dream vacation
              </h1>
              <p className="text-white/90 text-xl mb-10">
                Discover breathtaking destinations
              </p>

              {/* Search Bar */}
              <div className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search destinations"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-8 py-5 rounded-full bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-2xl text-lg"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-slate-900 px-8 py-3 rounded-full hover:bg-yellow-500 transition font-semibold">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Scroll Down Indicator */}
            <div className="flex items-center justify-center">
              <button 
                onClick={scrollToContent}
                className="flex flex-col items-center gap-4 text-white hover:text-yellow-400 transition-colors cursor-pointer group"
              >
                <span className="text-lg font-medium">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-white/50 group-hover:border-yellow-400 rounded-full flex items-start justify-center p-2 transition-colors">
                  <div className="w-1 h-3 bg-white/50 group-hover:bg-yellow-400 rounded-full animate-bounce transition-colors"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Popular Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 text-center hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{cat.name}</h3>
                <p className="text-slate-600">{cat.count} destinations</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beach Islands Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Beach Islands</h2>
              <p className="text-slate-600">Explore tropical paradise destinations</p>
            </div>
            <button className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center gap-2">
              See all <span>→</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${dest.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Wishlist */}
                  <button className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition shadow-lg">
                    <span className="text-2xl">♡</span>
                  </button>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-full">
                    {dest.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-slate-900 font-bold text-xl mb-4 group-hover:text-yellow-600 transition">
                    {dest.title}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div>
                      <p className="text-slate-500 text-sm mb-1">Starting from</p>
                      <p className="text-slate-900 font-bold text-2xl">{dest.price}</p>
                    </div>
                    <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Places */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Suggested Places for You ✨
              </h2>
              <p className="text-slate-600">Handpicked destinations based on your preferences</p>
            </div>
            <button className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center gap-2">
              View all <span>→</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestedPlaces.map((place) => (
              <div
                key={place.id}
                className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${place.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Tag */}
                  <span className={`absolute top-4 left-4 ${getTagColor(place.tag)} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                    {place.tag}
                  </span>
                  
                  {/* Wishlist */}
                  <button className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition shadow-lg">
                    <span className="text-2xl">♡</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-slate-900 font-bold text-xl mb-2 group-hover:text-yellow-600 transition">
                    {place.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {place.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">⭐</span>
                      <span className="text-slate-900 font-bold text-sm">{place.rating}</span>
                    </div>
                    <span className="text-slate-500 text-xs">({place.reviews.toLocaleString()} reviews)</span>
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between pt-5 border-t border-slate-200">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Starting from</p>
                      <p className="text-slate-900 font-bold text-xl">{place.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500 text-xs mb-1">Duration</p>
                      <p className="text-yellow-600 font-bold text-sm">{place.duration}</p>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button className="w-full mt-5 py-4 bg-yellow-400 text-slate-900 rounded-full font-semibold hover:bg-yellow-500 transition shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Chat Widget - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl w-80 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Messages</h3>
            </div>
            {messages > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {messages}
              </span>
            )}
          </div>

          {/* Chat List */}
          <div className="max-h-96 overflow-y-auto">
            {recentChats.map((chat) => (
              <button
                key={chat.id}
                className="w-full p-5 flex items-center gap-4 hover:bg-slate-50 transition border-b border-slate-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-2xl shadow-md flex-shrink-0">
                  {chat.avatar}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-slate-900 text-sm">{chat.name}</h4>
                    <span className="text-xs text-slate-500">{chat.time}</span>
                  </div>
                  <p className="text-slate-600 text-sm truncate">{chat.message}</p>
                </div>
              </button>
            ))}
          </div>

          {/* View All Chats */}
          <button className="w-full p-4 bg-slate-50 hover:bg-slate-100 transition text-yellow-600 font-semibold text-sm">
            View All Messages →
          </button>
        </div>
      </div>
    </div>
  );
}