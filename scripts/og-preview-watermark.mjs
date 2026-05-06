// OG preview variant: compass treated as a watermark.
// Oversized and low-opacity behind the type, bleeding off the right edge.
// Run with:  pnpm node scripts/og-preview-watermark.mjs
//
// Output:    og-preview-watermark.png   (project root)

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const fontsourceNewsreader = resolve(
	root,
	"node_modules/.pnpm/@fontsource+newsreader@5.2.10/node_modules/@fontsource/newsreader/files",
);
const newsreader400 = readFileSync(`${fontsourceNewsreader}/newsreader-latin-400-normal.woff`);
const newsreader500 = readFileSync(`${fontsourceNewsreader}/newsreader-latin-500-normal.woff`);
const newsreader400Italic = readFileSync(`${fontsourceNewsreader}/newsreader-latin-400-italic.woff`);
const robotoMono = readFileSync(resolve(root, "src/assets/roboto-mono-regular.ttf"));
const robotoMonoBold = readFileSync(resolve(root, "src/assets/roboto-mono-700.ttf"));

const compassSvg = readFileSync(resolve(root, "src/assets/img/logo/svg/mark.svg"), "utf-8");
const compassDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(
	compassSvg.replace('stroke="currentColor"', 'stroke="#1f1c19"'),
)}`;

const c = {
	bg: "#f4ead9",
	ink: "#1f1c19",
	muted: "#7d756c",
	rule: "rgba(31, 28, 25, 0.18)",
	accent: "#b88a30",
};

const card = {
	chapterRoman: "I",
	chapterTitle: "Hailing",
	coords: "23°33′S, 46°38′W",
	nameLine1: "Jose",
	nameLine2: "Barbosa",
	standfirst:
		"Engineering Director. Fifteen years scaling teams across Thailand and Brazil. Now founding AI products.",
	footLeft: "josebarbosa.dev",
	footRight: "Vol. MMXXVI, No. 01",
};

const t = {
	type: "div",
	props: {
		style: {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			height: "100%",
			background: c.bg,
			color: c.ink,
			padding: "48px 72px",
			fontFamily: "Newsreader",
			position: "relative",
		},
		children: [
			// Watermark compass (absolutely positioned, bleeds off right edge)
			{
				type: "div",
				props: {
					style: {
						display: "flex",
						position: "absolute",
						top: -120,
						right: -200,
						width: 820,
						height: 820,
						opacity: 0.1,
					},
					children: [
						{
							type: "img",
							props: { src: compassDataUri, width: 820, height: 820 },
						},
					],
				},
			},

			// Top eyebrow row (chapter | volume)
			{
				type: "div",
				props: {
					style: {
						display: "flex",
						alignItems: "baseline",
						justifyContent: "space-between",
						fontFamily: "Roboto Mono",
						fontSize: 16,
						letterSpacing: 4,
						textTransform: "uppercase",
						color: c.muted,
					},
					children: [
						{
							type: "div",
							props: {
								style: { display: "flex", alignItems: "baseline" },
								children: [
									{
										type: "span",
										props: {
											style: {
												color: c.accent,
												fontWeight: 700,
												marginRight: 14,
											},
											children: card.chapterRoman,
										},
									},
									{ type: "span", props: { children: card.chapterTitle } },
								],
							},
						},
						{ type: "span", props: { children: card.coords } },
					],
				},
			},

			// Body (full-width type column over the watermark)
			{
				type: "div",
				props: {
					style: {
						display: "flex",
						flex: 1,
						alignItems: "center",
						paddingTop: 24,
					},
					children: [
						{
							type: "div",
							props: {
								style: {
									display: "flex",
									flexDirection: "column",
									flex: 1,
								},
								children: [
									{
										type: "div",
										props: {
											style: {
												display: "flex",
												fontWeight: 500,
												fontSize: 176,
												lineHeight: 0.92,
												letterSpacing: -4,
											},
											children: card.nameLine1,
										},
									},
									{
										type: "div",
										props: {
											style: {
												display: "flex",
												fontStyle: "italic",
												fontWeight: 400,
												fontSize: 176,
												lineHeight: 0.92,
												letterSpacing: -4,
												color: c.accent,
											},
											children: card.nameLine2,
										},
									},
									{
										type: "div",
										props: {
											style: {
												display: "flex",
												width: 64,
												height: 1,
												background: c.accent,
												marginTop: 28,
												marginBottom: 18,
											},
										},
									},
									{
										type: "div",
										props: {
											style: {
												display: "flex",
												fontStyle: "italic",
												fontSize: 24,
												lineHeight: 1.4,
												color: c.ink,
												maxWidth: 540,
											},
											children: card.standfirst,
										},
									},
								],
							},
						},
					],
				},
			},

			// Footer rule
			{
				type: "div",
				props: {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingTop: 14,
						borderTop: `1px solid ${c.ink}`,
						fontFamily: "Roboto Mono",
						fontSize: 16,
						letterSpacing: 4,
						textTransform: "uppercase",
						color: c.muted,
					},
					children: [
						{
							type: "span",
							props: { style: { color: c.ink, fontWeight: 600 }, children: card.footLeft },
						},
						{ type: "span", props: { children: card.footRight } },
					],
				},
			},
		],
	},
};

const svg = await satori(t, {
	width: 1200,
	height: 630,
	fonts: [
		{ name: "Newsreader", data: newsreader400, style: "normal", weight: 400 },
		{ name: "Newsreader", data: newsreader500, style: "normal", weight: 500 },
		{ name: "Newsreader", data: newsreader400Italic, style: "italic", weight: 400 },
		{ name: "Roboto Mono", data: robotoMono, style: "normal", weight: 400 },
		{ name: "Roboto Mono", data: robotoMonoBold, style: "normal", weight: 700 },
	],
});

const png = new Resvg(svg).render().asPng();
const out = resolve(root, "og-preview-watermark.png");
writeFileSync(out, png);
console.log(`✓ wrote ${out}`);
