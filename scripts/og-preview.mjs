// OG preview script. Iterate on the design here, then once happy port the
// markup into src/pages/og-image/_ogMarkup.ts so build-time PNGs match.
// Run with:  pnpm node scripts/og-preview.mjs
//
// Output:    og-preview.png   (project root)

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// ─── Assets ──────────────────────────────────────────────────────────────────
// Static (non-variable) WOFFs from @fontsource/newsreader. Satori's opentype
// fork breaks on the variable Newsreader[opsz,wght].ttf because of dual fvar
// axes — these single-weight WOFFs sidestep that.
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

// ─── Palette (matches site light theme) ──────────────────────────────────────
const c = {
	bg: "#f4ead9",
	ink: "#1f1c19",
	muted: "#7d756c",
	rule: "rgba(31, 28, 25, 0.18)",
	accent: "#b88a30",
};

// ─── Sample content — change these to test different pages ───────────────────
const card = {
	chapterRoman: "I",
	chapterTitle: "Hailing",
	volume: "Vol. MMXXVI, No. 01",
	nameLine1: "Jose",
	nameLine2: "Barbosa",
	standfirst:
		"Engineering Director. Fifteen years scaling teams across Thailand and Brazil. Now founding AI products.",
	tickLat: "23°33′S",
	tickLon: "46°38′W",
	signature: "Signed, jb",
	footLeft: "kidchenko.dev",
	footRight: "Est. MMXII, Bangkok, São Paulo",
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
		},
		children: [
			// ───── Top eyebrow row (chapter | volume) ────────────────────────
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
									{
										type: "span",
										props: { children: card.chapterTitle },
									},
								],
							},
						},
						{ type: "span", props: { children: card.volume } },
					],
				},
			},

			// ───── Main two-column body ───────────────────────────────────────
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
						// LEFT: huge name + rule + standfirst + signature
						{
							type: "div",
							props: {
								style: {
									display: "flex",
									flexDirection: "column",
									flex: 1,
									paddingRight: 48,
								},
								children: [
									{
										type: "div",
										props: {
											style: {
												display: "flex",
												fontWeight: 500,
												fontSize: 148,
												lineHeight: 0.92,
												letterSpacing: -3,
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
												fontSize: 148,
												lineHeight: 0.92,
												letterSpacing: -3,
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
												width: 56,
												height: 1,
												background: c.accent,
												marginTop: 26,
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
												fontSize: 22,
												lineHeight: 1.4,
												color: c.ink,
												maxWidth: 540,
											},
											children: card.standfirst,
										},
									},
									{
										type: "div",
										props: {
											style: {
												display: "flex",
												marginTop: 14,
												fontFamily: "Roboto Mono",
												fontSize: 13,
												letterSpacing: 3,
												textTransform: "uppercase",
												color: c.muted,
											},
											children: card.signature,
										},
									},
								],
							},
						},

						// RIGHT: oversized compass mark + coordinate ticks
						{
							type: "div",
							props: {
								style: {
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									width: 340,
								},
								children: [
									{
										type: "img",
										props: { src: compassDataUri, width: 320, height: 320 },
									},
									{
										type: "div",
										props: {
											style: {
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												marginTop: 22,
												fontFamily: "Roboto Mono",
												fontSize: 14,
												letterSpacing: 3,
												textTransform: "uppercase",
												color: c.muted,
											},
											children: [
												{ type: "span", props: { children: card.tickLat } },
												{
													type: "span",
													props: {
														style: {
															display: "flex",
															width: 18,
															height: 1,
															background: c.accent,
															marginLeft: 12,
															marginRight: 12,
														},
													},
												},
												{ type: "span", props: { children: card.tickLon } },
											],
										},
									},
								],
							},
						},
					],
				},
			},

			// ───── Running head (bottom) ──────────────────────────────────────
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

// ─── Render ─────────────────────────────────────────────────────────────────
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
const out = resolve(root, "og-preview.png");
writeFileSync(out, png);
console.log(`✓ wrote ${out}`);
