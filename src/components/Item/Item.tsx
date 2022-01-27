import { ProductT } from '../../actions/productTypes';
import { Wrapper } from '../Styled';

type props = {
  item: ProductT;
  handleAddToCart: (clickedItem: ProductT) => void;
};

const Item = ({ item, handleAddToCart }: props) => {
  return (
    <Wrapper>
      <img
        src={item.image}
        alt="Product"
        className="h-64 object-cover rounded-md max-w-max"
      />
      <div className="font-sans p-4 h-full">
        <p className="text-lg font-bold tracking-tight">{item.title}</p>
        <p className="my-2 tracking-tight leading-5">{item.description}</p>
        <p className="font-bold mt-4">${item.price}</p>
      </div>
      <button
        className="btn btn-ghost m-1"
        onClick={() => handleAddToCart(item)}
      >
        Add to cart
      </button>
    </Wrapper>
  );
};

export default Item;
