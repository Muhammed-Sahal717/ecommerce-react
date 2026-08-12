import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Rating,
  Stack,
  Divider,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import products from "../data/products";
import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from "../redux/slices/wishlistSlice";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Find product by id (convert string id from URL to number)
  const product = products.find((p) => p.id === parseInt(id, 10));

  // Check wishlist status
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = product
    ? wishlistItems.some((item) => item.id === product.id)
    : false;

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      dispatch(toggleWishlist(product));
    }
  };

  const handleBack = () => {
    navigate("/products");
  };

  // Graceful fallback for invalid ID
  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Product not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The product you are looking for does not exist or has been removed.
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          disableElevation
        >
          Back to Products
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ mb: 4 }}
        color="inherit"
      >
        Back to Products
      </Button>

      <Grid container spacing={6}>
        {/* Product Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: 500,
              objectFit: "contain",
              bgcolor: "background.paper",
              borderRadius: 2,
              p: 4,
              boxShadow: 1,
            }}
          />
        </Grid>

        {/* Product Info */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Typography
              variant="overline"
              color="text.secondary"
              sx={{ fontSize: "1rem", letterSpacing: 1.5 }}
            >
              {product.category}
            </Typography>

            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {product.name}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 2 }}
            >
              <Rating value={product.rating} precision={0.1} readOnly />
              <Typography variant="body1" color="text.secondary">
                ({product.rating})
              </Typography>
            </Stack>

            <Typography
              variant="h4"
              color="primary.main"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              ₹{product.price}
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              {product.description}
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: "auto" }}
            >
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleAddToCart}
                disableElevation
                sx={{ py: 1.5, fontSize: "1.1rem" }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                color="secondary"
                onClick={handleToggleWishlist}
                startIcon={
                  isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />
                }
                sx={{ py: 1.5, fontSize: "1.1rem" }}
              >
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
