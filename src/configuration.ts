import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as orm from '@midwayjs/typeorm';
import * as swagger from '@midwayjs/swagger';
import * as view from '@midwayjs/view-nunjucks';
// import { IMidwayContainer } from '@midwayjs/core';
// import * as jwt from '@midwayjs/jwt';
import { join } from 'path';
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import { WeatherErrorFilter } from './filter/weather.filter';
@Configuration({
  imports: [
    koa,
    validate,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
    view,
    orm,
    swagger,
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
    // jwt,
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;
  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
    this.app.useFilter([WeatherErrorFilter]);
  }
}
// export class MainConfiguration {
//   @App()
//   app: koa.Application;
//   async onReady(applicationContext: IMidwayContainer): Promise<void> {
//     // 添加中间件
//     this.app.useMiddleware([
//       // ...
//       JwtMiddleware,
//     ]);
//   }
// }
