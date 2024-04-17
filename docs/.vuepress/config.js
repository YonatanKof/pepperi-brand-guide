import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Pepperi Brand',
  description: "A place to find Pepperi's brand guidelines, download brand assets, and review user persona",

  theme: defaultTheme({
    logo: 'https://yonatankof.com/misc/pepp/Pepperi-Icon-Green.svg',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
