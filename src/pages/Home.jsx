import { Container, Grid, Typography, Box } from "@mui/material";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  // Take the first 8 products as a sample for the user to see
  const sampleProducts = products.slice(0, 8);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Sample Product Cards
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here is a temporary preview of how the ProductCard component looks!
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {sampleProducts.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
