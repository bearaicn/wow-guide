import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '魔兽世界灯塔',
  description: '点亮迷雾中的灯塔，为你指引艾泽拉斯的征途。',
  //head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '首页',
      description: '点亮迷雾中的灯塔，为你指引艾泽拉斯的征途。',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Home',
      description: 'Lighting the beacon in the mist, guiding your journey through Azeroth.-powered Static Site Generator',
    },
  },
  theme: defaultTheme({
    logo: './images/wow.svg',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
