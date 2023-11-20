import CafeAmericanoImg from "../assets/coffee/americano.svg";
import ArabeImg from "../assets/coffee/arabe.svg";
import CafeComGeloImg from "../assets/coffee/cafe-com-leite.svg";
import ExpressoGeladoImg from "../assets/coffee/cafe-gelado.svg";
import CapuccinoImg from "../assets/coffee/capuccino.svg";
import ChocolateQuenteImg from "../assets/coffee/chocolate-quente.svg";
import CubanoImg from "../assets/coffee/cubano.svg";
import ExpressoCremosoImg from "../assets/coffee/expresso-cremoso.svg";
import HavaianoImg from "../assets/coffee/havaiano.svg";
import IrlandesImg from "../assets/coffee/irlandes.svg";
import LatteImg from "../assets/coffee/latte.svg";
import MacchiatoImg from "../assets/coffee/macchiato.svg";
import MocaccinoImg from "../assets/coffee/mochaccino.svg";
import TradicionalImg from "../assets/coffee/tradicional.svg";
import { Coffee, CoffeeMenuItem } from "../constants/types";

export const coffeesList: CoffeeMenuItem[] = [
  {
    id: "1",
    description: "O tradicional café feito com água quente e grãos moídos",
    imgSrc: TradicionalImg,
    name: "Expresso Tradicional",
    tags: ["TRADICIONAL"],
    value: 9.9,
    type: Coffee.Default,
  },
  {
    id: "2",
    description: "Expresso diluído, menos intenso que o tradicional",
    imgSrc: CafeAmericanoImg,
    name: "Expresso Americano",
    tags: ["TRADICIONAL"],
    value: 9.9,
    type: Coffee.Americano,
  },
  {
    id: "3",
    description: "Café expresso tradicional com espuma cremosa",
    imgSrc: ExpressoCremosoImg,
    name: "Expresso Cremoso",
    tags: ["TRADICIONAL"],
    value: 9.9,
    type: Coffee.ExpressoCremoso,
  },
  {
    id: "4",
    description: "Bebida preparada com café expresso e cubos de gelo",
    imgSrc: ExpressoGeladoImg,
    name: "Expresso Gelado",
    tags: ["TRADICIONAL", "GELADO"],
    value: 9.9,
    type: Coffee.ExpressoGelado,
  },
  {
    id: "5",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    imgSrc: CafeComGeloImg,
    name: "Café com Gelo",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    type: Coffee.ComGelo,
  },
  {
    id: "6",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    imgSrc: LatteImg,
    name: "Latte",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    type: Coffee.Latte,
  },
  {
    id: "7",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    imgSrc: CapuccinoImg,
    name: "Capuccino",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    type: Coffee.Capuccino,
  },
  {
    id: "8",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    imgSrc: MacchiatoImg,
    name: "Macchiato",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    type: Coffee.Macchiato,
  },
  {
    id: "9",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    imgSrc: MocaccinoImg,
    name: "Mochaccino",
    tags: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    type: Coffee.Mocaccino,
  },
  {
    id: "10",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    imgSrc: ChocolateQuenteImg,
    name: "Chocolate Quente",
    tags: ["ESPECIAL", "COM LEITE"],
    value: 9.9,
    type: Coffee.ChocolateQuente,
  },
  {
    id: "11",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    imgSrc: CubanoImg,
    name: "Cubano",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    value: 9.9,
    type: Coffee.Cubano,
  },
  {
    id: "12",
    description: "Bebida adocicada preparada com café e leite de coco",
    imgSrc: HavaianoImg,
    name: "Havaiano",
    tags: ["ESPECIAL"],
    value: 9.9,
    type: Coffee.Havaiano,
  },
  {
    id: "13",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    imgSrc: ArabeImg,
    name: "Árabe",
    tags: ["ESPECIAL"],
    value: 9.9,
    type: Coffee.Arabe,
  },
  {
    id: "14 ",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    imgSrc: IrlandesImg,
    name: "Irlandês",
    tags: ["ESPECIAL", "ALCOÓLICO"],
    value: 9.9,
    type: Coffee.Irlandes,
  },
];
