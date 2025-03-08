"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sobre_module_1 = require("./sobre/sobre.module");
const login_module_1 = require("./login/login.module");
const home_module_1 = require("./home/home.module");
const typeorm_1 = require("@nestjs/typeorm");
const animal_module_1 = require("./animal/animal.module");
const animal_entity_1 = require("./animal/entities/animal.entity");
const rebanhos_module_1 = require("./rebanhos/rebanhos.module");
const rebanho_entity_1 = require("./rebanhos/entities/rebanho.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [sobre_module_1.SobreModule, login_module_1.LoginModule, home_module_1.HomeModule, animal_module_1.AnimalModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Edson!2Xz',
                database: 'GestaoAgro',
                entities: [animal_entity_1.Animal, rebanho_entity_1.Rebanho],
                synchronize: false,
            }),
            typeorm_1.TypeOrmModule.forFeature([animal_entity_1.Animal]),
            rebanhos_module_1.RebanhosModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map