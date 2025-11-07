"use client";

import React, { useState } from "react";

export default function ReputationPage() {
	const [score, setScore] = useState<number | null>(null);
	const [loading, setLoading] = useState(false);

	function interpret(n: number) {
		if (n >= 80) return "Excellent — trusted across the community.";
		if (n >= 60) return "Good — reliable most of the time.";
		if (n >= 40) return "Mixed — some concerns.";
		return "Low — proceed with caution.";
	}

	async function check() {
		setLoading(true);
		await new Promise((r) => setTimeout(r, 600));
		const val = Math.floor(Math.random() * 101);
		setScore(val);
		setLoading(false);
	}

	return (
		<div className="app-main">
			<h1 className="text-2xl font-semibold">Reputation</h1>
			<p className="subtext mt-1">Quick reputation check with score and short interpretation.</p>

			<div className="mt-6 flex items-center gap-6">
				<button className="send-button" onClick={check} aria-busy={loading}>
					{loading ? "Checking…" : "Check Reputation"}
				</button>

				<div>
					{score !== null ? (
						<div>
							<div className="score-pill">{score}</div>
							<div className="mt-2 subtext">{interpret(score)}</div>
						</div>
					) : (
						<div className="muted">No score yet</div>
					)}
				</div>
			</div>
		</div>
	);
}
