// This page is part of onboarding. 
// When user completes the main action of the page (e.g., asks a question in Oracle),
// it should mark the corresponding task as complete in OnboardingTasks.


"use client";

import React, { useState } from "react";
import PromptInput from "../../components/PromptInput";
import PromptOutput from "../../components/PromptOutput";
import { useEffect } from "react";
import { useOnboarding } from "../../context/OnboardingContext";

export default function OraclePage() {
	const [response, setResponse] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
		const { completeTask } = useOnboarding();

		useEffect(() => {
			// mark that the user explored the Oracle page
			completeTask("explore_oracle");
		}, [completeTask]);

	async function handleSend(prompt: string) {
		setLoading(true);
		// simulate thinking
		await new Promise((r) => setTimeout(r, 700));
		setResponse(`🔮 Oracle says:\n\n${prompt.split("").reverse().join("")}`);
		setLoading(false);

		// onboarding: mark that user sent an oracle query
		completeTask("send_oracle_query");
	}

	return (
		<div className="app-main">
			<h1 className="text-2xl font-semibold">Oracle</h1>
			<p className="subtext mt-1">Ask a question and receive a single block answer.</p>

			<div className="mt-6">
				<PromptInput onSend={handleSend} placeholder="Ask the oracle…" sendLabel={loading ? "Thinking" : "Send"} />

				{response ? (
					<div className="mt-4">
						<PromptOutput>{response}</PromptOutput>
					</div>
						) : (
							<div className="mt-4 muted">No answer yet — ask something to see the oracle&apos;s response.</div>
				)}
			</div>
		</div>
	);
}
