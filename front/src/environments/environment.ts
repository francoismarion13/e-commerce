export const environment = {
  production: false
};

const host = 'http://localhost:8080/'
export const apiUrl = {
  home: host + '',
  categorys: host + 'categories',
  products:  host + 'products',
  tri:  host + 'products/tri',
  shoppingCart: host + 'shoppingCart',
  users: host + 'users',
  admins: host + 'admins',
  sortAlphabetically: host + 'products/sort',
  sortPrice: host + 'products/sortPrice'
};

//export var activeUser;
export class sessionGlobal {
  public static activeUser: any;
}
