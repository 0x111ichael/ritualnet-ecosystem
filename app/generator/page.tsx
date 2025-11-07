// This page is part of onboarding. 
// When user completes the main action of the page (e.g., asks a question in Oracle),
// it should mark the corresponding task as complete in OnboardingTasks.

"use client";

import React, { useState } from "react";
import Image from "next/image";
import PromptInput from "../../components/PromptInput";
import PromptOutput from "../../components/PromptOutput";
import { useOnboarding } from "../../context/OnboardingContext";

export default function GeneratorPage() {
	const [imageSrc, setImageSrc] = useState<string | null>(null);
	const [generatedText, setGeneratedText] = useState<string | null>(null);
	const [minting, setMinting] = useState(false);
    const { completeTask } = useOnboarding();

	async function handleGenerate(prompt: string) {
		// Simulate generation
		await new Promise((r) => setTimeout(r, 800));
		setGeneratedText(prompt);
		setImageSrc("/file.svg");

		// onboarding: mark generation task complete
		completeTask("generate_nft");
	}

	async function handleMint() {
		setMinting(true);
		await new Promise((r) => setTimeout(r, 900));
		setMinting(false);
		alert("Minted (simulated)");
	}

	return (
		<div className="app-main">
			<h1 className="text-2xl font-semibold">Generator</h1>
			<p className="subtext mt-1">Describe an image, generate a placeholder, then mint.</p>

			<div className="mt-6 space-y-4">
				<PromptInput onSend={handleGenerate} placeholder="Describe the image to generate…" />

				<div>
					{imageSrc ? (
						<div>
							  <Image src={imageSrc} alt="generated placeholder" className="rounded-md" width={700} height={420} />
							<div className="mt-3 flex items-center gap-3">
								<button className="send-button" onClick={handleMint} disabled={minting}>
									{minting ? "Minting…" : "Mint"}
								</button>
								<div className="subtext">{generatedText}</div>
							</div>
						</div>
					) : (
						<PromptOutput>
							<div className="muted">No image yet — generate one by describing it above.</div>
						</PromptOutput>
					)}
				</div>
			</div>
		</div>
	);
}
