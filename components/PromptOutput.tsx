"use client";

import React from "react";

type ChatMessage = { id: string; text: string; from?: "me" | "them" };

export function OutputBlock({ children }: { children: React.ReactNode }) {
	return (
		<div className="output-block fade-in">
			<div className="prose prose-sm">
				<div className="mono">{children}</div>
			</div>
		</div>
	);
}

export function ChatView({ messages }: { messages: ChatMessage[] }) {
	return (
		<div className="space-y-3">
			{messages.map((m) => (
				<div
					key={m.id}
					className={`chat-bubble fade-in ${m.from === "me" ? "bubble-me" : "bubble-other"}`}
					aria-live="polite"
				>
					<div style={{ whiteSpace: "pre-wrap" }}>{m.text}</div>
				</div>
			))}
		</div>
	);
}

export default function PromptOutput({ children }: { children?: React.ReactNode }) {
	return (
		<div className="output-block fade-in">
			<div style={{ whiteSpace: "pre-wrap" }}>{children}</div>
		</div>
	);
}