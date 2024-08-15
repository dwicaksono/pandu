import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/admin", "/private/"], // disallow admin and private routes you can add more this exclude from search engine crawler
		},
		sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
	};
}

//you can open robots.txt in browser to see the result domin.com/robots.txt
//this optional if you want to add robots.txt
//if you don't want to add robots.txt you can delete this file

//at page disallow add metadata eith atrribute object robot:{index:false,follow:false} to exclude from search engine crawler, note: this optional
