"use client";

import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import OnboardingLayout from "@/src/components/onboarding/OnboardingLayout";
import { PreferencesContext } from "@/src/context/PreferencesContext";

const CURRENCIES = [
  { code: "USD", label: "USD – United States Dollar", symbol: "$" },
  { code: "AUD", label: "AUD – Australian Dollar", symbol: "A$" },
  { code: "INR", label: "INR – Indian Rupee", symbol: "₹" },
  { code: "EUR", label: "EUR – Euro", symbol: "€" },
];

export default function BudgetPage() {
  const router = useRouter();
  const { preferences, setPreference } = useContext(PreferencesContext);

  const [budget, setBudget] = useState(preferences.budgetMax ?? "");
  const [currency, setCurrency] = useState(preferences.currency ?? "USD");

  const currentCurrency = CURRENCIES.find((c) => c.code === currency);

  const next = () => {
    setPreference("budgetMax", budget === "" ? null : Number(budget));
    setPreference("currency", currency);
    router.push("/preferences/accommodation");
  };

  const skip = () => {
    setPreference("budgetMax", null);
    router.push("/preferences/accommodation");
  };

  return (
    <>
      <OnboardingLayout
        step={1}
        totalSteps={4}
        title="What's your budget for this trip?"
        subtitle="Budget Preferences"
        canGoBack={false}
      >
        <div className="mt-8 space-y-8">
          {/* Description */}
          <p className="budget-description">
            Help us suggest destinations and accommodations that fit your financial goals.
          </p>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Max Budget */}
            <div className="group">
              <label className="budget-label">
                Maximum Budget
              </label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="budget-currency-symbol">
                    {currentCurrency?.symbol}
                  </span>
                </div>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="5,000"
                  className="budget-input"
                />
              </div>
              <p className="budget-helper-text">
                This helps us tailor recommendations to your price range
              </p>
            </div>

            {/* Preferred Currency */}
            <div>
              <label className="budget-label">
                Preferred Currency
              </label>
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="budget-select"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.symbol} {c.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 space-y-3">
            <button
              onClick={next}
              className="budget-button-primary"
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
              className="budget-button-skip"
            >
              Skip for now
            </button>
          </div>
        </div>
      </OnboardingLayout>

      <style jsx>{`
        .budget-description {
          color: #475569;
          line-height: 1.625;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
        }

        .budget-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #334155;
          margin-bottom: 0.75rem;
          font-family: 'Inter', sans-serif;
        }

        .budget-currency-symbol {
          font-size: 1.5rem;
          color: #94a3b8;
          transition: color 0.2s;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
        }

        .group:focus-within .budget-currency-symbol {
          color: #0d9488;
        }

        .budget-input {
          width: 100%;
          padding-left: 4rem;
          padding-right: 1.25rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          font-size: 1.125rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          background-color: white;
          color: #0f172a;
          outline: none;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }

        .budget-input::placeholder {
          color: #cbd5e1;
        }

        .budget-input:focus {
          border-color: #14b8a6;
          ring: 4px;
          ring-color: rgba(20, 184, 166, 0.1);
        }

        .budget-input:hover {
          border-color: #cbd5e1;
        }

        .budget-helper-text {
          margin-top: 0.625rem;
          font-size: 0.875rem;
          color: #64748b;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
        }

        .budget-select {
          width: 100%;
          appearance: none;
          padding: 1rem 1.25rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          background-color: white;
          color: #0f172a;
          outline: none;
          transition: all 0.2s;
          cursor: pointer;
          font-weight: 500;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
        }

        .budget-select:focus {
          border-color: #14b8a6;
          ring: 4px;
          ring-color: rgba(20, 184, 166, 0.1);
        }

        .budget-select:hover {
          border-color: #cbd5e1;
        }

        .budget-button-primary {
          width: 100%;
          background: linear-gradient(to right, #14b8a6, #0d9488);
          color: white;
          border-radius: 0.75rem;
          padding: 1rem;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 10px 15px -3px rgba(20, 184, 166, 0.2);
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
        }

        .budget-button-primary:hover {
          background: linear-gradient(to right, #0d9488, #0f766e);
          box-shadow: 0 20px 25px -5px rgba(20, 184, 166, 0.3);
          transform: translateY(-2px);
        }

        .budget-button-primary:active {
          transform: translateY(0);
        }

        .budget-button-skip {
          width: 100%;
          font-size: 0.875rem;
          font-weight: 500;
          color: #64748b;
          padding: 0.75rem;
          transition: color 0.2s;
          border-radius: 0.75rem;
          font-family: 'Inter', sans-serif;
        }

        .budget-button-skip:hover {
          color: #334155;
          background-color: #f8fafc;
        }
      `}</style>
    </>
  );
}