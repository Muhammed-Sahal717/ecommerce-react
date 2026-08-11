import { useState } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import products from "../data/products";

function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  // Filter products based on search query AND category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

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

      {/* Filters Section */}
      <Box sx={{ mb: 4, maxWidth: 800, mx: "auto" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 8 }}>
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <CategoryFilter
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Product Grid */}
      <ProductGrid products={filteredProducts} />
    </Container>
  );
}

export default Products;
