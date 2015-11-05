var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var mutualFundService_1 = require('./mutualFundService');
var category_1 = require('./category');
angular2_1.bootstrap(category_1.CategoryComponent, [http_1.HTTP_PROVIDERS, mutualFundService_1.MutualFundService]);
//# sourceMappingURL=app.js.map