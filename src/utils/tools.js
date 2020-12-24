export const dateTime =  function (time) {
  let dateFormat = new Date(parseInt(time)),
    year = dateFormat.getFullYear(),
    month = (dateFormat.getMonth() + 1).toString().padStart(2, '0'),
    day = dateFormat.getDate().toString().padStart(2, '0'),
    h = dateFormat.getHours().toString().padStart(2, '0'),
    m = dateFormat.getMinutes().toString().padStart(2, '0'),
    s = dateFormat.getSeconds().toString().padStart(2, '0');
    return {
    year,
    month,
    day,
    h,
    m,
    s
  }
};//时间格式处理
export const priceCount = function (price, type = 1) {//价格拆分1:整数大，小数小。 2：一样大
  let p = parseFloat(price).toFixed(2).split('.');
  if (type == 1) {
    return {
      b: p[0],//big
      s: p[1] == '00' ? '' : `.${p[1]}`//small
    };
  } else {
    return parseFloat(price).toFixed(2)
  }
};//price：整数小数拆分
export const dayCount = function(time) {
  var eleven = new Date();
  eleven.setHours(23);
  eleven.setMinutes(59);
  eleven.setSeconds(59);
  let day = "";
  // 1天为86400000毫秒  eleven.getTime()当天最大时间
  if (eleven.getTime() > time && eleven.getTime() - time < 86400000) {
    day = "今天";
  } else if (eleven.getTime() < time && time - eleven.getTime() < 86400000) {
    day = "明天";
  }
  return day;
};//今天 明天
export const timerCount = function (dateTime) {
  let times = {}
  let d = parseInt(dateTime / 1000 / 60 / 60 / 24, 10);
  let h = parseInt(dateTime / 1000 / 60 / 60, 10);
  let m = parseInt(dateTime / 1000 / 60 % 60, 10);
  let s = parseInt(dateTime / 1000 % 60, 10);
  times.d = d < 10 ? '0' + d : d > 99 ? 99 : d ;
  times.h = h > 99 ? 99 : h < 10 ? '0' + h : h;
  times.m = m < 10 ? '0' + m : m;
  times.s = s < 10 ? '0' + s : s
  return times
};//倒计时
