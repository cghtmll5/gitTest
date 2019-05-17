//这里可以把请求整理成模块，如果请求接口较多，后期维护方便
import http from './http';

//此处 post '/register' ===>>  baseURL+'/register'
export const getRegister = (params) => {
    return http.post('/user/register',params);
};//注册接口
export const getLogin = (params) => {
    return http.post("/user/login", params); // 登录接口
};
export const getUserInfo = (params) => {
    return http.post("/user/getUserInfo", params); // 获取用户信息
};
export const amendUserInfo = (params) => {
    return http.post("/user/amendUserInfo", params); // 修改用户信息
};
export const userLogout = (params) => {
    return http.post("/user/userLogout", params); // 退出登录
};
export const amendUserPassword = (params) => {
    return http.post("/user/amendUserPassword", params); // 修改用户密码
};
export const getAllFriends = (params) => {
    return http.post("/friend/getAllFriends", params); //获取当前用户所有好友
};
export const deleteFriend = (params) => {
    return http.post("/friend/deleteFriend", params); //删除好友
};
export const addFriends = (params) => {
    return http.post("/friend/addFriends", params); //添加好友
};
export const amendFriends = (params) => {
    return http.post("/friend/amendFriends", params); //修改好友昵称或分组
};
export const getAllFriendGroups = (params) => {
    return http.post("/friend/getAllFriendGroups", params); //获取所有好友分组
};
export const amendFriendGroup = (params) => {
    return http.post("/friend/amendFriendGroup", params); //修改好友分组名称
};
export const deleteFriendGroup = (params) => {
    return http.post("/friend/deleteFriendGroup", params); //新增用户分组
};
export const addFriendGroup = (params) => {
    return http.post("/friend/addFriendGroup", params); //删除用户分组
};

