'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sand-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 md:px-12 lg:px-24 py-8 animate-slide-down">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center transform rotate-12">
              <svg className="w-6 h-6 text-white -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-display text-2xl font-bold text-primary">Wanderplan</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/login"
              className="px-5 py-2.5 text-earth-700 font-medium hover:text-primary transition-colors duration-200"
            >
              Log in
            </Link>
            <Link 
              href="/signup"
              className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[1.1] animate-slide-up">
              Plan trips that
              <span className="block text-primary mt-2">feel like magic</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-earth-600 max-w-2xl mx-auto text-balance animate-slide-up animation-delay-200">
              AI-powered planning meets human creativity. Collaborate with friends, discover hidden gems, and craft journeys tailored to your passions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-slide-up animation-delay-400">
              <Link 
                href="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-full transition-all duration-200 hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Planning Free</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-earth-300 hover:border-primary text-earth-800 font-bold text-lg rounded-full transition-all duration-200 hover:shadow-lg">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-earth-600 animate-fade-in animation-delay-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-b from-transparent via-sand-100/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Everything you need to plan better
            </h2>
            <p className="text-xl text-earth-600">
              Powerful features that work together seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 hover:border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">AI Trip Planning</h3>
              <p className="text-earth-600 leading-relaxed">
                Let AI craft personalized itineraries based on your interests, budget, and travel style. Get instant suggestions for destinations and activities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 hover:border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Real-Time Collaboration</h3>
              <p className="text-earth-600 leading-relaxed">
                Plan together with friends and family in real-time. Share ideas, vote on activities, and build the perfect trip as a team.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 hover:border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Smart Reminders</h3>
              <p className="text-earth-600 leading-relaxed">
                Never miss a booking deadline or reservation. Get timely notifications for important trip milestones and collaborative updates.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 hover:border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">AI Travel Advisor</h3>
              <p className="text-earth-600 leading-relaxed">
                Chat with our AI assistant for personalized recommendations, local insights, and answers to all your travel questions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 hover:border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Interest-Based Discovery</h3>
              <p className="text-earth-600 leading-relaxed">
                Discover destinations and experiences perfectly matched to your interests. Food, adventure, culture, relaxation—we've got you covered.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 hover:border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Easy Plan Sharing</h3>
              <p className="text-earth-600 leading-relaxed">
                Share your trip plans with anyone via link. Invite collaborators to edit or send view-only versions to keep everyone in the loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary via-primary-dark to-primary-light rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
                Your next adventure starts here
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join thousands of travelers who plan smarter, explore better, and create unforgettable memories.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/signup"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-primary hover:bg-sand-50 font-bold text-lg rounded-full transition-all duration-200 hover:shadow-2xl hover:scale-105"
                >
                  Get Started for Free
                </Link>
                <button className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white hover:bg-white/10 font-bold text-lg rounded-full transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 lg:px-24 py-12 border-t border-sand-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center transform rotate-12">
                <svg className="w-5 h-5 text-white -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold text-primary">Wanderplan</span>
            </div>
            
            <div className="flex space-x-8 text-earth-600">
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Features</a>
              <a href="#" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            
            <p className="text-earth-600 text-sm">
              © 2026 Wanderplan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
