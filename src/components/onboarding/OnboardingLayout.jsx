"use client";

import { useRouter } from "next/navigation";
import backgroundImage from "../../../assets/background.webp";

export default function OnboardingLayout({ step, totalSteps, title, subtitle, children, canGoBack = true }) {
  const router = useRouter();
  const percent = Math.round((step / totalSteps) * 100);

  const handleBack = () => {
    if (step === 1) return;
    const routes = ["/preferences/budget", "/preferences/accommodation", "/preferences/transportation", "/preferences/review"];
    router.push(routes[step - 2]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          opacity: 0.35,
          transform: 'scale(1.1)'
        }}
      />

      {/* Header */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Updated Logo */}
          <div className="logo-container-mirror">
            <svg className="logo-icon-mirror" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="brand-text">Travel Buddy</span>
        </div>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 shadow-sm" />
      </header>

      <div className="flex relative z-10">
        {/* Sidebar - Hidden on mobile */}
        <aside className="hidden lg:flex lg:w-80 bg-white border-r border-gray-200 min-h-[calc(100vh-64px)] flex-col justify-center px-8">
          <div className="space-y-6">
            <div>
              <h2 className="sidebar-title">
                Prepared to explore<br />the world?
              </h2>
              <p className="sidebar-description">
                Let's set up your travel preferences to create unforgettable journeys.
              </p>
            </div>
            
            {/* Progress indicator */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="progress-percent">
                  {percent}%
                </span>
              </div>
              <p className="progress-step">
                Step {step} of {totalSteps}
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 py-8 lg:py-12">
          <div className="max-w-2xl mx-auto">
            {/* Mobile tagline - shown only on small screens */}
            <div className="lg:hidden mb-8">
              <h2 className="mobile-title">
                Prepared to explore the world?
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex-1 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="progress-percent-mobile">
                  {percent}%
                </span>
              </div>
              <p className="progress-step-mobile">
                Step {step} of {totalSteps}
              </p>
            </div>

            {/* Back Button */}
            {canGoBack && step > 1 && (
              <button
                onClick={handleBack}
                className="back-button"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-sm">Back</span>
              </button>
            )}

            {/* Content Card  */}
            <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 lg:p-10 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl -z-0" />
              
              <div className="relative z-10">
                {subtitle && (
                  <p className="card-subtitle">{subtitle}</p>
                )}
                <h1 className="card-title">{title}</h1>
                <div className="mt-6">{children}</div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Font imports and Custom styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        .logo-container-mirror {
          height: 2.25rem;
          width: 2.25rem;
          border-radius: 0.75rem;
          background: linear-gradient(to bottom right, #14b8a6, #0d9488);
          box-shadow: 0 10px 15px -3px rgba(20, 184, 166, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(12deg) scaleX(-1);
        }

        .logo-icon-mirror {
          width: 1.25rem;
          height: 1.25rem;
          color: white;
          transform: rotate(-12deg) scaleX(-1);
        }

        .brand-text {
          color: #0d9488;
          font-size: 1.125rem;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
        }

        .sidebar-title {
          font-size: 2rem;
          color: #2c3e50;
          line-height: 1.35;
          margin-bottom: 0.75rem;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .sidebar-description {
          color: #64748b;
          font-size: 0.875rem;
          line-height: 1.6;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
        }

        .progress-percent {
          font-size: 1.5rem;
          color: #0d9488;
          min-width: 60px;
          text-align: right;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }

        .progress-step {
          font-size: 0.75rem;
          color: #94a3b8;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }

        .mobile-title {
          font-size: 1.625rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.35;
        }

        .progress-percent-mobile {
          font-size: 1.25rem;
          color: #0d9488;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }

        .progress-step-mobile {
          font-size: 0.75rem;
          color: #94a3b8;
          margin-top: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          transition: color 0.2s;
          margin-bottom: 1.5rem;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }

        .back-button:hover {
          color: #0d9488;
        }

        .card-subtitle {
          font-size: 0.875rem;
          color: #0d9488;
          margin-bottom: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
        }

        .card-title {
          font-size: 2rem;
          color: #2c3e50;
          line-height: 1.35;
          margin-bottom: 0.25rem;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        @media (min-width: 1024px) {
          .card-title {
            font-size: 2.5rem;
          }
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #14b8a6 0%, #0d9488 100%);
          border-radius: 10px;
          border: 2px solid #e5e7eb;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #0d9488 0%, #0f766e 100%);
        }

        /* Firefox scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #14b8a6 #e5e7eb;
        }
      `}</style>
    </div>
  );
}