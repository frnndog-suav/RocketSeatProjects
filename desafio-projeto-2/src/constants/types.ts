export enum PaymentMethod {
  Credit = "CARTÃO DE CRÉDITO",
  Debit = "CARTÃO DE DÉBITO",
  Money = "DINHEIRO",
}

export enum Coffee {
  Default = 0,
  Americano = 1,
  Arabe = 2,
  ComGelo = 3,
  ExpressoGelado = 4,
  Capuccino = 5,
  ChocolateQuente = 6,
  Cubano = 7,
  ExpressoCremoso = 8,
  Havaiano = 9,
  Irlandes = 10,
  Latte = 11,
  Macchiato = 12,
  Mocaccino = 13,
}

export interface CoffeeMenuItem {
  id: string;
  imgSrc: string;
  tags: string[];
  name: string;
  description: string;
  value: number;
  type: Coffee;
}

export interface ShoppingCartItem {
  coffee: CoffeeMenuItem;
  quantity: number;
}
