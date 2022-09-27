import { MidwayConfig } from '@midwayjs/core';
import { Photo } from '../entity/photo';
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1661479282772_2642',
  koa: {
    port: 7001,
  },
  view: {
    defaultViewEngine: 'nunjucks',
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql', //数据库类型 mysql数据库
        host: '127.0.0.1',
        port: 3306, //数据库端口
        username: 'root', // 数据库用户名
        password: 'root', // 数据库密码
        database: 'midway', // 数据表
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
        logging: false,

        // 配置实体模型
        entities: [Photo],
        timezone: '+08:00',
      },
    },
  },
  jwt: {
    secret: 'xxxxxxxxxxxxxx', // fs.readFileSync('xxxxx.key')
    expiresIn: '2d', // https://github.com/vercel/ms
  },
} as MidwayConfig;
