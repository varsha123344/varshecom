import { useState, useRef, useEffect } from "react";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export default function Header({
  cartCount,
  onCartClick,
  onAddClick,
  onEditClick,
  onDeleteClick,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
        setShowProductMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="site-header">

      <div className="promo-bar">
        <LocalShippingOutlinedIcon sx={{ fontSize: 18 }} />
        <span>Free Shipping on Orders Over $75 • 30 Day Easy Returns</span>
      </div>

      <div className="header-main">

        <div className="header-inner">

          <a href="/" className="logo">
            <span className="logo-mark">⬢</span>

            <span className="logo-text">
              ShopVault
            </span>
          </a>

          <nav className="nav-links">

            <a href="/">Home</a>

            <a href="#featured">Featured</a>

            <a href="#categories">Categories</a>

            <a href="#deals">Deals</a>

          </nav>

          <div className="header-actions">

            {/* Wishlist */}

            <button
              className="icon-btn"
              aria-label="Wishlist"
            >
              <FavoriteBorderRoundedIcon />
            </button>

            {/* Cart */}

            <button
              className="icon-btn cart-btn"
              onClick={onCartClick}
              aria-label="Cart"
            >
              <ShoppingCartOutlinedIcon />

              {cartCount > 0 && (
                <span className="cart-count">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile */}

            <div
              className="account-menu"
              ref={menuRef}
            >

              <button
                className="icon-btn profile-btn"
                onClick={() => setShowMenu(!showMenu)}
              >
                <PersonOutlineRoundedIcon />

                <KeyboardArrowDownRoundedIcon
                  className={showMenu ? "rotate" : ""}
                />
              </button>

              {showMenu && (

                <div className="profile-dropdown">

                  <button className="menu-item">
                    <PersonOutlineRoundedIcon fontSize="small" />
                    <span>My Profile</span>
                  </button>

                  <button className="menu-item">
                    <LocalShippingOutlinedIcon fontSize="small" />
                    <span>Orders</span>
                  </button>

                  <button className="menu-item">
                    <FavoriteRoundedIcon fontSize="small" />
                    <span>Wishlist</span>
                  </button>

                  <button className="menu-item">
                    <SettingsOutlinedIcon fontSize="small" />
                    <span>Settings</span>
                  </button>

                  <button
                    className="menu-item"
                    onClick={() =>
                      setShowProductMenu(!showProductMenu)
                    }
                  >

                    <Inventory2OutlinedIcon fontSize="small" />

                    <span>
                      Product Management
                    </span>

                    <KeyboardArrowDownRoundedIcon
                      className={showProductMenu ? "rotate" : ""}
                    />

                  </button>

                  {showProductMenu && (

                    <div className="submenu">

                      <button
                        className="submenu-item"
                        onClick={onAddClick}
                      >
                        <AddBoxOutlinedIcon fontSize="small" />
                        Add Product
                      </button>

                      <button
                        className="submenu-item"
                        onClick={onEditClick}
                      >
                        <EditOutlinedIcon fontSize="small" />
                        Edit Product
                      </button>

                      <button
                        className="submenu-item delete"
                        onClick={onDeleteClick}
                      >
                        <DeleteOutlineOutlinedIcon fontSize="small" />
                        Delete Product
                      </button>

                    </div>

                  )}

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}