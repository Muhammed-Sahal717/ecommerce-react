import { useNavigate } from "react-router-dom";
import { Card, Typography, Box, Button, Divider } from "@mui/material";

function CartSummary({ items }) {
  const navigate = useNavigate();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Card sx={{ p: 3, boxShadow: 1, position: "sticky", top: 24 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
        Order Summary
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography color="text.secondary">Total Items</Typography>
        <Typography fontWeight="medium">{totalItems}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography color="text.secondary">Subtotal</Typography>
        <Typography fontWeight="medium">₹{subtotal}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
          color="primary.main"
        >
          ₹{subtotal}
        </Typography>
      </Box>

      <Button
        variant="contained"
        size="large"
        fullWidth
        disableElevation
        onClick={() => navigate("/checkout")}
        sx={{ py: 1.5, mb: 2, fontSize: "1.1rem" }}
      >
        Proceed to Checkout
      </Button>

      <Button
        variant="outlined"
        size="large"
        fullWidth
        onClick={() => navigate("/products")}
      >
        Continue Shopping
      </Button>
    </Card>
  );
}

export default CartSummary;
