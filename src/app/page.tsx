import heroImage from "../../public/images/background.webp";
import {
	Hero,
	BeyondPremium,
	Discover,
	Separator,
	Destination,
	Footages,
	PandooinWeb,
	Article,
} from "@/components/home";

export default function Home() {
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
			<Destination />
			<Footages />
			<PandooinWeb />
			<Article />
		</main>
	);
}
