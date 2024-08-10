export const formatCurrency = (amount: string): string => {
	const numericAmount = parseFloat(amount);
	if (isNaN(numericAmount)) {
		throw new Error("Invalid amount");
	}
	return `IDR ${numericAmount.toLocaleString("id-ID", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	})}`;
};
