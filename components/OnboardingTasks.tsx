"use client";

import React from "react";
import { useOnboarding } from "../context/OnboardingContext";

export default function OnboardingTasks() {
  const { tasks, progress } = useOnboarding();

  return (
    <aside className="mt-4 mb-6">
      <div className="p-3 rounded-md bg-white shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm subtext">Onboarding</div>
          <div className="text-sm font-semibold" aria-hidden>
            {progress}%
          </div>
        </div>

        <div className="w-full bg-[rgba(0,0,0,0.05)] h-2 rounded overflow-hidden">
          <div
            className="h-2 bg-[#5B4DF4]"
            style={{ width: `${progress}%`, transition: "width 300ms ease" }}
          />
        </div>

        <ul className="mt-3 space-y-2">
          {tasks.map((t) => (
            <li
              key={t.id}
              className={`flex items-start gap-3 p-2 rounded ${t.completed ? "opacity-80 bg-[rgba(91,77,244,0.04)] fade-in" : ""}`}
            >
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.06)]">
                {t.completed ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="#5B4DF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-[rgba(0,0,0,0.08)]" />
                )}
              </div>

              <div>
                <div className="text-sm font-medium">{t.title}</div>
                <div className="subtext text-xs">{t.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
 