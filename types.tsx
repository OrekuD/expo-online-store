export interface StateProps {
  products: ProductProps[];
  colors: ColorProps;
  manageCart: (action: string, payload: CartProps) => void;
  getProduct: (product: ProductProps) => void;
  cart: CartProps[];
  cartTotal: number;
  darkTheme: boolean;
  isLoggedIn: boolean;
  toggleTheme: () => void;
}

export interface ProductProps {
  _id: string;
  name: string;
  price: number;
  productImage: string;
  specification?: string;
}

export interface CartProps extends ProductProps {
  count: number;
  total: number;
}

export interface ColorProps {
  background: string;
  text: string;
}
