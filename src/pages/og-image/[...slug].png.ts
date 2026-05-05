import { Resvg } from "@resvg/resvg-js";
import type { APIContext, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";
import compassSvgRaw from "@/assets/img/logo/svg/mark.svg?raw";
import Newsreader400 from "@/assets/fonts/newsreader-latin-400-normal.woff";
import Newsreader400Italic from "@/assets/fonts/newsreader-latin-400-italic.woff";
import Newsreader500 from "@/assets/fonts/newsreader-latin-500-normal.woff";
import RobotoMonoBold from "@/assets/roboto-mono-700.ttf";
import RobotoMono from "@/assets/roboto-mono-regular.ttf";
import { getAllPosts } from "@/data/post";
import { ui } from "@/i18n/ui";
import { ogMarkup, type OgFields } from "./_ogMarkup";

const compassDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(
	compassSvgRaw.replace('stroke="currentColor"', 'stroke="#1f1c19"'),
)}`;

const ogOptions: SatoriOptions = {
	fonts: [
		{ data: Buffer.from(Newsreader400), name: "Newsreader", style: "normal", weight: 400 },
		{ data: Buffer.from(Newsreader500), name: "Newsreader", style: "normal", weight: 500 },
		{ data: Buffer.from(Newsreader400Italic), name: "Newsreader", style: "italic", weight: 400 },
		{ data: Buffer.from(RobotoMono), name: "Roboto Mono", style: "normal", weight: 400 },
		{ data: Buffer.from(RobotoMonoBold), name: "Roboto Mono", style: "normal", weight: 700 },
	],
	height: 630,
	width: 1200,
};

type Props = InferGetStaticPropsType<typeof getStaticPaths> & OgFields;

export async function GET(context: APIContext) {
	const fields = context.props as Props;
	const svg = await satori(ogMarkup(fields, compassDataUri), ogOptions);
	const png = new Uint8Array(new Resvg(svg).render().asPng());
	return new Response(png, {
		headers: {
			"Cache-Control": "public, max-age=31536000, immutable",
			"Content-Type": "image/png",
		},
	});
}

// Build-time OG generation. Each entry produces /og-image/<slug>.png. Site
// pages use the brand head treatment (stacked Jose / Barbosa); blog posts use
// the post head treatment (post title at an auto-fit size). Posts with an
// explicit ogImage in frontmatter are skipped.
export async function getStaticPaths() {
	const t = ui.en;
	const posts = await getAllPosts();

	const sitePages: Array<{ slug: string } & OgFields> = [
		{
			slug: "default",
			variant: "brand",
			chapterRoman: "I",
			chapterTitle: "Hailing",
			coords: "23°33′S, 46°38′W",
			standfirst:
				"Engineering Director. Fifteen years scaling teams across Thailand and Brazil. Now founding AI products.",
			footRight: "Vol. MMXXVI, No. 01",
		},
		{
			slug: "home",
			variant: "brand",
			chapterRoman: "I",
			chapterTitle: "Hailing",
			coords: "23°33′S, 46°38′W",
			standfirst:
				"Engineering Director. Fifteen years scaling teams across Thailand and Brazil. Now founding AI products.",
			footRight: "Vol. MMXXVI, No. 01",
		},
		{
			slug: "about",
			variant: "brand",
			chapterRoman: "II",
			chapterTitle: "Captain",
			coords: "8°03′S, 34°53′W",
			standfirst:
				"Engineering Director who scaled teams across Thailand and Brazil. Now founding AI products from Brazil.",
			footRight: "Vol. MMXXVI, No. 02",
		},
		{
			slug: "portfolio",
			variant: "brand",
			chapterRoman: "III",
			chapterTitle: "Voyages",
			coords: "18°47′N, 98°59′E",
			standfirst: t.portfolio.lead,
			footRight: "Vol. MMXXVI, No. 03",
		},
		{
			slug: "cv",
			variant: "brand",
			chapterRoman: "IV",
			chapterTitle: "Service Record",
			coords: "13°45′N, 100°30′E",
			standfirst: t.cv.lead,
			footRight: "Vol. MMXXVI, No. 04",
		},
		{
			slug: "writing",
			variant: "brand",
			chapterRoman: "V",
			chapterTitle: "Logbook",
			coords: "59°56′N, 30°19′E",
			standfirst: t.writing.lead,
			footRight: "Vol. MMXXVI, No. 05",
		},
		{
			slug: "contact",
			variant: "brand",
			chapterRoman: "VI",
			chapterTitle: "Correspondence",
			coords: "31°14′N, 121°28′E",
			standfirst:
				"Drop a note. Interested in consulting, AI training, and conversations about engineering at scale.",
			footRight: "Vol. MMXXVI, No. 06",
		},
		{
			slug: "tags",
			variant: "brand",
			chapterRoman: "VII",
			chapterTitle: "Index of Topics",
			coords: "23°33′S, 46°38′W",
			standfirst: "Every topic I've written under, with the count of entries filed against each.",
			footRight: "Vol. MMXXVI, No. 07",
		},
	];

	const postEntries = posts
		.values()
		.filter(({ data }) => !data.ogImage)
		.map((post) => ({
			params: { slug: post.id },
			props: {
				variant: "post" as const,
				chapterRoman: "V",
				chapterTitle: "Logbook",
				coords: post.data.publishDate.toISOString().slice(0, 10),
				title: post.data.title,
				standfirst: post.data.description,
				footRight: "Vol. MMXXVI, Logbook",
			},
		}))
		.toArray();

	return [
		...sitePages.map(({ slug, ...props }) => ({ params: { slug }, props })),
		...postEntries,
	];
}
