"use server";

const API = process.env.API_URL;
export async function getDestinations() {
	try {
		const response = await fetch(`${API}/itinerary?highlight=true`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Failed to fetch destinations: ", error);
	}
}
