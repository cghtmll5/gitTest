//这里可以把请求整理成模块，如果请求接口较多，后期维护方便
import Http from './http';

//此处 post '/register' ===>>  baseURL+'/register'
export const getRegister = async (params) => {
    return await Http.post('/user/register',params);
};//注册接口
export const getLogin = (params) => {
    return Http.post("/user/login", params); // 登录接口
};
export const getUserInfo = (params) => {
    return Http.post("/user/getUserInfo", params); // 获取用户信息
};
export const amendUserInfo = (params) => {
    return Http.post("/user/amendUserInfo", params); // 修改用户信息
};
export const userLogout = (params) => {
    return Http.post("/user/userLogout", params); // 退出登录
};
export const amendUserPassword = (params) => {
    return Http.post("/user/amendUserPassword", params); // 修改用户密码
};
export const getAllFriends = (params) => {
    return Http.post("/friend/getAllFriends", params); //获取当前用户所有好友
};
export const deleteFriend = (params) => {
    return Http.post("/friend/deleteFriend", params); //删除好友
};
export const addFriends = (params) => {
    return Http.post("/friend/addFriends", params); //添加好友
};
export const amendFriends = (params) => {
    return Http.post("/friend/amendFriends", params); //修改好友昵称或分组
};
export const getAllFriendGroups = (params) => {
    return Http.post("/friend/getAllFriendGroups", params); //获取所有好友分组
};
export const amendFriendGroup = (params) => {
    return Http.post("/friend/amendFriendGroup", params); //修改好友分组名称
};
export const deleteFriendGroup = (params) => {
    return Http.post("/friend/deleteFriendGroup", params); //新增用户分组
};
export const addFriendGroup = (params) => {
    return Http.post("/friend/addFriendGroup", params); //删除用户分组
};

