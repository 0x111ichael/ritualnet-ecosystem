import Link from "next/link";

export default function Home() {
	return (
		<main className="app-main">
			<h1 className="text-3xl font-semibold">Ritual DApp</h1>
			<p className="subtext mt-2">Welcome — pick a tool to explore the UI.</p>

			<nav className="mt-6 space-y-2">
				<Link href="/oracle" className="block text-[#5B4DF4]">Oracle</Link>
				<Link href="/companion" className="block text-[#5B4DF4]">Companion</Link>
				<Link href="/reputation" className="block text-[#5B4DF4]">Reputation</Link>
				<Link href="/generator" className="block text-[#5B4DF4]">Generator</Link>
			</nav>
		</main>
	);
}
