//这里可以把请求整理成模块，如果请求接口较多，后期维护方便
import Http from './http';
// import {getUrlConcat} from '../common/util'  //GET 入参需要转化
class API extends Http{
 /**
   *  注册接口
   *  @method post
   *  @return {promise}
   */
  async getRegister (data) {
    try {
      let result = await this.axios('post', '/user/register', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '注册失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
  /**
   *  登录
   *  @method post
   *  @return {promise}
   */
  async getLogin (data) {
    try {
      let result = await this.axios('post', '/user/login', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '登录失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
  /**
   *  获取用户信息
   *  @method post
   *  @return {promise}
   */
  async getUserInfo (data) {
    try {
      let result = await this.axios('post', '/user/getUserInfo', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '登录失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
  /**
   *  修改用户信息
   *  @method post
   *  @return {promise}
   */
  async amendUserInfo (data) {
    try {
      let result = await this.axios('post', '/user/amendUserInfo', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '修改用户信息失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
  /**
   *  退出登录
   *  @method post
   *  @return {promise}
   */
  async userLogout (data) {
    try {
      let result = await this.axios('post', '/user/userLogout', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '退出登录失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
   /**
   *  修改用户密码
   *  @method post
   *  @return {promise}
   */
  async amendUserPassword (data) {
    try {
      let result = await this.axios('post', '/user/amendUserPassword', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '修改用户密码失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
  /**
   *  获取当前用户所有好友
   *  @method post
   *  @return {promise}
   */
  async getAllFriends (data) {
    try {
      let result = await this.axios('post', '/user/getAllFriends', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '获取好友失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
   /**
   *  删除好友
   *  @method post
   *  @return {promise}
   */
  async deleteFriend (data) {
    try {
      let result = await this.axios('post', '/user/deleteFriend', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '删除好友失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
   /**
   *  添加好友
   *  @method post
   *  @return {promise}
   */
  async addFriends (data) {
    try {
      let result = await this.axios('post', '/user/addFriends', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '添加好友失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
  /**
   *  修改好友昵称或分组
   *  @method post
   *  @return {promise}
   */
  async amendFriends (data) {
    try {
      let result = await this.axios('post', '/user/amendFriends', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '修改好友昵称失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
   /**
   *  获取所有好友分组
   *  @method post
   *  @return {promise}
   */
  async getAllFriendGroups (data) {
    try {
      let result = await this.axios('post', '/user/getAllFriendGroups', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '获取好友分组失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
   /**
   *  修改好友分组名称
   *  @method post
   *  @return {promise}
   */
  async amendFriendGroup (data) {
    try {
      let result = await this.axios('post', '/user/amendFriendGroup', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '修改好友分组名称失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
   /**
   *  删除用户分组
   *  @method post
   *  @return {promise}
   */
  async deleteFriendGroup (data) {
    try {
      let result = await this.axios('post', '/user/deleteFriendGroup', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '删除用户分组失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
  /**
   *  新增用户分组
   *  @method post
   *  @return {promise}
   */
  async addFriendGroup (data) {
    try {
      let result = await this.axios('post', '/user/addFriendGroup', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '新增用户分组失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
}

export default new API();