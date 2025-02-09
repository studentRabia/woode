import { v4 as uuidv4 } from "uuid";

interface CartItem extends Product {
  _key: string;
  quantity: number;
}

export const addToCart = (product: Product) => {
  const cartItems: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const updatedCartItems = cartItems.map((item: CartItem) => ({
    ...item,
    _key: item._key || uuidv4(),
  }));

  const existingItem = updatedCartItems.find(item => item._id === product._id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    updatedCartItems.push({ ...product, quantity: 1, _key: uuidv4() });
  }

  localStorage.setItem("cart", JSON.stringify(updatedCartItems));
};

export const removeFromCart = (productId: string) => {
  let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(item => item._id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const productIndex = cart.findIndex(item => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].quantity = quantity;  // ✅ Fixed here
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const getCartItems = (): CartItem[] => {
  return JSON.parse(localStorage.getItem('cart') || '[]');
};
