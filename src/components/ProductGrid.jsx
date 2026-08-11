import { Grid, Typography, Box } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          No products found.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;
