import Axios from 'axios';
import qs from 'qs';

//create方法会创建一个新的axios实例，并继承axios几乎所有属性,配置和方法
//建议使用 create 方法封装 http ，不对 axios 本身做特殊配置
const http = Axios.create({
    //传参是一个对象，配置包含baseUrl，timeout等等，既可以在这里传进去，也可以在实例化后设置配置
    baseURL: process.env.NODE_ENV==="development"?'http://127.0.0.1:6666':'https://www.baidu.com',
    // 设置通用url，使用请求的方法时，就可以省略这个url
    // 可以通过process.env.NODE_ENV判断是否开发环境，来决定是否使用代理url
    // 代理是用来解决跨域的。。
    headers: {
        //这个配置不用说了吧。默认携带请求头，
        //有的后台更喜欢让前端把session_id放在header里发送
        'X-Requested-With': 'XMLHttpRequest'
    },

    transformRequest: [function (data, headers) {
        // 此处是格式化发请求时，需要发送的数据格式
        // 某些后台在处理数据时不识别默认的 payload
        // 此处用第三方模块qs 转换成 兼容较好的 form-data(x-www-form-urlencoded)
        return qs.stringify(data);
    }],

    timeout: 10000,//超时，超出这时间，就会Promise.reject()，单位ms

    withCredentials: true,
    // 允许浏览器端在发请求时，携带cookie一起发送，
    // 某些后台语言会把session_id放在cookie里返回给前端
    // 如果这时不允许发送cookie的话  那么后台会判断是另一个浏览器在登录操作。
    // 我都是在实例化后 配置这个属性 因为我偶尔出现在这里传参配置会无效。
    // 设置这个属性为true后 ，后台不可以把允许跨域设置为'*'，必须指定ip或域名
    proxy:{
        '/api':{
            target:'http://127.0.0.1:6666',
            changeOrigin: true, //是否需要虚拟站点，我也不懂啥意思。。好像写不写差不多
            pathRewrite:{
                //这个属性，是看后台接口的请求url中是否有你配置的这个api
                //如果有的话你就不用写这个属性，
                //如果没有，你就需要写
                '^api':'',//把你本地请求的url中的api字段去掉
            }
        }
        //以上的配置效果是
        //--  /api/xxx --->>>  http://example.domain/xxx
        // 如果不写pathRewrite
        //--  /api/xxx --->>>  http://example.domain/api/xxx
    }
});
//添加请求拦截器
http.interceptors.request.use(config => {
    //在发送请求之前做某事，比如说 设置loading动画显示
    //store.commit('loadingStart');
    //此处我是把全局loading动画的控制放在vuex的，所以引入了store
    return config
}, error => {
    //请求错误时做些事
    return Promise.reject(error)
});
//添加响应拦截器
http.interceptors.response.use(response => {
    //对响应数据做些事，比如说把loading动画关掉
    //store.commit('loadingOver');
    return response.data
    //此处我直接返回res.data,方不方便你们应该有点b数的
}, error => {
    //请求错误时做些事
    // error.response.status是后台响应请求的状态码
    // 可以根据自己项目的需求  执行操作
    if (error.response.status===401){
        //这里引入vue是因为要使用挂载在vue原型上的element-ui的弹窗组件
        // 因为这时挂载vue原型上的方法，这个import的vue并没有实例化，无法省略prototype
        alert(error.response.data.msg);
        // Vue.prototype.$alert(error.response.data.msg,{
        //         //     type:error.response.data.type,
        //         //     title:'Message',
        //         // }).then(()=>{
        //         //     myCookie.removeItem('user');
        //         //     router.push({name:'SignIn'});//这里就是引入router的目的
        //         //     console.clear();
        //         // })
    }
    //store.commit('loadingOver');//关闭动画
    return Promise.reject(error)
});

http.defaults.withCredentials = true;
// 允许发送cookie，根据自己的项目需求是否需要开启
// axios的更多配置可以看官方的文档 github的 readme.md
// https://github.com/axios/axios

export default http;
