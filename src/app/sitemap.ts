 import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// do dynamic sitemap generation here
	// return an array of URLs that should be included in the sitemap
	// each URL should be an object with a `url` property
	// optionally, you can also include `lastmod` and `changefreq` properties
	// example:
	// const destinationsDetail:MetadataRoute.Sitemap = responseData.map((data)=>({
	//   url: `${process.env.NEXT_PUBLIC_BASE_URL}/destination/${data.id}`,
	//   lastModifed: new Date(data.updatedAt).toISOString(),  // optional if have laste data update time response.
	//   changeFrequency: "daily", // optional if have change frequency response.
	//   priorty: 0.8, // optional if have priorty response.
	// }))

	// u can open sitemap.xml in browser to see the result domin.com/sitemap.xml

	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/destination`,
			lastModified: new Date().toISOString(),
		},
	];
}
