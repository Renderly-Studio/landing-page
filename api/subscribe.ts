import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
	// Only allow POST requests
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	try {
		const { email } = req.body;

		// Validate email
		if (!email || typeof email !== "string") {
			return res.status(400).json({ error: "Email is required" });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ error: "Invalid email format" });
		}

		// Initialize Supabase client
		const supabaseUrl = process.env.SUPABASE_URL;
		const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

		if (!supabaseUrl || !supabaseKey) {
			console.error("Supabase credentials not configured");
			return res.status(500).json({ error: "Server configuration error" });
		}

		const supabase = createClient(supabaseUrl, supabaseKey);

		// Check if email already exists
		const { data: existingSubscriber } = await supabase
			.from("subscribers")
			.select("email")
			.eq("email", email.toLowerCase())
			.single();

		if (existingSubscriber) {
			return res.status(400).json({ error: "This email is already subscribed" });
		}

		// Insert new subscriber
		const { error } = await supabase
			.from("subscribers")
			.insert([
				{
					email: email.toLowerCase(),
					subscribed_at: new Date().toISOString(),
				},
			])
			.select();

		if (error) {
			console.error("Supabase insert error:", error);
			return res.status(500).json({ error: "Failed to subscribe. Please try again." });
		}

		return res.status(200).json({
			success: true,
			message: "Successfully subscribed!",
			email: email,
		});
	} catch (error) {
		console.error("Subscription error:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}
