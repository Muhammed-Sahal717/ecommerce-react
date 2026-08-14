import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";

import { clearCart } from "../redux/slices/cartSlice";
import OrderSummary from "../components/OrderSummary";

function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customer = location.state?.customer;
  const items = location.state?.items;

  const hasClearedCart = useRef(false);

  useEffect(() => {
    // Only clear the cart once if we have a valid order
    if (customer && items && items.length > 0 && !hasClearedCart.current) {
      dispatch(clearCart());
      hasClearedCart.current = true;
    }
  }, [dispatch, customer, items]);

  if (!customer || !items || items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 10, textAlign: "center" }}>
        <Paper sx={{ p: 5, borderRadius: 2, boxShadow: 2 }}>
          <ErrorOutlinedIcon
            sx={{ fontSize: 80, color: "error.main", mb: 2 }}
          />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            No order information found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            We couldn't find your order details. You may have reached this page
            by mistake.
          </Typography>
          <Button
            variant="contained"
            size="large"
            disableElevation
            onClick={() => navigate("/products")}
          >
            Go to Products
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <CheckCircleOutlinedIcon
          sx={{ fontSize: 100, color: "success.main", mb: 2 }}
        />
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Order Placed Successfully!
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Thank you for your order, {customer.name}! Your delicious food will be
          delivered shortly.
        </Typography>
      </Box>

      <OrderSummary customer={customer} items={items} />

      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Button
          variant="contained"
          size="large"
          disableElevation
          onClick={() => navigate("/products")}
          sx={{ py: 1.5, px: 4, fontSize: "1.1rem" }}
        >
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
}

export default OrderSuccess;
