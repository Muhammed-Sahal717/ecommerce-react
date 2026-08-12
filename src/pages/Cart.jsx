import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

import { clearCart } from "../redux/slices/cartSlice";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  if (!cartItems || cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 10, textAlign: "center" }}>
        <ShoppingCartOutlinedIcon
          sx={{ fontSize: 100, color: "text.disabled", mb: 2 }}
        />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Your cart is empty
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Looks like you haven't added any delicious food to your cart yet.
        </Typography>
        <Button
          variant="contained"
          size="large"
          disableElevation
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Shopping Cart
        </Typography>
        <Button
          color="error"
          startIcon={<DeleteSweepIcon />}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <CartSummary items={cartItems} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;
