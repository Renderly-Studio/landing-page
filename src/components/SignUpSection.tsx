import React, { useState } from "react";

const SignUpSection: React.FC = () => {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		try {
			const response = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await response.json();

			if (response.ok) {
				setStatus("success");
				setMessage("Thanks for subscribing! We'll notify you at launch.");
				setEmail("");
			} else {
				setStatus("error");
				setMessage(data.error || "Something went wrong. Please try again.");
			}
		} catch (error) {
			console.error("Fetch error:", error);
			setStatus("error");
			setMessage("Failed to subscribe. Please try again later.");
		}
	};

	return (
		<div className="w-full bg-white text-black py-16 md:py-24 px-6 md:px-12">
			<div className="max-w-4xl mx-auto text-center">
				{/* Heading */}
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-black  mb-4">Be a model anytime!</h2>

				{/* Description of the tool */}
				<p className="text-lg md:text-xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed">
					Renderly Studio is an AI-powered creative platform that transforms your ideas into stunning visual content.
					Generate professional-quality portraits, product shots, and artistic renders with just a text prompt. Perfect
					for creators, marketers, and anyone looking to bring their vision to life instantly.
				</p>

				{/* Subscription CTA */}
				<p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
					Get notified when we launch. Be among the first to experience the future of AI-generated content.
				</p>
				{/* Email Form */}
				<form
					onSubmit={handleSubmit}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
				>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						required
						disabled={status === "loading" || status === "success"}
						className="w-full sm:flex-1 px-6 py-4 text-lg border-2 border-black rounded-none focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
					/>
					<button
						type="submit"
						disabled={status === "loading" || status === "success"}
						className="w-full sm:w-auto px-8 py-4 text-lg font-medium bg-black text-white hover:bg-gray-900 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-none cursor-pointer"
					>
						{status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Notify Me"}
					</button>
				</form>

				{/* Status Message */}
				{message && (
					<p className={`mt-4 text-sm md:text-base ${status === "success" ? "text-green-600" : "text-red-600"}`}>
						{message}
					</p>
				)}

				{/* Footer text */}
				<p className="mt-8 text-sm text-gray-500">No spam, ever. Unsubscribe anytime.</p>
			</div>
		</div>
	);
};

export default SignUpSection;
