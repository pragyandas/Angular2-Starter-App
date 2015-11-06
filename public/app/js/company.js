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
var funds_1 = require('./funds');
var CompanyComponent = (function () {
    function CompanyComponent(mutualFundService) {
        this.mutualFundService = mutualFundService;
    }
    CompanyComponent.prototype.getFunds = function (company) {
        if (company.funds.length === 0) {
            this.mutualFundService.getFunds(company.parentName, company.name).subscribe(function (results) {
                JSON.parse(results._body).forEach(function (fund) {
                    company.funds.push(fund);
                });
            });
        }
        else {
            company.fundsVisible = !company.fundsVisible;
        }
        event.stopPropagation();
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Array)
    ], CompanyComponent.prototype, "companies", void 0);
    CompanyComponent = __decorate([
        angular2_1.Component({
            selector: 'company',
            templateUrl: '../app/companyTemplate.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, funds_1.FundsComponent],
            providers: [mutualFundService_1.MutualFundService],
            inputs: ['companies']
        }), 
        __metadata('design:paramtypes', [mutualFundService_1.MutualFundService])
    ], CompanyComponent);
    return CompanyComponent;
})();
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.js.map