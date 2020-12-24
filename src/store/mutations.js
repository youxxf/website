import {SAVE_USER_INFO, SAVE_COURSE_DATA, SAVE_CURRENT_ENV} from './mutations-type'

export default {
  [SAVE_USER_INFO] (state, data) {
    state.userInfo = data;
  },//保存用户信息
  [SAVE_COURSE_DATA] (state, data) {
    state.courseBaseData = data;
  },//保存课程信息
  [SAVE_CURRENT_ENV] (state, env) {
    state.currentEnv = env;
    console.log(state.currentEnv);
  },//保存当前环境
}
