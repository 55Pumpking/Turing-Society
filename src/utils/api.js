import request from './request.js'
/* import axios from 'axios' */

export const getArticle = ({url,params,method='GET'}) =>{
    return request({
        url,
        method,
        params
    })
}
export const getArticleDetail = ({url,params,method='GET'})=>{
    return request({
        url,
        method,
        params
    })
}
export const getArticleDetailComment = ({url,params,method='GET'})=>{
    return request({
        url,
        method,
        params
    })
}