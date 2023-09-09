import Image from 'next/image';
import './navbar.scss';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="wrapContainer">
        <div className="colLeft">
          <div className="logo">
            <Image src="/images.jpg" width={100} height={100} alt="Indopowder Tangsel Logo" />
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

        </div>
      </div>
    </header>
  );
}

export default Navbar;