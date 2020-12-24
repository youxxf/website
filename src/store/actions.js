import {SAVE_USER_INFO, SAVE_COURSE_DATA, SAVE_CURRENT_ENV} from './mutations-type'
export default {
  saveUserInfo ({commit}, data) {
    commit(SAVE_USER_INFO, data)
  },//保存用户信息
  savCourseData ({commit}, data) {
    commit(SAVE_COURSE_DATA, data)
  },//保存课程基本数据
  saveCurrentEnv ({commit}, env) {
    commit(SAVE_CURRENT_ENV, env)
  },//保存当前环境
}
