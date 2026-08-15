import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography, Box, Button, Stack } from "@mui/material";
import heroImage from "../assets/hero.png";
import CategoryCard from "../components/CategoryCard";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";
import burgerImg from "../assets/images/burgers/Classic Double burger.png";
import pizzaImg from "../assets/images/pizza/BBQ Chicken Pizza.png";
import pastaImg from "../assets/images/pasta/Fettuccine Alfredo.png";
import sushiImg from "../assets/images/sushi/Dragon Roll.png";
import tacoImg from "../assets/images/tacos/Spicy Chicken Taco.png";

const categories = [
  { name: "Burgers", image: burgerImg },
  { name: "Pizza", image: pizzaImg },
  { name: "Pasta", image: pastaImg },
  { name: "Sushi", image: sushiImg },
  { name: "Tacos", image: tacoImg },
];

function Home() {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 4);

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Side: Text Content */}
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Stack
                spacing={3}
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{ fontWeight: "bold", letterSpacing: 2 }}
                >
                  FRESH FOOD, DELIVERED
                </Typography>

                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: "text.primary",
                  }}
                >
                  Delicious Food, Delivered Fresh
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ fontWeight: 400, maxWidth: { xs: "100%", md: "90%" } }}
                >
                  Explore a variety of delicious burgers, pizzas, pasta, sushi,
                  and tacos — all in one place.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  onClick={() => navigate("/products")}
                  sx={{
                    py: 1.5,
                    px: 4,
                    mt: 2,
                    fontSize: "1.1rem",
                    borderRadius: 2,
                  }}
                >
                  Explore Menu
                </Button>
              </Stack>
            </Grid>

            {/* Right Side: Hero Image */}
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Delicious food platter"
                sx={{
                  width: "100%",
                  maxWidth: 600,
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Explore Categories
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Choose from your favorite food categories.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {categories.map((category) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}
                key={category.name}
              >
                <CategoryCard
                  category={category.name}
                  image={category.image}
                  onClick={handleCategoryClick}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Featured Favorites
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Discover some of our most popular and delicious choices.
            </Typography>
          </Box>

          <ProductGrid products={featuredProducts} />

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/products")}
              sx={{ py: 1.5, px: 4, fontSize: "1.1rem", borderRadius: 2 }}
            >
              View All Products
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
