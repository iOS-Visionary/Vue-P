/**
 * Created by zhaoliulei on 2018/8/31.
 */
import req from './httpUtils'
import {hex_md5, getParamsStr} from './valide_k'


// 正式
const baseUrl = 'http://stockanalysis.yxcps.cn/';
const quotationBasicUrl = 'http://marketbase.yxcps.cn/atget';
/**
 * 综合页面请求
 */
export const initMultipleData = param => {
  _getCommonParam(param);
  return req.get(baseUrl + 'StockAnalysis/Synthesize', param)
};
/**
 * 公共参数
 */
function _getCommonParam(param) {
  param['yxid'] = localStorage.getItem('userNo') || '0001';
  return param;
}
