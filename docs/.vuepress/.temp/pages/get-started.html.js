import comp from "D:/GitMy/bearai-wow/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"新手指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1763021699000,\"contributors\":[{\"name\":\"Carl Ding(丁竹)\",\"username\":\"\",\"email\":\"yyguangzheng@163.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"21b52d367a79da08d03682be3d44cf9e9214dd63\",\"time\":1763021699000,\"email\":\"yyguangzheng@163.com\",\"author\":\"Carl Ding(丁竹)\",\"message\":\"修订发布文档\"},{\"hash\":\"960d639cffe5d6d6ed597b819f5dc356c1a71b2d\",\"time\":1763015227000,\"email\":\"yyguangzheng@163.com\",\"author\":\"Carl Ding(丁竹)\",\"message\":\"初始化提交\"}]},\"filePathRelative\":\"get-started.md\"}")
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
