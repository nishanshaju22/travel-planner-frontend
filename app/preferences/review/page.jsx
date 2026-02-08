"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingLayout from "@/src/components/onboarding/OnboardingLayout";
import { PreferencesContext } from "@/src/context/PreferencesContext";
import { userApi } from "@/src/api/userApi";

const CURRENCY_SYMBOLS = {
  USD: "$",
  AUD: "A$",
  INR: "₹",
  EUR: "€",
};

const ACCOMMODATION_LABELS = {
  HOTEL: "Hotel",
  BACKPACKING: "Hostel",
  NONE: "No Preference",
  RESORT: "Resort",
  VILLA: "Villa",
  CAMPING: "Camping",
  AIRBNB: "Airbnb",
};

const TRANSPORTATION_LABELS = {
  CAR: "Car / Rental",
  PUBLIC: "Public Transit",
  PLANE: "Air Travel",
  TRAIN: "Train",
  NONE: "No Preference",
};

export default function ReviewPage() {
  const router = useRouter();
  const { preferences } = useContext(PreferencesContext);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      setLoading(true);
      setMsg("");

      await userApi.createUserPreference(preferences);

      router.push("/dashboard");
    } catch (err) {
      setMsg(err?.message || "Failed to save preferences");
    } finally {
      setLoading(false);
    }
  };

  const formatBudget = () => {
    if (!preferences.budgetMax) return "Not specified";
    const symbol = CURRENCY_SYMBOLS[preferences.currency] || "$";
    return `${symbol}${preferences.budgetMax.toLocaleString()}`;
  };

  const formatList = (items, labelMap) => {
    if (!items || items.length === 0) return "Not specified";
    return items.map(item => labelMap[item] || item).join(", ");
  };

  return (
    <OnboardingLayout 
      step={4} 
      totalSteps={4} 
      title="Review your preferences" 
      subtitle="Almost There"
    >
      <div className="mt-8 space-y-8">
        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
          Take a moment to review your travel preferences. You can always update these later in your settings.
        </p>

        {/* Preferences Summary */}
        <div className="space-y-3">
          {/* Budget */}
          <div className="group p-5 rounded-xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50/30 hover:border-slate-300 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💰</span>
                  <h3 className="font-bold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>Budget</h3>
                </div>
                <div className="ml-9">
                  <p className="text-2xl font-bold text-teal-600 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {formatBudget()}
                  </p>
                  {preferences.budgetMax && (
                    <p className="text-sm text-slate-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Currency: {preferences.currency}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="group p-5 rounded-xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50/30 hover:border-slate-300 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏨</span>
                  <h3 className="font-bold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>Accommodation</h3>
                </div>
                <div className="ml-9">
                  <p className="text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {formatList(preferences.accommodationPreference, ACCOMMODATION_LABELS)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation */}
          <div className="group p-5 rounded-xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50/30 hover:border-slate-300 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🚗</span>
                  <h3 className="font-bold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>Transportation</h3>
                </div>
                <div className="ml-9">
                  <p className="text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {formatList(preferences.transportationPreference, TRANSPORTATION_LABELS)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200">
          <div className="flex gap-3">
            <span className="text-xl">✨</span>
            <div>
              <p className="text-sm font-semibold text-teal-900 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                You're all set!
              </p>
              <p className="text-sm text-teal-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                We'll use these preferences to personalize your travel planning experience.
              </p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {msg && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200">
            <div className="flex gap-3">
              <span className="text-xl">⚠️</span>
              <p className="text-sm text-red-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{msg}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="pt-6">
          <button
            onClick={submit}
            disabled={loading}
            className="group w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed text-white rounded-xl py-4 font-bold text-base shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:shadow-none disabled:translate-y-0 flex items-center justify-center gap-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Saving your preferences...
              </>
            ) : (
              <>
                Complete Setup
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}