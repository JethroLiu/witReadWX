/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1603880402366_2893";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 跨域
  config.cors = {
    origin: "http://192.168.3.114:8080",
    credentials: true,
  };

  // 启用上传文件模式
  config.multipart = {
    mode: "file",
  };

  // 配置 session
  config.session = {
    key: "jethro",
    maxAge: 1000 * 3600 * 24, // 1 天
    httpOnly: true,
    encrypt: true, // 加密
  };

  // POST 数据大小限制
  config.bodyParser = {
    jsonLimit: "1gb",
    formLimit: "1gb",
  };

  // 数据库配置
  config.mysql = {
    client: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "book",
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
