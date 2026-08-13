import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../redux/slices/cartSlice';
import { setWishlist } from '../redux/slices/wishlistSlice';

function StorePersistence() {
  const dispatch = useDispatch();
  
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  
  const isInitialLoad = useRef(true);

  // 1. On Mount: Read from localStorage and initialize Redux state
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          dispatch(setCart(parsedCart));
        }
      }
      
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        if (Array.isArray(parsedWishlist)) {
          dispatch(setWishlist(parsedWishlist));
        }
      }
    } catch (error) {
      console.error('Failed to parse localStorage data:', error);
    }
  }, [dispatch]);

  // 2. On Change: Save Redux state to localStorage
  useEffect(() => {
    if (isInitialLoad.current) {
      // Prevent overwriting localStorage with the initial empty Redux state
      isInitialLoad.current = false;
      return;
    }
    
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [cartItems, wishlistItems]);

  return null; // This component handles side-effects only
}

export default StorePersistence;
