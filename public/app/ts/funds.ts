import {Component,Input,FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {MutualFundService} from './mutualFundService';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Fund} from './model';

@Component({
  selector: 'fund',
  templateUrl: '../app/fundsTemplate.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  providers: [MutualFundService],
  inputs:['funds'],
  styleUrls: ['../app/appStyle.css']
})
export class FundsComponent {
  constructor(private mutualFundService: MutualFundService) {
    mutualFundService.getKeys().subscribe((results) => {
      this.keys=JSON.parse(results._body);
    });
  }

  @Input()
  funds:Fund[];

  keys:string[];
}
