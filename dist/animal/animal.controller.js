"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalController = void 0;
const common_1 = require("@nestjs/common");
const animal_service_1 = require("./animal.service");
const create_animal_dto_1 = require("./dto/create-animal.dto");
const update_animal_dto_1 = require("./dto/update-animal.dto");
let AnimalController = class AnimalController {
    constructor(animalService) {
        this.animalService = animalService;
    }
    async create(createAnimalDto) {
        return await this.animalService.create(createAnimalDto);
    }
    async findAll() {
        const Animais = await this.animalService.findAll();
        const AnimaisFormamtados = Animais.map(Animal => ({
            CodigoBrinco: Animal.CodigoBrinco,
            Raca: Animal.Raca,
            Peso: Animal.Peso,
            Sexo: Animal.Sexo,
            Idade: Animal.Idade
        }));
        return { Animais: AnimaisFormamtados };
    }
    async update(CodigoBrinco, updateAnimalDto) {
        return await this.animalService.update(CodigoBrinco, updateAnimalDto);
    }
    async delete(CodigoBrinco) {
        return await this.animalService.delete(CodigoBrinco);
    }
};
exports.AnimalController = AnimalController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Redirect)("/animal"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animal_dto_1.CreateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('animal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':CodigoBrinco'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    __param(0, (0, common_1.Param)('CodigoBrinco')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_animal_dto_1.UpdateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':CodigoBrinco'),
    __param(0, (0, common_1.Param)('CodigoBrinco')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "delete", null);
exports.AnimalController = AnimalController = __decorate([
    (0, common_1.Controller)('animal'),
    __metadata("design:paramtypes", [animal_service_1.AnimalService])
], AnimalController);
//# sourceMappingURL=animal.controller.js.map