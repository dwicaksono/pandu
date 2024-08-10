/**
 * Helper function to convert number of days to a string in the format "X DAYS Y NIGHTS".
 * @param {number} days - The number of days.
 * @returns {string} - The formatted string.
 */
export const formatDaysAndNights = (days: number): string => {
	if (days < 1) {
		throw new Error("Number of days must be at least 1");
	}
	const nights = days - 1;
	return `${days} DAYS ${nights} NIGHTS`;
};
