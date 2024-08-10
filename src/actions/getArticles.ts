"use server";

const API = process.env.API_URL;
export async function getArticles() {
	try {
		const response = await fetch(`${API}/article`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Failed to fetch article: ", error);
	}
}
