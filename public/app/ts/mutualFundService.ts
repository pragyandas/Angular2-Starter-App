import {Http,Headers} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class MutualFundService{
  constructor(private http:Http){
  }

  getKeys(){
    return this.http.get('http://localhost:3000/api/keys',{
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    });
  }

  getAllCategories(){
    return this.http.get('http://localhost:3000/api/category',{
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    });
  }

  getCompanies(categoryName:string){
    var payload={category:categoryName};
    return this.http.post('http://localhost:3000/api/company',JSON.stringify(payload),{
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    });
  }

  getFunds(categoryName:string,companyName:string){
    var payload={category:categoryName,company:companyName};
    return this.http.post('http://localhost:3000/api/funds',JSON.stringify(payload),{
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    });
  }
}
