import { Link } from "@tanstack/react-router";

export default function NavList() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Product Listing Page</Link>
        </li>
        <li>
          <Link
            to="/product/$pid"
            params={{
              pid: "1",
            }}
          >
            Product Detail Page
          </Link>
        </li>
        <li>
          <Link to="/shoppingcart">Shopping Cart Page</Link>
        </li>
        <li>
          <Link
            to="/checkout/$transactionId"
            params={{
              transactionId: "1",
            }}
          >
            Checkout Page
          </Link>
        </li>
        <li>
          <Link to="/thankyou">Thank You Page</Link>
        </li>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
      </ul>
    </nav>
  );
}
