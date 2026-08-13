import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Typography, Box, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import CheckoutForm from "../components/CheckoutForm";

function Checkout() {
  const navigate = useNavigate();
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
          You need items in your cart to proceed to checkout.
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
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          Checkout
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Please enter your delivery details to complete the order.
        </Typography>
      </Box>

      <CheckoutForm />
    </Container>
  );
}

export default Checkout;
