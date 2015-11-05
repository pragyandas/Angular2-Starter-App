import {Component,FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {MutualFundService} from './mutualFundService';
import {CompanyComponent} from './company';
import {Category} from './model';

@Component({
  selector: 'category',
  templateUrl: '../app/appTemplate.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, CompanyComponent],
  providers: [MutualFundService],
  styleUrls: ['../app/appStyle.css']
})
export class CategoryComponent {
  constructor(private mutualFundService: MutualFundService) {
    this.categories = [];
    mutualFundService.getAllCategories().subscribe((results) => {
      JSON.parse(results._body).forEach((category) => {
        this.categories.push({ name: category, companies: [] });
      });
    });
  }
  getCompanies(category: Category) {
    this.mutualFundService.getCompanies(category.name).subscribe((results) => {
        JSON.parse(results._body).forEach((company)=>{
          category.companies.push({name:company,parentName:category.name,funds:[]});
        })
    });
    event.stopPropagation();
  }
  categories: Category[];
  title: string = 'Mutual Funds';
}
