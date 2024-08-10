import { getArticles } from "@/actions/getArticles";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Article = async () => {
	const { data } = await getArticles();

	const article = data[0];
	const articles = data.slice(1);
	return (
		<div
			className="px-4 lg:py-[72px] w-full max-w-7xl mx-auto flex flex-col space-y-6"
			id="article">
			<div id="header" className="flex flex-col space-y-2">
				<h1 className="font-unbounded text-[22px] lg:text-4xl font-bold text-dark-aquaman">
					Articles
				</h1>
				<p className="text-base lg:text-2xl text-dark-aquaman">
					Our curated writings, offering something for every reader.
				</p>
			</div>
			<div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
				<Link
					key={article.id}
					href={`https://pandooin.com/blog/article/${article.slug}`}
					className="w-full flex flex-col lg:row-span-2 lg:col-span-2">
					<div className="relative w-full h-full aspect-video overflow-hidden">
						<Image
							width={600}
							height={400}
							alt={article.slug}
							src={article.featured_image}
							sizes="100vw"
							className="object-cover object-center grayscale hover:grayscale-0 transition-all ease-in-out duration-300 absolute inset-0 w-full h-full"
						/>
					</div>
					<div className="w-full p-6 lg:p-4 bg-dark-aquaman flex flex-col space-y-2">
						<h2
							className="m-0 text-vista-white text-base font-bold line-clamp-2"
							title="7 Best Places to Dive in Indonesia: From Bali to Wakatobi">
							7 Best Places to Dive in Indonesia: From Bali to Wakatobi
						</h2>
					</div>
				</Link>

				{articles.map((article: any) => (
					<Link
						key={article.id}
						href={`https://pandooin.com/blog/article/${article.slug}`}
						className="w-full flex flex-col">
						<div className="relative w-full h-full aspect-video overflow-hidden">
							<Image
								width={600}
								height={400}
								alt={article.slug}
								src={article.featured_image}
								sizes="100vw"
								className="object-cover object-center grayscale hover:grayscale-0 transition-all ease-in-out duration-300 absolute inset-0 w-full h-full"
							/>
						</div>
						<div className="w-full p-6 lg:p-4 bg-dark-aquaman flex flex-col space-y-2">
							<h2
								className="m-0 text-vista-white text-base font-bold line-clamp-2"
								title="7 Best Places to Dive in Indonesia: From Bali to Wakatobi">
								7 Best Places to Dive in Indonesia: From Bali to Wakatobi
							</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Article;
