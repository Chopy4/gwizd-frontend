import { Suspense, lazy } from "react";
import styles from "./navbar.module.css";
/* Icons */
import { BiLogIn } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";

const NavLink = lazy(() => import("./navlink"));

export default function Navbar() {
  const button1 = <BiLogIn size="1.5rem" />;
  const button2 = <BsFillPersonFill size="1.5rem" />;

  return (
    <div className={styles.spaceBetween}>
      <div className={styles.navbarLeft}>
        <a className={styles.menuDesktop} href="/">
          <h2>LOGO</h2>
        </a>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.spaceCenter}>
          <div className={styles.menuDesktop}>
            <NavLink href="/#report">Zgłoś</NavLink>
          </div>
          <div className={styles.menuDesktop}>
            <NavLink href="/#howItWorks">Jak to działa</NavLink>
          </div>
          <div className={styles.menuDesktop}>
            <NavLink href="/#oNas">O nas</NavLink>
          </div>
          <div className={styles.menuDesktop}>
            <NavLink href="/#cities">Miasta</NavLink>
          </div>
          <div className={styles.menuDesktop}>
            <NavLink href="/#contact">Kontakt</NavLink>
          </div>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <a className={styles.menuDesktop} href="/przekierowanie">
            <button>
              <BsFillPersonFill size="1.5rem" />
            </button>
          </a>
        </Suspense>
        <a className={styles.menuPhone}>
          <button>
            <HiBars3BottomRight size="25.5px" />
          </button>
        </a>
      </div>
    </div>
  );
}
