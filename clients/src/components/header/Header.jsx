import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { RESET_AUTH, logout } from "../../redux/features/auth/authSlice";
import { ShowOnLogin, ShowOnLogout } from "../hiddenLink/HiddenLinks";

export const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        By<span>Ethnic</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fixNavbar = () => {
  //     if (window.scrollY > 50) {
  //       setScrollPage(true);
  //     } else {
  //       setScrollPage(false);
  //     }
  //   };

  //   window.addEventListener("scroll", fixNavbar);

  //   return () => {
  //     // Cleanup the event listener when the component unmounts
  //     window.removeEventListener("scroll", fixNavbar);
  //   };
  // }, []);
  const fixNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    }
    setScrollPage(true);
  };
  window.addEventListener("scroll", fixNavbar);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = async () => {
    await dispatch(logout());
    await dispatch(RESET_AUTH());
    navigate("/login");
  };

  const cart = (
    <span className={styles.cart}>
      <Link to="/cart">
        Cart
        <FaShoppingCart size={20} />
        <p>0</p>
      </Link>
    </span>
  );
  return (
    <header className={scrollPage ? `${styles.fixed}` : null}>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu ? `${styles["show-menu"]}` : `${styles["hide-menu"]}`
            }
            onClick={hideMenu}
          />
          <ul>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={20} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/shop" className={`${activeLink}`}>
                Shop
              </NavLink>
            </li>
          </ul>

          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <ShowOnLogout>
                <NavLink to="login" className={`${activeLink}`}>
                  Login
                </NavLink>
                <NavLink to="register" className={`${activeLink}`}>
                  Register
                </NavLink>
              </ShowOnLogout>
              <ShowOnLogin>
                <NavLink to="order-history" className={`${activeLink}`}>
                  My Order
                </NavLink>
                <Link to="/" className={`${activeLink}`} onClick={logoutUser}>
                  Logout
                </Link>
              </ShowOnLogin>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          {cart}
          <HiMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
export default Header;
