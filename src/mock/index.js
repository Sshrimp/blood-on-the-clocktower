import Mock from "mockjs";
import { hotKeyWords } from './hot';
import shopAPI from './shop';

// 匹配接口 api  拦截请求
Mock.mock(/\/search\/hot/, "get", hotKeyWords);

Mock.mock(/\/search\/keywords=.+/, "get", (options) => {
    let keyword = options.url.split('=')[1]
    // console.log(shopAPI.shops().data.items);
    return shopAPI.shops().data.items.filter((item) => {
        return item.title.indexOf(keyword) > 0
    })
})

Mock.mock(/\/table\/list\/\d+/, "get", shopAPI.shops);

Mock.mock(/\/shop\/list\?cat=\d+\&offset=\d+/, "get", shopAPI.shops);


