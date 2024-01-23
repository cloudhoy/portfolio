import { ShoppingCart } from "react-feather";

export type CartProps = {
  className?: string;
};

const Cart = ({ className }: CartProps) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className={`btn ${className}`}>
        <ShoppingCart />
      </div>
      <div
        tabIndex={0}
        className="dropdown-content shadow bg-base-100 rounded-box w-52 p-4"
      >
        <ul>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
