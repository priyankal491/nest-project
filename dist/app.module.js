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
const customers_module_1 = require("./customers/customers.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const local_strategy_1 = require("./auth/local.strategy");
const jwt_strategy_1 = require("./auth/jwt.strategy");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./auth/constants");
const nest_console_1 = require("@squareboat/nest-console");
const axios_1 = require("@nestjs/axios");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [customers_module_1.CustomerModule, auth_module_1.AuthModule, users_module_1.UsersModule, jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }), nest_console_1.ConsoleModule, axios_1.HttpModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map