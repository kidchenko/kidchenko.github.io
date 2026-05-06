// Editorial OG card with two head treatments:
//   - "brand" head: stacked Jose / Barbosa (used for default + every site page)
//   - "post"  head: the post title at an auto-fit size (used for blog posts)
// Shared shell: watermark compass bleeding off the upper-right, top eyebrow row
// (chapter on the left, coordinates or filing date on the right), italic
// standfirst, footer rule with josebarbosa.dev | Vol. MMXXVI, No. xx.

const colors = {
	bg: "#f4ead9",
	ink: "#1f1c19",
	muted: "#7d756c",
	accent: "#b88a30",
};

export type OgFields = {
	variant: "brand" | "post";
	chapterRoman: string;
	chapterTitle: string;
	coords: string;
	title?: string;
	standfirst: string;
	footRight: string;
};

const fitPostTitleSize = (title: string) => {
	const len = title.length;
	if (len <= 18) return 132;
	if (len <= 30) return 104;
	if (len <= 45) return 80;
	if (len <= 65) return 64;
	return 52;
};

const brandHead = () => [
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
			children: "Jose",
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
				color: colors.accent,
			},
			children: "Barbosa",
		},
	},
];

const postHead = (title: string) => {
	const size = fitPostTitleSize(title);
	return [
		{
			type: "div",
			props: {
				style: {
					display: "flex",
					fontWeight: 500,
					fontSize: size,
					lineHeight: 0.96,
					letterSpacing: -2,
					color: colors.ink,
					maxWidth: 980,
				},
				children: title,
			},
		},
	];
};

export const ogMarkup = (fields: OgFields, compassDataUri: string) => {
	const head =
		fields.variant === "brand" ? brandHead() : postHead(fields.title ?? "Untitled");

	return {
		type: "div",
		props: {
			style: {
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				background: colors.bg,
				color: colors.ink,
				padding: "48px 72px",
				fontFamily: "Newsreader",
				position: "relative",
			},
			children: [
				// Watermark compass, bleeds off upper-right
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

				// Top eyebrow row (chapter | coords or date)
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
							color: colors.muted,
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
												style: { color: colors.accent, fontWeight: 700, marginRight: 14 },
												children: fields.chapterRoman,
											},
										},
										{ type: "span", props: { children: fields.chapterTitle } },
									],
								},
							},
							{ type: "span", props: { children: fields.coords } },
						],
					},
				},

				// Body
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
										...head,
										{
											type: "div",
											props: {
												style: {
													display: "flex",
													width: 64,
													height: 1,
													background: colors.accent,
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
													color: colors.ink,
													maxWidth: 540,
												},
												children: fields.standfirst,
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
							borderTop: `1px solid ${colors.ink}`,
							fontFamily: "Roboto Mono",
							fontSize: 16,
							letterSpacing: 4,
							textTransform: "uppercase",
							color: colors.muted,
						},
						children: [
							{
								type: "span",
								props: {
									style: { color: colors.ink, fontWeight: 600 },
									children: "josebarbosa.dev",
								},
							},
							{ type: "span", props: { children: fields.footRight } },
						],
					},
				},
			],
		},
	};
};
