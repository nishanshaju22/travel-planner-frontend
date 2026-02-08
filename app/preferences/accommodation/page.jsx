"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import OnboardingLayout from "@/src/components/onboarding/OnboardingLayout";
import { PreferencesContext } from "@/src/context/PreferencesContext";

const OPTIONS = [
  { 
    value: "HOTEL", 
    label: "Hotel", 
    icon: "🏨",
    description: "Traditional hotels with full service"
  },
  { 
    value: "RESORT", 
    label: "Resort", 
    icon: "🏖️",
    description: "All-inclusive resort experience"
  },
  { 
    value: "AIRBNB", 
    label: "Airbnb", 
    icon: "🏠",
    description: "Private homes and apartments"
  },
  { 
    value: "VILLA", 
    label: "Villa", 
    icon: "🏡",
    description: "Luxury private villas"
  },
  { 
    value: "BACKPACKING", 
    label: "Hostel", 
    icon: "🎒",
    description: "Budget-friendly shared stays"
  },
  { 
    value: "CAMPING", 
    label: "Camping", 
    icon: "⛺",
    description: "Outdoor camping adventures"
  },
  { 
    value: "NONE", 
    label: "No Preference", 
    icon: "✨",
    description: "Open to all options"
  },
];

export default function AccommodationPage() {
  const router = useRouter();
  const { preferences, setPreference } = useContext(PreferencesContext);
  const [selected, setSelected] = useState(preferences.accommodationPreference || []);

  const toggle = (opt) => {
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt]
    );
  };

  const next = () => {
    setPreference("accommodationPreference", selected);
    router.push("/preferences/transportation");
  };

  const skip = () => {
    setPreference("accommodationPreference", []);
    router.push("/preferences/transportation");
  };

  return (
    <OnboardingLayout 
      step={2} 
      totalSteps={4} 
      title="Where would you like to stay?" 
      subtitle="Accommodation Preferences"
    >
      <div className="mt-8 space-y-8">
        {/* Description */}
        <div>
          <p className="text-slate-600 leading-relaxed text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
            Select all accommodation types you're interested in. You can choose multiple options.
          </p>
          {selected.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100">
              <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-teal-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                {selected.length} {selected.length === 1 ? 'option' : 'options'} selected
              </span>
            </div>
          )}
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {OPTIONS.map((option) => {
            const isSelected = selected.includes(option.value);
            return (
              <button
                key={option.value}
                onClick={() => toggle(option.value)}
                className={`group relative p-5 rounded-xl border-2 text-left transition-all ${
                  isSelected
                    ? "border-teal-500 bg-teal-50/70 shadow-md shadow-teal-100/50"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                {/* Selection Indicator */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? "border-teal-600 bg-teal-600"
                        : "border-slate-300 bg-white group-hover:border-slate-400"
                    }`}
                  >
                    {isSelected && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="pr-8">
                  <div className="text-3xl mb-3">{option.icon}</div>
                  <h3
                    className={`font-bold text-base mb-1 transition-colors ${
                      isSelected ? "text-teal-900" : "text-slate-900"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {option.label}
                  </h3>
                  <p
                    className={`text-sm transition-colors ${
                      isSelected ? "text-teal-700/90" : "text-slate-500"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {option.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="pt-6 space-y-3">
          <button
            onClick={next}
            disabled={selected.length === 0}
            className="group w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed text-white rounded-xl py-4 font-bold text-base shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:shadow-none disabled:translate-y-0 flex items-center justify-center gap-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Continue to Next Step
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          <button
            onClick={skip}
            className="w-full text-sm font-medium text-slate-500 hover:text-slate-700 py-3 transition-colors rounded-xl hover:bg-slate-50"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Skip for now
          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}