/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1579339075308_2935';

  // add your middleware config here
  config.middleware = [];

  config.validate = {
    convert: true, // 自动对传入参按希望的类型进行转换
    // widelyUndefined: true, // 把空字符串，NaN, null这些转成 undefined
  };

  return {
    ...config
  };
};
