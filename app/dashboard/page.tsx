"use client";

import React from "react";
import { useOnboarding } from "../../context/OnboardingContext";
import OnboardingTasks from "../../components/OnboardingTasks";
import Link from "next/link";

export default function DashboardPage() {
  const { tasks, progress } = useOnboarding();

  const next = tasks.find((t) => !t.completed);

  return (
    <div className="app-main">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="subtext mt-1">Your onboarding hub — progress, tasks, and recent activity.</p>

      <div className="mt-6 space-y-6">
        <div className="rounded-lg shadow-sm bg-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm subtext">Onboarding progress</div>
              <div className="text-xl font-semibold">{progress}% complete</div>
            </div>
            <div>
              {next ? (
                <Link href={getTaskHref(next.id)} className="send-button">
                  Next recommended task: {next.title}
                </Link>
              ) : (
                <div className="text-sm subtext">All tasks complete</div>
              )}
            </div>
          </div>

          <div className="mt-4 w-full bg-[rgba(0,0,0,0.05)] h-2 rounded overflow-hidden">
            <div className="h-2 bg-[#5B4DF4]" style={{ width: `${progress}%`, transition: "width 300ms ease" }} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg shadow-sm bg-white p-4">
            <h3 className="font-medium">Onboarding Tasks</h3>
            <OnboardingTasks />
          </div>

          <div className="rounded-lg shadow-sm bg-white p-4">
            <h3 className="font-medium">Latest updates</h3>
            <div className="mt-3 subtext">No alerts yet — this is a placeholder for ecosystem updates.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getTaskHref(id: string) {
  switch (id) {
    case "connect_wallet":
      return "/profile";
    case "explore_oracle":
    case "send_oracle_query":
      return "/oracle";
    case "use_companion":
      return "/companion";
    case "check_reputation":
      return "/reputation";
    case "generate_nft":
      return "/generator";
    default:
      return "/dashboard";
  }
}
