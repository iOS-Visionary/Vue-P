/**
 * Created by zhaoliulei on 2018/12/21.
 */
let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
  // imgBaseUrl = '/img/';

  baseUrl = '//elm.cangdu.org';
  imgBaseUrl = '//elm.cangdu.org/img/';

}else if(process.env.NODE_ENV == 'production'){
  // baseUrl = '//elm.cangdu.org';
  // imgBaseUrl = '//elm.cangdu.org/img/';
  imgBaseUrl = '/img/';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
}
