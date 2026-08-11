import { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import products from "../data/products";

function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query (case-insensitive partial match)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Page Header */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
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

      {/* Search Bar Section */}
      <Box sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      {/* Product Grid */}
      <ProductGrid products={filteredProducts} />
    </Container>
  );
}

export default Products;
