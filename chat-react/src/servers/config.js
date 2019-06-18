// 全局配置

let baseUrl = ''
let imgUrl
if (process.env.NODE_ENV === 'development'){
  baseUrl = "http://119.3.73.42:6666"  
  // baseUrl = "/api"
  // baseUrl = "http://47.110.152.126:8020"
  imgUrl = '//elm.cangdu.org/img/'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = '//elm.cangdu.org'
  imgUrl = '//elm.cangdu.org/img/'
}

export  {
  baseUrl,
  imgUrl
}
