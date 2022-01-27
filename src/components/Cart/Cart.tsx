import { ProductT } from '../../actions/productTypes';
import CartItem from './CartItem';

type props = {
  cartItems: ProductT[];
  addToCart: (clickedItem: ProductT) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: props) => {
  const total = cartItems.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.amount * currentValue.price;
  }, 0);

  return (
    <div className="p-4">
      <p className="font-bold text-2xl">Your Shopping Cart</p>

      <div className="mt-2">
        {cartItems.length === 0 ? (
          <p className="font-bold text-md">No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))
        )}

        {cartItems.length !== 0 && (
          <p className="font-bold text-lg">Total Amount: {total.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
