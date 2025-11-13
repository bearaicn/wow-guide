export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/GitMy/bearai-wow/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"新手指南"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/GitMy/bearai-wow/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/en/get-started.html", { loader: () => import(/* webpackChunkName: "en_get-started.html" */"D:/GitMy/bearai-wow/docs/.vuepress/.temp/pages/en/get-started.html.js"), meta: {"title":"Beginner's Guide"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"D:/GitMy/bearai-wow/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/GitMy/bearai-wow/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
