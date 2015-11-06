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
var company_1 = require('./company');
var CategoryComponent = (function () {
    function CategoryComponent(mutualFundService) {
        var _this = this;
        this.mutualFundService = mutualFundService;
        this.title = 'Mutual Funds';
        this.categories = [];
        mutualFundService.getAllCategories().subscribe(function (results) {
            JSON.parse(results._body).forEach(function (category) {
                _this.categories.push({ name: category, companies: [], companiesVisible: true });
            });
        });
    }
    CategoryComponent.prototype.getCompanies = function (category) {
        if (category.companies.length === 0) {
            this.mutualFundService.getCompanies(category.name).subscribe(function (results) {
                JSON.parse(results._body).forEach(function (company) {
                    category.companies.push({ name: company, parentName: category.name, funds: [], fundsVisible: true });
                });
            });
        }
        else {
            category.companiesVisible = !category.companiesVisible;
        }
        event.stopPropagation();
    };
    CategoryComponent = __decorate([
        angular2_1.Component({
            selector: 'category',
            templateUrl: '../app/appTemplate.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, company_1.CompanyComponent],
            providers: [mutualFundService_1.MutualFundService],
            styleUrls: ['../app/appStyle.css']
        }), 
        __metadata('design:paramtypes', [mutualFundService_1.MutualFundService])
    ], CategoryComponent);
    return CategoryComponent;
})();
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.js.map