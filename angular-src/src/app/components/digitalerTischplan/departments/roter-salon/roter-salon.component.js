"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoterSalonComponent = (function () {
    function RoterSalonComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.occupied = new core_1.EventEmitter();
    }
    RoterSalonComponent.prototype.ngOnInit = function () {
    };
    RoterSalonComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    return RoterSalonComponent;
}());
__decorate([
    core_1.Input('tablesRoterSalon')
], RoterSalonComponent.prototype, "tablesRoterSalon", void 0);
__decorate([
    core_1.Input('showRoterSalonBool')
], RoterSalonComponent.prototype, "showRoterSalonBool", void 0);
__decorate([
    core_1.Output()
], RoterSalonComponent.prototype, "occupied", void 0);
RoterSalonComponent = __decorate([
    core_1.Component({
        selector: 'app-roter-salon',
        templateUrl: 'roter-salon.component.html',
        styleUrls: ['../../tischplan.component.css']
    })
], RoterSalonComponent);
exports.RoterSalonComponent = RoterSalonComponent;
