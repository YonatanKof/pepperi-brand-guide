import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
	lang: 'en-US',
	title: 'Pepperi Brand',
	description: "A place to find Pepperi's brand guidelines, download brand assets, and review user persona",
	head: [['link', { rel: 'icon', href: '/images/pepperi-favicon.ico' }]],
	
	theme: defaultTheme({
		colorModeSwitch: false,
		logo: '/images/Pepperi-Icon.svg',

		navbar: ['/', '/get-started', '/visual-identity/index.html'],
		sidebar: {
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
