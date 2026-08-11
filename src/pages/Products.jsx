import { Container, Typography, Box } from "@mui/material";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";

function Products() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Page Header */}
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Our Menu
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: "auto", mb: 2 }}
        >
          Explore our wide selection of delicious meals. From classic burgers to
          fresh sushi, we have something to satisfy every craving.
        </Typography>
      </Box>

      {/* Product Grid */}
      <ProductGrid products={products} />
    </Container>
  );
}

export default Products;
