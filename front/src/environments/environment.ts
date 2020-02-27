export const environment = {
  production: false
};

const host = 'http://localhost:8080/'
const hostAdmin = 'http://localhost:8080/admins'
export const apiUrl = {
  home: host + '',
  categorys: host + 'categories',
  products:  host + 'products',
  tri:  host + 'products/tri',
  shoppingCart: host + 'shoppingCart',
  users: host + 'users',
  admins: host + 'admins',
  sortAlphabetically: host + 'products/sort',
  sortPrice: host + 'products/sortPrice',
  payments: host + 'payments'
};

export const apiUrlAdmin = {
  home: hostAdmin + '',
};

//export var activeUser;
export class sessionGlobalUser {
  public static activeUser;
}
//export var activeCart;
export class sessionGlobalCart {
  public static activeCart;
}

//export var activeUser;
export class sessionGlobalCart {
  public static activeCart;
}

export class sessionGlobalAdmin {
  public static activeAdmin: any;
}