import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ProductT } from '../../actions/productTypes';

type props = {
  children: React.ReactNode;
  cartContent: React.ReactNode;
  totalNumberOfItems: number;
};

const CartDrawer = ({ children, cartContent, totalNumberOfItems }: props) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="px-8 pt-8 flex justify-between items-center">
          <p className="font-bold text-4xl">SHOPPING CENTER</p>
          <div className="indicator">
            <div className="indicator-item badge badge-outline text-black">
              {totalNumberOfItems}
            </div>
            <label
              htmlFor="my-drawer"
              className="btn btn-outline btn-circle btn-lg drawer-button"
            >
              <AiOutlineShoppingCart size={28} />
            </label>
          </div>
        </div>
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="bg-white w-2/5">{cartContent}</div>
      </div>
    </div>
  );
};

export default CartDrawer;
