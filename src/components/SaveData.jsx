import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/slices/cartSlice";
import { setWishlist } from "../redux/slices/wishlistSlice";

function SaveData() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isLoaded = useRef(false);

  // Load data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedCart) {
      dispatch(setCart(JSON.parse(savedCart)));
    }

    if (savedWishlist) {
      dispatch(setWishlist(JSON.parse(savedWishlist)));
    }

    isLoaded.current = true;
  }, [dispatch]);

  // Save data when cart or wishlist changes
  useEffect(() => {
    if (!isLoaded.current) return;

    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [cartItems, wishlistItems]);

  return null;
}

export default SaveData;
