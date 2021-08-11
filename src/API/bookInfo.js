import request from '../utils/request'

// 获取图书的详细信息
export const getBookInfo = (Id) => {
  return request({
    method: 'GET',
    url: `/Book/${Id}`
  })
}

// 获取评论
export const getdiscuss = (Id) => {
  return request({
    method: 'GET',
    url: `/Book/Comment/?id=${Id}`
  })
}