export class Category {
  name: string;
  companies: Company[];
}
export class Company {
  name: string;
  parentName:string;
  funds: Fund[];
}

export class Fund {
  data: any[];
}
