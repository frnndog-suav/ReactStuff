enum PathIndex {
  Index = "Index",
  Home = "Home",
  Merch = "Merch",
  Menu = "Menu",
  ShoppingCart = "ShoppingCart",
}

type PathsDictionary = {
  [key in PathIndex]: string;
};

const pathway = {
  index: "/",
  home: "/",
  merch: "/merch/:id",
  menu: "/menu",
  shoppingCart: "/shopping-cart",
} as const;

export const ROUTE: PathsDictionary = {
  Index: pathway.index,
  Home: pathway.home,
  Merch: pathway.merch,
  Menu: pathway.menu,
  ShoppingCart: `${pathway.menu}${pathway.shoppingCart}`,
};
