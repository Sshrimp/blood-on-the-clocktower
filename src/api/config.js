import axios from "axios";

// export const baseUrl = ''

// axios 的实例及拦截器配置
export const axiosInstance = axios.create();

export const kindTypes = 
[{
  name: "服装",
  key: "101",
  title: [
    {
      name: "潮流服装",
      key: 1,
      kind: [
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "1"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "2"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "3"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "4"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "5"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "6"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "7"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "8"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "9"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "10"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "11"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "12"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "13"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "14"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "15"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "16"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "17"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "18"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "19"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "20"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "21"
        }
      ]
    },
    {
      name: "运动服装",
      key: 2,
      kind: [
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "改变了",
          key: "1"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "2"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "3"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "4"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "5"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "6"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "7"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "8"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "9"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "10"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "11"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "12"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "13"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "14"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "15"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "16"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "17"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "18"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "19"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "20"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "21"
        }
      ]
    },
    {
      name: "球衣",
      key: 3,
      kind: [
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "变了哇哇",
          key: "1"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "2"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "3"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "4"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "5"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "6"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "7"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "8"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "9"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "10"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "11"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "12"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "13"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "14"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "15"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "16"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "17"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "18"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "19"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "20"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "21"
        }
      ]
    },
    {
      name: "潮流服装",
      key: 4,
      kind: [
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "1"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "2"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "3"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "4"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "5"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "6"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "7"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "8"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "9"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "10"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "11"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "12"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "13"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "14"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "15"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "16"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "17"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "18"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "19"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "20"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "21"
        }
      ]
    },
    {
      name: "运动服装",
      key: 5,
      kind: [
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "1"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "2"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "3"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "4"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "5"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "6"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "7"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "8"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "9"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "10"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "11"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "12"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "13"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "14"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "15"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "16"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "17"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "18"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "19"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "20"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "21"
        }
      ]
    },
    {
      name: "潮流服装",
      key: 6,
      kind: [
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "1"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "2"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "3"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "4"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "5"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "6"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "7"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "8"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "9"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "10"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "11"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "12"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "13"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "14"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "15"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "16"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "17"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "18"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "19"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "20"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "21"
        }
      ]
    },
    {
      name: "运动服装",
      key: 7,
      kind: [
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "1"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "2"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "3"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "4"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "5"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "6"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "7"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "8"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "9"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/afe6297c9d7543b19a360eeb1fc4649a.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "板鞋",
          key: "10"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/bc6b8824eb3e4aff837df498c758e972.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "帆布鞋",
          key: "11"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201204/86e4b6e9e22b4fd0a91f05eedb1e2516.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "口红",
          key: "12"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201225/15d8fde3977d42dcafa665a44a9fa82c.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "跑步鞋",
          key: "13"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201207/20658f90b7814cf1889ff49e34821293.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "篮球鞋",
          key: "14"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/4881aa39d2c54d60976983fe3da1c749.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "T恤",
          key: "15"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "16"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "17"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "18"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/8b325405f45b4988851ab5fc20bbfad7.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "老爹鞋",
          key: "19"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201205/c47a5ea34af74d0b8727a15b643b4864.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "卫衣",
          key: "20"
        },
        {
          icon: "https://cdn.poizon.com/source-img/origin-img/20201206/8ed0fd0d06904af69c0d307025c9a8ae.jpg?x-oss-process=image/resize,m_lfit,w_100/format,webp",
          name: "休闲裤",
          key: "21"
        }
      ]
    }
  ]
},
{
  name: "奢饰品",
  key: "102",
},
{
  name: "球鞋",
  key: "103"
},
{
  name: "美妆",
  key: "104"
},
{
  name: "手表",
  key: "105"
},
{
  name: "JK制服",
  key: "106"
},
{
  name: "配饰",
  key: "107"
},
{
  name: "潮玩",
  key: "108"
},]

export const categoryTypes = [{
  name: "推荐",
  key: "1001"
},
{
  name: "出行",
  key: "1002"
},
{
  name: "女装",
  key: "1003"
},
{
  name: "家电",
  key: "2001"
},
{
  name: "美妆",
  key: "2002"
},
{
  name: "潮服",
  key: "2003"
},
{
  name: "艺术",
  key: "6001"
},
{
  name: "鞋类",
  key: "6002"
},
{
  name: "箱包",
  key: "6003"
},
{
  name: "生活",
  key: "7001"
},
{
  name: "手表",
  key: "7002"
},
{
  name: "配饰",
  key: "7003"
},
{
  name: "数码",
  key: "4001"
},
{
  name: "潮玩",
  key: "4002"
},
{
  name: "运动",
  key: "4003"
}
];

export const smallIcon = [
  {
    type: 'pendingPay',
    icon: '<svg t="1641955290835" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2422" width="16" height="16"><path d="M814.656 127.872h-602.88c-46.016 0-83.456 37.44-83.456 83.456v602.944c0 46.016 37.44 83.456 83.456 83.456h602.88c46.08 0 83.52-37.44 83.52-83.456V211.328c-0.064-46.016-37.504-83.456-83.52-83.456z m45.12 490.624h-223.68c-35.648 0-64.576-28.992-64.576-64.64s28.992-64.576 64.576-64.576h223.616v129.216z m0-170.496v2.88h-223.68c-56.832 0-102.976 46.208-102.976 102.976 0 56.832 46.144 102.976 102.976 102.976h223.616v157.376c0 24.832-20.224 45.056-45.12 45.056h-602.88c-24.832 0-45.12-20.224-45.12-45.056V356.864c0-24.832 20.224-45.12 45.12-45.12h602.88c24.896 0 45.12 20.224 45.12 45.12V448z m0-159.552c-13.184-8.768-28.096-15.104-45.12-15.104h-602.88c-16.96 0-31.872 6.336-45.12 15.104v-77.12c0-24.832 20.224-45.12 45.12-45.12h602.88c24.896 0 45.12 20.224 45.12 45.12v77.12z" fill="" p-id="2423"></path><path d="M612.608 553.344a0.49 0.49 0 1 0 62.72 0 0.49 0.49 0 1 0-62.72 0z" fill="" p-id="2424"></path></svg>'
  },
]

