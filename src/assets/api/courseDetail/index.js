//公共API存放，例：session，登出；
import ajax from '@/utils/ajax'
export const reqSession = () => ajax(`/api/party/user/v2/user/session`);// 获取session




