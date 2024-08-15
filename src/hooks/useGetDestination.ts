import { getDestinations } from "@/actions/getDestinations";
import { useQuery } from "@tanstack/react-query";

export const useGetDestination = (
	params: Record<string, string | number | boolean> = {}
) => {
	return useQuery({
		queryKey: ["destination", params],
		queryFn: () => getDestinations(params),
	});
};
