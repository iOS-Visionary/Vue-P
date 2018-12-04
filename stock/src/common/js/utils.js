/**
 * 时间范围
 * @param beginTime
 * @param endTime
 * @returns {boolean}
 */
export function isTimeRange(beginTime, endTime) {
  let strb = beginTime.split(":");
  if (strb.length !== 2) {
    return false;
  }

  let stre = endTime.split(":");
  if (stre.length !== 2) {
    return false;
  }

  let b = new Date();
  let e = new Date();
  let n = new Date();

  b.setHours(strb[0]);
  b.setMinutes(strb[1]);
  e.setHours(stre[0]);
  e.setMinutes(stre[1]);

  return n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0;
}

/**
 * 自定义弹框
 * @param msg
 * @param duration
 */
export function appToast(msg, duration) {
  let toastDiv = document.getElementById('toast');
  if (toastDiv) {
    document.body.removeChild(toastDiv);
    clearTimeout(window.timmer);
  }
  duration = isNaN(duration) ? 2000 : duration;
  let m = document.createElement('div');
  m.id = 'toast';
  m.innerHTML = msg;
  m.style.cssText = "font-size:14px; width:60%; min-width:150px; background:#000; opacity:0.8; color:#fff; padding:10px 0; text-align:center; border-radius:5px; position:fixed; top:40%; left:20%; z-index:999999; font-weight:bold;";
  document.body.appendChild(m);
  window.timmer = setTimeout(function () {
    let d = 0.5;
    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
    m.style.opacity = '0';
    setTimeout(function () {
      document.body.removeChild(m)
    }, d * 1000);
  }, duration);
}

/**
 * 获取URL参数
 * @param paramName
 * @returns {string}
 */
export function getPageParam(paramName) {
  let searchStr = window.location.href.split('?')[1];
  if(searchStr){
    let reg = new RegExp('(^|&)'+ paramName +'=([^&]*)(&|$)');
    let r = searchStr.match(reg);
    if(r!=null)
      return decodeURIComponent(r[2]);
  }
  return '';
}
