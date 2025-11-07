// This page is part of onboarding. 
// When user completes the main action of the page (e.g., asks a question in Oracle),
// it should mark the corresponding task as complete in OnboardingTasks.

"use client";

import React, { useState } from "react";
import PromptInput from "../../components/PromptInput";
import { ChatView } from "../../components/PromptOutput";
import { useOnboarding } from "../../context/OnboardingContext";

type Msg = { id: string; text: string; from: "me" | "them" };

export default function CompanionPage() {
	const [messages, setMessages] = useState<Msg[]>([
		{ id: "1", text: "Hey — I'm your companion. Ask me anything.", from: "them" },
	]);

    const { completeTask } = useOnboarding();

	async function handleSend(text: string) {
		const me: Msg = { id: String(Date.now()), text, from: "me" };
		setMessages((s) => [...s, me]);
		// simulate reply
		await new Promise((r) => setTimeout(r, 600));
		const reply: Msg = { id: String(Date.now() + 1), text: `You said: ${text}`, from: "them" };
		setMessages((s) => [...s, reply]);

		// onboarding: mark companion used
		completeTask("use_companion");
	}

	return (
		<div className="app-main">
			<h1 className="text-2xl font-semibold">Companion</h1>
			<p className="subtext mt-1">A chat-like companion. No avatars, speech in bubbles.</p>

			<div className="mt-6 space-y-4">
				<PromptInput onSend={handleSend} placeholder="Say something to your companion…" />

				<div>
					<ChatView messages={messages} />
				</div>
			</div>
		</div>
	);
}
