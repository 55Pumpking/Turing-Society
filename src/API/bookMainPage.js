import req from '../utils/request'
// 获取所有三级分类目录
export const reqGetAllCategory = () => {
  return req({
    url: '/Category/All',
    method: 'get'
  })
}
// 请求当前页码的书本列表
export const reqGetAdvancedBook = (dataObj) => {
  return req({
    url: '/Search/Advanced',
    method: 'post',
    data: dataObj
  })
}
// 请求获取热门标签列表
export const reqGetHotTag = () => {
  return req({
    url: '/Page/EditableArea?editableareaname=%E7%83%AD%E9%97%A8%E6%A0%87%E7%AD%BE',
    method: 'get'
  })
}
