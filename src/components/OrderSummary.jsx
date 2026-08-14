import { Box, Typography, Card, Grid, Divider, Stack } from "@mui/material";

function OrderSummary({ customer, items }) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Card sx={{ p: { xs: 2, md: 4 }, boxShadow: 2, borderRadius: 2 }}>
      <Grid container spacing={4}>
        {/* Customer Information Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Customer Information
          </Typography>
          <Box sx={{ p: 2, bgcolor: "action.hover", borderRadius: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {customer.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {customer.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {customer.phone}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">{customer.address}</Typography>
            <Typography variant="body2">
              {customer.city}, {customer.pincode}
            </Typography>
          </Box>
        </Grid>

        {/* Price Summary Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Price Summary
          </Typography>
          <Box sx={{ p: 2, bgcolor: "action.hover", borderRadius: 1 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography color="text.secondary">Total Items</Typography>
              <Typography fontWeight="medium">{totalItems}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography color="text.secondary">Subtotal</Typography>
              <Typography fontWeight="medium">₹{subtotal}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
          </Box>
        </Grid>

        {/* Ordered Items Section */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, mt: 2 }}>
            Ordered Items
          </Typography>
          <Stack spacing={2}>
            {items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{ width: 80, height: 80, objectFit: "contain", mr: 3 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Qty: {item.quantity}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="body2" color="text.secondary">
                    ₹{item.price} each
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    ₹{item.price * item.quantity}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

export default OrderSummary;
