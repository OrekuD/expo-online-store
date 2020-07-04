export interface StateProps {
  products: ProductProps[];
  colors: ColorProps;
  cart: CartProps[];
  wishlist: ProductProps[];
  cartTotal: number;
  darkTheme: boolean;
  isLoggedIn: boolean;
  tabBar: boolean;
  userDetails: UserProps;
  toggleTheme: () => void;
  toggleTabBar: (bool: boolean) => void;
  manageCart: (action: string, payload: CartProps) => void;
  isProductInCart: (product: ProductProps) => CartProps | undefined;
  isProductInWishlist: (product: ProductProps) => ProductProps | undefined;
  modifyWishlist: (product: ProductProps) => void;
}

export interface UserProps {
  fullname: string;
  email: string;
  image?: string | null;
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
  secondary: string;
}
