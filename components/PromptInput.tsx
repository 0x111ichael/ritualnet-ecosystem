"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
	placeholder?: string;
	onSend?: (text: string) => Promise<void> | void;
	sendLabel?: string;
};

export default function PromptInput({ placeholder = "Ask something…", onSend, sendLabel = "Send" }: Props) {
	const [text, setText] = useState("");
	const [state, setState] = useState<"idle" | "thinking" | "done">("idle");
	const taRef = useRef<HTMLTextAreaElement | null>(null);

		function autoResize() {
			const ta = taRef.current;
			if (!ta) return;
			ta.style.height = "auto";
			const max = 160; // pixels (approx 4 lines)
			const next = Math.min(ta.scrollHeight, max);
			ta.style.height = `${next}px`;
		}

		useEffect(() => {
			autoResize();
		}, [text]);


	async function doSend() {
		const trimmed = text.trim();
		if (!trimmed || !onSend) return;
		setState("thinking");
		try {
			await onSend(trimmed);
			setState("done");
			setText("");
			// show done briefly
			setTimeout(() => setState("idle"), 700);
			} catch (err) {
				// swallow; caller handles errors
				// keep state idle so the user can retry
				setState("idle");
				console.error(err);
			}
	}

	function onKeyDown(e: React.KeyboardEvent) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			void doSend();
		}
	}

	return (
		<div className="prompt-input">
			<div className="flex items-start gap-3">
				<textarea
					ref={taRef}
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={onKeyDown}
					placeholder={placeholder}
					className="prompt-textarea"
					rows={1}
					aria-label="Message input"
				/>
				<div className="shrink-0">
					<button
						className="send-button"
						onClick={() => void doSend()}
						aria-live="polite"
						data-state={state}
						title={sendLabel}
					>
						{state === "thinking" ? (
							<span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
								<svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="12" cy="12" r="10" stroke="white" strokeOpacity="0.2" strokeWidth="4" />
									<path d="M22 12a10 10 0 00-10-10" stroke="white" strokeWidth="4" strokeLinecap="round" />
								</svg>
								Thinking
							</span>
						) : state === "done" ? (
							"Done"
						) : (
							sendLabel
						)}
					</button>
				</div>
			</div>
			<div className="subtext mt-2">Press Enter to send, Shift+Enter for newline</div>
		</div>
	);
}