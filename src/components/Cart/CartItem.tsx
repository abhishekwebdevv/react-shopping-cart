import { ProductT } from '../../actions/productTypes';

type props = {
  item: ProductT;
  addToCart: (clickedItem: ProductT) => void;
  removeFromCart: (id: number) => void;
};

const CartItem = ({ item, addToCart, removeFromCart }: props) => {
  return (
    <div className="w-full">
      <div className="mt-4 grid grid-cols-5">
        <div className="col-span-4">
          <p className="text-lg font-bold">{item.title}</p>

          <div className="flex justify-between mt-4 mr-6">
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
          </div>

          <div className="flex justify-between items-center mt-4 mr-6">
            <button
              className="btn btn-square btn-md bg-gray-300 text-black border-gray-300"
              onClick={() => removeFromCart(item.id)}
            >
              -
            </button>
            <p>{item.amount}</p>
            <button
              className="btn btn-square btn-md bg-gray-300 text-black border-gray-300"
              onClick={() => addToCart(item)}
            >
              +
            </button>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <img src={item.image} alt={item.title} />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default CartItem;
