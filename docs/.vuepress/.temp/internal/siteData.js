export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"魔兽世界灯塔\",\"description\":\"点亮迷雾中的灯塔，为你指引艾泽拉斯的征途。\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"首页\",\"description\":\"点亮迷雾中的灯塔，为你指引艾泽拉斯的征途。\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Home\",\"description\":\"Lighting the beacon in the mist, guiding your journey through Azeroth.-powered Static Site Generator\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
