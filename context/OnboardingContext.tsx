"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type OnboardingTask = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  completedAt?: string | null;
};

type OnboardingContextValue = {
  tasks: OnboardingTask[];
  progress: number; // 0-100
  completeTask: (id: string) => void;
  reset: () => void;
};

const OnboardingContext = createContext<OnboardingContextValue | undefined>(undefined);

const STORAGE_KEY = "ritual_onboarding_v1";

const DEFAULT_TASKS: OnboardingTask[] = [
  { id: "connect_wallet", title: "Connect Wallet", description: "Connect your wallet to get started.", completed: false },
  { id: "explore_oracle", title: "Explore Oracle", description: "Open the Oracle page to learn how it answers.", completed: false },
  { id: "send_oracle_query", title: "Send Oracle Query", description: "Ask the Oracle a question.", completed: false },
  { id: "use_companion", title: "Use Companion", description: "Send a message in the Companion chat.", completed: false },
  { id: "check_reputation", title: "Check Reputation", description: "Run a reputation check.", completed: false },
  { id: "generate_nft", title: "Generate NFT", description: "Generate an artwork in the Generator.", completed: false },
];

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<OnboardingTask[]>(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) return JSON.parse(raw) as OnboardingTask[];
    } catch {
      // ignore
    }
    return DEFAULT_TASKS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // ignore
    }
  }, [tasks]);

  const completeTask = (id: string) => {
    setTasks((prev) => {
      const now = new Date().toISOString();
      const next = prev.map((t) => (t.id === id ? { ...t, completed: true, completedAt: now } : t));
      return next;
    });
  };

  const reset = () =>
    setTasks(DEFAULT_TASKS.map((t) => ({ ...t, completed: false, completedAt: null })));

  const progress = useMemo(() => {
    const total = tasks.length || 1;
    const done = tasks.filter((t) => t.completed).length;
    return Math.round((done / total) * 100);
  }, [tasks]);

  const value = useMemo(() => ({ tasks, progress, completeTask, reset }), [tasks, progress]);

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding must be used within OnboardingProvider");
  return ctx;
}
// OnboardingContext.tsx
// - Holds list of tasks and completion status
// - Provides a function to mark a task complete
// - Wrap the entire app in this provider
