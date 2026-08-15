import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Typography, Box, Grid } from "@mui/material";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import products from "../data/products";

function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState("all");

  // Filter products based on search query, category, AND price range
  const filteredProducts = products.filter((product) => {
    // 1. Search Condition
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // 2. Category Condition
    const matchesCategory = category === "All" || product.category === category;

    // 3. Price Condition
    let matchesPrice = true;
    if (priceRange === "under500") {
      matchesPrice = product.price < 500;
    } else if (priceRange === "500to999") {
      matchesPrice = product.price >= 500 && product.price < 1000;
    } else if (priceRange === "1000to1499") {
      matchesPrice = product.price >= 1000 && product.price < 1500;
    } else if (priceRange === "1500plus") {
      matchesPrice = product.price >= 1500;
    }

    // Ensure product passes ALL filters
    return matchesSearch && matchesCategory && matchesPrice;
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
      <Box
        sx={{
          mb: 4,
          maxWidth: 900,
          mx: "auto",
          position: "sticky",
          top: 64, // Height of your navbar (adjust based on your navbar height)
          zIndex: 1000,
          bgcolor: "background.default",
          py: 2,
          borderBottom: 1,
          borderColor: "divider",
          px: 2,
          borderRadius: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <CategoryFilter
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <PriceFilter
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
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
