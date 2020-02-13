/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = () => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 8201,
  //     hostname: '0.0.0.0',
  //   },
  // };

  config.security = {
    domainWhiteList: [ 'http://127.0.0.1:9527/' ],
    // enable: false
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // config.sequelize = {
  //   dialect: 'postgres',
  //   database: 'canonchain_explorer_new',
  //   host: '127.0.0.1',
  //   port: '5432',
  //   username: 'canonchain',
  //   password: 'czr123',
  //   query: {
  //     raw: true, // return just the data and not the model instance
  //   },
  // };


  return {
    ...config,
  };
};
