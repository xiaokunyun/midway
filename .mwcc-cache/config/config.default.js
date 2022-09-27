"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_1 = require("../entity/photo");
exports.default = {
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
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'midway',
                synchronize: true,
                logging: false,
                // 配置实体模型
                entities: [photo_1.Photo],
                timezone: '+08:00',
            },
        },
    },
    jwt: {
        secret: 'xxxxxxxxxxxxxx',
        expiresIn: '2d', // https://github.com/vercel/ms
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMveHV4aWFva3VuL0Rlc2t0b3AvQUtVTi9naXQvbWlkd2F5L3NyYy8iLCJzb3VyY2VzIjpbImNvbmZpZy9jb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUF3QztBQUN4QyxrQkFBZTtJQUNiLHVFQUF1RTtJQUN2RSxJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxJQUFJLEVBQUU7UUFDSixpQkFBaUIsRUFBRSxVQUFVO0tBQzlCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsVUFBVSxFQUFFO1lBQ1YsT0FBTyxFQUFFO2dCQUNQOzttQkFFRztnQkFDSCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxLQUFLO2dCQUVkLFNBQVM7Z0JBQ1QsUUFBUSxFQUFFLENBQUMsYUFBSyxDQUFDO2dCQUNqQixRQUFRLEVBQUUsUUFBUTthQUNuQjtTQUNGO0tBQ0Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLFNBQVMsRUFBRSxJQUFJLEVBQUUsK0JBQStCO0tBQ2pEO0NBQ2MsQ0FBQyJ9