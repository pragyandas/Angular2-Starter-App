var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var mutualFundService_1 = require('./mutualFundService');
var FundsComponent = (function () {
    function FundsComponent(mutualFundService) {
        var _this = this;
        this.mutualFundService = mutualFundService;
        mutualFundService.getKeys().subscribe(function (results) {
            _this.keys = JSON.parse(results._body);
        });
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Array)
    ], FundsComponent.prototype, "funds", void 0);
    FundsComponent = __decorate([
        angular2_1.Component({
            selector: 'fund',
            templateUrl: '../app/fundsTemplate.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            providers: [mutualFundService_1.MutualFundService],
            inputs: ['funds'],
            styleUrls: ['../app/appStyle.css']
        }), 
        __metadata('design:paramtypes', [mutualFundService_1.MutualFundService])
    ], FundsComponent);
    return FundsComponent;
})();
exports.FundsComponent = FundsComponent;
//# sourceMappingURL=funds.js.map