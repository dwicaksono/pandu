"use server";

const API = process.env.API_URL;
export async function getDestinations(
	params: Record<string, string | number | boolean> = {}
) {
	try {
		const queryString = new URLSearchParams(
			params as Record<string, string>
		).toString();
		const response = await fetch(`${API}/itinerary?${queryString}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Failed to fetch destinations: ", error);
	}
}
