import { getDestinations } from "@/actions/getDestinations";
import heroImage from "../../public/images/background.webp";
import {
	Hero,
	BeyondPremium,
	Discover,
	Separator,
	Destination,
	Footages,
} from "@/components/home";

export default async function Home() {
	const { data } = await getDestinations();
	return (
		<main className="">
			<Hero
				src={heroImage}
				title="Premium Travel"
				subtitle="Beyond Expectation"
				description="	Experience the finest that Indonesia has to offer with our curated
					selection of premium trips, ensuring comfort every step of the way"
				withButton
				buttonTitle="Take Me There"
				link="#destination"
			/>
			<BeyondPremium />
			<Discover />
			<Separator />
			<Destination dataSource={data} />
			<Footages />
		</main>
	);
}
