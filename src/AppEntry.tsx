import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from './actions/productActions';
import { rootStore } from './store';
import { initialStateI } from './reducers/productReducer';

import { Spinner, Wrapper } from './components/Styled';
import Item from './components/Item/Item';
import { ProductT } from './actions/productTypes';
import CartDrawer from './components/Cart/CartDrawer';
import Cart from './components/Cart/Cart';

type props = {
  product: initialStateI;
  getProducts: () => void;
};

const AppEntry = ({ product, getProducts }: props) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductT[]);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);
  const { loading, data } = product;

  const getTotalItems = (items: ProductT[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: ProductT) => {
    setCartItems((prev) => {
      // 1. Is item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      // 2. First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ProductT[])
    );
  };

  if (loading) return <Spinner />;

  return (
    <CartDrawer
      totalNumberOfItems={getTotalItems(cartItems)}
      cartContent={
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      }
    >
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((item) => (
            <Item item={item} handleAddToCart={handleAddToCart} key={item.id} />
          ))}
        </div>
      </div>
    </CartDrawer>
  );
};

const mapStateToProps = (state: rootStore) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(AppEntry);
