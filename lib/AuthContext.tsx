"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, setToken, removeToken, isAuthenticated, getUserFromToken, fetchWithAuth } from './auth';

type AuthContextType = {
  user: { name?: string; email?: string } | null;
  loading: boolean;
  error?: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (payload: { name?: string; email: string; password: string }) => Promise<boolean>;
  logout: () => void;
  fetchWithAuth: typeof fetchWithAuth;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // initialize from token if present
    const init = () => {
      if (isAuthenticated()) {
        setUser(getUserFromToken());
      } else {
        setUser(null);
      }
      setLoading(false);
    };
    init();
  }, []);

  async function login(email: string, password: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.message || 'Login failed');
        setLoading(false);
        return false;
      }

      const data = await res.json();
      if (data?.token) {
        setToken(data.token);
        setUser(getUserFromToken());
        setLoading(false);
        router.push('/dashboard');
        return true;
      }

      setError('No token received');
      setLoading(false);
      return false;
    } catch (e: any) {
      setError(e?.message || 'Login failed');
      setLoading(false);
      return false;
    }
  }

  async function register(payload: { name?: string; email: string; password: string }) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.message || 'Registration failed');
        setLoading(false);
        return false;
      }

      const data = await res.json();
      if (data?.token) {
        setToken(data.token);
        setUser(getUserFromToken());
        setLoading(false);
        router.push('/dashboard');
        return true;
      }

      setError('No token received');
      setLoading(false);
      return false;
    } catch (e: any) {
      setError(e?.message || 'Registration failed');
      setLoading(false);
      return false;
    }
  }

  function logout() {
    removeToken();
    setUser(null);
    router.push('/');
  }

  const value: AuthContextType = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    fetchWithAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

export default AuthContext;
