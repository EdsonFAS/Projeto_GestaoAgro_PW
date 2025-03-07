"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const hbs = require("hbs");
const common_1 = require("@nestjs/common");
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.urlencoded({ extended: true }));
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'views', 'partials'));
    await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map