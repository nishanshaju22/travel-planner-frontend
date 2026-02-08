"use client";
import { createContext, useState } from "react";

export const PreferencesContext = createContext(null);

export const PreferencesProvider = ({ children }) => {
    const [preferences, setPreferences] = useState({
        profilePic: null,
        budgetMax: null,
        currency: "USD",
        accommodationPreference: [],
        transportationPreference: [],
        dietaryRestriction: [],
        accessibilityNeeds: [],
    });

    const setPreference = (key, value) => {
        setPreferences((prev => ({ ...prev, [key]: value})));
    };

    const resetPreferences = () => {
        setPreferences({
            profilePic: null,
            budgetMax: null,
            currency: "USD",
            accommodationPreference: [],
            transportationPreference: [],
            dietaryRestriction: [],
            accessibilityNeeds: [],
        });
    };

    const value = {
        preferences,
        setPreference,
        resetPreferences,
    };

    return (
        <PreferencesContext.Provider value = {value}>
            {children}
        </PreferencesContext.Provider>
    );
};