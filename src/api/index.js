import { request } from './http'
/**
 * 接口统一管理
 */
// home页接口
export const homeApi = {
  getUserInfo: () => request.get('/api/home/user')
  // 其他接口......
}

// 其他页面接口......
