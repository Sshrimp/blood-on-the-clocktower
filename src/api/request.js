import { axiosInstance } from './config';


export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot`);
}

export const getResultList = (query) => {
  return axiosInstance.get(`/search/keywords=${query}`)
}

export const getShopListRequest = (category) => {
  return axiosInstance.get(`/table/list/${parseInt(category)}`);
}

export const getMoreShopListRequest = (category, offset) => {
  return axiosInstance.get(`/shop/list?cat=${parseInt(category)}&offset=${offset}`)
}

