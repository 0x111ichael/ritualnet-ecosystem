"use client";

import React from "react";
import { useOnboarding } from "../../context/OnboardingContext";

export default function ProfilePage() {
  const { tasks, progress } = useOnboarding();

  const completed = tasks.filter((t) => t.completed);

  return (
    <div className="app-main">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <p className="subtext mt-1">Your achievements and onboarding history.</p>

      <div className="mt-6 space-y-6">
        <div className="rounded-lg shadow-sm bg-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm subtext">Onboarding progress</div>
              <div className="text-xl font-semibold">{progress}%</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-sm bg-white p-4">
          <h3 className="font-medium">Completed tasks</h3>
          {completed.length ? (
            <ul className="mt-3 space-y-2">
              {completed.map((t) => (
                <li key={t.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{t.title}</div>
                    <div className="subtext text-xs">{t.description}</div>
                  </div>
                  <div className="text-xs subtext">{t.completedAt ? new Date(t.completedAt).toLocaleString() : "-"}</div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="muted">No completed tasks yet.</div>
          )}
        </div>

        <div className="rounded-lg shadow-sm bg-white p-4">
          <h3 className="font-medium">Stats</h3>
          <div className="mt-3 subtext">First NFT: — (placeholder)</div>
          <div className="subtext">Reputation score: — (placeholder)</div>
        </div>
      </div>
    </div>
  );
}
