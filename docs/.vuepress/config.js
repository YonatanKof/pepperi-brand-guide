import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

import { getDirname, path } from 'vuepress/utils';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
	lang: 'en-US',
	title: 'Pepperi Brand Guide',
	description: "A place to find Pepperi's brand guidelines, download brand assets, and review user persona",
	head: [
		['link', { rel: 'icon', href: '/images/favicon.png' }],
		['meta', { property: 'og:url', content: 'https://brand.pepperi.com/' }],
		['meta', { property: 'og:title', content: 'Pepperi Brand Guide' }],
		['meta', { property: 'og:description', content: "A place to find Pepperi's brand guidelines, download brand assets, and review user persona" }],
		['meta', { property: 'og:image', content: '/images/PepperiBrandGuide.jpg' }],
		['meta', { property: 'og:type', content: 'website' }],

		['meta', { name: 'twitter:card', content: 'summary_large_image' }],
		['meta', { name: 'twitter:site', content: '@PepperiHQ' }],
		['meta', { name: 'twitter:creator', content: "@yonatankof" }],
		['meta', { name: 'twitter:title', content: 'Pepperi Brand Guide' }],
		['meta', { name: 'twitter:description', content: "A place to find Pepperi's brand guidelines, download brand assets, and review user persona" }],
		['meta', { name: 'twitter:image', content: '/images/PepperiBrandGuide.jpg' }],
	],

	theme: defaultTheme({
		colorModeSwitch: false,
		logo: '/logo/Pepperi-Icon.svg',

		navbar: [
			'/',
			'/brand-foundation/index.html',
			'/visual-identity/index.html',
		],
		sidebar: {
			'/brand-foundation/': [
				{
					text: 'Brand Foundation',
					children: [
						'/brand-foundation/vision-and-mission.md',
						'/brand-foundation/values-and-personality.md',
						'/brand-foundation/brand-promise.md',
						'/brand-foundation/target-audience.md',
					],
				},
			],
			'/visual-identity/': [
				{
					text: 'Visual Identity',
					children: [
						'/visual-identity/logo-variations.md',
						'/visual-identity/color-palette.md',
						'/visual-identity/typography.md',
						'/visual-identity/imagery-photography.md',
					],
				},
			],
		},
	}),

	bundler: viteBundler(),
	plugins: [
		registerComponentsPlugin({
			// options
			componentsDir: path.resolve(__dirname, './components'),
		}),
	],
});
