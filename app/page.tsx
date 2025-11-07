import Link from "next/link";

export default function Home() {
	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold mb-4">Welcome to Ritual</h1>
			<p className="text-neutral-600 dark:text-neutral-300 mb-6">
				Your gateway to decentralized rituals and digital artifacts.
			</p>
      
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-shadow">
					<h2 className="text-xl font-semibold mb-2">🔮 Oracle</h2>
					<p className="text-neutral-600 dark:text-neutral-400">Consult the decentralized oracle for wisdom and guidance.</p>
					<Link href="/oracle" className="mt-4 text-[#5B4DF4] hover:underline block">Open Oracle →</Link>
				</div>
        
				<div className="p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-shadow">
					<h2 className="text-xl font-semibold mb-2">💬 Companion</h2>
					<p className="text-neutral-600 dark:text-neutral-400">Your personal AI companion for spiritual growth.</p>
					<Link href="/companion" className="mt-4 text-[#5B4DF4] hover:underline block">Meet Companion →</Link>
				</div>
        
				<div className="p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-shadow">
					<h2 className="text-xl font-semibold mb-2">⭐ Reputation</h2>
					<p className="text-neutral-600 dark:text-neutral-400">Track your influence and standing in the community.</p>
					<Link href="/reputation" className="mt-4 text-[#5B4DF4] hover:underline block">View Reputation →</Link>
				</div>
        
				<div className="p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-shadow">
					<h2 className="text-xl font-semibold mb-2">🎨 Generator</h2>
					<p className="text-neutral-600 dark:text-neutral-400">Create unique digital artifacts and rituals.</p>
					<Link href="/generator" className="mt-4 text-[#5B4DF4] hover:underline block">Start Creating →</Link>
				</div>
			</div>
		</div>
	);

}
