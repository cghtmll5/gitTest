/**
 * 手机号码校验 （返回-2-不是手机号、-1-参数为空、0-失败、1-电信、2-联通、3-移动、4-非严格验证的校验通过）
 * @param phoneNo 手机号
 * @param isStrict 是否严格校验
 * @returns {number}
 */

export const verifyMobileNumber = (phoneNo, isStrict) => {
  if ((typeof phoneNo === 'undefined') || (phoneNo = phoneNo + "").trim().length < 1) {
    return false;
  }
  if (phoneNo.length !== 11) {
    return false;
  }
  if (!isStrict && phoneNo.indexOf('1') === 0) {
    return true;
  }
  let dx = [133, 153, 180, 181, 189, 173, 177]; //电信
  let lt = [130, 131, 132, 155, 156, 185, 186, 145, 176]; //联通
  let yd = [134, 135, 136, 137, 138, 139, 150, 151, 152, 157, 158, 159, 182, 183, 184, 147, 178, 184, 188, 187]; //移动
  let needCheckPart = parseInt(phoneNo.substr(0, 3));
  if (~dx.indexOf(needCheckPart)) {
    return 1;
  } else if (~lt.indexOf(needCheckPart)) {
    return 2;
  } else if (~yd.indexOf(needCheckPart)) {
    return 3;
  }
  console.log('come on ver')
  return false;
};
/**
 * 验证邮箱地址是否合法
 * @param content 地址字符串
 * @returns {boolean} 是否合法
 */
export const verifyEmail = (content) => {
  let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+(([.-])[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return reg.test(content);
}
/**
 * 用于get方法后面参数的拼接，传入data是对象
 * @param {*} name 
 */
export const getUrlConcat = function (data) {
  let dataStr = ''; //数据拼接字符串
  let url = ''
  Object.keys(data).forEach(key => {
    dataStr += key + '=' + data[key] + '&';
  })
  if (dataStr !== '') {
    dataStr = dataStr.substr(0, dataStr.lastIndexOf('&')); // 去除掉最后一个"&"字符
    url = url + '?'+ dataStr;
  }
  return url
}