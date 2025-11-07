"use client";

import React, { useState } from "react";
import PromptInput from "../../components/PromptInput";
import PromptOutput from "../../components/PromptOutput";

export default function OraclePage() {
	const [response, setResponse] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	async function handleSend(prompt: string) {
		setLoading(true);
		// simulate thinking
		await new Promise((r) => setTimeout(r, 700));
		setResponse(`🔮 Oracle says:\n\n${prompt.split("").reverse().join("")}`);
		setLoading(false);
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
