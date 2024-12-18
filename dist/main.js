"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const session = require("express-session");
const hbs = require("hbs");
const hbsUtils = require("hbs-utils");
const passport = require("passport");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const not_found_exception_filter_1 = require("./common/filters/not-found-exception.filter");
const flash_errors_1 = require("./common/helpers/flash-errors");
const hbs_functions_1 = require("./common/helpers/hbs-functions");
const flash = require("connect-flash");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, hbs_functions_1.hbsRegisterHelpers)(hbs);
    hbsUtils(hbs).registerWatchedPartials((0, path_1.join)(__dirname, '/views/layouts'));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '/views'));
    hbs.registerPartials((0, path_1.join)(__dirname, '/views/layouts/partials'));
    app.setViewEngine('hbs');
    app.use(session({
        secret: 'nest cats',
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    app.use(flash_errors_1.flashErrors);
    app.useGlobalFilters(new not_found_exception_filter_1.NotFoundExceptionFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map