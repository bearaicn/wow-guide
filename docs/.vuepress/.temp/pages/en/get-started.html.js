import comp from "D:/GitMy/bearai-wow/docs/.vuepress/.temp/pages/en/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/en/get-started.html\",\"title\":\"Beginner's Guide\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1763025372000,\"contributors\":[{\"name\":\"Carl Ding(丁竹)\",\"username\":\"\",\"email\":\"yyguangzheng@163.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"c924d3d02b3f12354c08f68fe0c33c989129ff02\",\"time\":1763025372000,\"email\":\"yyguangzheng@163.com\",\"author\":\"Carl Ding(丁竹)\",\"message\":\"添加中英文支持\"}]},\"filePathRelative\":\"en/get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
