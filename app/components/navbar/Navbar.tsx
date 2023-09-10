import Image from 'next/image';
import './navbar.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCartArrowDown, faCartShopping, faGear, faHandshake, faMoneyBill, faPhoneSlash, faSmile, faSquareArrowUpRight, faSignIn } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="wrapContainer">
        <div className="headerContainer">
          <div className="colLeft">
            <div className="logo">
              <Image src="/assets/images/logo-indopodwer-tangsel.png" width={100} height={100} alt="Indopowder Tangsel Logo" />
            </div>
          </div>
          <div className="colMid">
            <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
              </ul>
            </nav>
          </div>
          <div className="colRight">
            <ul>
              <li>
                <Link href="/cart">
                  <button className="btn btnCart"><FontAwesomeIcon icon={faCartShopping} className="icon" /> Cart</button>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <button className="btn btnLogin"><FontAwesomeIcon icon={faSignIn} className="icon" /> Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;