// docs/.vuepress/composables/useEnv.js
import { ref, onMounted } from 'vue'

export function useEnv() {
  const isDev = ref(false)
  const isProd = ref(false)
  const isSSR = ref(false)
  const isClient = ref(false)
  
  onMounted(() => {
    // 多种环境判断方式
    isDev.value = 
      // VuePress 开发环境
      (typeof __VUEPRESS_DEV__ !== 'undefined' && __VUEPRESS_DEV__) ||
      // Vite 开发环境
      (import.meta.env && import.meta.env.DEV) ||
      // Node.js 环境
      (typeof process !== 'undefined' && process.env.NODE_ENV === 'development')
    
    isProd.value = 
      (typeof __VUEPRESS_SSR__ !== 'undefined') ||
      (import.meta.env && import.meta.env.PROD) ||
      (typeof process !== 'undefined' && process.env.NODE_ENV === 'production')
    
    isSSR.value = typeof __VUEPRESS_SSR__ !== 'undefined' && __VUEPRESS_SSR__
    isClient.value = typeof window !== 'undefined'
  })
  
  return {
    isDev,
    isProd,
    isSSR,
    isClient
  }
}